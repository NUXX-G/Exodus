#!/usr/bin/env bash
# Pruebas de los hitos de proy-ia-autograd.
# Uso: bash prueba.sh ./ag N [-v]    (N = hito, de 1 a 6)
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
  printf '  %-34s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-70)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
g() { cat > "$t/$1.txt"; }
# Comprobación con umbrales para entrenamientos largos, que acumulan diferencias de redondeo entre implementaciones correctas:
# imprime «aprende sí» si la pérdida final es menor que PMAX y la fracción de aciertos (la última línea «aciertos…») al menos AMIN.
umbral() { # umbral PMAX AMIN < salida
  awk -v pm="$1" -v am="$2" '/^epoca/ { p = $4 } /^aciertos / { a = $2 / $4 } /^aciertos_prueba/ { a = $2 / $4 } /^perdida_entrenamiento/ { p = $2 }
    END { print ((p != "" && p + 0 < pm && a + 0 >= am) ? "aprende sí" : "aprende no") }'
}
sal() {
  local r
  r=$(cd "$t" && timeout 120 "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$r" "$?"
}

# ---------- grafos ----------
g g1 <<'EOF'
entrada x 2
entrada y -3
a = mul x y
b = add a x
c = sin b
d = exp c
e = div d y
salida e
EOF
g g2 <<'EOF'
# x se usa varias veces: los gradientes se acumulan
entrada x 0.5
a = mul x x
b = mul a x
c = add a b
d = tanh c
e = mul d x
salida e
EOF
g g3 <<'EOF'
entrada w 1.5
entrada b -0.25
entrada x 2
z = mul w x
z2 = add z b
s = sigmoid z2
l = log s
n = neg l
r = relu z2
q = pow r 3
t = sqrt q
f = add n t
h = sub f 0.5
o = mul h 2
salida o
EOF
g g4 <<'EOF'
entrada x -1
a = relu x
b = add a 2
c = cos x
d = mul b c
salida d
EOF
printf 'entrada x 1\na = mul x y\nsalida a\n' > "$t/mal1.txt"
printf 'entrada x 1\nx = mul x 2\nsalida x\n' > "$t/mal2.txt"
printf 'entrada x 1\na = foo x\nsalida a\n' > "$t/mal3.txt"
printf 'entrada x -2\na = log x\nsalida a\n' > "$t/mal4.txt"
printf 'entrada x 1\na = exp x\n' > "$t/mal5.txt"
printf 'entrada x 2\nentrada y 3\na = pow x y\nsalida a\n' > "$t/mal6.txt"

# ---------- redes ----------
cat > "$t/red1.txt" <<'EOF'
capa 2 3 tanh
W 0.5 -0.3  0.2 0.8  -0.6 0.1
b 0.1 -0.2 0.05
capa 3 2 lineal
W 0.3 -0.5 0.7  -0.4 0.6 0.2
b 0.0 0.1
EOF
cat > "$t/datos1.txt" <<'EOF'
0.5 -1.0 0
1.5  0.3 1
-0.7 0.8 1
0.2  0.2 0
EOF
cat > "$t/red2.txt" <<'EOF'
capa 3 4 relu
W 0.2 -0.1 0.4  -0.5 0.3 0.1  0.6 0.2 -0.3  -0.2 -0.4 0.5
b 0.01 0.02 -0.03 0.04
capa 4 3 sigmoid
W 0.1 0.2 -0.3 0.4  -0.5 0.6 0.7 -0.8  0.9 -0.1 0.2 0.3
b -0.1 0.0 0.1
capa 3 3 lineal
W 1.0 -1.0 0.5  0.3 0.2 -0.7  -0.6 0.4 0.8
b 0.0 0.05 -0.05
EOF
cat > "$t/datos2.txt" <<'EOF'
1.0 0.5 -0.3 2
-0.2 0.9 0.4 0
0.7 -0.6 1.1 1
0.3 0.3 0.3 2
-1.0 0.2 0.5 1
EOF

case $hito in
1)
  for x in g1 g2 g3 g4; do anota "adelante-$x" "$(sal adelante $x.txt)"; done
  for x in mal1 mal2 mal3 mal4 mal5 mal6; do anota "$x" "$(sal adelante $x.txt | tail -1)"; done
  ;;
2)
  for x in g1 g2 g3 g4; do anota "atras-$x" "$(sal atras $x.txt)"; done
  ;;
3)
  anota mlp-red1 "$(sal mlp red1.txt datos1.txt)"
  anota mlp-red2 "$(sal mlp red2.txt datos2.txt)"
  anota etiqueta-invalida "$(printf '0 0 5\n' > "$t/d3.txt"; sal mlp red1.txt d3.txt | tail -1)"
  ;;
4)
  # exactos: entrenamientos cortos
  anota xor-sgd-100 "$(sal entrena xor 4 2-4-2 tanh 1 100 0.5 sgd)"
  anota anillos-sgd-100 "$(sal entrena anillos 200 2-8-2 tanh 3 100 0.5 sgd)"
  anota espirales-sgd-100 "$(sal entrena espirales 200 2-16-16-2 tanh 7 100 0.3 sgd)"
  anota arquitectura-invalida "$(sal entrena xor 4 3-4-2 tanh 1 10 0.1 sgd | tail -1)"
  # umbrales: entrenamientos largos
  anota xor-aprende "$(sal entrena xor 4 2-4-2 tanh 1 3000 0.5 sgd | umbral 0.05 1)"
  anota anillos-aprende "$(sal entrena anillos 200 2-8-2 tanh 3 3000 0.5 sgd | umbral 0.1 0.97)"
  ;;
5)
  for o in "0.3 sgd" "0.03 momentum" "0.01 adam"; do anota "espirales-100-${o// /-}" "$(sal entrena espirales 200 2-16-16-2 tanh 7 100 $o)"; done
  anota optimizador-desconocido "$(sal entrena xor 4 2-3-2 tanh 2 10 0.05 rmsprop | tail -1)"
  anota espirales-adam-aprende "$(sal entrena espirales 200 2-16-16-2 tanh 7 3000 0.01 adam | umbral 0.1 0.97)"
  anota espirales-sgd-no-basta "$(sal entrena espirales 200 2-16-16-2 tanh 7 3000 0.3 sgd | umbral 0.1 0.97)"
  ;;
6)
  anota anillos-generaliza "$(sal evalua anillos 300 2-8-2 tanh 5 1000 0.05 adam 0 | umbral 0.1 0.95)"
  anota espirales-generaliza "$(sal evalua espirales 400 2-32-32-2 tanh 11 3000 0.01 adam 0 | umbral 0.1 0.9)"
  anota espirales-l2-moderada "$(sal evalua espirales 400 2-32-32-2 tanh 11 3000 0.01 adam 0.0001 | umbral 0.1 0.9)"
  anota espirales-l2-excesiva-subajusta "$(sal evalua espirales 400 2-32-32-2 tanh 11 3000 0.01 adam 0.001 | umbral 0.5 0.9)"
  anota evalua-corto "$(sal evalua anillos 300 2-8-2 tanh 5 50 0.05 adam 0)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
