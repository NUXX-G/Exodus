#!/usr/bin/env bash
# Pruebas de los hitos de proy-rob-robot-movil.
# Uso: bash prueba.sh ./robot N [-v]    (N = hito, de 1 a 5)
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
  printf '  %-26s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-78)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
sal() {
  local r
  r=$(cd "$t" && timeout 60 "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$r" "$?"
}
f() { cat > "$t/$1"; }

# ---------- odometría ----------
{
  printf 'radio 0.05\nbase 0.30\nticks 1024\n'
  for i in $(seq 10); do echo "100 100"; done
  for i in $(seq 10); do echo "80 120"; done
  for i in $(seq 10); do echo "-50 50"; done
  for i in $(seq 10); do echo "120 90"; done
} > "$t/odo1.txt"
{
  printf 'radio 0.033\nbase 0.16\nticks 360\n'
  for i in $(seq 25); do echo "30 34"; done
  for i in $(seq 25); do echo "-20 -20"; done
  for i in $(seq 23); do echo "35 28"; done
} > "$t/odo2.txt"
printf 'radio 0.05\nticks 1024\n10 10\n' > "$t/odomal.txt"

# ---------- EKF ----------
f ekf1.txt <<'EOF'
marca 1  4.0  0.0
marca 2  2.0  3.0
marca 3 -1.0  2.0
inicio 0 0 0   0.1 0.1 0.05
q 0.02 0.02 0.01
r 0.10 0.05
mov 1.0 0.0 0.5
obs 1 3.48 0.02
mov 1.0 0.2 0.5
obs 2 2.62 0.86
mov 1.0 0.4 0.5
obs 1 2.15 -0.35
obs 3 3.10 1.75
mov 0.5 0.5 0.5
obs 2 1.95 0.95
EOF
f ekf2.txt <<'EOF'
# el robot mira hacia −x y la marca 1 queda casi detrás: los rumbos rondan ±π
marca 1  3.0  0.05
marca 2 -2.0  1.0
inicio 0 0 3.1   0.05 0.05 0.02
q 0.01 0.01 0.005
r 0.05 0.03
mov 0.5 0.1 0.4
obs 1 3.21 3.12
obs 2 1.95 -2.75
mov 0.5 -0.1 0.4
obs 1 3.42 -3.10
EOF
printf 'marca 1 1 1\ninicio 0 0 0 0.1 0.1 0.1\nq 0.1 0.1 0.1\nr 0.1 0.1\nobs 9 1 0\n' > "$t/ekfmal.txt"

# ---------- mapas ----------
f mapa1.txt <<'EOF'
....................
.S......#...........
........#...........
........#.....#.....
........#.....#.....
..............#...G.
........#.....#.....
....................
EOF
f mapa2.txt <<'EOF'
##############################
#S.......#..........#........#
#.######.#.########.#.######.#
#.#......#.#......#.#.#......#
#.#.######.#.####.#.#.#.######
#.#........#.#..#.#...#......#
#.##########.#.##.#####.####.#
#............#....#.....#..G.#
##############################
EOF
f mapa3.txt <<'EOF'
S..#....
...#....
####....
.......G
EOF
f esquinas.txt <<'EOF'
S#..
.#..
..#G
EOF

# ---------- seguimiento ----------
f ele.txt <<'EOF'
v 0.4
ld 0.5
wmax 1.5
dt 0.05
maxpasos 2000
tol 0.1
inicio 0 -0.2 0.3
0 0
3 0
3 3
EOF
f ese.txt <<'EOF'
v 0.6
ld 0.8
wmax 2.0
dt 0.05
maxpasos 3000
tol 0.15
inicio 0 0 0
0 0
2 1
4 -1
6 1
8 0
EOF
f lejos.txt <<'EOF'
v 0.3
ld 0.4
wmax 1.0
dt 0.1
maxpasos 50
tol 0.1
inicio 0 0 0
0 0
10 0
EOF

case $hito in
1)
  anota odo1 "$(sal odometria odo1.txt)"
  anota odo2 "$(sal odometria odo2.txt)"
  anota odo-sin-base "$(sal odometria odomal.txt | tail -1)"
  ;;
2)
  anota ekf1 "$(sal ekf ekf1.txt)"
  anota ekf2-rumbos-pi "$(sal ekf ekf2.txt)"
  anota ekf-marca-desconocida "$(sal ekf ekfmal.txt | tail -1)"
  ;;
3)
  for m in mapa1 mapa2; do
    anota "astar-$m" "$(sal astar $m.txt astar)"
    anota "dijkstra-$m" "$(sal astar $m.txt dijkstra)"
  done
  anota sin-camino "$(sal astar mapa3.txt astar)"
  anota sin-cortar-esquinas "$(sal astar esquinas.txt astar)"
  ;;
4)
  anota sigue-ele "$(sal sigue ele.txt)"
  anota sigue-ese "$(sal sigue ese.txt)"
  anota sigue-no-llega "$(sal sigue lejos.txt)"
  ;;
5)
  anota mision-mapa1 "$(sal mision mapa1.txt 0.5 0.5 0.6)"
  anota mision-mapa2 "$(sal mision mapa2.txt 0.4 0.4 0.5)"
  anota mision-sin-camino "$(sal mision mapa3.txt 0.5 0.5 0.6)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 5)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
