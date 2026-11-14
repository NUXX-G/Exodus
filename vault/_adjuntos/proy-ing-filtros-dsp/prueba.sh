#!/usr/bin/env bash
# Pruebas de los hitos de proy-ing-filtros-dsp.
# Uso: bash prueba.sh ./dsp N [-v]    (N = hito, de 1 a 6)
# Si todos los casos son correctos, el código que se imprime al final es la respuesta del hito en Exodus.
set -u
k=$(cd "$(dirname "$1")" && pwd)/$(basename "$1")
hito=$2
detalle=${3:-}
[ -x "$k" ] || { echo "no encuentro un ejecutable en $1" >&2; exit 2; }
total=""
anota() {
  total+="$1|$2"$'\n'
  printf '  %-30s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-74)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
sal() {
  local r
  r=$(timeout 60 "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$r" "$?"
}

case $hito in
1)
  for c in "21 0.1 rect" "21 0.1 hamming" "31 0.15 blackman" "63 0.05 hamming"; do anota "fir-${c// /_}" "$(sal fir $c)"; done
  anota fir-n-par "$(sal fir 20 0.1 hamming | tail -1)"
  anota fir-ventana-desconocida "$(sal fir 21 0.1 kaiser | tail -1)"
  ;;
2)
  for c in "21 0.1 rect" "21 0.1 hamming" "41 0.08 hamming" "61 0.08 blackman"; do anota "filtra-${c// /_}" "$(sal filtra $c 7)"; done
  ;;
3)
  for c in "pasabajos 0.1 0.707" "pasabajos 0.05 5" "pasaaltos 0.2 0.707" "banda-eliminada 0.125 10" "pasabajos 0.1 0.3"; do anota "biquad-${c// /_}" "$(sal biquad $c)"; done
  anota biquad-tipo-desconocido "$(sal biquad banda 0.1 1 | tail -1)"
  ;;
4)
  for c in "21 0.1 hamming 7" "41 0.08 hamming 11" "63 0.05 blackman 3"; do anota "q15-${c// /_}" "$(sal q15 $c)"; done
  ;;
5)
  for c in "4 41 0.1 hamming 7" "8 63 0.05 blackman 11" "3 31 0.15 hamming 5"; do anota "diezma-${c// /_}" "$(sal diezma $c)"; done
  anota diezma-aliasing "$(sal diezma 4 41 0.2 hamming 7 | tail -1)"
  ;;
6)
  anota dtmf-telefono "$(sal dtmf 915550123 42)"
  anota dtmf-todas "$(sal dtmf 0123456789ABCD*# 7)"
  anota dtmf-repetidos "$(sal dtmf 1155 99)"
  anota dtmf-invalido "$(sal dtmf 12x 1 | tail -1)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
