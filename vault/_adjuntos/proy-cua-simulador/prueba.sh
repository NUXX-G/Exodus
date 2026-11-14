#!/usr/bin/env bash
# Pruebas de los hitos de proy-cua-simulador.
# Uso: bash prueba.sh ./qsim N [-v]    (N = hito, de 1 a 8)
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
  printf '  %-22s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-80)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
c() { cat > "$t/$1.qc"; }
sal() { # sal ARGUMENTOS...: salida estándar y código de salida, ejecutando en el directorio temporal
  local s
  s=$(cd "$t" && "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$s" "$?"
}

# ---------- circuitos ----------
c una1 <<'EOF'
qubits 1
h 0
EOF
c una2 <<'EOF'
# |1> con fase i
qubits 1
x 0
s 0
EOF
c una3 <<'EOF'
qubits 3
h 0
ry pi/3 1
rx -pi/2 2
t 0
rz 0.5 1
p 3*pi/4 2
sdg 0
y 1
tdg 2
z 0
EOF
c una4 <<'EOF'
qubits 2
rx 1.234 0
ry 2.5 1
rz pi 1
h 1
EOF
printf 'qubits 2\nh 2\n' > "$t/mal1.qc"
printf 'qubits 2\nfoo 0\n' > "$t/mal2.qc"
printf 'qubits 2\nrx pi/x 0\n' > "$t/mal3.qc"
printf 'h 0\n' > "$t/mal4.qc"
printf 'qubits 2\ncx 1 1\n' > "$t/mal5.qc"

c bell <<'EOF'
qubits 2
h 0
cx 0 1
EOF
c ghz <<'EOF'
qubits 4
h 0
cx 0 1
cx 1 2
cx 2 3
cz 0 3
s 2
EOF
c dos3 <<'EOF'
qubits 3
x 0
h 1
cp pi/2 1 0
swap 0 2
ccx 2 1 0
h 2
EOF
c qft3 <<'EOF'
# QFT de |5> en 3 cúbits, puerta a puerta (cúbit 0 = bit menos significativo)
qubits 3
x 0
x 2
h 2
cp pi/2 1 2
cp pi/4 0 2
h 1
cp pi/2 0 1
h 0
swap 0 2
EOF
c mezcla5 <<'EOF'
qubits 5
h 0
h 1
ry 0.7 2
cx 0 3
cp pi/3 1 4
rx 1.1 4
ccx 0 1 2
swap 3 4
cz 2 4
t 3
h 4
cx 4 0
rz -0.9 2
EOF

c bellm <<'EOF'
qubits 2
bits 2
h 0
cx 0 1
measure 0 0
measure 1 1
EOF
c teleporta <<'EOF'
# teleportar ry(1.1)|0> del cúbit 0 al 2 y medir el resultado en el bit 2
qubits 3
bits 3
ry 1.1 0
h 1
cx 1 2
cx 0 1
h 0
measure 0 0
measure 1 1
if 1 1 x 2
if 0 1 z 2
measure 2 2
EOF
c reinicia <<'EOF'
qubits 1
bits 2
h 0
measure 0 0
reset 0
x 0
measure 0 1
EOF
c sesgada <<'EOF'
qubits 2
bits 2
ry 1.9 0
rx 0.6 1
cx 0 1
measure 1 0
measure 0 1
EOF

c ruido1 <<'EOF'
qubits 1
h 0
EOF
c ruido3 <<'EOF'
qubits 3
h 0
cx 0 1
cx 1 2
EOF
c ruidor <<'EOF'
qubits 2
ry pi/3 0
rx pi/5 1
cz 0 1
h 1
EOF

case $hito in
1)
  for x in una1 una2 una3 una4; do anota "$x" "$(sal estado $x.qc)"; done
  for x in mal1 mal2 mal3 mal4 mal5; do anota "$x" "$(sal estado $x.qc | tail -1)"; done
  ;;
2)
  for x in bell ghz dos3 qft3 mezcla5; do anota "$x" "$(sal estado $x.qc)"; done
  ;;
3)
  anota probs-mezcla5 "$(sal probs mezcla5.qc)"
  anota bell-1000 "$(sal muestras bellm.qc 1000 42)"
  anota teleporta-2000 "$(sal muestras teleporta.qc 2000 7)"
  anota reinicia-500 "$(sal muestras reinicia.qc 500 2026)"
  anota sesgada-777 "$(sal muestras sesgada.qc 777 123456789)"
  anota estado-con-medida "$(sal estado bellm.qc | tail -1)"
  ;;
4)
  for a in "2 3" "3 5" "5 13" "8 200" "10 1000"; do anota "grover-${a// /-}" "$(sal grover $a)"; done
  ;;
5)
  anota qft-3-5 "$(sal qft 3 5)"
  anota qft-4-1 "$(sal qft 4 1)"
  for a in "3 1 8" "5 1 3" "8 7 10" "6 2 5"; do anota "fase-${a// /-}" "$(sal fase $a)"; done
  ;;
6)
  for a in "7 15" "4 15" "13 15" "2 21" "11 21"; do anota "orden-${a// /-}" "$(sal orden $a)"; done
  ;;
7)
  anota ruido-h-0.1 "$(sal ruido ruido1.qc 0.1)"
  anota ruido-bell-0.05 "$(sal ruido bell.qc 0.05)"
  anota ruido-ghz-0.02 "$(sal ruido ruido3.qc 0.02)"
  anota ruido-rot-0.03 "$(sal ruido ruidor.qc 0.03)"
  anota ruido-p0 "$(sal ruido ruido3.qc 0)"
  ;;
8)
  for a in "0.1 0" "0.1 pi/4" "0.3 pi/8" "0.01 pi/6" "0.5 pi/3"; do anota "codigo-${a// /_}" "$(sal codigo $a)"; done
  ;;
*) echo "hito desconocido: $hito (de 1 a 8)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
