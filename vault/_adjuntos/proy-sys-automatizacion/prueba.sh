#!/usr/bin/env bash
# Pruebas de los hitos de proy-sys-automatizacion.
# Uso: bash prueba.sh ./kitops N [-v]    (N = hito, de 1 a 6)
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
  printf '  %-24s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-70)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
ejecuta() { # ejecuta kitops con LC_ALL=C y devuelve salida estándar más «[estado N]»
  local s
  s=$(cd "$t" && LC_ALL=C "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$s" "$?"
}
origen() {
  mkdir -p "$t/datos/sub dir"
  printf 'uno\n' > "$t/datos/a.txt"
  printf 'dos\n' > "$t/datos/sub dir/b c.txt"
  printf 'tres\n' > "$t/datos/.oculto"
}

case $hito in
1)
  origen
  mkdir "$t/copias"
  for f in 20261110-010000 20261111-010000 20261112-010000 20261113-010000; do
    anota "respaldo-$f" "$(KITOPS_FECHA=$f ejecuta respaldo datos copias -n 2)"
  done
  anota listado "$(cd "$t/copias" && ls -1 | grep -v '^\.' )"
  anota contenido "$(tar -tzf "$t/copias/respaldo-20261113-010000.tar.gz" | sed 's|/$||' | sort)"
  anota por-defecto "$(KITOPS_FECHA=20261114-010000 ejecuta respaldo datos copias; cd "$t/copias" && ls -1 respaldo-*.tar.gz | wc -l)"
  ;;
2)
  origen
  mkdir "$t/copias"
  for f in 20261111-010000 20261112-010000 20261113-010000; do KITOPS_FECHA=$f ejecuta respaldo datos copias >/dev/null; done
  anota manifiesto "$(cd "$t/copias" && cat respaldo-20261112-010000.tar.gz.sha256 | sed -E 's/^[0-9a-f]{64}  /HASH  /')"
  anota todo-bien "$(ejecuta verifica copias)"
  printf 'X' >> "$t/copias/respaldo-20261112-010000.tar.gz"
  anota uno-corrupto "$(ejecuta verifica copias)"
  ;;
3)
  mkdir -p "$t/raiz/bin" "$t/raiz/datos/compartido"
  : > "$t/raiz/bin/ok"; chmod 755 "$t/raiz/bin/ok"
  : > "$t/raiz/bin/peligro"; chmod 4755 "$t/raiz/bin/peligro"
  : > "$t/raiz/datos/notas con espacio.txt"; chmod 666 "$t/raiz/datos/notas con espacio.txt"
  : > "$t/raiz/datos/privado"; chmod 600 "$t/raiz/datos/privado"
  chmod 777 "$t/raiz/datos/compartido"
  head -c 2000000 /dev/zero > "$t/raiz/datos/volcado.bin"
  head -c 1048576 /dev/zero > "$t/raiz/datos/justo.bin"
  : > "$t/raiz/bin/doble"; chmod 4777 "$t/raiz/bin/doble"
  anota auditoria "$(ejecuta audita raiz)"
  ;;
4)
  {
    printf '10.0.0.1 - - [13/Nov/2026:10:00:00 +0000] "GET / HTTP/1.1" 200 1000 "-" "x"\n'
    printf '10.0.0.2 - - [13/Nov/2026:10:00:01 +0000] "GET /a HTTP/1.1" 500 10 "-" "x"\n'
    printf '10.0.0.1 - - [13/Nov/2026:10:00:02 +0000] "GET /b HTTP/1.1" 404 200 "-" "x"\n'
    printf '10.0.0.3 - - [13/Nov/2026:10:00:03 +0000] "POST /c HTTP/1.1" 503 0 "-" "x"\n'
    printf '10.0.0.1 - - [13/Nov/2026:10:00:04 +0000] "GET /d HTTP/1.1" 200 2500 "-" "x"\n'
    printf '10.0.0.2 - - [13/Nov/2026:10:00:05 +0000] "GET /e HTTP/1.1" 200 - "-" "x"\n'
  } > "$t/access.log"
  anota resumen "$(ejecuta logs access.log)"
  : > "$t/vacio.log"
  anota vacio "$(ejecuta logs vacio.log)"
  ;;
5)
  mkdir -p "$t/tmpdir/sub"
  for f in viejo1 "viejo con espacio" sub/viejo3 nuevo1 sub/nuevo2; do printf 'x' > "$t/tmpdir/$f"; done
  touch -d '10 days ago' "$t/tmpdir/viejo1" "$t/tmpdir/viejo con espacio" "$t/tmpdir/sub/viejo3"
  touch -d '2 days ago' "$t/tmpdir/nuevo1"
  anota limpieza "$(ejecuta limpia tmpdir -d 7)"
  anota quedan "$(cd "$t/tmpdir" && find . -type f | sort)"
  ;;
6)
  origen
  mkdir "$t/copias"
  anota sin-argumentos "$(ejecuta)"
  anota orden-desconocida "$(ejecuta despega)"
  anota origen-inexistente "$(KITOPS_FECHA=20261113-010000 ejecuta respaldo no-existe copias)"
  anota n-invalido "$(KITOPS_FECHA=20261113-010000 ejecuta respaldo datos copias -n cero)"
  ( cd "$t/copias" && exec 9>.kitops.lock && flock 9 && sleep 3 ) &
  sleep 0.5
  anota bloqueado "$(KITOPS_FECHA=20261113-020000 ejecuta respaldo datos copias)"
  wait
  anota tras-liberar "$(KITOPS_FECHA=20261113-030000 ejecuta respaldo datos copias)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
