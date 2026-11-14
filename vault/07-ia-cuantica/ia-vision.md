---
id: ia-vision
title: "Visión por computador: imágenes y filtros, redes convolucionales (campo receptivo, arquitecturas, coste), transferencia, detección (cajas, IoU, NMS, mAP), segmentación y transformers de visión"
area: ia-cuantica
trunk_level: 17
prerequisites: [ia-pytorch, ing-procesado-digital-senal]
academic_sources:
  - "Szeliski, R. Computer Vision: Algorithms and Applications, 2ª ed. Springer, 2022 (szeliski.org/Book); Prince, S. J. D. Understanding Deep Learning. MIT Press, 2023 (caps. 10 y 12)."
  - "Krizhevsky, A.; Sutskever, I.; Hinton, G. ImageNet Classification with Deep CNNs. NeurIPS 2012; He, K. et al. Deep Residual Learning for Image Recognition. CVPR 2016; Dosovitskiy, A. et al. An Image is Worth 16x16 Words. ICLR 2021."
  - "Ren, S. et al. Faster R-CNN. NeurIPS 2015; Redmon, J. et al. You Only Look Once. CVPR 2016; Ronneberger, O. et al. U-Net. MICCAI 2015; Everingham, M. et al. The PASCAL VOC Challenge. IJCV 88, 2010; Lin, T.-Y. et al. Microsoft COCO. ECCV 2014."
  - "Documentación de torchvision 0.20 (operaciones box_iou y nms; modelos preentrenados), consultada en noviembre de 2026."
exercises:
  - id: parametros-de-convoluciones
    tier: 2
    prompt: |
      ¿Cuántos parámetros tienen `nn.Conv2d(64, 128, 3)` y su versión separable en profundidad: `nn.Conv2d(64, 64, 3, groups=64)` seguida de `nn.Conv2d(64, 128, 1)` (todas con sesgo)?

      Respuesta: `normal;separable`.
    answers: ["sha256:c258624ac20086d888889120c914124fbe197ef0de9f76db6cbffaeae0cb470a"]
  - id: convolucion-traspuesta
    tier: 1
    prompt: |
      ¿Qué tamaño espacial tiene la salida de `nn.ConvTranspose2d(…, kernel_size=4, stride=2, padding=1)` sobre una entrada de 16 × 16?

      Respuesta: un número.
    answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
  - id: campo-receptivo
    tier: 2
    prompt: |
      Tres convoluciones 3 × 3 seguidas, la segunda con paso 2 y las otras con paso 1. ¿Qué campo receptivo (lado, en píxeles de la entrada) tiene una neurona de la salida? (Puedes medirlo con el gradiente de una salida respecto a la entrada.)

      Respuesta: un número.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: interseccion-sobre-union
    tier: 1
    prompt: |
      ¿Qué IoU tienen las cajas [0, 0, 4, 4] y [2, 2, 6, 6] (formato x₁, y₁, x₂, y₂)?

      Respuesta: con 4 decimales.
    answers: ["sha256:3df39ca6313dbf0f9f19e67979d286f383f44b9fbb8b1f3111165ed0fd6a86ff"]
  - id: supresion-de-no-maximos
    tier: 2
    prompt: |
      Cajas (x₁, y₁, x₂, y₂) con puntuaciones: 0) 10, 10, 50, 50 y 0.9; 1) 12, 12, 52, 52 y 0.85; 2) 100, 100, 140, 140 y 0.8; 3) 30, 30, 70, 70 y 0.7; 4) 102, 98, 138, 142 y 0.95. Con NMS y umbral de IoU 0,5 (se elimina si IoU > 0,5), ¿qué índices quedan, en orden de puntuación?

      Respuesta: los índices separados por espacios.
    answers: ["sha256:d26eae87829adde551bf4b852f9da6b8c3c2db9b65b8b68870632a2db5f53e00"]
  - id: precision-media
    tier: 3
    prompt: |
      Un detector da 7 detecciones ordenadas por puntuación, que resultan ser acierto, acierto, fallo, acierto, fallo, fallo, acierto, y hay 4 objetos reales. ¿Qué precisión media (AP, área bajo la curva precisión-exhaustividad con la precisión interpolada como el máximo a la derecha, en todos los puntos) obtiene?

      Respuesta: con 4 decimales.
    answers: ["sha256:f1b1cbfa2d19085b528d8ba345ada1c24897faac87ef22787b8378b7d57a3ae7"]
  - id: vision-transformer
    tier: 1
    prompt: |
      Un ViT con parches de 16 × 16 sobre imágenes de 224 × 224 × 3 y dimensión 768: ¿cuántos *tokens* entran al transformer (con el de clase) y cuántos parámetros tiene la proyección de parches (una convolución de 16 × 16 con paso 16, con sesgo)?

      Respuesta: `tokens;parametros`.
    answers: ["sha256:76ceadc894704d84f7f88c4735455038a648050e2165fa0b08dbb1901d541721"]
  - id: coste-de-una-convolucion
    tier: 2
    prompt: |
      Una convolución 3 × 3 con 64 canales de entrada produce un mapa de 56 × 56 × 64. ¿Cuántas multiplicaciones-acumulaciones (MAC) hace, sin contar el sesgo?

      Respuesta: un número.
    answers: ["sha256:48bb8fc4c7cc03c516e417fd6cc85e48adb8bcf62860a777f707616fbc06a8a2"]
  - id: filtro-de-sobel
    tier: 1
    prompt: |
      Aplica el filtro de Sobel horizontal [[−1, 0, 1], [−2, 0, 2], [−1, 0, 1]] (correlación, como hacen las convoluciones de PyTorch) al parche [[10, 10, 80], [10, 10, 80], [10, 10, 80]]. ¿Qué respuesta da?

      Respuesta: un número.
    answers: ["sha256:7f0a22117f8fe0172cf9209ff622b64a51aaeda21d58b5b62685a93dbe2dad25"]
  - id: normalizacion-imagenet
    tier: 1
    prompt: |
      Con la normalización habitual de ImageNet en el canal rojo (media 0,485 y desviación 0,229 sobre valores en [0, 1]), ¿qué valor recibe un píxel de intensidad 128 (de 255)?

      Respuesta: con 4 decimales.
    answers: ["sha256:3f7e3c046fd9f57509b0bedcf5185c9aabb4ed242d61a0a48e6bf67d0053ec9a"]
  - id: letterbox
    tier: 1
    prompt: |
      Para meter una imagen de 1280 × 720 en una entrada de 640 × 640 sin deformarla (escalar y rellenar arriba y abajo por igual), ¿a qué tamaño queda la imagen y cuántos píxeles de relleno hay arriba?

      Respuesta: `anchoxalto;relleno`.
    answers: ["sha256:cb1b8a8edf41e6e0c74396d0ac7dd137fc260da26e756d189fbfd5ec52edb353"]
  - id: memoria-de-un-lote
    tier: 1
    prompt: |
      ¿Cuántos bytes ocupa un lote de 32 imágenes de 3 × 224 × 224 en float32?

      Respuesta: un número.
    answers: ["sha256:3cf8043b173d34629d02a76a16bbccf1b823fd5a82ba38cb22f10a26b04c31a0"]
---

Una imagen es una matriz de números; reconocer en ella un gato, un peatón o un tumor exige pasar de píxeles a conceptos. La visión por computador clásica lo intentó con filtros y rasgos diseñados a mano;
desde 2012 lo hacen redes **convolucionales** que aprenden los filtros, y desde 2020 también **transformers** que tratan la imagen como una secuencia de parches. Este nodo cubre lo que hay que dominar para
trabajar en visión: cómo se representa y se normaliza una imagen, qué calcula una convolución y cuánto cuesta, por qué funcionan las arquitecturas modernas, y las tareas de detección y segmentación con
sus métricas. Se apoya en el procesado de señal de [[ing-procesado-digital-senal]] y en [[ia-pytorch]].

## Objetivos

Al terminar sabrás:

1. Representar y preprocesar imágenes (canales, rangos, normalización, cambio de tamaño sin deformar, aumento de datos).
2. Calcular formas, parámetros, coste y campo receptivo de capas convolucionales, y explicar las arquitecturas de referencia.
3. Adaptar un modelo preentrenado a un problema nuevo (transferencia y ajuste fino).
4. Resolver detección (cajas, IoU, NMS, mAP) y segmentación (U-Net, métricas por píxel).
5. Explicar los transformers de visión y cuándo convienen.

## Qué debes dominar antes

[[ia-pytorch]] (tensores, módulos, entrenamiento) y [[ing-procesado-digital-senal]] (convolución, filtros, frecuencia).

> [!question] Test de entrada
> 1. ¿Qué hace una convolución con un filtro de media de 3 × 3?
> 2. ¿Cuántos números tiene una imagen en color de 224 × 224?
> 3. ¿Qué es el sobreajuste?
>
> Respuestas: sustituye cada píxel por la media de sus vecinos, suavizando la imagen (un filtro paso bajo); 224 · 224 · 3 = 150 528; que el modelo aprende detalles del conjunto de entrenamiento que no
> generalizan, y rinde mucho peor con datos nuevos.

## 1. Imágenes y preprocesado

Una imagen en color es un tensor de alto × ancho × 3 canales (en PyTorch, canales primero: C × H × W), con valores en [0, 255] que se pasan a [0, 1] y se **normalizan** por canal con la media y la
desviación del conjunto con que se preentrenó el modelo (las de ImageNet son las habituales); usar otra normalización con un modelo preentrenado degrada mucho sus resultados. Cambiar de tamaño sin deformar
exige escalar por el lado limitante y **rellenar** (*letterbox*) o recortar. El **aumento de datos** (giros horizontales, recortes aleatorios, cambios de color, *mixup* y *cutmix*) multiplica la variedad
del entrenamiento; debe respetar el significado (girar un 6 lo convierte en 9; voltear una radiografía cambia el lado del cuerpo).

Los **filtros clásicos** siguen siendo útiles y explican lo que aprenden las primeras capas de una red: suavizado (gaussiano), bordes (Sobel: el gradiente horizontal responde a cambios de intensidad de
izquierda a derecha; Canny), esquinas (Harris), y descriptores como SIFT y HOG para emparejar puntos entre imágenes. Ojo: lo que las bibliotecas de redes llaman convolución es en realidad **correlación**
(no voltean el filtro), lo que da igual cuando el filtro se aprende.

## 2. Redes convolucionales

Una capa `Conv2d(Cᵢₙ, Cₒᵤₜ, k)` tiene Cᵢₙ·Cₒᵤₜ·k² pesos más Cₒᵤₜ sesgos, independientemente del tamaño de la imagen: comparte los pesos en todas las posiciones (equivariancia a traslaciones). Su salida
mide ⌊(n + 2p − k)/s⌋ + 1 por lado, y cuesta H·W·Cᵢₙ·Cₒᵤₜ·k² multiplicaciones-acumulaciones. Piezas clave:

- **Campo receptivo**: la región de la entrada que influye en una neurona. Con capas de núcleo k y paso s, crece como r ← r + (k − 1)·j, con j ← j·s el «salto» acumulado. Apilar núcleos pequeños y reducir
  la resolución (agrupación o pasos de 2) lo hace crecer rápido con pocos parámetros: dos 3 × 3 ven lo mismo que un 5 × 5 con menos pesos y más no linealidad.
- **Agrupación** (*pooling*) y pasos de 2 reducen la resolución; la **agrupación global** al final hace la red independiente del tamaño de la entrada.
- **Convolución separable en profundidad** (MobileNet): un filtro espacial por canal (`groups = Cᵢₙ`) seguido de una convolución 1 × 1 que mezcla canales; muchos menos parámetros y operaciones.
- **Convolución traspuesta**: sube la resolución (en decodificadores), con salida (n − 1)·s − 2p + k; puede dejar artefactos en tablero de ajedrez, y a menudo se prefiere interpolar y luego convolucionar.

**Arquitecturas**: LeNet (1998), **AlexNet** (2012: ReLU, dropout, GPU; el comienzo del aprendizaje profundo moderno), VGG (solo 3 × 3), Inception, **ResNet** (2016: conexiones residuales x + F(x) que permiten
redes de cientos de capas), EfficientNet (escalar profundidad, anchura y resolución a la vez) y ConvNeXt (una red convolucional modernizada que compite con los transformers).

## 3. Transferencia

Entrenar desde cero exige millones de imágenes. Casi siempre se parte de un modelo **preentrenado** (en ImageNet o con autosupervisión) y se adapta: **extracción de rasgos** (congelar la red y entrenar solo
una cabeza nueva) con pocos datos; **ajuste fino** (descongelar todo o las últimas capas con un ritmo de aprendizaje pequeño) con más. Los modelos de base recientes (CLIP, DINOv2) dan representaciones que
sirven casi sin entrenar.

## 4. Detección

Se predicen **cajas** (x₁, y₁, x₂, y₂) con una clase y una puntuación.

- **IoU** (intersección sobre unión) mide el solapamiento de dos cajas: área común / área de la unión. Una detección es correcta si su IoU con un objeto real supera un umbral (0,5 en PASCAL VOC; COCO
  promedia de 0,5 a 0,95).
- **Supresión de no máximos** (NMS): el detector propone muchas cajas parecidas; se ordenan por puntuación, se acepta la mejor y se descartan las que la solapan por encima del umbral, y así sucesivamente.
- **Precisión media** (AP): se ordenan las detecciones por puntuación, se calcula precisión y exhaustividad acumuladas, se **interpola** la precisión (en cada punto, el máximo de las precisiones a su derecha)
  y se integra el área bajo la curva; mAP es la media entre clases (y en COCO, también entre umbrales de IoU).
- **Familias**: de dos etapas (Faster R-CNN: propuestas de regiones y luego clasificación), de una etapa (YOLO, SSD, RetinaNet con la pérdida focal), y basadas en transformers (DETR, sin NMS gracias a un
  emparejamiento uno a uno).

## 5. Segmentación

Clasificar **cada píxel**: semántica (qué clase), de instancias (qué objeto; Mask R-CNN) y panóptica (las dos). **U-Net** (2015) combina un codificador que reduce la resolución con un decodificador que la
recupera y conexiones que copian los detalles finos de un lado al otro; sigue siendo la referencia en imagen médica. Métricas: IoU por clase y su media (mIoU), y el coeficiente de Dice (2·|A ∩ B| / (|A| + |B|)).
SAM (*Segment Anything*) segmenta a partir de indicaciones (un punto, una caja) sin entrenar para cada dominio.

## 6. Transformers de visión

**ViT** (Dosovitskiy et al., 2021) corta la imagen en parches (16 × 16), proyecta cada uno a un vector (una convolución con núcleo y paso iguales al parche), añade una codificación de posición y un *token*
de clase, y aplica un transformer estándar (`ia-transformers-llm`). Sin el sesgo inductivo de la convolución necesita más datos o más aumentos, pero escala muy bien; Swin introduce ventanas locales y
jerarquía para tareas densas. La atención cuesta O(n²) en el número de parches, así que la resolución se paga cara.

## 7. Comprobar con un programa

Una red convolucional pequeña que distingue círculos de cuadrados en imágenes sintéticas de 32 × 32, con su conteo de parámetros, y un NMS escrito a mano comparado con el de torchvision (datos distintos de
los ejercicios; PyTorch 2.5.1 y torchvision 0.20.1 en CPU):

```python
# CNN pequeña sobre formas sintéticas y NMS a mano frente a torchvision
import torch
import torch.nn as nn
from torchvision.ops import nms

torch.manual_seed(0)

def imagen(es_circulo):
    img = torch.zeros(1, 32, 32)
    cx, cy, r = torch.randint(10, 22, (2,)).tolist() + [int(torch.randint(4, 8, (1,)))]
    yy, xx = torch.meshgrid(torch.arange(32), torch.arange(32), indexing="ij")
    if es_circulo:
        img[0][(xx - cx) ** 2 + (yy - cy) ** 2 <= r * r] = 1
    else:
        img[0][((xx - cx).abs() <= r) & ((yy - cy).abs() <= r)] = 1
    return img + 0.1 * torch.randn(1, 32, 32)

etiquetas = torch.randint(0, 2, (600,))
X = torch.stack([imagen(bool(e)) for e in etiquetas])
red = nn.Sequential(nn.Conv2d(1, 8, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
                    nn.Conv2d(8, 16, 3, padding=1), nn.ReLU(), nn.AdaptiveAvgPool2d(1), nn.Flatten(), nn.Linear(16, 2))
print("parámetros:", sum(p.numel() for p in red.parameters()))
opt = torch.optim.Adam(red.parameters(), lr=0.01)
for epoca in range(15):
    for i in range(0, 500, 50):
        opt.zero_grad()
        nn.functional.cross_entropy(red(X[i:i + 50]), etiquetas[i:i + 50]).backward()
        opt.step()
red.eval()
with torch.no_grad():
    print("acierto en las 100 de prueba:", (red(X[500:]).argmax(1) == etiquetas[500:]).float().mean().item() >= 0.9)

def mi_nms(cajas, puntos, umbral):
    def iou(a, b):
        w = (min(a[2], b[2]) - max(a[0], b[0])).clamp(min=0); h = (min(a[3], b[3]) - max(a[1], b[1])).clamp(min=0)
        i = w * h
        return i / ((a[2] - a[0]) * (a[3] - a[1]) + (b[2] - b[0]) * (b[3] - b[1]) - i)
    quedan = []
    for k in puntos.argsort(descending=True).tolist():
        if all(iou(cajas[k], cajas[j]) <= umbral for j in quedan):
            quedan.append(k)
    return quedan

cajas = torch.tensor([[0., 0, 10, 10], [1, 1, 11, 11], [20, 20, 30, 30], [5, 5, 15, 15]])
puntos = torch.tensor([0.6, 0.9, 0.7, 0.8])
print("a mano:", mi_nms(cajas, puntos, 0.3), " torchvision:", nms(cajas, puntos, 0.3).tolist())
```

Salida:

```
parámetros: 1282
acierto en las 100 de prueba: True
a mano: [1, 3, 2]  torchvision: [1, 3, 2]
```

## 8. Errores típicos

- Normalizar distinto de como se preentrenó el modelo; confundir el orden de canales (RGB/BGR) o de ejes (HWC/CHW).
- Aumentos que cambian la etiqueta; aplicar aumentos aleatorios también en validación.
- Evaluar detección con un umbral de IoU distinto del de la referencia, o comparar mAP de VOC con mAP de COCO.
- Fugas entre entrenamiento y prueba con imágenes casi idénticas (fotogramas consecutivos de un vídeo, varias fotos del mismo paciente).
- Olvidar que la convolución traspuesta y el remuestreo pueden dejar artefactos.

## 9. Resumen

- Imagen = tensor C × H × W normalizado; *letterbox*; aumentos que respeten la etiqueta; filtros clásicos (Sobel, Canny, Harris).
- Convolución: Cᵢₙ·Cₒᵤₜ·k² + Cₒᵤₜ parámetros, ⌊(n + 2p − k)/s⌋ + 1, H·W·Cᵢₙ·Cₒᵤₜ·k² MAC; campo receptivo; separable en profundidad; traspuesta.
- AlexNet, VGG, ResNet (residuales), EfficientNet, ConvNeXt; transferencia y ajuste fino.
- Detección: IoU, NMS, AP interpolada y mAP; dos etapas, una etapa, DETR. Segmentación: U-Net, mIoU, Dice, SAM.
- ViT: parches como *tokens*; más datos, escala bien; atención cuadrática en el número de parches.

## Repaso: lo que debe quedarte dentro de un mes

1. Los pesos de una convolución no dependen del tamaño de la imagen; su coste sí.
2. El campo receptivo crece con la profundidad y, sobre todo, con los pasos.
3. IoU para emparejar, NMS para limpiar, AP para medir.
4. Parte de un modelo preentrenado y normaliza como él.
5. ViT = imagen como secuencia de parches.

## Siguiente

`ia-nlp` y `ia-transformers-llm`; para practicar, `lab-ia-fuga-de-datos`.
