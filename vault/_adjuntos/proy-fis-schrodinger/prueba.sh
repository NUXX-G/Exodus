#!/usr/bin/env bash
# Pruebas de los hitos de proy-fis-schrodinger.
# Uso: bash prueba.sh ./schro N [-v]    (N = hito, de 1 a 6)
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
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
sal() {
  local r
  r=$(cd "$t" && "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$r" "$?"
}

case $hito in
1)
  anota armonico-1 "$(sal autovalores 200 20 4 armonico 1)"
  anota armonico-0.5 "$(sal autovalores 500 20 6 armonico 0.5)"
  anota pozo-5-2 "$(sal autovalores 300 10 3 pozo 5 2)"
  anota cuartico-1 "$(sal autovalores 150 8 5 cuartico 1)"
  anota pocos-puntos "$(sal autovalores 5 10 2 armonico 1 | tail -1)"
  anota demasiados-estados "$(sal autovalores 20 10 21 armonico 1 | tail -1)"
  anota potencial-desconocido "$(sal autovalores 100 10 2 coulomb 1 | tail -1)"
  ;;
2)
  anota orden-w1 "$(sal orden 1 49 99 199 399)"
  anota orden-w2 "$(sal orden 2 49 99 199)"
  ;;
3)
  for a in "5 2" "1 1" "50 3" "0.1 0.5" "2 3.14159"; do anota "pozo-${a// /_}" "$(sal pozo $a)"; done
  anota pozo-negativo "$(sal pozo -1 2 | tail -1)"
  ;;
4)
  anota esperados-armonico "$(sal esperados 400 20 armonico 1)"
  anota esperados-armonico-3 "$(sal esperados 400 12 armonico 3)"
  anota esperados-cuartico "$(sal esperados 400 12 cuartico 1)"
  anota esperados-pozo "$(sal esperados 400 10 pozo 5 2)"
  ;;
5)
  anota barrera-por-debajo "$(sal transmision 1 2 1)"
  anota barrera-por-encima "$(sal transmision 3 2 1)"
  anota barrera-ancha "$(sal transmision 0.5 1 3)"
  anota pozo-de-potencial "$(sal transmision 2 -1 2)"
  anota doble-barrera "$(sal transmision 1.5 2 0.5 0 1 2 0.5)"
  anota doble-barrera-resonancia "$(sal transmision 0.7 2 0.5 0 1.5 2 0.5)"
  anota energia-nula "$(sal transmision 0 2 1 | tail -1)"
  ;;
6)
  anota paquete-barrera "$(sal paquete 1000 100 -15 2 2 2 1 0.05 300)"
  anota paquete-estrecha "$(sal paquete 800 80 -12 1.5 1.5 1.5 2 0.05 250)"
  anota paquete-libre "$(sal paquete 600 60 -10 2 0 0 1 0.05 100)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
