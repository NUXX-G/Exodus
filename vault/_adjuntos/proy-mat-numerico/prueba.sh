#!/usr/bin/env bash
# Pruebas de los hitos de proy-mat-numerico.
# Uso: bash prueba.sh ./numlib N [-v]    (N = hito, de 1 a 7)
# Si todos los casos son correctos, el código que se imprime al final es la respuesta del hito en Exodus.
set -u
k=$(cd "$(dirname "$1")" && pwd)/$(basename "$1")
hito=$2
detalle=${3:-}
[ -x "$k" ] || { echo "no encuentro un ejecutable en $1" >&2; exit 2; }
t=$(mktemp -d)
trap 'rm -rf "$t"' EXIT
total=""
anota() {
  total+="$1|$2"$'\n'
  printf '  %-30s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-72)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | cut -c1-200 | sed 's/^/      | /'
}
sal() {
  local r
  r=$(cd "$t" && timeout 60 "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$r" "$?"
}
cifras() { # cifras N SEMILLA: un entero de N cifras pseudoaleatorias (Park-Miller, exacto en coma flotante)
  awk -v n="$1" -v s="$2" 'BEGIN { for (i = 0; i < n; i++) { s = (s * 16807) % 2147483647; d = s % 10; if (i == 0 && d == 0) d = 7; printf "%d", d } }'
}

# ---------- datos ----------
cat > "$t/sistema3.txt" <<'EOF'
# A (3x3) y b: el primer pivote es cero, hace falta pivotar
0  2  1   5
1  1  1   6
2  1 -1   1
EOF
cat > "$t/sistema4.txt" <<'EOF'
1e-17  1  0  0   1
1      1  0  0   2
0      0  4  1   9
0      0  1  3  10
EOF
cat > "$t/singular.txt" <<'EOF'
1 2 3
2 4 6
EOF
cat > "$t/datos.txt" <<'EOF'
# x y: medidas con ruido de y ≈ 1 + 2x − 0.5x²
0.0  1.02
0.5  1.87
1.0  2.49
1.5  2.85
2.0  3.03
2.5  2.86
3.0  2.53
3.5  1.88
4.0  0.97
EOF
cat > "$t/sim3.txt" <<'EOF'
2 -1  0
-1 2 -1
0 -1  2
EOF
cat > "$t/sim5.txt" <<'EOF'
5 1 0 2 0
1 4 1 0 1
0 1 3 1 0
2 0 1 6 1
0 1 0 1 2
EOF
cat > "$t/nosim.txt" <<'EOF'
1 2
3 4
EOF

case $hito in
1)
  for c in "biseccion f1 2 3 1e-10" "newton f1 2 0 1e-12" "secante f1 2 3 1e-12" "biseccion f2 0 1 1e-12" "newton f2 1 0 1e-12" "secante f2 0 1 1e-12" \
           "newton f3 1 0 1e-12" "biseccion f3 0 1 1e-12" "newton f4 0.5 0 1e-12" "secante f4 0 1.3 1e-12" "newton f5 2 0 1e-10" "biseccion f5 0 2.5 1e-10"; do
    anota "raiz-${c// /_}" "$(sal raiz $c)"
  done
  anota sin-cambio-de-signo "$(sal raiz biseccion f1 3 4 1e-10 | tail -1)"
  anota metodo-desconocido "$(sal raiz falsa f1 2 3 1e-10 | tail -1)"
  anota funcion-desconocida "$(sal raiz newton f9 2 3 1e-10 | tail -1)"
  ;;
2)
  for c in "10 equi" "20 equi" "10 cheb" "20 cheb" "40 cheb"; do anota "runge-${c// /_}" "$(sal runge $c)"; done
  for c in "trapecio g1 10" "trapecio g1 100" "simpson g1 10" "simpson g3 100" "gauss g1 5" "gauss g2 8" "gauss g3 10" "gauss g4 6" "trapecio g2 64"; do
    anota "integra-${c// /_}" "$(sal integra $c)"
  done
  anota simpson-impar "$(sal integra simpson g1 7 | tail -1)"
  ;;
3)
  for c in "euler p1 0.1 1" "rk4 p1 0.1 1" "euler-implicito p1 0.1 1" "euler p2 0.2 2" "rk4 p2 0.2 2" \
           "euler p3 0.001 1" "euler p3 0.0021 1" "euler-implicito p3 0.1 1" "rk4 p3 0.01 1" "rk4 p3 0.001 1"; do
    anota "edo-${c// /_}" "$(sal edo $c)"
  done
  ;;
4)
  anota resuelve-3 "$(sal resuelve sistema3.txt)"
  anota resuelve-4 "$(sal resuelve sistema4.txt)"
  anota singular "$(sal resuelve singular.txt | tail -1)"
  for n in 3 4 5 6 7 8; do anota "cond-hilbert-$n" "$(sal cond-hilbert $n)"; done
  for g in 1 2 3; do anota "ajuste-grado-$g" "$(sal ajuste datos.txt $g)"; done
  ;;
5)
  anota autovalores-3 "$(sal autovalores sim3.txt)"
  anota autovalores-5 "$(sal autovalores sim5.txt)"
  anota potencia-3 "$(sal potencia sim3.txt 1e-10)"
  anota potencia-5 "$(sal potencia sim5.txt 1e-12)"
  anota no-simetrica "$(sal autovalores nosim.txt | tail -1)"
  ;;
6)
  anota cero "$(sal multiplica 0 12345)"
  anota pequenos "$(sal multiplica 12345 6789)"
  anota acarreos "$(sal multiplica 99999999999999999999 99999999999999999999)"
  anota grandes "$(sal multiplica "$(cifras 10000 2024)" "$(cifras 10000 77)")"
  anota no-entero "$(sal multiplica 12a 3 | tail -1)"
  ;;
7)
  for n in 1000 100000 1000000; do anota "suma-$n" "$(sal suma $n)"; done
  anota cuadratica-cancelacion "$(sal cuadratica 1 -1e8 1)"
  anota cuadratica-sencilla "$(sal cuadratica 1 -3 2)"
  anota cuadratica-pequena "$(sal cuadratica 1e-3 1 1e-3)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 7)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
