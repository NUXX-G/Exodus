---
glosario: robotica
terminos:
  - termino: grado de libertad
    sinonimos: [grados de libertad]
    llano: "Cada forma independiente en que algo se puede mover: un brazo con tres articulaciones que giran tiene tres."
    formal: "Número de parámetros independientes que fijan la configuración de un sistema mecánico; un sólido libre en el espacio tiene 6."
    nodo: rob-cinematica
    tambien: [mat-estadistica-inferencia]
  - termino: cinemática directa
    llano: "Calcular dónde acaba la mano de un robot sabiendo cuánto ha girado cada una de sus articulaciones."
    formal: "Aplicación $q \\mapsto T(q)$ que da la pose del efector final a partir de las variables articulares, por composición de transformaciones homogéneas."
    nodo: rob-cinematica
  - termino: cinemática inversa
    llano: "Lo contrario: saber cuánto girar cada articulación para que la mano llegue a un punto concreto. Puede haber varias soluciones o ninguna."
    formal: "Resolver $T(q) = T_{\\text{objetivo}}$ para $q$; en general no lineal, con soluciones múltiples, singularidades o sin solución fuera del espacio de trabajo."
    nodo: rob-cinematica
  - termino: actuador
    sinonimos: [actuadores]
    llano: "La pieza que hace que el robot se mueva o actúe: un motor, un pistón, un altavoz."
    formal: "Dispositivo que convierte una señal de control y una fuente de energía en acción física (par, fuerza, desplazamiento)."
    nodo: rob-sensores-actuadores
---

Glosario de robótica (esta nota no es un nodo).
