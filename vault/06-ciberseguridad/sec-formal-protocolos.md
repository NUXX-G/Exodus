---
id: sec-formal-protocolos
title: "Verificación formal de protocolos criptográficos: modelo de Dolev-Yao, propiedades de secreto y autenticación, el ataque de Lowe, verificación simbólica (ProVerif, Tamarin) y computacional (juegos, CryptoVerif, EasyCrypt)"
area: ciberseguridad
trunk_level: 15
prerequisites: [sec-criptografia-aplicada, sys-verificacion-formal, mat-logica-demostraciones]
academic_sources:
  - "Dolev, D.; Yao, A. On the Security of Public Key Protocols. IEEE Trans. Inf. Theory 29(2), 1983; Needham, R.; Schroeder, M. Using Encryption for Authentication in Large Networks of Computers. CACM 21(12), 1978."
  - "Lowe, G. An Attack on the Needham-Schroeder Public-Key Authentication Protocol. Inf. Process. Lett. 56(3), 1995; Lowe, G. A Hierarchy of Authentication Specifications. CSFW 1997, pp. 31-44; Rusinowitch, M.; Turuani, M. Protocol Insecurity with Finite Number of Sessions is NP-Complete. CSFW 2001."
  - "Blanchet, B. Modeling and Verifying Security Protocols with the Applied Pi Calculus and ProVerif. Foundations and Trends in Privacy and Security 1(1-2), 2016; Meier, S.; Schmidt, B.; Cremers, C.; Basin, D. The TAMARIN Prover. CAV 2013."
  - "Cremers, C.; Horvat, M.; Scott, S.; van der Merwe, T. Automated Analysis and Verification of TLS 1.3: 0-RTT, Resumption and Delayed Authentication. IEEE S&P 2016; Shoup, V. Sequences of Games. IACR ePrint 2004/332."
exercises:
  - id: deduccion-dolev-yao
    tier: 2
    prompt: |
      El intruso de Dolev-Yao conoce `k1`, `senc(senc(m, k2), k1)`, `senc(k2, k3)`, `aenc(k3, pk(I))` y su clave privada `sk(I)`. Puede separar pares, descifrar con las claves que conozca y construir pares y cifrados con lo que sepa. ¿Cuáles de estos términos puede obtener? a) `m`; b) `k3`; c) `senc(m, k4)`; d) `(k2, k1)`; e) `k4`.

      Respuesta: las letras en orden, separadas por espacios.
    answers: ["sha256:a52d159f262b2c6ddb724a61840befc36eb30c88877a4030b65cbe86298449c9"]
  - id: ataque-de-lowe
    tier: 2
    prompt: |
      En el ataque de Lowe a Needham-Schroeder de clave pública, A inicia una sesión con el intruso I, que reutiliza sus mensajes para hablar con B haciéndose pasar por A. Al terminar, ¿acepta B que habló con A? ¿Conoce el intruso Nb? Y con la corrección NSL, ¿llega B a aceptar con la misma traza?

      Respuesta: `si` o `no` para cada pregunta, separados por `;`.
    answers: ["sha256:63da4c118f63e8842821dfcdfd4b2312bdfb66305d6ce8e24d9ffa62d5e646ca"]
  - id: mensajes-del-ataque
    tier: 1
    prompt: |
      ¿Cuántos mensajes tiene la traza del ataque de Lowe (contando los de las dos sesiones intercaladas)?

      Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: correccion-nsl
    tier: 1
    prompt: |
      ¿Qué cambia Lowe en Needham-Schroeder para evitar su ataque? a) añade una marca de tiempo al mensaje 1; b) añade la identidad del que responde (B) dentro del mensaje 2; c) cifra el mensaje 3 con una clave simétrica; d) firma el mensaje 1.

      Respuesta: una letra.
    answers: ["sha256:3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"]
  - id: jerarquia-de-lowe
    tier: 2
    prompt: |
      Ordena de más débil a más fuerte las propiedades de autenticación de la jerarquía de Lowe: a) acuerdo débil; b) acuerdo inyectivo; c) vivacidad; d) acuerdo no inyectivo.

      Respuesta: las letras separadas por espacios.
    answers: ["sha256:ec6b4c244fa34011a26da4b2c57e5dffd8470ff4f18746c627b021335a1bafcc"]
  - id: reenvio
    tier: 2
    prompt: |
      Un protocolo de un solo mensaje A → B: `senc((A, m), k)` con k compartida y sin nonce ni marca de tiempo. Un atacante reenvía el mensaje y B lo acepta dos veces aunque A solo ejecutó una sesión. ¿Se cumple el acuerdo inyectivo? ¿Y el no inyectivo?

      Respuesta: `inyectivo;no_inyectivo` con `si` o `no`.
    answers: ["sha256:7a4dae830a7a38317563e00b59f9f4bf818813dec10ba189db782363d23d9432"]
  - id: cota-de-un-juego
    tier: 2
    prompt: |
      En una prueba por secuencia de juegos, un paso cambia un PRF de n = 128 bits por una función aleatoria y el siguiente aborta si hay una colisión entre q = 2³⁰ valores, con probabilidad como mucho q²/2ⁿ⁺¹. ¿Cuánto vale el log₂ de ese término?

      Respuesta: un número entero.
    answers: ["sha256:ec4f921490d755d6165ad7a40d18fecae1a0840648dc6ebfaffdfbe17cea6bee"]
  - id: complejidad-de-la-verificacion
    tier: 2
    prompt: |
      Para el secreto en el modelo de Dolev-Yao: con un número acotado de sesiones el problema es…, y con sesiones sin acotar es… Opciones: a) polinómico; b) NP-completo; c) indecidible; d) EXPTIME-completo.

      Respuesta: `acotado;sin_acotar` con las letras.
    answers: ["sha256:2a816b9c81fae43931cfee621fef927710d591820099b58517f38463cd2ef22f"]
  - id: herramientas-de-verificacion
    tier: 1
    prompt: |
      Relaciona cada herramienta con su modelo: 1) ProVerif; 2) Tamarin; 3) CryptoVerif; 4) EasyCrypt. Opciones: a) reescritura de multiconjuntos, modelo simbólico, con lemas interactivos; b) cálculo pi aplicado, modelo simbólico automático con cláusulas de Horn; c) asistente de pruebas por juegos con lógica de Hoare probabilística; d) modelo computacional automático, secuencias de juegos.

      Respuesta: las letras para 1, 2, 3 y 4, separadas por espacios.
    answers: ["sha256:6c2a41fa1985ac989a143df605ed234ad2bcf65e6c3933eee8614e1ee6e71f0b"]
  - id: diffie-hellman-sin-autenticar
    tier: 2
    prompt: |
      A y B hacen Diffie-Hellman con p = 23 y g = 5 (secretos a = 6 y b = 15), pero un intruso en medio sustituye las dos partes públicas por gˣ con x = 13. ¿Qué clave calcula A y cuál B? (El intruso conoce las dos.)

      Respuesta: `clave_A;clave_B`.
    answers: ["sha256:c97cd787ca0df928b594b8cc294e1c8d1e80cb0fc17362e3139c5c61126f8826"]
  - id: tls-13-verificado
    tier: 1
    prompt: |
      ¿Con qué herramienta analizaron Cremers, Horvat, Scott y van der Merwe (IEEE S&P 2016) los borradores de TLS 1.3, encontrando un ataque en la combinación de reanudación con clave precompartida y autenticación del cliente del borrador 10?

      Respuesta: el nombre de la herramienta.
    answers: ["sha256:1e7acf004c54a3d1101bf644ffb5ccbce5bc320e66e602f1e074724de08800e0"]
---

El protocolo de Needham y Schroeder de clave pública se publicó en 1978, se enseñó durante diecisiete años como ejemplo de autenticación mutua y estaba roto: en 1995 Gavin Lowe encontró, con un
comprobador de modelos, un ataque de seis mensajes que nadie había visto. La lección es que los protocolos criptográficos son pequeños pero sus ejecuciones intercaladas no, y que la intuición falla.
Este nodo enseña a **especificar** qué debe garantizar un protocolo, a **modelar** al atacante con precisión y a **verificar** con herramientas, aplicando los métodos de [[sys-verificacion-formal]] a
los protocolos de [[sec-criptografia-aplicada]].

## Objetivos

Al terminar sabrás:

1. Modelar al atacante de Dolev-Yao y decidir qué términos puede deducir.
2. Especificar secreto y las propiedades de autenticación de la jerarquía de Lowe.
3. Reproducir el ataque de Lowe y explicar por qué la corrección NSL lo impide.
4. Usar el modelo simbólico (ProVerif, Tamarin) y conocer sus límites de decidibilidad.
5. Entender las pruebas computacionales por secuencias de juegos y sus cotas.

## Qué debes dominar antes

[[sec-criptografia-aplicada]] (TLS 1.3, firmas, Diffie-Hellman), [[sys-verificacion-formal]] (comprobación de modelos, invariantes) y [[mat-logica-demostraciones]].

> [!question] Test de entrada
> 1. ¿Qué es un nonce y para qué sirve en un protocolo?
> 2. ¿Por qué cifrar un mensaje con la clave pública de B no dice nada de quién lo envió?
> 3. ¿Qué es una prueba por reducción en criptografía?
>
> Respuestas: un número que se usa una sola vez; demuestra que un mensaje es reciente (responde a una pregunta que acaba de hacerse) y evita reenvíos; porque la clave pública es pública: cualquiera,
> también el atacante, puede cifrar con ella; una demostración de que, si alguien rompiera el esquema, podría usarse para resolver un problema que se supone difícil.

## 1. El atacante de Dolev-Yao

Dolev y Yao (1983) fijaron el modelo que se sigue usando: **la red es el atacante**. Lee, borra, reordena e inyecta cualquier mensaje, y puede hacerse pasar por cualquiera; pero la criptografía es
**perfecta**: solo descifra si tiene la clave. Su conocimiento crece con dos reglas:

- **Análisis**: de un par saca sus componentes; de `senc(m, k)` saca m si puede obtener k; de `aenc(m, pk(X))` saca m si conoce `sk(X)`.
- **Síntesis**: construye pares y cifrados con lo que ya sabe.

Decidir si un término es deducible de un conjunto finito es sencillo (análisis hasta un punto fijo y luego síntesis); lo difícil es que el atacante elige **qué** enviar en cada momento, y las
sesiones pueden ser muchas.

## 2. Qué se quiere demostrar

- **Secreto**: el atacante nunca deduce un término (una clave de sesión, un nonce). **Secreto hacia adelante**: aunque luego se filtre la clave a largo plazo.
- **Autenticación** (jerarquía de Lowe, 1997), de más débil a más fuerte, para B que termina creyendo hablar con A: **vivacidad** (A ejecutó el protocolo alguna vez), **acuerdo débil** (A lo ejecutó
  creyendo hablar con B), **acuerdo no inyectivo** (además, coinciden en los datos: nonces, clave) y **acuerdo inyectivo** (además, a cada ejecución completa de B le corresponde una ejecución distinta
  de A: sin reenvíos). Se escriben como correspondencias entre eventos: «si B ejecuta `fin(A, B, x)`, antes A ejecutó `inicio(A, B, x)`».
- **Equivalencia observacional** para propiedades de privacidad (anonimato, que no se pueda saber por qué candidato se votó): el atacante no distingue dos versiones del sistema.

## 3. Needham-Schroeder y el ataque de Lowe

El protocolo (claves públicas, nonces Na y Nb):

```
1. A → B : {Na, A}pk(B)
2. B → A : {Na, Nb}pk(A)
3. A → B : {Nb}pk(B)
```

El ataque intercala dos sesiones: A habla legítimamente con el intruso I, e I reutiliza lo que recibe para hablar con B haciéndose pasar por A. I descifra el primer mensaje de A (va cifrado para él)
y lo recifra para B; B responde a «A» con un mensaje que I no puede leer pero sí **reenviar** a A, que lo descifra creyendo que viene de I; A le devuelve Nb cifrado para I, y I ya puede cerrar la sesión con B.
B termina convencido de que habló con A, y el intruso conoce Nb. La causa es que el mensaje 2 **no dice quién lo envía**, y A no puede saber que no es la respuesta de I.

**NSL** (la corrección de Lowe) añade la identidad del que responde: `2. B → A : {Na, Nb, B}pk(A)`. A, que esperaba una respuesta de I, ve B y aborta. Con esa corrección las herramientas demuestran secreto
y acuerdo inyectivo para cualquier número de sesiones. El principio general (Abadi y Needham, 1996): **un mensaje debe decir explícitamente lo que significa**, incluidas las identidades.

## 4. Verificación simbólica

- **Decidibilidad**: con un número **acotado** de sesiones, saber si hay un ataque al secreto es NP-completo (Rusinowitch y Turuani, 2001); con sesiones **sin acotar** es indecidible (Durgin, Lincoln,
  Mitchell y Scedrov, 1999). Las herramientas para el caso general usan abstracciones (pueden no terminar o dar falsas alarmas) o necesitan ayuda humana.
- **ProVerif** (Blanchet): el protocolo se escribe en un cálculo pi aplicado (procesos que envían y reciben por canales, funciones constructoras y destructoras con ecuaciones), se traduce a cláusulas de
  Horn y se resuelve automáticamente; si encuentra un ataque, reconstruye la traza. Fuerte para un número ilimitado de sesiones, con algún falso positivo por la abstracción.
- **Tamarin** (Meier, Schmidt, Cremers y Basin): el protocolo es un sistema de reescritura de multiconjuntos (reglas con hechos persistentes y lineales), las propiedades son lemas en lógica de primer orden
  sobre trazas, y la prueba es automática o interactiva. Maneja bien el estado y Diffie-Hellman.
- Casos reales: el análisis con Tamarin de los borradores de TLS 1.3 (Cremers et al., 2016) encontró un ataque en el borrador 10 al combinar reanudación con clave precompartida y autenticación del cliente,
  y cambió el estándar; también se han analizado 5G AKA, Signal, WPA2 (los ataques KRACK se explican por un modelo incompleto) y EMV.

## 5. Verificación computacional

El modelo simbólico supone criptografía perfecta; el **computacional** trata los mensajes como cadenas de bits y al atacante como un algoritmo probabilista polinómico, y prueba cotas: «cualquier
atacante que gane con ventaja ε rompe la primitiva con ventaja casi ε». La técnica habitual es una **secuencia de juegos** (Shoup, 2004): se parte del juego real, se cambia una pieza cada vez (una
función pseudoaleatoria por una aleatoria, un cifrado de un mensaje por el de ceros) acotando cuánto cambia la probabilidad de ganar en cada paso, y se llega a un juego que el atacante gana con
probabilidad ½. Los términos se suman: con q consultas y n bits, un término de colisión del orden de q²/2ⁿ obliga a dimensionar n. **CryptoVerif** automatiza estas secuencias; **EasyCrypt** es un
asistente de pruebas con lógica de Hoare probabilística. La composición (que lo probado por separado siga valiendo junto) es otro problema: marcos como la composición universal lo abordan.

## 6. Comprobar con un programa

Un deductor de Dolev-Yao y un protocolo de juguete distinto del de los ejercicios: A envía a B una clave de sesión cifrada con la clave pública de B, `{A, K}pk(B)`, sin firmar. El intruso fabrica
`{A, K′}pk(B)` y B acepta una clave del intruso «de parte de A»:

```python
# Deducción de Dolev-Yao y un ataque a un transporte de clave sin autenticar
def analiza(conoc):
    K = set(conoc)
    while True:
        nuevos = set()
        for t in K:
            if isinstance(t, tuple) and t[0] == "par":
                nuevos |= {t[1], t[2]}
            elif isinstance(t, tuple) and t[0] == "senc" and sintetiza(K, t[2]):
                nuevos.add(t[1])
            elif isinstance(t, tuple) and t[0] == "aenc" and "sk(" + t[2][3:] in K:
                nuevos.add(t[1])
        if nuevos <= K:
            return K
        K |= nuevos


def sintetiza(K, t):
    return t in K or (isinstance(t, tuple) and t[0] in ("par", "senc", "aenc")
                      and sintetiza(K, t[1]) and sintetiza(K, t[2]))


intruso = {"A", "B", "I", "pk(A)", "pk(B)", "pk(I)", "sk(I)", "Kfalsa"}
mensaje_de_A = ("aenc", ("par", "A", "Ksesion"), "pk(B)")      # lo que A envió de verdad
intruso.add(mensaje_de_A)
falso = ("aenc", ("par", "A", "Kfalsa"), "pk(B)")
K = analiza(intruso)
print("¿conoce el intruso la clave de A?", sintetiza(K, "Ksesion"))
print("¿puede fabricar {A, K'}pk(B)?", sintetiza(K, falso))
# B descifra, ve «A» y acepta Kfalsa como clave compartida con A: falla incluso la vivacidad
b_cree = ("A", falso[1][2])
print("B cree compartir", b_cree[1], "con", b_cree[0], "→ autenticación rota; el secreto de Ksesion se mantiene")
```

Salida:

```
¿conoce el intruso la clave de A? False
¿puede fabricar {A, K'}pk(B)? True
B cree compartir Kfalsa con A → autenticación rota; el secreto de Ksesion se mantiene
```

El secreto se cumple y la autenticación no: son propiedades distintas y hay que especificar las dos. Firmar el mensaje con la clave de A (y meter en él la identidad de B y un nonce) lo arregla.

## 7. Errores típicos

- No decir qué debe garantizar el protocolo antes de diseñarlo (o verificar solo el secreto).
- Mensajes que no nombran a los participantes; reutilizar el mismo formato de mensaje en dos sitios del protocolo (ataques de confusión de tipos y de reflexión).
- Confundir «el atacante no puede leerlo» con «el mensaje viene de quien dice».
- Fiarse de una prueba con un modelo que omite algo real (la reanudación, un modo de compatibilidad, el reinicio de un contador).
- Creer que el modelo simbólico prueba los tamaños de clave: para eso hacen falta las cotas computacionales.

## 8. Resumen

- Dolev-Yao: el atacante es la red; análisis y síntesis; criptografía perfecta.
- Secreto, secreto hacia adelante, jerarquía de Lowe (vivacidad, acuerdo débil, no inyectivo, inyectivo), equivalencia.
- Needham-Schroeder y el ataque de Lowe; NSL añade la identidad del que responde.
- Acotado: NP-completo; sin acotar: indecidible. ProVerif (cálculo pi, cláusulas de Horn) y Tamarin (reescritura de multiconjuntos); TLS 1.3 verificado.
- Modelo computacional: secuencias de juegos con cotas; CryptoVerif y EasyCrypt.

## Repaso: lo que debe quedarte dentro de un mes

1. La red es el atacante.
2. Especifica secreto **y** autenticación, y qué tipo de acuerdo.
3. Cada mensaje debe decir quién lo envía y para quién.
4. La intuición no basta: Needham-Schroeder estuvo roto diecisiete años.
5. Lo simbólico encuentra errores lógicos; lo computacional, los tamaños.

## Siguiente

`sec-gestion-riesgo` y, para practicar, modela NSL en ProVerif o Tamarin (sus tutoriales lo incluyen) y comprueba que encuentran el ataque de Lowe en la versión original.
