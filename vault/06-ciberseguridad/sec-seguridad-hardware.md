---
id: sec-seguridad-hardware
title: "Seguridad del hardware: raíz de confianza, TPM y arranque medido, entornos de ejecución de confianza, canales laterales (tiempo, potencia, caché), ejecución transitoria, Rowhammer, inyección de fallos, interfaces de depuración y PUF"
area: ciberseguridad
trunk_level: 16
prerequisites: [sec-criptoanalisis, ing-arquitectura-computadores, sec-seguridad-so]
academic_sources:
  - "Verbauwhede, I. Hardware Security Knowledge Area, v1.0.1. CyBOK, 2021; Mangard, S.; Oswald, E.; Popp, T. Power Analysis Attacks: Revealing the Secrets of Smart Cards. Springer, 2007."
  - "Kocher, P. Timing Attacks on Implementations of Diffie-Hellman, RSA, DSS, and Other Systems. CRYPTO 1996; Kocher, P.; Jaffe, J.; Jun, B. Differential Power Analysis. CRYPTO 1999; Boneh, D.; DeMillo, R.; Lipton, R. On the Importance of Checking Cryptographic Protocols for Faults. EUROCRYPT 1997."
  - "Yarom, Y.; Falkner, K. FLUSH+RELOAD. USENIX Security 2014; Lipp, M. et al. Meltdown. USENIX Security 2018; Kocher, P. et al. Spectre Attacks. IEEE S&P 2019; Kim, Y. et al. Flipping Bits in Memory Without Accessing Them (Rowhammer). ISCA 2014."
  - "Trusted Computing Group. TPM 2.0 Library Specification; UEFI Specification (Secure Boot); documentación de swtpm y tpm2-tools, consultada en noviembre de 2026."
exercises:
  - id: extension-de-pcr
    tier: 2
    prompt: |
      Un PCR de un TPM 2.0 (banco SHA-256) empieza a ceros y se extiende con las medidas SHA-256(`bootloader`) y después SHA-256(`kernel`) (cada medida es el resumen; extender es PCR ← SHA-256(PCR ‖ medida)). ¿Cuáles son las 16 primeras cifras hexadecimales del valor final? (Compruébalo con `swtpm` y `tpm2_pcrextend`.)

      Respuesta: 16 cifras hexadecimales en minúsculas.
    answers: ["sha256:fee0ad24d24e5a0db2d821fbe0d93e06fed92dbf8fa2c34e32b6e47caf526ce5"]
  - id: ataque-de-bellcore
    tier: 3
    prompt: |
      Un dispositivo firma con RSA-CRT y un fallo inducido corrompe el cálculo módulo q. Con n = 29801258380799241164541166579133117674370478543939120958153845300584870567, e = 65537, el mensaje (ya reducido) m = 3958548355768067885644768184594507804202642636268902966770771612581270615 y la firma defectuosa s' = 10242394421883941127173849982679489267257778080272822680834414989698661068, el MCD de s'ᵉ − m y n da un factor. ¿Cuáles son sus 6 últimas cifras?

      Respuesta: 6 cifras.
    answers: ["sha256:62523714f9cd0b1ff796f67f3cd1d3acf9b3eab6f1143c301becc3ee81b86c28"]
  - id: analisis-simple-de-potencia
    tier: 2
    prompt: |
      Una exponenciación binaria de izquierda a derecha hace, por cada bit tras el primero (que es 1), una elevación al cuadrado (S) y, si el bit es 1, además una multiplicación (M). La traza de potencia muestra `SSMSMSSMSSSMSM`. ¿Cuál es el exponente?

      Respuesta: en decimal.
    answers: ["sha256:07e46896ba89f88776fed50a1b7895129f9b9af7d3b8b33ca23af478bb818d6c"]
  - id: flush-and-reload
    tier: 2
    prompt: |
      Una implementación de AES con tablas T (entradas de 4 bytes, líneas de caché de 64 bytes) accede en la primera ronda a la entrada de índice p ⊕ k. Con el byte de texto en claro p = 0x3A, Flush+Reload ve que se accedió a la línea 5 de la tabla. ¿Qué medio byte alto (*nibble*) de k se deduce?

      Respuesta: una cifra hexadecimal en minúscula.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: rowhammer
    tier: 2
    prompt: |
      La DRAM se refresca cada 64 ms y una activación de fila tarda tRC = 45 ns. ¿Cuántas activaciones caben como máximo en una ventana de refresco, y cuántas recibe cada una de las dos filas agresoras en un ataque de doble cara?

      Respuesta: `total;por_fila` (enteros, por defecto).
    answers: ["sha256:3eb8235c7ec72ff0f76645e5d320c9079ec3f9b474d63d9d5460c11473669d91"]
  - id: mitigaciones-de-microarquitectura
    tier: 1
    prompt: |
      Relaciona cada problema con su mitigación principal: 1) Rowhammer; 2) Spectre variante 1 (evitar la comprobación de límites); 3) Meltdown; 4) Spectre variante 2 (inyección en el predictor de saltos indirectos). Opciones: a) KPTI (separar las tablas de páginas del núcleo); b) enmascarar el índice o `lfence` tras la comprobación; c) *retpoline* o IBRS/eIBRS; d) TRR y memoria ECC (y refresco más frecuente).

      Respuesta: las letras para 1, 2, 3 y 4, separadas por espacios.
    answers: ["sha256:59907f10d71bc3285aaada6fdf3db84cc0411a1a946e779cd41658d918906d19"]
  - id: corrector-de-errores-de-un-puf
    tier: 3
    prompt: |
      Una PUF da respuestas de 128 bits con una probabilidad de error de bit independiente del 5 %. ¿Cuántos errores t debe corregir el código como mínimo para que la probabilidad de más de t errores sea menor que 10⁻⁶?

      Respuesta: un número.
    answers: ["sha256:6f4b6612125fb3a0daecd2799dfd6c9c299424fd920f9b308110a2c1fbd8f443"]
  - id: cadena-de-arranque-seguro
    tier: 1
    prompt: |
      Ordena la cadena de verificación de un arranque seguro UEFI en Linux: a) el núcleo; b) el firmware UEFI (anclado en la ROM y las claves de la plataforma); c) el primer cargador (*shim*) y GRUB; d) el espacio de usuario y el initramfs verificados después.

      Respuesta: las letras en el orden en que se ejecutan, separadas por espacios.
    answers: ["sha256:c87c9b7868f07921e663e778e334aa5074dc707becc30fd7155b7dda7bf9426e"]
  - id: senales-jtag
    tier: 1
    prompt: |
      ¿Cuántas señales obligatorias tiene la interfaz JTAG (IEEE 1149.1), sin contar la de reinicio opcional?

      Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: entornos-de-ejecucion-de-confianza
    tier: 1
    prompt: |
      Relaciona: 1) Intel SGX; 2) ARM TrustZone; 3) AMD SEV. Opciones: a) un «mundo seguro» que divide todo el procesador en dos; b) máquinas virtuales completas con memoria cifrada frente al hipervisor; c) enclaves dentro de un proceso de usuario.

      Respuesta: las letras para 1, 2 y 3, separadas por espacios.
    answers: ["sha256:6548d955790a22925c1e23508ec4e2bffb8e45d80261b4b2c1f9d8c9b0d152b6"]
  - id: aceleracion-del-crt
    tier: 1
    prompt: |
      Con RSA-CRT se hacen dos exponenciaciones con exponentes y módulos de la mitad de bits en vez de una completa. Si el coste de una exponenciación crece con el cubo del número de bits, ¿cuántas veces más rápido es?

      Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: enmascaramiento
    tier: 2
    prompt: |
      En el modelo de fuga por peso de Hamming, un byte secreto x = 0x5C se procesa enmascarado como x ⊕ m con m = 0xA3. ¿Qué peso de Hamming tienen x y la parte enmascarada? (Con m aleatoria, la segunda no depende de x.)

      Respuesta: `x;enmascarado`.
    answers: ["sha256:1d12a956156f9ac388f83becc08b378128603758041b78642d757d0fe415b63c"]
  - id: distancia-de-hamming
    tier: 1
    prompt: |
      En el modelo de fuga por distancia de Hamming, un registro pasa de 0x3C a 0xE5. ¿Cuántos bits cambian?

      Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
---

Todo el software se apoya en suposiciones sobre el hardware: que la memoria guarda lo que se escribió, que una instrucción no deja rastro de los datos que toca, que nadie mide cuánta energía consume
el chip mientras descifra. Cuando esas suposiciones fallan, la criptografía más correcta filtra sus claves y el aislamiento del sistema operativo se vuelve poroso. Este nodo recorre la seguridad del
hardware desde arriba (cómo se construye la confianza desde el arranque) y desde abajo (cómo la física y la microarquitectura dejan escapar secretos), con las defensas de cada caso. Usa la
arquitectura de [[ing-arquitectura-computadores]], el aislamiento de [[sec-seguridad-so]] y el criptoanálisis de [[sec-criptoanalisis]].

## Objetivos

Al terminar sabrás:

1. Explicar la raíz de confianza, el arranque seguro frente al arranque medido y cómo un TPM atestigua el estado de una máquina.
2. Comparar los entornos de ejecución de confianza (SGX, TrustZone, SEV/TDX) y sus límites.
3. Modelar las fugas por tiempo, potencia y caché, y aplicar las contramedidas (tiempo constante, enmascaramiento).
4. Entender la ejecución transitoria (Meltdown, Spectre), Rowhammer y la inyección de fallos, y sus mitigaciones.
5. Proteger las interfaces de depuración y usar PUF y generadores de números aleatorios físicos.

## Qué debes dominar antes

[[ing-arquitectura-computadores]] (cachés, segmentación, ejecución especulativa), [[sec-seguridad-so]] (aislamiento, arranque) y [[sec-criptoanalisis]] (RSA-CRT, cajas S).

> [!question] Test de entrada
> 1. ¿Qué es la ejecución especulativa?
> 2. ¿Por qué un acceso a memoria que acierta en la caché es más rápido?
> 3. ¿Qué es una función hash y por qué no se puede invertir?
>
> Respuestas: el procesador ejecuta instrucciones antes de saber si hacen falta (tras predecir un salto) y descarta el resultado si se equivocó, pero no los efectos en la caché; porque el dato está en
> una memoria pequeña y rápida junto al núcleo y no hay que ir a la DRAM, cientos de ciclos más lejos; porque resume cualquier entrada en un valor fijo de modo que encontrar una entrada para un valor
> dado es inviable.

## 1. Raíz de confianza y arranque

La **raíz de confianza** es lo que se acepta sin verificar porque no se puede verificar desde dentro: una ROM de arranque y unas claves grabadas en el chip. A partir de ahí hay dos estrategias:

- **Arranque seguro** (UEFI Secure Boot): cada etapa **verifica la firma** de la siguiente antes de ejecutarla (firmware → *shim* y cargador → núcleo → módulos), y si falla, no arranca. Protege contra
  código no firmado, no contra código firmado con fallos (BootHole, 2020) ni contra que se revoque mal.
- **Arranque medido**: cada etapa **mide** (calcula el resumen de) la siguiente y lo registra en el **TPM** antes de ejecutarla. No impide arrancar nada; deja constancia inalterable de lo que arrancó.

Un **TPM 2.0** (chip discreto, firmware del procesador o simulado como `swtpm`) tiene **registros de configuración de plataforma** (PCR) que solo se pueden **extender**: PCR ← H(PCR ‖ medida). No hay forma
de ponerlos a un valor elegido, así que el valor final resume toda la secuencia, en orden. Con ellos el TPM puede **sellar** secretos (la clave de BitLocker o de LUKS solo se libera si los PCR tienen los
valores de un arranque correcto) y **atestiguar** a un tercero, con una firma de una clave que nunca sale del chip, el estado de la máquina. Los PCR 0-7 recogen el firmware y el arranque; algunos (como el
16) se pueden reiniciar y sirven para depurar.

## 2. Entornos de ejecución de confianza

- **ARM TrustZone**: divide el procesador entero en un mundo normal y uno seguro, con memoria y periféricos asignables a cada uno; el sistema de confianza (OP-TEE, Trusty) guarda claves y procesa
  pagos o biometría.
- **Intel SGX**: **enclaves** dentro de un proceso de usuario, con memoria cifrada que ni el sistema operativo puede leer, y atestación remota de su contenido. Muy atacado por canales laterales y
  ejecución transitoria (Foreshadow, 2018), y retirado de los procesadores de consumo.
- **AMD SEV y Intel TDX**: **máquinas virtuales** con la memoria cifrada frente al hipervisor (computación confidencial en la nube).

Todos reducen la base de confianza, pero comparten el hardware con el atacante: los canales laterales son su debilidad principal.

## 3. Canales laterales

Un canal lateral es información que se escapa por **cómo** se calcula, no por **qué** se calcula.

- **Tiempo** (Kocher, 1996): una exponenciación que multiplica solo cuando el bit del exponente es 1 tarda más con más unos; una comparación que sale en el primer byte distinto revela cuántos coinciden. Se
  corrige con código de **tiempo constante**: sin saltos ni accesos a memoria que dependan del secreto.
- **Potencia y electromagnetismo**: el consumo de un circuito CMOS depende de cuántos bits cambian. Modelos: **peso de Hamming** del valor procesado o **distancia de Hamming** entre el valor anterior y el
  nuevo de un registro. El **análisis simple** (SPA) lee la secuencia de operaciones en una sola traza (en una exponenciación, elevar al cuadrado y multiplicar tienen formas distintas); el **diferencial**
  (DPA, Kocher, Jaffe y Jun, 1999) y el de **correlación** (CPA) hacen estadística sobre miles de trazas: para cada hipótesis de un byte de clave predicen el consumo y la correcta es la que más se
  correlaciona. Contramedidas: **enmascaramiento** (procesar x ⊕ m con m aleatoria, de modo que cada valor intermedio sea independiente del secreto), barajado, ruido, lógica de doble raíl, y algoritmos
  regulares (escalera de Montgomery: las mismas operaciones para un 0 que para un 1).
- **Caché**: un proceso atacante que comparte la caché con la víctima mide qué líneas usó. **Flush+Reload** (Yarom y Falkner, 2014) expulsa una línea de memoria compartida (`clflush`) y mide cuánto tarda
  en volver a leerla: rápido significa que la víctima la usó. **Prime+Probe** llena un conjunto de la caché y ve qué se le desaloja. Las implementaciones de AES con tablas T (el índice de la primera
  ronda es p ⊕ k) filtran así la mitad alta de cada byte de clave a partir de la línea usada; por eso se usan AES-NI o implementaciones *bitsliced*.

## 4. Ejecución transitoria

- **Meltdown** (Lipp et al., 2018): en algunos procesadores, una lectura de memoria del núcleo desde modo usuario se ejecuta especulativamente antes de comprobar el permiso, y el valor deja huella en la
  caché antes de que la excepción lo descarte. Mitigación: **KPTI** (no mapear el núcleo en las tablas de páginas del proceso) y procesadores corregidos.
- **Spectre** (Kocher et al., 2019): el atacante entrena el predictor para que la víctima ejecute especulativamente un camino que no debería, por ejemplo saltándose una comprobación de límites
  (variante 1: `if (i < n) y = tabla[datos[i] * 4096]`) o saltando a donde él elija en una llamada indirecta (variante 2). Mitigaciones: barreras `lfence` o enmascarar el índice tras la comprobación
  (v1), *retpoline* e IBRS/eIBRS (v2), aislamiento de sitios en los navegadores, y temporizadores menos precisos.
- Después llegaron muchas variantes (Foreshadow/L1TF, MDS, Retbleed, Downfall, Inception); Linux informa del estado de cada una en `/sys/devices/system/cpu/vulnerabilities/`.

## 5. Rowhammer e inyección de fallos

**Rowhammer** (Kim et al., 2014): activar muchas veces una fila de DRAM entre dos refrescos hace que se descarguen celdas de las filas vecinas y cambien bits que el atacante no puede escribir; se
consiguió escalar privilegios cambiando bits de tablas de páginas. Cuantas más activaciones caben en una ventana de refresco, peor. Mitigaciones: refresco más frecuente, **TRR** (refrescar las filas
vecinas de las más activadas, que TRRespass mostró eludible), memoria **ECC** y los contadores por fila de DDR5.

**Inyección de fallos**: alterar el voltaje, el reloj, la temperatura o disparar un láser o un pulso electromagnético para que una instrucción falle (saltarse una comprobación de contraseña o de firma
en el arranque). El ataque de **Bellcore** (Boneh, DeMillo y Lipton, 1997) contra RSA-CRT: si una de las dos mitades de la firma sale mal, s′ᵉ − m es múltiplo de uno de los primos y no del otro, y
mcd(s′ᵉ − m, n) factoriza n con **una sola** firma defectuosa. Contramedida: verificar la firma antes de entregarla, y redundancia en las comprobaciones críticas.

## 6. Interfaces de depuración, PUF y aleatoriedad

- **JTAG** (IEEE 1149.1: TCK, TMS, TDI y TDO, más TRST opcional) y **SWD** dan acceso total al chip para depurarlo: leer y escribir memoria, parar el procesador. En un producto se desactivan o se protegen
  con autenticación (y se comprueba que lo están: muchos dispositivos los dejan abiertos). Los puertos **UART** de los routers suelen dar una consola con privilegios.
- **PUF** (funciones físicas no clonables): las variaciones de fabricación hacen que cada chip responda distinto a un desafío; sirven para derivar claves que nunca se almacenan. Las respuestas tienen
  ruido, así que se combinan con un código corrector y datos auxiliares (*fuzzy extractor*), dimensionado para que la probabilidad de no reconstruir la clave sea despreciable.
- **Generadores físicos de números aleatorios** (ruido térmico, osciladores en anillo, RDRAND/RDSEED) con pruebas de salud en funcionamiento (NIST SP 800-90B), y siempre pasados por un generador
  criptográfico.

## 7. Comprobar con un programa

Extensión de un PCR, una SPA de juguete, el ataque de Bellcore con números pequeños y la cola binomial de una PUF (datos distintos de los ejercicios):

```python
# PCR, SPA, ataque de Bellcore sobre RSA-CRT y dimensionado del corrector de una PUF
import hashlib
from fractions import Fraction
from math import comb, gcd

pcr = bytes(32)
for etapa in (b"firmware", b"shim", b"grub"):
    pcr = hashlib.sha256(pcr + hashlib.sha256(etapa).digest()).digest()
print("PCR tras 3 medidas:", pcr.hex()[:16])

exponente = 0b110010111
traza = "".join("SM" if b == "1" else "S" for b in bin(exponente)[3:])
bits = "1" + traza.replace("SM", "1").replace("S", "0")
print("traza:", traza, "→ exponente", int(bits, 2), int(bits, 2) == exponente)

p, q, e = 1009, 1013, 65537
n, d = p * q, pow(e, -1, (p - 1) * (q - 1))
m = 424242 % n
sp, sq = pow(m, d % (p - 1), p), pow(m, d % (q - 1), q)
crt = lambda a, b: (b + q * ((a - b) * pow(q, -1, p) % p)) % n
s_buena, s_mala = crt(sp, sq), crt((sp + 7) % p, sq)          # fallo en la mitad mód p
print("firma buena verifica:", pow(s_buena, e, n) == m, " mcd con la mala:", gcd((pow(s_mala, e, n) - m) % n, n))

def cola(n_bits, p_error, t):
    pe = Fraction(p_error)
    return sum(comb(n_bits, k) * pe**k * (1 - pe) ** (n_bits - k) for k in range(t + 1, n_bits + 1))
t = 0
while cola(64, Fraction(1, 10), t) >= Fraction(1, 10**4):
    t += 1
print("PUF de 64 bits con 10 % de error: corregir", t, "errores para fallar menos de 1 de cada 10 000")
```

Salida:

```
PCR tras 3 medidas: 47fe93b2dc8d6cc3
traza: SMSSSMSSMSMSM → exponente 407 True
firma buena verifica: True  mcd con la mala: 1013
PUF de 64 bits con 10 % de error: corregir 17 errores para fallar menos de 1 de cada 10 000
```

## 8. Errores típicos

- Confundir arranque seguro (verifica firmas) con arranque medido (registra lo que arrancó); sellar secretos a PCR que cambian en cada actualización sin un plan de renovación.
- Código criptográfico con saltos o índices que dependen del secreto; tablas T de AES en procesadores sin AES-NI.
- Desactivar mitigaciones de Spectre o Meltdown "por rendimiento" en máquinas que ejecutan código ajeno (nubes, navegadores).
- Firmar con RSA-CRT sin verificar el resultado; comprobaciones críticas sin redundancia.
- Dejar JTAG o UART abiertos en producción.

## 9. Resumen

- Raíz de confianza; arranque seguro (firmas) y medido (PCR que solo se extienden); sellado y atestación con el TPM.
- TEE: TrustZone (mundo seguro), SGX (enclaves), SEV/TDX (máquinas virtuales cifradas).
- Canales laterales: tiempo, potencia (SPA, DPA/CPA; pesos y distancias de Hamming), caché (Flush+Reload, Prime+Probe); tiempo constante y enmascaramiento.
- Ejecución transitoria: Meltdown (KPTI), Spectre (lfence y enmascarar índices; retpoline/IBRS).
- Rowhammer (TRR, ECC), fallos inducidos y Bellcore (verificar antes de entregar).
- JTAG/SWD/UART cerrados; PUF con corrección de errores; generadores físicos con pruebas de salud.

## Repaso: lo que debe quedarte dentro de un mes

1. Un PCR solo se extiende: resume toda la secuencia de arranque, en orden.
2. Lo que depende del secreto (tiempo, consumo, acceso a memoria) filtra el secreto.
3. La especulación deja huellas en la caché aunque descarte el resultado.
4. Una sola firma RSA-CRT defectuosa factoriza el módulo.
5. Un puerto de depuración abierto es acceso total.

## Siguiente

`sec-formal-protocolos` y `sec-gestion-riesgo`; para el hardware que hay debajo, [[ing-arquitectura-computadores]].
