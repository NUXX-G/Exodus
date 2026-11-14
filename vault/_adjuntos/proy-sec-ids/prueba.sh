#!/usr/bin/env bash
# Pruebas de los hitos de proy-sec-ids.
# Uso: bash prueba.sh ./ids N [-v]    (N = hito, de 1 a 6). Las capturas, las reglas y los registros deben estar junto a este guion.
# Si todos los casos son correctos, el código que se imprime al final es la respuesta del hito en Exodus.
set -u
k=$(cd "$(dirname "$1")" && pwd)/$(basename "$1")
hito=$2
detalle=${3:-}
[ -x "$k" ] || { echo "no encuentro un ejecutable en $1" >&2; exit 2; }
d=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
for f in trafico.pcap escaneo.pcap raro.pcap grande.pcap reglas.txt reglas-malas.txt auth.log access.log; do
  [ -f "$d/$f" ] || { echo "falta $f junto a prueba.sh" >&2; exit 2; }
done
t=$(mktemp -d)
trap 'rm -rf "$t"' EXIT
cp "$d"/trafico.pcap "$d"/escaneo.pcap "$d"/raro.pcap "$d"/grande.pcap "$d"/reglas.txt "$d"/reglas-malas.txt "$d"/auth.log "$d"/access.log "$t"/
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
# una captura vacía (solo la cabecera) y un fichero que no es una captura
printf '\xd4\xc3\xb2\xa1\x02\x00\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\x00\x00\x01\x00\x00\x00' > "$t/vacia.pcap"
printf '\xd4\xc3\xb2\xa1\x02\x00\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\x00\x00\x71\x00\x00\x00' > "$t/sll.pcap"

case $hito in
1)
  anota trafico "$(sal paquetes trafico.pcap)"
  anota nanosegundos-y-recortes "$(sal paquetes raro.pcap)"
  anota extremo-grande "$(sal paquetes grande.pcap)"
  anota escaneo "$(sal paquetes escaneo.pcap)"
  anota vacia "$(sal paquetes vacia.pcap)"
  anota no-es-pcap "$(sal paquetes auth.log | tail -1)"
  anota otro-enlace "$(sal paquetes sll.pcap | tail -1)"
  anota no-existe "$(sal paquetes nada.pcap | tail -1)"
  ;;
2)
  anota trafico "$(sal flujos trafico.pcap)"
  anota escaneo "$(sal flujos escaneo.pcap)"
  anota raro "$(sal flujos raro.pcap)"
  anota vacia "$(sal flujos vacia.pcap)"
  anota sin-argumentos "$(sal flujos | tail -1)"
  ;;
3)
  anota trafico "$(sal firmas trafico.pcap reglas.txt)"
  anota escaneo "$(sal firmas escaneo.pcap reglas.txt)"
  anota raro "$(sal firmas raro.pcap reglas.txt)"
  anota regla-mala "$(sal firmas trafico.pcap reglas-malas.txt | tail -1)"
  ;;
4)
  anota rapido "$(sal escaneos escaneo.pcap 10 5)"
  anota con-ventana-larga "$(sal escaneos escaneo.pcap 10 60)"
  anota umbral-alto "$(sal escaneos escaneo.pcap 31 60)"
  anota ventana-corta "$(sal escaneos escaneo.pcap 20 0.25)"
  anota trafico "$(sal escaneos trafico.pcap 2 1)"
  anota umbral-cero "$(sal escaneos escaneo.pcap 0 5 | tail -1)"
  ;;
5)
  anota un-minuto "$(sal ssh auth.log 5 60)"
  anota dos-horas "$(sal ssh auth.log 5 7200)"
  anota umbral-7 "$(sal ssh auth.log 7 30)"
  anota umbral-alto "$(sal ssh auth.log 10 86400)"
  anota no-existe "$(sal ssh nada.log 5 60 | tail -1)"
  ;;
6)
  anota rafagas "$(sal web access.log 5 10)"
  anota ventana-larga "$(sal web access.log 2 600)"
  anota umbral-alto "$(sal web access.log 9 3600)"
  anota mal-uso "$(sal web access.log 5 | tail -1)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
