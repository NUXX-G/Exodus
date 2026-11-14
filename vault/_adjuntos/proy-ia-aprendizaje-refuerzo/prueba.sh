#!/usr/bin/env bash
# Pruebas de los hitos de proy-ia-aprendizaje-refuerzo.
# Uso: bash prueba.sh ./rl N [-v]    (N = hito, de 1 a 6)
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
# El carro con péndulo es inestable: una diferencia en la última cifra se multiplica por unas 80 cada segundo simulado, así que
# dos implementaciones correctas acaban en trayectorias distintas. Los entrenamientos largos se comprueban por tramos.
aprende() { # aprende B5MIN < salida: «aprende sí» si el último bloque llega a B5MIN y quintuplica el primero
  awk -v m="$1" '/^bloque 1 / { b1 = $4 } /^bloque 5 / { b5 = $4 } END { print ((b5 + 0 >= m && b5 + 0 >= 5 * b1) ? "aprende sí" : "aprende no") }'
}
evaluacion() { # evaluacion MIN < salida
  awk -v m="$1" '/^evaluacion / { e = $3 } END { print ((e + 0 >= m) ? "evaluación >= " m : "evaluación < " m) }'
}
tramos() { # tramos FISICA... < salida: >=475, 100-475 o <100 para la media de cada física pedida
  awk -v l="$*" 'BEGIN { n = split(l, f, " ") } { m[$1] = $3 }
    END { for (i = 1; i <= n; i++) { v = m[f[i]] + 0; print f[i], (v >= 475 ? ">=475" : (v >= 100 ? "100-475" : "<100")) } }'
}

case $hito in
1)
  anota empuja-y-frena "$(sal simula normal 0 0 0.05 0 1111100000)"
  anota cae-a-la-derecha "$(sal simula normal 0 0 0.01 0 0000000000000000000000000000000000000000)"
  anota se-sale-del-carril "$(sal simula normal 2.3 1.5 0 0 11111111111111111111)"
  anota palo-pesado "$(sal simula palo-pesado -0.5 0.2 -0.1 0.3 0101010101010101)"
  anota palo-largo "$(sal simula palo-largo 0 0 0.15 -0.5 000000111111)"
  anota fisica-desconocida "$(sal simula marte 0 0 0 0 01 | tail -1)"
  anota accion-invalida "$(sal simula normal 0 0 0 0 012 | tail -1)"
  ;;
2)
  anota normal "$(sal lqr normal 1 1 10 1 1 20 3)"
  anota caro-mover "$(sal lqr normal 1 1 1 1 100 10 4)"
  anota palo-largo "$(sal lqr palo-largo 1 1 10 1 1 10 5)"
  anota palo-corto "$(sal lqr palo-corto 10 1 100 1 0.1 10 6)"
  anota r-nulo "$(sal lqr normal 1 1 1 1 0 10 1 | tail -1)"
  ;;
3)
  anota cinco-episodios "$(sal q normal 5 1)"
  anota veinte-episodios "$(sal q normal 20 7)"
  anota cincuenta-palo-pesado "$(sal q palo-pesado 50 3)"
  anota aprende "$(sal q normal 5000 1 | aprende 300)"
  anota pocos-episodios "$(sal q normal 3 1 | tail -1)"
  ;;
4)
  anota diez-episodios "$(sal reinforce normal 10 1 0.001 simple)"
  anota treinta-episodios "$(sal reinforce normal 30 2 0.01 simple)"
  anota tasa-alta-no-aprende "$(sal reinforce normal 500 1 0.01 simple | aprende 100)"
  anota tasa-negativa "$(sal reinforce normal 10 1 -0.01 simple | tail -1)"
  ;;
5)
  anota diez-normalizado "$(sal reinforce normal 10 1 0.01 normalizado)"
  anota treinta-normalizado "$(sal reinforce debil 30 4 0.05 normalizado)"
  anota normalizado-aprende "$(sal reinforce normal 500 1 0.01 normalizado | aprende 100)"
  anota normalizado-evaluacion "$(sal reinforce normal 500 1 0.01 normalizado | evaluacion 150)"
  anota variante-desconocida "$(sal reinforce normal 10 1 0.01 ventaja | tail -1)"
  ;;
6)
  anota lqr-nominal "$(sal robustez lqr 1 | tramos normal palo-pesado palo-corto palo-largo debil)"
  anota lqr-redisenado "$(sal robustez lqr-redisenado 2 | tramos normal palo-pesado palo-corto palo-largo debil)"
  anota q-palo-corto "$(sal robustez q 3 | tramos palo-corto)"
  anota reinforce-palo-corto "$(sal robustez reinforce 4 | tramos palo-corto)"
  anota metodo-desconocido "$(sal robustez ppo 1 | tail -1)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
