#!/usr/bin/env bash
# Pruebas de los hitos de proy-fis-ising.
# Uso: bash prueba.sh ./ising N [-v]    (N = hito, de 1 a 6)
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
  printf '  %-28s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-74)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
sal() {
  local r
  r=$(cd "$t" && "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$r" "$?"
}

# ---------- configuraciones ----------
printf '3 1 0\n+-+\n-+-\n+-+\n' > "$t/tablero3.txt"
printf '4 1 0.5\n++-+\n+--+\n-+++\n++-+\n' > "$t/campo4.txt"
printf '2 -1 0\n+-\n-+\n' > "$t/anti2.txt"
printf '5 0.7 -0.3\n++++-\n+-+++\n++-++\n-++++\n+++-+\n' > "$t/raro5.txt"
printf '4 1 0\n++++\n++++\n++++\n++++\n' > "$t/todos4.txt"
printf '3 1 0\n+-+\n-x-\n+-+\n' > "$t/mal1.txt"
printf '3 1 0\n+-+\n-+-\n' > "$t/mal2.txt"
printf '1 1 0\n+\n' > "$t/mal3.txt"

case $hito in
1)
  for x in tablero3 campo4 anti2 raro5 todos4; do anota "energia-$x" "$(sal energia $x.txt)"; done
  for x in mal1 mal2 mal3; do anota "$x" "$(sal energia $x.txt | tail -1)"; done
  anota sin-archivo "$(sal energia no-existe.txt | tail -1)"
  ;;
2)
  for a in "2 2.0" "3 1.5" "3 2.269" "4 2.0" "4 3.5" "4 0.8"; do anota "exacto-${a// /_}" "$(sal exacto $a)"; done
  anota exacto-grande "$(sal exacto 5 2.0 | tail -1)"
  anota exacto-temperatura "$(sal exacto 3 -1 | tail -1)"
  ;;
3)
  anota metropolis-4-frio "$(sal metropolis 4 1.5 2000 200 1)"
  anota metropolis-8-critico "$(sal metropolis 8 2.269 3000 500 7)"
  anota metropolis-8-caliente "$(sal metropolis 8 3.5 2000 200 42)"
  anota metropolis-16 "$(sal metropolis 16 2.0 500 100 3)"
  anota metropolis-mal "$(sal metropolis 8 2.0 100 100 1 | tail -1)"
  ;;
4)
  anota wolff-8-critico "$(sal wolff 8 2.269 2000 3)"
  anota wolff-16-frio "$(sal wolff 16 2.0 300 5)"
  anota wolff-8-caliente "$(sal wolff 8 4.0 1000 9)"
  anota wolff-32 "$(sal wolff 32 2.3 200 13)"
  ;;
5)
  anota onsager "$(sal onsager 1.0 2.0 2.2 2.3 3.0 5.0)"
  anota onsager-vacio "$(sal onsager | tail -1)"
  ;;
6)
  for L in 4 8; do anota "binder-$L" "$(sal binder $L 2.269 20000 2000 11)"; done
  anota binder-16 "$(sal binder 16 2.269 5000 1000 11)"
  anota binder-8-frio "$(sal binder 8 1.8 5000 1000 11)"
  anota binder-8-caliente "$(sal binder 8 3.2 5000 1000 11)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
