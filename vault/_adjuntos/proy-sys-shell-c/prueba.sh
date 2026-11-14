#!/usr/bin/env bash
# Pruebas de los hitos de proy-sys-shell-c.
# Uso: bash prueba.sh ./mishell N    (N = número de hito, de 1 a 8)
# Ejecuta tu shell con cada caso del hito (las órdenes llegan por la entrada estándar, sin terminal), guarda su salida
# estándar y su estado de salida, y muestra el resultado de cada caso y un código. Si todos los casos son correctos, ese
# código es la respuesta del hito en Exodus. Con -v muestra además lo que imprimió tu shell en cada caso.
set -u
shell=$(cd "$(dirname "$1")" && pwd)/$(basename "$1")
hito=$2
detalle=${3:-}
[ -x "$shell" ] || { echo "no encuentro un ejecutable en $1" >&2; exit 2; }
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
total=""

caso() { # nombre, órdenes
  local salida estado
  salida=$(cd "$tmp" && printf '%s\n' "$2" | HOME="$tmp" timeout 5 "$shell" 2>/dev/null)
  estado=$?
  total+="$1|$salida|$estado"$'\n'
  printf '  %-26s estado %s\n' "$1" "$estado"
  [ "$detalle" = "-v" ] && printf '%s\n' "$salida" | sed 's/^/      | /'
}

case $hito in
1)
  caso orden-simple "printf 'hola\n'"
  caso dos-ordenes "printf '%s+%s\n' a b
printf 'x\n'"
  caso estado-de-fallo "false"
  caso orden-inexistente "orden-que-no-existe-xyz"
  caso exit-con-codigo "printf 'a\n'
exit 3
printf 'b\n'"
  caso linea-vacia "
printf 'tras la vacia\n'"
  ;;
2)
  caso estado-anterior "false
printf '%s\n' \$?"
  caso asignacion "A=uno
printf '%s\n' \"\$A\""
  caso llaves "A=dos
printf '[%s]\n' \${A}x"
  caso variable-vacia "printf '[%s]\n' \"\$NO_EXISTE_XYZ\""
  caso cd-y-pwd "cd /tmp
pwd"
  caso export "export B=tres
sh -c 'printf \"%s\n\" \"\$B\"'"
  ;;
3)
  caso crear-y-anadir "printf 'a\n' > f
printf 'b\n' >> f
cat f"
  caso entrada "printf 'x\ny\n' > g
wc -l < g"
  caso error-a-archivo "cat no-existe-xyz 2> err
printf '%s\n' \$?
wc -c < err | tr -d ' ' | sed 's/^0\$/vacio/;s/^[1-9].*/con-texto/'"
  caso truncar "printf 'largo\n' > h
printf 'c\n' > h
cat h"
  ;;
4)
  caso tuberia-doble "printf 'b\na\nc\n' | sort | head -n 2"
  caso estado-de-tuberia "printf 'x\n' | false
printf '%s\n' \$?
printf 'x\n' | true
printf '%s\n' \$?"
  caso tuberia-larga "seq 1 1000 | grep 7 | wc -l"
  caso tuberia-y-redireccion "printf '3\n1\n2\n' | sort > s
cat s | head -n 1"
  ;;
5)
  caso espacios-entre-comillas "printf '%s|' 'a b' \"c d\" e\\ f
printf '\n'"
  caso dolar-y-comillas "A=x
printf '%s\n' '\$A' \"\$A\" \\\$A"
  caso comillas-mezcladas "printf '%s\n' \"a'b\" 'a\"b'"
  caso comillas-pegadas "printf '%s\n' 'a'\"b\"c"
  ;;
6)
  caso y-o "true && printf 'si\n' || printf 'no\n'"
  caso punto-y-coma "false && printf 'a\n'; printf 'b\n'"
  caso cadena-de-o "false || false || printf 'c\n'"
  caso cd-fallido "cd /no/existe/xyz 2> /dev/null || printf 'fallo\n'"
  caso y-tras-fallo "false && printf 'nunca\n' && printf 'tampoco\n'
printf '%s\n' \$?"
  ;;
7)
  caso segundo-plano "sleep 0.3 & printf 'antes\n'
wait
printf 'despues\n'"
  caso espera-a-varios "sleep 0.2 & sleep 0.1 &
wait
printf 'todos\n'"
  caso estado-tras-wait "printf 'x\n' > /dev/null &
wait
printf '%s\n' \$?"
  ;;
8)
  caso comentarios "# comentario
   printf 'a\n'   # otro
printf '%s\n' a#b"
  caso guion-completo "N=3
printf '%s\n' uno dos tres > lista
wc -l < lista
grep -c o lista && printf 'con-o\n'
cd /tmp && pwd
exit 4"
  ;;
*)
  echo "hito desconocido: $hito (de 1 a 8)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
