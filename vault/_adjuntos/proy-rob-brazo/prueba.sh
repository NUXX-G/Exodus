#!/usr/bin/env bash
# Pruebas de los hitos de proy-rob-brazo.
# Uso: bash prueba.sh ./brazo N [-v]    (N = hito, de 1 a 6)
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
  anota reposo "$(sal directa 0 0 0)"
  anota generica "$(sal directa 0.3 0.7 -1.1)"
  anota codo-alto "$(sal directa 1.2 -0.4 2.0)"
  anota base-girada "$(sal directa -2.5 1.0 0.6)"
  anota vertical "$(sal directa 0 1.5707963267948966 0)"
  anota faltan-datos "$(sal directa 1 2 | tail -1)"
  anota no-numerico "$(sal directa 1 dos 3 | tail -1)"
  ;;
2)
  anota generico "$(sal inversa 0.5 0.3 0.6)"
  anota cuadrante-iii "$(sal inversa -0.3 -0.4 0.2)"
  anota detras "$(sal inversa -0.1 0.0001 0.3)"
  anota por-debajo "$(sal inversa 0.2 -0.6 -0.1)"
  anota casi-estirado "$(sal inversa 0.89 0 0.4)"
  anota sobre-el-eje "$(sal inversa 0 0 0.8)"
  anota fuera-de-alcance "$(sal inversa 1.5 0.2 0.4)"
  anota demasiado-cerca "$(sal inversa 0.05 0 0.4)"
  ;;
3)
  anota generico "$(sal jacobiano 0.3 0.7 -1.1)"
  anota otro "$(sal jacobiano -1.0 0.2 1.4)"
  anota estirado "$(sal jacobiano 0.5 0.4 0)"
  anota plegado "$(sal jacobiano 0.5 0.4 3.141592653589793)"
  anota muneca-en-eje "$(sal jacobiano 0.7 1.5707963267948966 0)"
  anota mal-formado "$(sal jacobiano 1 2 | tail -1)"
  ;;
4)
  anota quintica "$(sal trayectoria 0 1 2 -0.5 0 0.5 1 1.5 2 2.5)"
  anota bajada "$(sal trayectoria -0.3 1.2 1.5 0.1 0.75 1.4)"
  anota quieta "$(sal trayectoria 0.8 0.8 1 0.2 0.6)"
  anota tiempo-nulo "$(sal trayectoria 0 1 0 0.5 | tail -1)"
  anota sin-instantes "$(sal trayectoria 0 1 2 | tail -1)"
  ;;
5)
  anota reposo-horizontal "$(sal dinamica 0 0 0 0 0 0)"
  anota sosteniendo "$(sal dinamica 0 0 0 0 15.2055 2.943)"
  anota en-movimiento "$(sal dinamica 0.4 -0.9 1.5 -2.0 3.0 0.5)"
  anota plegado "$(sal dinamica -0.6 2.5 -0.7 3.1 -4.0 2.0)"
  anota vertical "$(sal dinamica 1.5707963267948966 0 0 0 0 0)"
  anota faltan-datos "$(sal dinamica 0 0 0 0 0 | tail -1)"
  ;;
6)
  anota modelo-exacto "$(sal control 0 0 1.2 -0.8 2 100 20 2.0 1.5)"
  anota masas-mal-estimadas "$(sal control 0 0 1.2 -0.8 2 100 20 1.6 1.2)"
  anota ganancias-bajas "$(sal control -0.5 1.0 0.7 -0.3 1.5 9 6 1.6 1.2)"
  anota ganancias-altas "$(sal control -0.5 1.0 0.7 -0.3 1.5 900 60 1.6 1.2)"
  anota ganancia-negativa "$(sal control 0 0 1 1 2 -1 20 2 1.5 | tail -1)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
