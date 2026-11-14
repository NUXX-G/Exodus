#!/usr/bin/env bash
# Pruebas de los hitos de proy-sys-kv-rust.
# Uso: bash prueba.sh ./target/release/kv N [-v]    (N = hito, de 1 a 8)
# Tu programa se invoca como «kv DIR» (órdenes por la entrada estándar) y como «kv DIR --serve PUERTO» (servidor TCP en
# 127.0.0.1). Si todos los casos son correctos, el código que se imprime al final es la respuesta del hito en Exodus.
set -u
kv=$(cd "$(dirname "$1")" && pwd)/$(basename "$1")
hito=$2
detalle=${3:-}
[ -x "$kv" ] || { echo "no encuentro un ejecutable en $1" >&2; exit 2; }
tmp=$(mktemp -d)
pid=""
trap '[ -n "$pid" ] && kill -9 "$pid" 2>/dev/null; rm -rf "$tmp"' EXIT
total=""
puerto=$((20000 + RANDOM % 20000))

anota() { # nombre, texto
  total+="$1|$2"$'\n'
  printf '  %-28s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-60)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
repl() { # dir, órdenes
  printf '%s\n' "$2" | timeout 10 "$kv" "$1" 2>/dev/null
}
arranca() { # dir
  "$kv" "$1" --serve "$puerto" >/dev/null 2>&1 &
  pid=$!
  for _ in $(seq 1 100); do (exec 3<>"/dev/tcp/127.0.0.1/$puerto") 2>/dev/null && return 0; sleep 0.05; done
  echo "el servidor no acepta conexiones en el puerto $puerto" >&2; return 1
}
para() { kill -9 "$pid" 2>/dev/null; wait "$pid" 2>/dev/null; pid=""; }
cliente() { # órdenes; imprime una respuesta por orden
  local n
  n=$(printf '%s\n' "$1" | grep -c .)
  exec 3<>"/dev/tcp/127.0.0.1/$puerto"
  printf '%s\n' "$1" >&3
  for _ in $(seq 1 "$n"); do IFS= read -r -t 10 r <&3 || break; printf '%s\n' "$r"; done
  exec 3<&-
}

case $hito in
1)
  anota basicas "$(repl "$tmp/a" "SET a 1
SET b dos
GET a
GET zz
COUNT
KEYS
DEL a
DEL a
COUNT")"
  anota errores "$(repl "$tmp/b" "GET
SET x
FOO bar
KEYS
SET k v extra")"
  ;;
2)
  anota incr "$(repl "$tmp/a" "INCR n
INCR n
SET m 41
INCR m
SET t hola
INCR t
INCR
GET n")"
  anota negativos "$(repl "$tmp/b" "SET x -3
INCR x
INCR x
INCR x
INCR x
GET x")"
  ;;
3)
  repl "$tmp/p" "SET a 1
SET b 2
DEL a
INCR c
INCR c" >/dev/null
  anota tras-reiniciar "$(repl "$tmp/p" "GET a
GET b
GET c
KEYS")"
  repl "$tmp/p" "SET b 20
SET d 4" >/dev/null
  anota segundo-reinicio "$(repl "$tmp/p" "KEYS
GET b
COUNT")"
  ;;
4)
  repl "$tmp/c" "SET a 1
SET b 2
SET a 3
DEL b
INCR n
INCR n
SET z ultimo" >/dev/null
  anota registro "$(cat "$tmp/c/kv.log")"
  repl "$tmp/c" "COMPACT" >/dev/null
  anota compactado "$(cat "$tmp/c/kv.log")"
  repl "$tmp/c" "SET b 9" >/dev/null
  anota tras-compactar "$(cat "$tmp/c/kv.log"; repl "$tmp/c" "KEYS")"
  ;;
5)
  arranca "$tmp/s" || exit 1
  anota un-cliente "$(cliente "SET a 1
GET a
INCR a
KEYS")"
  anota otra-conexion "$(cliente "GET a
DEL a
COUNT")"
  para
  ;;
6)
  arranca "$tmp/s" || exit 1
  ordenes=$(for _ in $(seq 1 50); do echo "INCR contador"; done)
  for k in $(seq 1 8); do cliente "$ordenes" > "$tmp/r$k" & done
  wait $(jobs -p | grep -v "^$pid$")
  respuestas=$(cat "$tmp"/r* | sort -n | uniq | wc -l)
  anota concurrencia "$(cliente "GET contador") $respuestas"
  para
  ;;
7)
  arranca "$tmp/s" || exit 1
  cliente "SET duradero si
INCR veces
INCR veces" >/dev/null
  para
  arranca "$tmp/s" || exit 1
  anota tras-kill-9 "$(cliente "GET duradero
GET veces")"
  para
  ;;
8)
  arranca "$tmp/s" || exit 1
  seq 1 20000 | sed 's/.*/SET clave& valor&/' > "$tmp/lote"
  inicio=$(date +%s)
  exec 3<>"/dev/tcp/127.0.0.1/$puerto"
  cat "$tmp/lote" >&3 &
  oks=0
  while [ "$oks" -lt 20000 ] && IFS= read -r -t 20 r <&3; do [ "$r" = OK ] && oks=$((oks + 1)); done
  exec 3<&-
  segundos=$(( $(date +%s) - inicio ))
  [ "$segundos" -le 15 ] && rapido=si || rapido=no
  anota rendimiento "$oks $rapido $(cliente "COUNT
GET clave12345")"
  para
  ;;
*)
  echo "hito desconocido: $hito (de 1 a 8)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
