---
id: ing-integridad-senal
title: "Integridad de señal y de alimentación: flancos y ancho de banda, reflexiones y terminaciones, diafonía, pérdidas, ojo y jitter, pares diferenciales y PDN"
area: ingenieria
trunk_level: 17
prerequisites: [ing-rf-microondas, ing-pcb-diseno]
academic_sources:
  - "Bogatin, E. Signal and Power Integrity—Simplified, 3ª ed. Pearson (Prentice Hall), 2018."
  - "Johnson, H.; Graham, M. High-Speed Digital Design: A Handbook of Black Magic. Prentice Hall, 1993."
exercises:
  - id: impedancia-y-retardo
    tier: 1
    prompt: |
      Una línea tiene $L' = 300$ nH/m y $C' = 120$ pF/m. ¿Cuál es su impedancia característica ($\Omega$) y su retardo, en ps/cm? Respuesta: `Z0;retardo`, ambos enteros.
    answers: ["sha256:b435ad9053336dd297e90afadfe0c79aa9df06845455bf08647fd87051a6e60d"]
  - id: ancho-de-banda-del-flanco
    tier: 1
    prompt: |
      ¿Qué ancho de banda tiene una señal con tiempo de subida (10–90 %) de 50 ps, según la regla $0{,}35/t_r$, en GHz? Respuesta: un número.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: longitud-critica
    tier: 1
    prompt: |
      Con la regla de que una pista es línea de transmisión si su retardo supera $t_r/6$, ¿a partir de qué longitud hay que tratarla así con $t_r = 500$ ps y velocidad de 15 cm/ns, en cm? Respuesta: un número.
    answers: ["sha256:004a9e0878ff83e6b91f50d50dad439d2065c6cbb0d20f1f328b2fd75e085d6a"]
  - id: terminacion-serie
    tier: 1
    prompt: |
      Un excitador de 10 $\Omega$ de impedancia de salida ataca una línea de 50 $\Omega$. ¿Qué resistencia serie hay que añadir para que no haya reflexión en la fuente? Respuesta: en $\Omega$.
    answers: ["sha256:d59eced1ded07f84c145592f65bdf854358e009c5cd705f5215bf18697fed103"]
  - id: capacidad-de-planos
    tier: 1
    prompt: |
      Un plano de alimentación y otro de masa de 100 cm² están separados 0,1 mm por un dieléctrico de $\varepsilon_r = 4{,}3$. ¿Qué capacidad forman, en nF? Respuesta: con **2 decimales**.
    answers: ["sha256:fd971a0f50748306fa6b221cafdcec930917c09d08bc05ba0f57e977166bdd6c"]
  - id: potencia-de-terminacion
    tier: 1
    prompt: |
      Una señal de 1,8 V con un 50 % de unos se termina con 50 $\Omega$ a masa. ¿Qué potencia media disipa la terminación, en mW? Respuesta: un número.
    answers: ["sha256:05b13e26cdf02a482436c950d6f4f6a577c1dc95e244bb468a1841d61ce31dd5"]
  - id: retardo-en-stripline
    tier: 1
    prompt: |
      ¿Cuánto tarda una señal en recorrer 10 cm de stripline en un dieléctrico de $\varepsilon_r = 4$, en ps? Respuesta: con **1 decimal**.
    answers: ["sha256:a1b9aa43f60ca78086e5a0a521f01089567b2db6fdb048bde30ff4558faedcdb"]
  - id: reflexion-en-abierto
    tier: 2
    prompt: |
      Una fuente de escalón de 1 V con 25 $\Omega$ de resistencia ataca una línea de 50 $\Omega$ abierta en el otro extremo. ¿Qué tensión aparece en el extremo abierto en la primera llegada? Respuesta: con **4 decimales**.
    answers: ["sha256:a0cd2fff6e21411b15b2bfa16c36bab28a25b515f67c2001c9ab78034ea4c20f"]
  - id: carga-de-100-ohmios
    tier: 2
    prompt: |
      Con la misma fuente y línea, pero terminada en 100 $\Omega$, ¿qué tensión hay en la carga en la primera llegada? Respuesta: con **4 decimales**.
    answers: ["sha256:0c4fdad6937061b78d5c04aae5aab4d8d60aec58d558eed21aae8b985cf26526"]
  - id: impedancia-diferencial
    tier: 2
    prompt: |
      Un par acoplado tiene impedancia de modo impar 45 $\Omega$ y de modo par 60 $\Omega$. ¿Cuánto valen su impedancia diferencial y la de modo común? Respuesta: `diferencial;comun`.
    answers: ["sha256:ea013f760722620a578e6712403ea75d705a0969cdbeaea59b0faa8e8bd973cd"]
  - id: efecto-pelicular
    tier: 2
    prompt: |
      ¿Cuántas veces sube la resistencia de un hilo de cobre de 0,5 mm de radio a 10 MHz respecto a continua, con la aproximación $R_{ca}/R_{cc} \approx a/(2\delta)$? Respuesta: con **2 decimales**.
    answers: ["sha256:3a31b9469e63dd200f4ee8aea5e26938b95425b62afdbfd137b3be1ded9ae3e7"]
  - id: resonancia-de-stub
    tier: 2
    prompt: |
      Un stub de vía sin usar de 1,5 mm en un dieléctrico de $\varepsilon_r = 4$ resuena cuando mide un cuarto de onda. ¿A qué frecuencia, en GHz? Respuesta: con **2 decimales**.
    answers: ["sha256:813feb128c4049e0a17f6bda2ae2d7661ccfeddf8732cdb478fc00c8352e3a1c"]
  - id: jitter-aleatorio
    tier: 2
    prompt: |
      Un enlace tiene jitter aleatorio gaussiano de $\sigma = 2$ ps. ¿Qué jitter pico a pico ($2Q\sigma$) hay que reservar para una BER de $10^{-12}$, en ps? Respuesta: con **2 decimales**.
    answers: ["sha256:12b2e3eb0d6ebfe2251c1a06f00f4535403b6eb21d1d61737149b63994936c4c"]
  - id: linea-en-cortocircuito
    tier: 2
    prompt: |
      Una fuente adaptada de 50 $\Omega$ envía un escalón por una línea de 50 $\Omega$ y 1 ns de retardo terminada en cortocircuito. ¿Cuánto dura el pulso que se ve en el extremo de la fuente, en ns? Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: apertura-del-ojo
    tier: 3
    prompt: |
      Una señal NRZ de 10 Gbit/s (bit de 100 ps) atraviesa un canal de un polo con $\tau = 50$ ps. ¿Cuál es la apertura vertical del ojo en el peor caso, normalizada a la excursión? Respuesta: con **4 decimales**.
    answers: ["sha256:2c22776811eef061cfb24c491082859e36f990ce89f5a60f8188118224b12f33"]
  - id: perdidas-dielectricas
    tier: 3
    prompt: |
      ¿Cuántos dB/m atenúa el dieléctrico de una línea a 10 GHz con $\varepsilon_r = 4$ y $\tan\delta = 0{,}02$ ($\alpha_d = \pi f\sqrt{\varepsilon_r}\tan\delta/c$ en neperios/m)? Respuesta: con **2 decimales**.
    answers: ["sha256:4a952ac144fcf5525bba6c936b6f4a64ded3cc1755a1f74ff18001b23107937d"]
---

Una señal digital de 1 Gbit/s no es un "0" y un "1": es un flanco de unas decenas de picosegundos que viaja por una pista que se comporta como línea de
transmisión, rebota en cada cambio de impedancia, contagia a las pistas vecinas, se atenúa y se deforma en el dieléctrico y llega al receptor con el
ojo medio cerrado. Y la alimentación que la produce no es una tensión fija: cada flanco pide corriente de golpe a una red con inductancia. La
**integridad de señal** (SI) y la **de alimentación** (PI) son la disciplina que hace que la placa funcione a la primera. Este nodo aplica a señales
digitales las líneas de [[ing-rf-microondas]] sobre la placa de [[ing-pcb-diseno]].

## Objetivos

Al terminar sabrás:

1. Relacionar tiempo de subida y ancho de banda, y decidir cuándo una pista debe tratarse como línea de transmisión.
2. Calcular $Z_0$, retardos y reflexiones con diagramas de celosía, y elegir la terminación adecuada (serie, paralelo, Thévenin, RC).
3. Estimar la diafonía cercana y lejana entre pistas y cómo reducirla.
4. Calcular pérdidas por efecto pelicular y dieléctricas, y su efecto en la interferencia entre símbolos y en el diagrama de ojo.
5. Presupuestar jitter para una tasa de error objetivo.
6. Trabajar con pares diferenciales (modos par e impar), caminos de retorno, vías y stubs.
7. Diseñar una red de alimentación (PDN) contra una impedancia objetivo.

## Qué debes dominar antes

[[ing-rf-microondas]] (coeficiente de reflexión, impedancia de entrada, parámetros S) e [[ing-pcb-diseno]] (apilado de capas, microstrip y stripline,
desacoplo). Del cálculo, exponenciales y la función de error de la gaussiana ([[mat-probabilidad]]).

> [!question] Test de entrada
> 1. ¿Cuánto vale el coeficiente de reflexión en un extremo abierto? ¿Y en uno adaptado?
> 2. ¿Qué constante de tiempo tiene un circuito RC de 50 $\Omega$ y 2 pF?
> 3. ¿Qué fracción de una gaussiana queda fuera de $\pm 3\sigma$?
>
> Respuestas: $+1$ y $0$; 100 ps; un 0,27 %.

## 1. Para qué sirve

- **Placas digitales rápidas**: memorias DDR, PCI Express, USB, Ethernet, enlaces SerDes de decenas de Gbit/s entre chips y en backplanes.
- **Robótica y sistemas embebidos**: cámaras MIPI, buses de motores en entornos ruidosos, FPGA con transceptores.
- **Compatibilidad electromagnética**: las mismas reflexiones y corrientes de retorno mal guiadas son las que radian y fallan en el laboratorio de EMC.
- **Seguridad de hardware**: el acoplamiento entre pistas y el ruido de alimentación son también canales laterales (análisis de consumo, emisiones).

## 2. Flancos, ancho de banda y cuándo una pista es una línea

Lo que importa no es la frecuencia de reloj sino el **tiempo de subida** $t_r$ (10–90 %). Un flanco de un polo tiene $t_r = \ln 9\,\tau = 2{,}2\,\tau$, y como $f_c = 1/(2\pi\tau)$,

$$
\text{BW} \approx \frac{0{,}35}{t_r} ,
$$

de modo que un flanco de 100 ps contiene energía significativa hasta 3,5 GHz aunque el reloj sea de 100 MHz. Una pista de retardo $T_D$ se puede tratar como
conductor ideal (circuito concentrado) si $T_D$ es pequeño frente al flanco; las reglas habituales son $T_D < t_r/6$ (Johnson y Graham) o $T_D < t_r/5$ (Bogatin). Si no, es una
**línea de transmisión** y hay que controlar su impedancia y terminarla.

Una línea sin pérdidas con inductancia y capacidad por unidad de longitud $L'$ y $C'$ tiene

$$
Z_0 = \sqrt{\frac{L'}{C'}}, \qquad v = \frac{1}{\sqrt{L'C'}} = \frac{c}{\sqrt{\varepsilon_{\text{eff}}}} .
$$

En stripline (dieléctrico homogéneo) $\varepsilon_{\text{eff}} = \varepsilon_r$: con FR-4 ($\varepsilon_r \approx 4$) la señal tarda unos 6,7 ps/mm, unos 170 ps por pulgada. En microstrip parte del campo va por el aire y la línea
es algo más rápida. La onda que entra en la línea "ve" $Z_0$, no la carga: la fuente carga una resistencia $Z_0$ hasta que vuelve la primera reflexión.

## 3. Reflexiones y terminaciones

En cada discontinuidad la onda incidente se divide según $\Gamma = \frac{Z_2 - Z_1}{Z_2 + Z_1}$. Con una fuente de escalón $V$ y resistencia $R_s$, la onda lanzada es $V\frac{Z_0}{R_s + Z_0}$; en la carga se refleja
con $\Gamma_L$ y, al volver, en la fuente con $\Gamma_s = \frac{R_s - Z_0}{R_s + Z_0}$. El **diagrama de celosía** (bounce diagram) sigue esas ondas: la tensión en un punto es la suma de todas las que
han pasado por él. El valor final es siempre el de continua ($V\frac{R_L}{R_s + R_L}$); lo que cambia es el camino: sobreoscilación y rebotes que pueden cruzar umbrales lógicos dos veces.

Terminaciones:

- **Serie** en la fuente: $R_s + R_t = Z_0$. La onda lanzada es $V/2$, se dobla en la carga abierta (una entrada CMOS) y vuelve a absorberse en la fuente. Sin consumo
  en continua; ideal punto a punto. Los puntos intermedios de la línea ven un escalón a media altura durante $2T_D$: no vale para cargas repartidas.
- **Paralelo** en la carga: $R_t = Z_0$ a masa o a una tensión de terminación. Sin reflexión en ningún punto, pero consume $V^2/R_t$ en el nivel alto.
- **Thévenin** (dos resistencias a $V_{cc}$ y a masa cuyo paralelo es $Z_0$): fija el nivel de reposo, con consumo continuo.
- **RC** (paralelo con un condensador en serie): termina el flanco sin consumo en continua; el condensador debe ser $\gg T_D/Z_0$.
- **En el chip** (ODT): las memorias DDR y los SerDes terminan dentro del propio circuito integrado.

La **reflectometría en el dominio del tiempo** (TDR) usa lo mismo al revés: un escalón y la tensión reflejada en función del tiempo dan el perfil de impedancia
de la pista, y cada discontinuidad (vía, conector, tramo más ancho) aparece donde corresponde al doble de su retardo.

> [!example] Ejemplo resuelto 1: un excitador fuerte en una línea abierta
> Un excitador de 10 $\Omega$ lanza un escalón de 1 V en 50 $\Omega$ abiertos. $\Gamma_s = -40/60 = -2/3$, $\Gamma_L = +1$. La onda lanzada es $50/60 = 0{,}833$ V; en la carga llega y se dobla: **1,667 V**
> en $T_D$. Vuelve, se refleja en la fuente con $-2/3$ ($-0{,}556$ V) y en $3T_D$ la carga cae a $1{,}667 - 1{,}111 = 0{,}556$ V; en $5T_D$ sube a 1,296 V… oscila alrededor de 1 V con un 67 % de
> sobreoscilación. Con 40 $\Omega$ en serie la onda lanzada es 0,5 V, la carga salta limpiamente a 1 V en $T_D$ y la reflexión muere en la fuente.

## 4. Diafonía

Dos pistas vecinas se acoplan por la capacidad mutua $C_m$ y la inductancia mutua $L_m$. Un flanco en la **agresora** induce en la **víctima** dos ruidos:

- **Diafonía cercana** (NEXT), que viaja hacia la fuente: crece mientras la zona acoplada se recorre y se **satura** cuando la longitud acoplada supera media longitud del flanco,
  en $K_b = \frac{1}{4}\left(\frac{C_m}{C} + \frac{L_m}{L}\right)$ veces la señal.
- **Diafonía lejana** (FEXT), que viaja con la señal: un pulso de amplitud $\frac{\ell}{v\,t_r}K_f$ con $K_f = \frac{1}{2}\left(\frac{C_m}{C} - \frac{L_m}{L}\right)$, proporcional a la longitud acoplada e inverso al
  tiempo de subida. En **stripline**, con dieléctrico homogéneo, los dos cocientes son iguales y la FEXT se anula; en microstrip no.

El acoplamiento cae muy deprisa con la separación (aproximadamente con su cuadrado respecto a la altura sobre el plano): la regla práctica es separar las
pistas al menos tres veces la altura al plano de referencia ("3W"), acortar los tramos paralelos y rutar las señales críticas en stripline.

## 5. Pérdidas, interferencia entre símbolos y el ojo

Una línea real atenúa más a más frecuencia, por dos mecanismos:

- **Efecto pelicular**: la corriente se concentra en una profundidad $\delta = \sqrt{\rho/(\pi f\mu_0)}$ (21 µm en cobre a 10 MHz, 0,66 µm a 10 GHz), así que la resistencia crece como $\sqrt{f}$. En un hilo de
  radio $a \gg \delta$, $R_{ca}/R_{cc} \approx a/(2\delta)$. La rugosidad del cobre lo empeora.
- **Pérdidas dieléctricas**: $\alpha_d = \frac{\pi f\sqrt{\varepsilon_r}\tan\delta}{c}$ neperios por metro, **proporcionales a $f$**. Por encima de unos pocos GHz dominan; por eso los laminados de baja pérdida
  ($\tan\delta \approx 0{,}002$–$0{,}005$) sustituyen al FR-4 estándar ($\approx 0{,}02$) en enlaces de 25 Gbit/s o más.

Un canal que filtra las altas frecuencias redondea los flancos y deja **cola**: cada bit invade los siguientes (**interferencia entre símbolos**, ISI). El **diagrama de ojo**
superpone todos los periodos de bit; su apertura vertical y horizontal es el margen del receptor. Para un canal de un polo de constante $\tau$ y bits de duración $T$, el peor "1" es
uno aislado tras muchos ceros ($1 - e^{-T/\tau}$) y el peor "0" el simétrico ($e^{-T/\tau}$), así que la apertura es

$$
\text{ojo} = 1 - 2e^{-T/\tau} .
$$

Los SerDes la recuperan con **ecualización**: preénfasis en el transmisor (FFE), CTLE (un filtro que realza los agudos) y DFE (resta la cola de los bits ya decididos)
en el receptor.

## 6. Jitter y tasa de error

El **jitter** es el error en el instante de los flancos. Se separa en **determinista** (DJ: ISI, diafonía, ciclo de trabajo; acotado) y **aleatorio** (RJ: ruido térmico; gaussiano y no acotado).
Como el aleatorio no tiene máximo, se reserva el que corresponde a la tasa de error buscada: con $Q$ tal que la cola gaussiana valga la BER,

$$
\text{TJ}(\text{BER}) = \text{DJ} + 2Q\,\sigma_{RJ}, \qquad Q(10^{-12}) \approx 7{,}03 ,
$$

es decir, unos $14\sigma$ para $10^{-12}$. Las normas de enlaces serie especifican así el presupuesto de jitter de transmisor, canal y receptor.

## 7. Pares diferenciales, retorno y vías

Dos líneas acopladas tienen dos modos propios: **impar** (señales opuestas) y **par** (iguales). Una señal diferencial va en modo impar y ve $Z_{\text{dif}} = 2Z_{\text{impar}}$ (100 $\Omega$ típicos); el
ruido común ve $Z_{\text{común}} = Z_{\text{par}}/2$. Un par rechaza el ruido común y radia poco, siempre que sus dos ramas tengan la misma longitud: un desfase (skew) convierte señal diferencial
en común.

Toda corriente vuelve: a alta frecuencia, por el plano de referencia **justo debajo** de la pista, el camino de mínima inductancia. Un corte en el plano, o un cambio de capa sin
una vía de retorno cerca, obliga a la corriente a rodear, aumenta la inductancia del lazo, crea diafonía y radia. Las **vías** son discontinuidades: si atraviesan más
capas de las necesarias, el trozo sobrante (**stub**) es una línea abierta que resuena cuando mide un cuarto de onda, $f = \frac{c}{4\ell\sqrt{\varepsilon_{\text{eff}}}}$, y abre un hueco en la respuesta del
canal; se elimina con **retaladrado** (backdrill) o vías ciegas.

## 8. Integridad de alimentación

El circuito integrado pide corriente a saltos. La red de distribución (regulador, planos, condensadores, encapsulado) debe mantener la tensión dentro del rizado
permitido; mientras su impedancia vista desde el chip quede por debajo de la **impedancia objetivo**

$$
Z_{\text{obj}} = \frac{V\cdot\text{rizado}}{\Delta I}
$$

en todo el ancho de banda de la corriente, el rizado se cumple. Cada componente cubre una banda: el regulador hasta decenas de kHz, los condensadores
electrolíticos y cerámicos grandes hasta MHz, los pequeños cerca del chip hasta decenas de MHz, y la capacidad entre planos y la del encapsulado y el
propio chip por encima. Un condensador real es un RLC en serie (ESR, ESL): por encima de su resonancia es una inductancia, por lo que lo que cuenta es la
**inductancia de montaje** (vías cortas, condensador junto al pin). Las salidas que conmutan a la vez inyectan $L\,\text{d}i/\text{d}t$ en la masa del encapsulado (**rebote de masa**, SSN).

> [!example] Ejemplo resuelto 2: la impedancia objetivo de un núcleo de 1 V
> Un núcleo de 1,0 V admite un 5 % de rizado y tiene saltos de corriente de 10 A: $Z_{\text{obj}} = 0{,}05/10 = 5$ m$\Omega$. Un cerámico de 10 µF con ESR de 5 m$\Omega$ y 0,5 nH montado resuena en
> $1/(2\pi\sqrt{LC}) \approx 2{,}25$ MHz con 5 m$\Omega$; por encima su impedancia es $\omega L$: a 20 MHz, 63 m$\Omega$. Para mantener 5 m$\Omega$ a 20 MHz hacen falta unos 13 en paralelo (la ESL se divide entre
> ellos), o bajar la inductancia de montaje. A partir de ahí manda la capacidad de los planos y del encapsulado: la PDN se diseña por bandas.

> [!example] Ejemplo resuelto 3: presupuesto de un enlace (con menos ayuda)
> Un enlace de 10 Gbit/s recorre 25 cm de stripline en FR-4 ($\varepsilon_r = 4$, $\tan\delta = 0{,}02$). Calcula la pérdida dieléctrica en la frecuencia de Nyquist (5 GHz): $\alpha_d \approx 18{,}2$ dB/m, unos **4,6 dB**;
> el retardo (1,67 ns); y la apertura del ojo si el canal fuera de un polo con $\tau = 40$ ps ($1 - 2e^{-2{,}5} \approx 0{,}84$). Comprueba los dos últimos en el programa simulando una PRBS-7, y decide
> qué cambiaría con un laminado de $\tan\delta = 0{,}004$.

## 9. Comprobar con un programa

Celosía frente a valor final y fórmula cerrada, la PDN del ejemplo 2 barriendo la frecuencia, y el ojo de un canal de un polo con una secuencia
pseudoaleatoria.

```python
import math

def celosia(V, Rs, Z0, RL, n):
    gs = (Rs - Z0) / (Rs + Z0)
    gl = 1.0 if RL is None else (RL - Z0) / (RL + Z0)
    onda, v, out = V * Z0 / (Rs + Z0), 0.0, []
    for _ in range(n):
        v += onda * (1 + gl)
        out.append(v)
        onda *= gl * gs
    return out

# 1. Ejemplo resuelto 1: 10 Ω en 50 Ω abiertos; con terminación serie de 40 Ω, sin rebotes.
v = celosia(1, 10, 50, None, 200)
assert abs(v[0] - 5 / 3) < 1e-12 and abs(v[1] - 5 / 9) < 1e-12 and abs(v[-1] - 1) < 1e-9
assert all(abs(x - 1) < 1e-12 for x in celosia(1, 50, 50, None, 10))
# 1 V con carga resistiva: el valor final es el divisor de continua.
assert abs(celosia(1, 25, 50, 100, 200)[-1] - 100 / 125) < 1e-12

# 2. Ejemplo resuelto 2: n cerámicos de 10 µF, 5 mΩ y 0,5 nH frente a 5 mΩ.
def zcap(f, n, C=10e-6, R=5e-3, L=0.5e-9):
    w = 2 * math.pi * f
    return abs(complex(R, w * L - 1 / (w * C))) / n
f0 = 1 / (2 * math.pi * math.sqrt(0.5e-9 * 10e-6))
n20 = next(n for n in range(1, 100) if zcap(20e6, n) <= 5e-3)
assert abs(f0 / 1e6 - 2.25) < 0.01 and n20 == 13
assert min(zcap(f0 * (1 + k / 1000), 1) for k in range(-50, 51)) > 4.99e-3

# 3. Ejemplo resuelto 3: pérdida dieléctrica, retardo y ojo con PRBS-7 (x^7 + x^6 + 1).
c = 299792458
alfa = math.pi * 5e9 * 2 * 0.02 / c * 20 * math.log10(math.e)
retardo = 0.25 * 2 / c
lfsr, bits = 0x7F, []
for _ in range(127 * 4):
    b = ((lfsr >> 6) ^ (lfsr >> 5)) & 1
    lfsr = ((lfsr << 1) | b) & 0x7F
    bits.append(b)
tau, T, pasos, x = 40e-12, 100e-12, 400, 0.0
min1, max0 = 1.0, 0.0
for i, b in enumerate(bits):
    for _ in range(pasos):
        x += (b - x) * (T / pasos) / tau
    if i > 20:
        if b:
            min1 = min(min1, x)
        else:
            max0 = max(max0, x)
ojo = 1 - 2 * math.exp(-T / tau)
print("pérdida", round(alfa * 0.25, 2), "dB | retardo", round(retardo * 1e9, 3), "ns | ojo", round(min1 - max0, 4), "fórmula", round(ojo, 4))
assert abs(alfa * 0.25 - 4.55) < 0.01 and abs(retardo * 1e9 - 1.668) < 0.001
assert abs((min1 - max0) - ojo) < 0.02
```

## 10. Errores típicos

- Pensar en la frecuencia del reloj en vez de en el tiempo de subida: un reloj lento con flancos rápidos tiene los mismos problemas.
- Poner una terminación serie en una línea con varias cargas repartidas (los puntos intermedios ven medio escalón).
- Cortar el plano de referencia bajo una pista rápida o cambiar de capa sin vía de retorno.
- Creer que la diafonía lejana existe igual en stripline que en microstrip.
- Igualar la longitud de un par diferencial "más o menos" a decenas de Gbit/s: unos pocos ps de desfase cierran el ojo.
- Elegir condensadores de desacoplo por su capacidad e ignorar la inductancia de montaje.
- Sumar jitter aleatorio pico a pico como si estuviera acotado: se especifica para una BER.

## 11. Resumen

- $\text{BW} \approx 0{,}35/t_r$; línea si $T_D > t_r/6$ (o $t_r/5$); $Z_0 = \sqrt{L'/C'}$, $v = c/\sqrt{\varepsilon_{\text{eff}}}$.
- $\Gamma$ en cada discontinuidad; celosía; terminaciones serie ($R_s + R_t = Z_0$), paralelo, Thévenin, RC, en chip; TDR.
- NEXT satura en $K_b = \frac{1}{4}(C_m/C + L_m/L)$; FEXT $\propto \ell/t_r$, nula en stripline.
- Pelicular $\propto\sqrt{f}$, dieléctricas $\propto f\tan\delta$; ISI, ojo $1 - 2e^{-T/\tau}$ en un polo; ecualización.
- TJ = DJ + $2Q\sigma$, $Q(10^{-12}) \approx 7{,}03$.
- $Z_{\text{dif}} = 2Z_{\text{impar}}$, $Z_{\text{común}} = Z_{\text{par}}/2$; retorno bajo la pista; stubs a $c/(4\ell\sqrt{\varepsilon})$.
- $Z_{\text{obj}} = V\cdot\text{rizado}/\Delta I$; desacoplo por bandas; la inductancia de montaje manda.

## Repaso: lo que debe quedarte dentro de un mes

1. El flanco, no el reloj, decide si una pista es una línea.
2. Cada cambio de impedancia refleja; una buena terminación absorbe la onda en un extremo.
3. Toda corriente vuelve por debajo de la pista: no le cortes el camino.
4. Las pérdidas crecen con la frecuencia y cierran el ojo; la ecualización lo reabre.
5. La PDN se diseña como una impedancia, no como una lista de condensadores.

## Siguiente

`ing-diseno-asic` (del RTL al silicio, donde la integridad de señal se lleva dentro del chip). La teoría de líneas está en [[ing-rf-microondas]] y la placa en
[[ing-pcb-diseno]].
