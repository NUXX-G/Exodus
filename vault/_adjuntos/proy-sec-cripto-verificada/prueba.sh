#!/usr/bin/env bash
# Pruebas de los hitos de proy-sec-cripto-verificada.
# Uso: bash prueba.sh ./cripto N [-v]    (N = hito, de 1 a 6)
# Combina los vectores oficiales (RFC 8439, RFC 5869, FIPS 197, FIPS 180-4, SP 800-38D) con entradas largas pseudoaleatorias
# y comprobaciones de manipulación. Si todo es correcto, el código que se imprime al final es la respuesta del hito en Exodus.
set -u
k=$(cd "$(dirname "$1")" && pwd)/$(basename "$1")
hito=$2
detalle=${3:-}
[ -x "$k" ] || { echo "no encuentro un ejecutable en $1" >&2; exit 2; }
total=""
anota() {
  total+="$1|$2"$'\n'
  printf '  %-28s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-76)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | fold -w 96 | sed 's/^/      | /'
}
sal() {
  local r
  r=$(timeout 60 "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$r" "$?"
}
bytes() { # bytes N SEMILLA: N bytes pseudoaleatorios en hexadecimal (Park-Miller, exacto en coma flotante)
  awk -v n="$1" -v s="$2" 'BEGIN { for (i = 0; i < n; i++) { s = (s * 16807) % 2147483647; printf "%02x", s % 256 } }'
}
tx() { printf '%s' "$1" | od -An -tx1 | tr -d ' \n'; } # texto a hexadecimal
voltea() { # cambia el primer carácter hexadecimal del byte en la posición dada
  local h=$1 p=$(( $2 * 2 )) c
  c=${h:$p:1}; [ "$c" = "0" ] && c=1 || c=0
  printf '%s%s%s' "${h:0:$p}" "$c" "${h:$((p + 1))}"
}

K32=000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f
PROTECTOR=$(tx "Ladies and Gentlemen of the class of '99: If I could offer you only one tip for the future, sunscreen would be it.")

case $hito in
1)
  anota rfc8439-2.3.2-bloque "$(sal bloque-chacha $K32 000000090000004a00000000 1)"
  anota rfc8439-2.4.2-cifrado "$(sal chacha20 $K32 000000000000004a00000000 1 $PROTECTOR)"
  anota descifra-es-cifrar "$(sal chacha20 $K32 000000000000004a00000000 1 "$(sal chacha20 $K32 000000000000004a00000000 1 $PROTECTOR | head -1)")"
  anota largo-1000-bytes "$(sal chacha20 "$(bytes 32 11)" "$(bytes 12 12)" 7 "$(bytes 1000 13)")"
  anota vacio "$(sal chacha20 $K32 000000000000004a00000000 1 -)"
  anota nonce-corto "$(sal chacha20 $K32 0000004a00000000 1 00 | tail -1)"
  ;;
2)
  anota rfc8439-2.5.2-poly1305 "$(sal poly1305 85d6be7857556d337f4452fe42d506a80103808afb0db2fd4abff6af4149f51b "$(tx 'Cryptographic Forum Research Group')")"
  anota poly-largo "$(sal poly1305 "$(bytes 32 21)" "$(bytes 777 22)")"
  anota poly-bloque-exacto "$(sal poly1305 "$(bytes 32 23)" "$(bytes 64 24)")"
  anota poly-r-maximo "$(sal poly1305 ffffffffffffffffffffffffffffffff00000000000000000000000000000000 ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)"
  anota poly-vacio "$(sal poly1305 "$(bytes 32 25)" -)"
  ;;
3)
  C=$(sal sella-chacha 808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9f 070000004041424344454647 50515253c0c1c2c3c4c5c6c7 $PROTECTOR | head -1)
  anota rfc8439-2.8.2-sella "$C"
  anota abre-correcto "$(sal abre-chacha 808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9f 070000004041424344454647 50515253c0c1c2c3c4c5c6c7 "$C")"
  anota abre-cifrado-manipulado "$(sal abre-chacha 808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9f 070000004041424344454647 50515253c0c1c2c3c4c5c6c7 "$(voltea "$C" 5)" | tail -1)"
  anota abre-etiqueta-manipulada "$(sal abre-chacha 808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9f 070000004041424344454647 50515253c0c1c2c3c4c5c6c7 "$(voltea "$C" 120)" | tail -1)"
  anota abre-aad-distinto "$(sal abre-chacha 808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9f 070000004041424344454647 50515253c0c1c2c3c4c5c6c8 "$C" | tail -1)"
  anota sella-largo "$(sal sella-chacha "$(bytes 32 31)" "$(bytes 12 32)" "$(bytes 37 33)" "$(bytes 1000 34)")"
  anota sella-sin-datos "$(sal sella-chacha "$(bytes 32 35)" "$(bytes 12 36)" "$(bytes 20 37)" -)"
  ;;
4)
  anota sha256-abc "$(sal sha256 "$(tx abc)")"
  anota sha256-vacio "$(sal sha256 -)"
  anota sha256-56-bytes "$(sal sha256 "$(tx abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq)")"
  anota sha256-largo "$(sal sha256 "$(bytes 1000 41)")"
  anota hmac-clave-larga "$(sal hmac "$(bytes 131 42)" "$(tx 'Test Using Larger Than Block-Size Key - Hash Key First')")"
  anota rfc5869-caso1 "$(sal hkdf 000102030405060708090a0b0c 0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b f0f1f2f3f4f5f6f7f8f9 42)"
  anota hkdf-sin-sal "$(sal hkdf - "$(bytes 22 43)" - 42)"
  anota hkdf-largo "$(sal hkdf "$(bytes 16 44)" "$(bytes 40 45)" "$(bytes 10 46)" 200)"
  ;;
5)
  anota fips197-c1-aes128 "$(sal aes 000102030405060708090a0b0c0d0e0f 00112233445566778899aabbccddeeff)"
  anota fips197-c2-aes192 "$(sal aes 000102030405060708090a0b0c0d0e0f1011121314151617 00112233445566778899aabbccddeeff)"
  anota fips197-c3-aes256 "$(sal aes $K32 00112233445566778899aabbccddeeff)"
  anota aes-aleatorio-128 "$(sal aes "$(bytes 16 51)" "$(bytes 16 52)")"
  anota aes-aleatorio-256 "$(sal aes "$(bytes 32 53)" "$(bytes 16 54)")"
  anota aes-clave-invalida "$(sal aes 0011 00112233445566778899aabbccddeeff | tail -1)"
  ;;
6)
  anota gcm-caso2 "$(sal sella-gcm 00000000000000000000000000000000 000000000000000000000000 - 00000000000000000000000000000000)"
  G=$(sal sella-gcm "$(bytes 32 61)" "$(bytes 12 62)" "$(bytes 20 63)" "$(bytes 500 64)" | head -1)
  anota gcm-largo-256 "$G"
  anota gcm-abre "$(sal abre-gcm "$(bytes 32 61)" "$(bytes 12 62)" "$(bytes 20 63)" "$G" | sha256sum | cut -c1-16)"
  anota gcm-manipulado "$(sal abre-gcm "$(bytes 32 61)" "$(bytes 12 62)" "$(bytes 20 63)" "$(voltea "$G" 77)" | tail -1)"
  anota gcm-solo-aad "$(sal sella-gcm "$(bytes 16 65)" "$(bytes 12 66)" "$(bytes 33 67)" -)"
  anota gcm-iv-invalido "$(sal sella-gcm "$(bytes 16 65)" 0011 - 00 | tail -1)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
