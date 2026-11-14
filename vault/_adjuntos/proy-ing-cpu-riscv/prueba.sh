#!/usr/bin/env bash
# Pruebas de los hitos de proy-ing-cpu-riscv. Los programas (ensamblados con GNU as para RV32I) están en programas.s.
# Uso: bash prueba.sh ./cpu N [-v]    (N = hito, de 1 a 6)
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

prog() { cat > "$t/$1.hex"; }
prog h2_compara <<'HEX'
fff00093
00100113
0020a1b3
0020b233
ffb12293
ffb13313
00103393
00103433
002124b3
80000537
001525b3
00153633
00000073
HEX
prog h2_desplaza <<'HEX'
800010b7
f0108093
00409113
0040d193
4040d213
41f0d293
02300313
006093b3
0060d433
4060d4b3
fff00513
00a555b3
00000073
HEX
prog h2_logica <<'HEX'
0f0f10b7
23408093
fff0c113
7f00e193
f000f213
55aa02b7
0ff28293
0050f333
0050e3b3
0050c433
80004493
00000073
HEX
prog h2_lui_auipc <<'HEX'
deadc0b7
eef08093
fffff137
00000197
12345217
fffff297
00000337
fff30313
00000073
HEX
prog h2_suma <<'HEX'
02a00093
ff900113
002081b3
40110233
800002b7
fff28293
00128313
406003b3
00508013
00000433
00000073
HEX
prog h3_anchos <<'HEX'
000010b7
8091a137
2b310113
0020a023
00008183
0000c203
00308283
0030c303
00209383
0020d403
00009483
002082a3
00209523
0000a623
fff00513
00a08823
00a09b23
0040a583
0080a603
0140a683
00000073
HEX
prog h3_pila <<'HEX'
00010137
ff010113
075bd2b7
d1528293
fffe8337
e3330313
00512623
00612423
00611223
00510023
00c12383
00812403
00411483
00014503
01010113
00000073
HEX
prog h3_tabla <<'HEX'
00000097
03008093
00002137
0000a183
0040a203
0080a283
fe312e23
fe412c23
fe512a23
ffa11303
fff14383
00000073
11223344
a5a5a5a5
fedcba98
HEX
prog h4_factorial <<'HEX'
00010137
00a00513
018000ef
00050493
00c00513
00c000ef
00050913
00000073
00200293
02554e63
ff810113
00112223
00a12023
fff50513
fe9ff0ef
00012303
00412083
00810113
00050393
00000513
00750533
fff30313
fe031ce3
00008067
00100513
00008067
HEX
prog h4_fibonacci <<'HEX'
000010b7
00000113
00100193
01e00213
0020a023
003102b3
00018113
00028193
00408093
fff20213
fe0214e3
00000073
HEX
prog h4_mcd <<'HEX'
42f00093
1ce00113
00208c63
0020e663
402080b3
ff5ff06f
40110133
fedff06f
ffb00193
00300213
0041c463
00100293
0041d463
00100313
0041f463
00100393
0041e463
00100413
00000073
HEX
prog h4_multiplica <<'HEX'
0001e537
24150513
ffff65b7
1c958593
00000613
0015f293
00028463
00a60633
00151513
0015d593
fe0596e3
00000073
HEX
prog h4_ordena <<'HEX'
00000297
06428293
00001437
00c00313
00040393
0002ae03
01c3a023
00428293
00438393
fff30313
fe0316e3
00b00493
00040293
00048313
0002ae03
0042ae83
01ced663
01d2a023
01c2a223
00428293
fff30313
fe0312e3
fff48493
fc049ae3
00000073
00000011
fffffffd
00000800
00000000
fffe7960
00000063
00000005
00000005
ffffffff
00011170
00000001
fffffffe
HEX
prog h4_suma100 <<'HEX'
00000093
00100113
06500193
002080b3
00110113
fe311ce3
00000073
HEX
prog h4_tabla_saltos <<'HEX'
00000417
04840413
00000493
00000913
00249293
008282b3
0002a303
000300e7
00148493
00300393
fe7494e3
00000073
00190913
00008067
00a90913
00008067
06490913
00008067
00000030
00000038
00000040
HEX
prog h5_almacen_desalineado <<'HEX'
000010b7
001081a3
001092a3
00000073
HEX
prog h5_bucle_infinito <<'HEX'
00000093
00308093
ffdff06f
HEX
prog h5_busqueda_fuera <<'HEX'
000100b7
00300113
000082e7
HEX
prog h5_cae_en_ceros <<'HEX'
00500093
00508093
HEX
prog h5_carga_desalineada <<'HEX'
000010b7
fff00113
0020a023
00209183
0020a203
00000073
HEX
prog h5_carga_fuera <<'HEX'
ffc00093
0000a103
00000073
HEX
prog h5_ebreak <<'HEX'
00900093
00100073
00a00093
HEX
prog h5_fence <<'HEX'
00100093
0ff0000f
8330000f
0ff2808f
00200113
00000073
HEX
prog h5_fuera_de_memoria <<'HEX'
000100b7
04d00113
fe20ae23
ffc0a183
fff0c203
0020a023
00000073
HEX
prog h5_ilegal <<'HEX'
00600093
00700113
022081b3
00100213
00000073
HEX
prog h5_rama_desalineada <<'HEX'
00100093
00008363
00109363
00009363
00000073
HEX
prog h5_salto_desalineado <<'HEX'
00000097
00100293
00d08167
00100313
00100393
012081e7
00000073
HEX
prog h6_anticipacion <<'HEX'
00300293
00528333
005303b3
40638e33
01ce1eb3
007e8f33
01ef0f33
01df4fb3
00000517
01f505b3
00c000ef
001606b3
00000073
06408613
00008067
HEX
prog h6_bucle_cargas <<'HEX'
00001437
00000293
01000313
00229393
008383b3
0053a023
00128293
fe6298e3
00040393
00000513
01000293
0003ae03
01c50533
00438393
fff28293
fe0298e3
00040393
00000593
01000293
0003ae03
00438393
fff28293
01c585b3
fe0298e3
00000073
HEX
prog h6_riesgos_carga <<'HEX'
00001437
00500293
00542023
04000293
00542223
00042503
00150593
00042603
00c406b3
00042703
00000013
00e707b3
00042803
01042423
00442883
011404b3
0004a903
00042003
000009b3
00042a03
00007a37
00042a83
00040b13
00042303
00030863
00442383
0003ae03
00000073
00100073
HEX

case $hito in
1)
  anota tipo-r "$(sal decodifica 0020a1b3 0020b233 00103433 002124b3 001525b3 00153633 006093b3 0060d433 4060d4b3 00a555b3 0050f333 0050e3b3 0050c433 002081b3 40110233 406003b3 00000433 00750533 003102b3 402080b3 40110133 00a60633 002080b3 008282b3 00528333 005303b3 40638e33 01ce1eb3 007e8f33 01ef0f33 01df4fb3 01f505b3 001606b3 008383b3 01c50533 01c585b3 00c406b3 00e707b3 011404b3 000009b3)"
  anota tipo-i "$(sal decodifica fff00093 00100113 ffb12293 ffb13313 00103393 f0108093 00409113 0040d193 4040d213 41f0d293 02300313 fff00513 23408093 fff0c113 7f00e193 f000f213 0ff28293 80004493 eef08093 fff30313 02a00093 ff900113 fff28293 00128313 00508013 2b310113 ff010113 d1528293 e3330313 01010113 03008093 00a00513 00050493 00c00513 00050913 00200293 ff810113 fff50513 00810113 00050393 00000513 00100513 00000113 00100193 01e00213 00018113 00028193 00408093 fff20213 42f00093 1ce00113 ffb00193 00300213 00100293 00100313 00100393 00100413 24150513 1c958593 00000613 0015f293 00151513 0015d593 06428293 00c00313 00040393 00428293 00438393 00b00493 00040293 00048313 fff48493 00000093 06500193 00110113 04840413 00000493 00000913 00249293 00148493 00300393 00190913 00a90913 06490913 00308093 00300113 00500093 00508093 fff00113 ffc00093 00900093 00a00093 00100093 00200113 04d00113 00600093 00700113 00100213 00300293 06408613 00000293 01000313 00229393 00128293 01000293 00000593 00500293 04000293 00150593 00000013 00040b13)"
  anota cargas-almacenes "$(sal decodifica 0020a023 00008183 0000c203 00308283 0030c303 00209383 0020d403 00009483 002082a3 00209523 0000a623 00a08823 00a09b23 0040a583 0080a603 0140a683 00512623 00612423 00611223 00510023 00c12383 00812403 00411483 00014503 0000a183 0040a203 0080a283 fe312e23 fe412c23 fe512a23 ffa11303 fff14383 00112223 00a12023 00012303 00412083 0002ae03 01c3a023 0042ae83 01d2a023 01c2a223 0002a303 001081a3 001092a3 00209183 0020a203 0000a103 fe20ae23 ffc0a183 fff0c203 0053a023 0003ae03 00542023 00542223 00042503 00042603 00042703 00042803 01042423 00442883 0004a903 00042003 00042a03 00042a83 00042303 00442383)"
  anota saltos "$(sal decodifica 018000ef 00c000ef 02554e63 fe9ff0ef fe031ce3 00008067 fe0214e3 00208c63 0020e663 ff5ff06f fedff06f 0041c463 0041d463 0041f463 0041e463 00028463 fe0596e3 fe0316e3 01ced663 fe0312e3 fc049ae3 00000063 fe311ce3 000300e7 fe7494e3 ffdff06f 000082e7 00008363 00109363 00009363 00d08167 012081e7 fe6298e3 fe0298e3 00030863)"
  anota superiores "$(sal decodifica 80000537 800010b7 0f0f10b7 55aa02b7 deadc0b7 fffff137 00000197 12345217 fffff297 00000337 800002b7 000010b7 8091a137 00010137 075bd2b7 fffe8337 00000097 00002137 0001e537 ffff65b7 00000297 00001437 00000417 000100b7 00000517 00007a37)"
  anota inmediatos-extremos "$(sal decodifica 80000093 7ff00093 fff0c093 80000063 7e000fe3 8000006f 7ffff0ef fffff2b7 80f027a3 fff00067)"
  anota sistema "$(sal decodifica 00000073 00100073 0ff0000f 8330000f 0ff2808f)"
  anota ilegales "$(sal decodifica 00000000 ffffffff 022081b3 0000100f 30002573 00003503 0205d593 4020f0b3 10500073 00000873 00010001 00002067)"
  anota sin-argumentos "$(sal decodifica | tail -1)"
  anota no-hexadecimal "$(sal decodifica 0000001g | tail -1)"
  anota corta "$(sal decodifica 13 | tail -1)"
  ;;
2)
  anota compara "$(sal ejecuta h2_compara.hex)"
  anota desplaza "$(sal ejecuta h2_desplaza.hex)"
  anota logica "$(sal ejecuta h2_logica.hex)"
  anota lui-auipc "$(sal ejecuta h2_lui_auipc.hex)"
  anota suma "$(sal ejecuta h2_suma.hex)"
  ;;
3)
  anota anchos "$(sal ejecuta h3_anchos.hex)"
  anota pila "$(sal ejecuta h3_pila.hex)"
  anota tabla "$(sal ejecuta h3_tabla.hex)"
  ;;
4)
  anota factorial "$(sal ejecuta h4_factorial.hex)"
  anota fibonacci "$(sal ejecuta h4_fibonacci.hex)"
  anota mcd "$(sal ejecuta h4_mcd.hex)"
  anota multiplica "$(sal ejecuta h4_multiplica.hex)"
  anota ordena "$(sal ejecuta h4_ordena.hex)"
  anota suma100 "$(sal ejecuta h4_suma100.hex)"
  anota tabla-saltos "$(sal ejecuta h4_tabla_saltos.hex)"
  ;;
5)
  anota almacen-desalineado "$(sal ejecuta h5_almacen_desalineado.hex)"
  anota bucle-infinito "$(sal ejecuta h5_bucle_infinito.hex 1000)"
  anota busqueda-fuera "$(sal ejecuta h5_busqueda_fuera.hex)"
  anota cae-en-ceros "$(sal ejecuta h5_cae_en_ceros.hex)"
  anota carga-desalineada "$(sal ejecuta h5_carga_desalineada.hex)"
  anota carga-fuera "$(sal ejecuta h5_carga_fuera.hex)"
  anota ebreak "$(sal ejecuta h5_ebreak.hex)"
  anota fence "$(sal ejecuta h5_fence.hex)"
  anota fuera-de-memoria "$(sal ejecuta h5_fuera_de_memoria.hex)"
  anota ilegal "$(sal ejecuta h5_ilegal.hex)"
  anota rama-desalineada "$(sal ejecuta h5_rama_desalineada.hex)"
  anota salto-desalineado "$(sal ejecuta h5_salto_desalineado.hex)"
  anota limite-justo "$(sal ejecuta h4_suma100.hex 303)"
  anota limite-corto "$(sal ejecuta h4_suma100.hex 302)"
  anota sin-fichero "$(sal ejecuta no-existe.hex | tail -1)"
  printf '00000013
hola
' > "$t/malo.hex"
  anota fichero-malo "$(sal ejecuta malo.hex | tail -1)"
  anota limite-cero "$(sal ejecuta h4_suma100.hex 0 | tail -1)"
  ;;
6)
  anota anticipacion "$(sal ciclos h6_anticipacion.hex)"
  anota bucle-cargas "$(sal ciclos h6_bucle_cargas.hex)"
  anota riesgos-carga "$(sal ciclos h6_riesgos_carga.hex)"
  anota suma100 "$(sal ciclos h4_suma100.hex)"
  anota multiplica "$(sal ciclos h4_multiplica.hex)"
  anota factorial "$(sal ciclos h4_factorial.hex)"
  anota ordena "$(sal ciclos h4_ordena.hex)"
  anota tabla-saltos "$(sal ciclos h4_tabla_saltos.hex)"
  anota desplaza "$(sal ciclos h2_desplaza.hex)"
  anota anchos "$(sal ciclos h3_anchos.hex)"
  anota termina-en-ebreak "$(sal ciclos h5_ebreak.hex | tail -1)"
  anota excepcion "$(sal ciclos h5_carga_desalineada.hex | tail -1)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
