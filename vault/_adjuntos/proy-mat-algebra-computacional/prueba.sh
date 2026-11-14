#!/usr/bin/env bash
# Pruebas de los hitos de proy-mat-algebra-computacional.
# Uso: bash prueba.sh ./alg N [-v]    (N = hito, de 1 a 6)
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
sal() {
  local r
  r=$(cd "$t" && "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$r" "$?"
}

case $hito in
1)
  anota fracciones "$(sal racional '1/2 + 1/3 - 1/6')"
  anota prioridad "$(sal racional '2 + 3 * 4 ^ 2 / 6')"
  anota menos-unario "$(sal racional '-(3 - 5) * -2 / 8')"
  anota potencia-grande "$(sal racional '2^100 / 6^20')"
  anota anidado "$(sal racional '((1/(1+1/(1+1/(1+1/(1+1))))))')"
  anota armonico "$(sal racional '1+1/2+1/3+1/4+1/5+1/6+1/7+1/8+1/9+1/10+1/11+1/12')"
  anota division-por-cero "$(sal racional '1/(2-2)' | tail -1)"
  anota mal-formada "$(sal racional '2 + * 3' | tail -1)"
  anota exponente-negativo "$(sal racional '2^-1' | tail -1)"
  ;;
2)
  anota suma "$(sal poli suma '1 -3 2' '2 0 1/2 -1')"
  anota suma-cancela "$(sal poli suma '1 2 3' '-1 -2 0')"
  anota producto "$(sal poli producto '1 -1' '1 1 1')"
  anota producto-racional "$(sal poli producto '1/2 -1/3' '3 2/5 -7')"
  anota division "$(sal poli division '1 0 0 0 -1' '1 -2 1')"
  anota division-exacta "$(sal poli division '2 -3 -11 6' '2 1')"
  anota division-menor "$(sal poli division '3 1' '1 0 0 5')"
  anota division-por-cero "$(sal poli division '1 2' '0' | tail -1)"
  ;;
3)
  anota mcd-simple "$(sal mcd '1 0 -1' '1 -2 1')"
  anota mcd-coprimos "$(sal mcd '1 0 1' '1 1')"
  anota mcd-cubico "$(sal mcd '1 -6 11 -6' '1 -9 26 -24')"
  anota mcd-racional "$(sal mcd '2/3 0 -2/3' '4 4')"
  anota mcd-con-cero "$(sal mcd '3 6 3' '0')"
  anota mcd-dos-ceros "$(sal mcd '0' '0' | tail -1)"
  ;;
4)
  anota sin-repetidos "$(sal factoriza '1 0 -1')"
  anota cuadrado "$(sal factoriza '1 -2 1')"
  anota multiplicidades "$(sal factoriza '3 12 6 -18 -9 -6 -12 24')"
  anota contenido-negativo "$(sal factoriza '-6 12 -6')"
  anota cubo-por-lineal "$(sal factoriza '1 -1 -3 5 -2')"
  anota grado-cero "$(sal factoriza '7' | tail -1)"
  ;;
5)
  anota f5-cuadratico "$(sal fp 5 '1 0 1')"
  anota f7-irreducible "$(sal fp 7 '1 0 1')"
  anota f3-con-repetidos "$(sal fp 3 '1 0 2 2 0 1 1 0 2 2')"
  anota f11-grado6 "$(sal fp 11 '3 7 0 1 9 2 5')"
  anota f13-producto "$(sal fp 13 '1 5 2 9 12 1 3 8')"
  anota f3-potencia-p "$(sal fp 3 '1 0 0 1')"
  anota f2-no-admitido "$(sal fp 2 '1 1 1' | tail -1)"
  anota no-primo "$(sal fp 9 '1 0 1' | tail -1)"
  ;;
6)
  anota lineal "$(sal grobner 2 '1[1,0] 1[0,1] -1[0,0]' '1[1,0] -1[0,1] -3[0,0]')"
  anota circulo-recta "$(sal grobner 2 '1[2,0] 1[0,2] -1[0,0]' '1[1,0] -1[0,1]')"
  anota tres-variables "$(sal grobner 3 '1[1,1,0] -1[0,0,1]' '1[0,1,1] -1[1,0,0]' '1[1,0,1] -1[0,1,0]')"
  anota cox-little-oshea "$(sal grobner 2 '1[3,0] -2[1,1]' '1[2,1] -2[0,2] 1[1,0]')"
  anota parabola "$(sal grobner 2 '1[2,0] -1[0,1]' '1[1,1] -1[0,0]')"
  anota mal-formado "$(sal grobner 2 '1[1]' | tail -1)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
