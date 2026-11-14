# Programas de prueba de proy-ing-cpu-riscv (RV32I). Se ensamblan con:
#   riscv64-unknown-elf-as -march=rv32i -mabi=ilp32 -mno-relax  y  ld -m elf32lriscv -Ttext=0
# y se cargan en la dirección 0.

######## h2_compara
# comparaciones con y sin signo
  addi x1, x0, -1
  addi x2, x0, 1
  slt  x3, x1, x2
  sltu x4, x1, x2
  slti x5, x2, -5
  sltiu x6, x2, -5        # el inmediato -5 se compara como 0xfffffffb
  sltiu x7, x0, 1         # seqz
  sltu x8, x0, x1         # snez
  slt  x9, x2, x2
  lui  x10, 0x80000
  slt  x11, x10, x1
  sltu x12, x10, x1
  ecall

######## h2_desplaza
# desplazamientos: lógicos, aritméticos y cantidad tomada de los 5 bits bajos
  li   x1, 0x80000f01
  slli x2, x1, 4
  srli x3, x1, 4
  srai x4, x1, 4
  srai x5, x1, 31
  addi x6, x0, 35         # 35 & 31 = 3
  sll  x7, x1, x6
  srl  x8, x1, x6
  sra  x9, x1, x6
  addi x10, x0, -1
  srl  x11, x10, x10      # desplaza 31
  ecall

######## h2_logica
# lógica e inmediatos con extensión de signo
  li   x1, 0x0f0f1234
  xori x2, x1, -1         # not
  ori  x3, x1, 0x7f0
  andi x4, x1, -256
  li   x5, 0x55aa00ff
  and  x6, x1, x5
  or   x7, x1, x5
  xor  x8, x1, x5
  xori x9, x0, -2048
  ecall

######## h2_lui_auipc
# constantes de 32 bits y auipc
  lui   x1, 0xdeadc
  addi  x1, x1, -273      # 0xdeadbeef
  lui   x2, 0xfffff
  auipc x3, 0
  auipc x4, 0x12345
  auipc x5, 0xfffff
  lui   x6, 0
  addi  x6, x6, -1
  ecall

######## h2_suma
# aritmética básica, desbordamiento con vuelta y escritura en x0
  addi x1, x0, 42
  addi x2, x0, -7
  add  x3, x1, x2
  sub  x4, x2, x1
  lui  x5, 0x80000
  addi x5, x5, -1         # 0x7fffffff
  addi x6, x5, 1          # 0x7fffffff + 1 da la vuelta
  sub  x7, x0, x6
  addi x0, x1, 5          # x0 sigue valiendo 0
  add  x8, x0, x0
  ecall

######## h3_anchos
# almacenamientos y cargas de todos los anchos, extremo pequeño y extensión de signo
  lui  x1, 1              # 0x1000
  li   x2, 0x8091a2b3
  sw   x2, 0(x1)
  lb   x3, 0(x1)
  lbu  x4, 0(x1)
  lb   x5, 3(x1)
  lbu  x6, 3(x1)
  lh   x7, 2(x1)
  lhu  x8, 2(x1)
  lh   x9, 0(x1)
  sb   x2, 5(x1)
  sh   x2, 10(x1)
  sw   x0, 12(x1)
  addi x10, x0, -1
  sb   x10, 16(x1)
  sh   x10, 22(x1)
  lw   x11, 4(x1)
  lw   x12, 8(x1)
  lw   x13, 20(x1)
  ecall

######## h3_pila
# la pila en lo alto de la memoria: guardar y recuperar
  lui  sp, 0x10           # 0x10000
  addi sp, sp, -16
  li   x5, 123456789
  li   x6, -98765
  sw   x5, 12(sp)
  sw   x6, 8(sp)
  sh   x6, 4(sp)
  sb   x5, 0(sp)
  lw   x7, 12(sp)
  lw   x8, 8(sp)
  lh   x9, 4(sp)
  lbu  x10, 0(sp)
  addi sp, sp, 16
  ecall

######## h3_tabla
# copia una tabla del código a la memoria de datos con desplazamientos negativos
  auipc x1, 0
  addi  x1, x1, 48        # dirección de la tabla
  lui   x2, 2             # 0x2000
  lw    x3, 0(x1)
  lw    x4, 4(x1)
  lw    x5, 8(x1)
  sw    x3, -4(x2)
  sw    x4, -8(x2)
  sw    x5, -12(x2)
  lh    x6, -6(x2)
  lbu   x7, -1(x2)
  ecall
  .word 0x11223344, 0xa5a5a5a5, 0xfedcba98

######## h4_factorial
# factorial recursivo con jal, jalr y la pila
  lui  sp, 0x10
  li   a0, 10
  jal  ra, fact
  mv   s1, a0
  li   a0, 12
  jal  ra, fact
  mv   s2, a0
  ecall
fact:
  li   t0, 2
  blt  a0, t0, base
  addi sp, sp, -8
  sw   ra, 4(sp)
  sw   a0, 0(sp)
  addi a0, a0, -1
  jal  ra, fact
  lw   t1, 0(sp)
  lw   ra, 4(sp)
  addi sp, sp, 8
  # a0 = a0 * t1 por sumas
  mv   t2, a0
  li   a0, 0
mult:
  add  a0, a0, t2
  addi t1, t1, -1
  bnez t1, mult
  jalr x0, 0(ra)
base:
  li   a0, 1
  ret

######## h4_fibonacci
# los 30 primeros términos de Fibonacci en memoria
  lui  x1, 1
  addi x2, x0, 0
  addi x3, x0, 1
  addi x4, x0, 30
bucle:
  sw   x2, 0(x1)
  add  x5, x2, x3
  mv   x2, x3
  mv   x3, x5
  addi x1, x1, 4
  addi x4, x4, -1
  bnez x4, bucle
  ecall

######## h4_mcd
# máximo común divisor por restas, con saltos con y sin signo
  li   x1, 1071
  li   x2, 462
bucle:
  beq  x1, x2, fin
  bltu x1, x2, menor
  sub  x1, x1, x2
  j    bucle
menor:
  sub  x2, x2, x1
  j    bucle
fin:
  li   x3, -5
  li   x4, 3
  blt  x3, x4, s1
  addi x5, x0, 1
s1:
  bge  x3, x4, s2
  addi x6, x0, 1
s2:
  bgeu x3, x4, s3
  addi x7, x0, 1
s3:
  bltu x3, x4, s4
  addi x8, x0, 1
s4:
  ecall

######## h4_multiplica
# multiplicación de 32 bits por sumas y desplazamientos (sin la extensión M)
  li   a0, 123457
  li   a1, -40503
  li   a2, 0
bucle:
  andi t0, a1, 1
  beqz t0, sin
  add  a2, a2, a0
sin:
  slli a0, a0, 1
  srli a1, a1, 1
  bnez a1, bucle
  ecall

######## h4_ordena
# ordena con burbuja 12 enteros con signo copiados a la memoria de datos
  la   t0, datos
  lui  s0, 1
  li   t1, 12
  mv   t2, s0
copia:
  lw   t3, 0(t0)
  sw   t3, 0(t2)
  addi t0, t0, 4
  addi t2, t2, 4
  addi t1, t1, -1
  bnez t1, copia
  li   s1, 11
externo:
  mv   t0, s0
  mv   t1, s1
interno:
  lw   t3, 0(t0)
  lw   t4, 4(t0)
  bge  t4, t3, bien
  sw   t4, 0(t0)
  sw   t3, 4(t0)
bien:
  addi t0, t0, 4
  addi t1, t1, -1
  bnez t1, interno
  addi s1, s1, -1
  bnez s1, externo
  ecall
datos:
  .word 17, -3, 2048, 0, -100000, 99, 5, 5, -1, 70000, 1, -2

######## h4_suma100
# suma de 1 a 100 con un bucle
  addi x1, x0, 0
  addi x2, x0, 1
  addi x3, x0, 101
bucle:
  add  x1, x1, x2
  addi x2, x2, 1
  bne  x2, x3, bucle
  ecall

######## h4_tabla_saltos
# tabla de saltos con jalr y direcciones calculadas
  la   s0, tabla
  li   s1, 0
  li   s2, 0
bucle:
  slli t0, s1, 2
  add  t0, t0, s0
  lw   t1, 0(t0)
  jalr ra, 0(t1)
  addi s1, s1, 1
  li   t2, 3
  bne  s1, t2, bucle
  ecall
f0:
  addi s2, s2, 1
  ret
f1:
  addi s2, s2, 10
  ret
f2:
  addi s2, s2, 100
  jalr x0, ra, 0
tabla:
  .word f0, f1, f2

######## h5_almacen_desalineado
  lui  x1, 1
  sb   x1, 3(x1)
  sh   x1, 5(x1)
  ecall

######## h5_bucle_infinito
  li   x1, 0
bucle:
  addi x1, x1, 3
  j    bucle

######## h5_busqueda_fuera
  lui  x1, 0x10
  addi x2, x0, 3
  jalr x5, 0(x1)          # salta a 0x10000, fuera de la memoria

######## h5_cae_en_ceros
# el programa olvida el ecall y sigue por memoria a cero (0x00000000 es ilegal)
  li   x1, 5
  addi x1, x1, 5

######## h5_carga_desalineada
  lui  x1, 1
  li   x2, -1
  sw   x2, 0(x1)
  lh   x3, 2(x1)
  lw   x4, 2(x1)
  ecall

######## h5_carga_fuera
  li   x1, -4
  lw   x2, 0(x1)          # 0xfffffffc
  ecall

######## h5_ebreak
  li   x1, 9
  ebreak
  li   x1, 10

######## h5_fence
  li   x1, 1
  fence
  .word 0x8330000f        # fence.tso
  .word 0x0ff2808f        # FENCE con rd y rs1 distintos de cero: se ejecuta como fence
  li   x2, 2
  ecall

######## h5_fuera_de_memoria
# la última palabra es válida; la siguiente, no
  lui  x1, 0x10
  li   x2, 77
  sw   x2, -4(x1)
  lw   x3, -4(x1)
  lbu  x4, -1(x1)
  sw   x2, 0(x1)
  ecall

######## h5_ilegal
# instrucción ilegal (mul es de la extensión M) tras modificar registros
  li   x1, 6
  li   x2, 7
  .word 0x022081b3        # mul x3, x1, x2
  addi x4, x0, 1
  ecall

######## h5_rama_desalineada
  li   x1, 1
  .word 0x00008363        # beq x1, x0, 6 -> no se toma: no hay excepción
  .word 0x00109363        # bne x1, x1, 6 -> no se toma
  .word 0x00009363        # bne x1, x0, 6 -> se toma y el destino está desalineado
  ecall

######## h5_salto_desalineado
# jalr borra el bit 0 del destino, pero no el 1
  auipc x1, 0
  addi x5, x0, 1
  jalr x2, 13(x1)         # destino 13 & ~1 = 12: válido
  addi x6, x0, 1
  addi x7, x0, 1
  jalr x3, 18(x1)         # destino 18: desalineado
  ecall

######## h6_anticipacion
# cadenas de dependencias entre operaciones de la ALU: la anticipación evita todas las paradas
  li   t0, 3
  add  t1, t0, t0
  add  t2, t1, t0
  sub  t3, t2, t1
  sll  t4, t3, t3
  add  t5, t4, t2
  add  t5, t5, t5
  xor  t6, t5, t4
  auipc a0, 0
  add  a1, a0, t6
  jal  ra, f
  add  a3, a2, ra
  ecall
f:
  addi a2, ra, 100
  jalr x0, 0(ra)

######## h6_bucle_cargas
# suma de un vector: la versión ingenua para en cada vuelta; la reordenada, no
  lui  s0, 1
  li   t0, 0
  li   t1, 16
llena:
  slli t2, t0, 2
  add  t2, t2, s0
  sw   t0, 0(t2)
  addi t0, t0, 1
  bne  t0, t1, llena
  mv   t2, s0
  li   a0, 0
  li   t0, 16
ingenua:
  lw   t3, 0(t2)
  add  a0, a0, t3
  addi t2, t2, 4
  addi t0, t0, -1
  bnez t0, ingenua
  mv   t2, s0
  li   a1, 0
  li   t0, 16
reordenada:
  lw   t3, 0(t2)
  addi t2, t2, 4
  addi t0, t0, -1
  add  a1, a1, t3
  bnez t0, reordenada
  ecall

######## h6_riesgos_carga
# cada caso de dependencia con una carga, separado por instrucciones independientes
  lui  s0, 1
  li   t0, 5
  sw   t0, 0(s0)
  li   t0, 0x40
  sw   t0, 4(s0)
  lw   a0, 0(s0)
  addi a1, a0, 1          # usa rs1: una parada
  lw   a2, 0(s0)
  add  a3, s0, a2         # usa rs2: una parada
  lw   a4, 0(s0)
  nop
  add  a5, a4, a4         # a distancia 2: anticipación, sin parada
  lw   a6, 0(s0)
  sw   a6, 8(s0)          # el dato del almacenamiento: una parada
  lw   a7, 4(s0)
  add  s1, s0, a7         # una parada
  lw   s2, 0(s1)          # s1 viene de un add que depende de la carga: la parada ya ocurrió antes
  lw   x0, 0(s0)
  add  s3, x0, x0         # el destino es x0: sin parada
  lw   s4, 0(s0)
  lui  s4, 7              # lui no lee registros: sin parada
  lw   s5, 0(s0)
  addi s6, s0, 0          # no usa s5: sin parada
  lw   t1, 0(s0)
  beq  t1, x0, nunca      # el salto usa la carga: una parada
  lw   t2, 4(s0)
  lw   t3, 0(t2)          # carga que usa la carga anterior: una parada
  ecall
nunca:
  ebreak
