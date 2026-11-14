#!/usr/bin/env bash
# Pruebas de los hitos de proy-fis-nbody.
# Uso: bash prueba.sh ./nbody N [-v]    (N = hito, de 1 a 7)
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
  printf '  %-26s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-76)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
s() { cat > "$t/$1.txt"; }
sal() {
  local r
  r=$(cd "$t" && "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$r" "$?"
}

# ---------- sistemas ----------
s kepler2 <<'EOF'
# estrella y planeta: órbita relativa elíptica (e ≈ 0,44), G = 1
G 1
1     0 0 0   0 0 0
0.001 1 0 0   0 1.2 0
EOF
s kepler9 <<'EOF'
# órbita muy excéntrica (e ≈ 0,9), inclinada
1    0 0 0      0 0 0
0.5  0.1 0 0    0 3.6 1.2
EOF
s tres <<'EOF'
G 1
3   1 3 0     0 0 0
4  -2 -1 0    0 0 0
5   1 -1 0    0 0 0
EOF
s ocho <<'EOF'
# coreografía en forma de ocho de Chenciner y Montgomery (2000)
G 1
1   0.97000436 -0.24308753 0   0.466203685  0.43236573 0
1  -0.97000436  0.24308753 0   0.466203685  0.43236573 0
1   0 0 0                    -0.93240737  -0.86473146 0
EOF
s suav <<'EOF'
G 6.674e-11
suavizado 1e7
5.97e24   0 0 0             0 0 0
7.35e22   3.84e8 0 0        0 1022 0
1.0e15    3.84e8 1.0e7 0    0 1022 5
EOF
s cinco <<'EOF'
G 1
1      0 0 0          0 0 0
0.001  1 0 0          0 1 0
0.0005 0 1.6 0.1     -0.79 0 0
0.002 -2.5 0 0        0 -0.63 0.02
0.0001 0 -3.2 0       0.56 0 0
EOF
printf 'G 1\n-1 0 0 0 0 0 0\n' > "$t/mal1.txt"
printf 'G 1\n1 0 0 0 0 0\n' > "$t/mal2.txt"
printf '# nada\n' > "$t/mal3.txt"

case $hito in
1)
  for x in kepler2 tres ocho suav cinco; do anota "energia-$x" "$(sal energia $x.txt)"; done
  for x in mal1 mal2 mal3; do anota "$x" "$(sal energia $x.txt | tail -1)"; done
  ;;
2)
  for x in tres ocho suav cinco; do anota "fuerzas-$x" "$(sal fuerzas $x.txt)"; done
  ;;
3)
  for m in euler euler-simplectico verlet rk4 yoshida4; do anota "kepler2-$m" "$(sal integra kepler2.txt $m 0.01 500)"; done
  anota tres-simplectico "$(sal integra tres.txt euler-simplectico 0.001 200)"
  anota ocho-un-periodo "$(sal integra ocho.txt verlet 0.001 6326)"
  anota cinco-rk4 "$(sal integra cinco.txt rk4 0.002 300)"
  anota metodo-desconocido "$(sal integra tres.txt leapfrog 0.01 10 | tail -1)"
  ;;
4)
  for tt in 0.5 3.7 10 100; do anota "kepler2-t$tt" "$(sal kepler kepler2.txt $tt)"; done
  for tt in 0.05 1 7.3; do anota "kepler9-t$tt" "$(sal kepler kepler9.txt $tt)"; done
  anota kepler-tres-cuerpos "$(sal kepler tres.txt 1 | tail -1)"
  ;;
5)
  anota orden-euler "$(sal orden kepler2.txt euler 5 2000 4000 8000 16000)"
  anota orden-simplectico "$(sal orden kepler2.txt euler-simplectico 5 400 800 1600 3200)"
  anota orden-verlet "$(sal orden kepler2.txt verlet 5 100 200 400 800)"
  anota orden-rk4 "$(sal orden kepler2.txt rk4 5 50 100 200 400)"
  anota orden-yoshida4 "$(sal orden kepler2.txt yoshida4 5 50 100 200 400)"
  ;;
6)
  for m in euler euler-simplectico verlet rk4; do anota "deriva-kepler2-$m" "$(sal deriva kepler2.txt $m 0.01 20000)"; done
  anota deriva-ocho-verlet "$(sal deriva ocho.txt verlet 0.002 10000)"
  anota deriva-ocho-yoshida4 "$(sal deriva ocho.txt yoshida4 0.01 2000)"
  ;;
7)
  for a in "500 1 0.5 0.01" "800 7 0.3 0.01" "800 7 0.8 0.01" "1000 42 1.0 0.02"; do anota "bh-${a// /_}" "$(sal bh $a)"; done
  ;;
*) echo "hito desconocido: $hito (de 1 a 7)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
