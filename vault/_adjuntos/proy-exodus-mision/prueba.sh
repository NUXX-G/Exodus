#!/usr/bin/env bash
# Pruebas de los hitos del superproyecto proy-exodus-mision.
# Uso: bash prueba.sh ./rover N [-v]    (N = hito, de 1 a 9; mision.txt debe estar junto a este guion)
# Si todos los casos son correctos, el código que se imprime al final es la respuesta del hito en Exodus.
set -u
k=$(cd "$(dirname "$1")" && pwd)/$(basename "$1")
hito=$2
detalle=${3:-}
base=$(cd "$(dirname "$0")" && pwd)
[ -x "$k" ] || { echo "no encuentro un ejecutable en $1" >&2; exit 2; }
[ -f "$base/mision.txt" ] || { echo "falta mision.txt junto a prueba.sh" >&2; exit 2; }
t=$(mktemp -d)
trap 'rm -rf "$t"' EXIT
cp "$base/mision.txt" "$t/mision.txt"
total=""
anota() {
  total+="$1|$2"$'\n'
  printf '  %-30s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-74)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
sal() {
  local r
  r=$(cd "$t" && timeout 120 "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$r" "$?"
}
variante() { # variante NOMBRE 'expresión de sed': una copia de mision.txt modificada
  sed -e "$2" "$t/mision.txt" > "$t/$1.txt"
}

variante sin_pmax '/^pmax/d'
variante empinado 's/^terreno .*/terreno 1.5 0.4 0.3 0.07 1.0/'
variante cerrado 's/^pendiente_max .*/pendiente_max 0.2/'
variante muro 's/^pendiente_max .*/pendiente_max 0.05/'
variante dos_balizas '/^baliza 130/d; /^baliza 50/d'
variante debil 's/^bateria .*/bateria 2 0.08 1.0/'
variante sobrecarga '$ a tarea pesada 37 100'
variante sin_tareas '/^tarea/d'
variante otra_semilla 's/^semilla .*/semilla 13/'

case $hito in
1)
  anota fisica-dt-0.01 "$(sal fisica mision.txt 0.01)"
  anota fisica-dt-0.5 "$(sal fisica mision.txt 0.5)"
  anota falta-parametro "$(sal fisica sin_pmax.txt 0.01 | tail -1)"
  anota pendiente-imposible "$(sal fisica empinado.txt 0.01 | tail -1)"
  ;;
2)
  for l in 0 3 100; do anota "estima-lambda-$l" "$(sal estima mision.txt $l)"; done
  anota dos-balizas "$(sal estima dos_balizas.txt 3 | tail -1)"
  ;;
3)
  anota energia-dt-0.05 "$(sal energia mision.txt 0.05)"
  anota energia-bateria-pequena "$(sal energia debil.txt 0.05)"
  ;;
4)
  anota navega "$(sal navega mision.txt)"
  anota navega-sin-camino "$(sal navega cerrado.txt)"
  anota navega-salida-impracticable "$(sal navega muro.txt | tail -1)"
  ;;
5)
  anota telemetria "$(sal telemetria mision.txt)"
  anota telemetria-otra-semilla "$(sal telemetria otra_semilla.txt)"
  anota planifica "$(sal planifica mision.txt)"
  anota planifica-sobrecarga "$(sal planifica sobrecarga.txt)"
  anota planifica-sin-tareas "$(sal planifica sin_tareas.txt | tail -1)"
  ;;
6)
  anota enlace "$(sal enlace mision.txt)"
  anota enlace-otra-semilla "$(sal enlace otra_semilla.txt)"
  ;;
7)
  anota terreno-20 "$(sal terreno mision.txt 20)"
  anota terreno-300 "$(sal terreno mision.txt 300)"
  ;;
8)
  anota bb84-limpio "$(sal bb84 mision.txt 2000 0 0)"
  anota bb84-espia "$(sal bb84 mision.txt 2000 1 0)"
  anota bb84-ruido-3 "$(sal bb84 mision.txt 2000 0 0.03)"
  anota bb84-ruido-8 "$(sal bb84 mision.txt 4000 0 0.08)"
  ;;
9)
  anota mision "$(sal mision mision.txt)"
  anota mision-otra-semilla "$(sal mision otra_semilla.txt)"
  anota mision-sin-ruta "$(sal mision cerrado.txt)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 9)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
