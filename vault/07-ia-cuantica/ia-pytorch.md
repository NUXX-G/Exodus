---
id: ia-pytorch
title: "PyTorch en profundidad: tensores y memoria, autograd dinámico, nn.Module, el bucle de entrenamiento, datos, pérdidas y optimizadores, precisión mixta, reproducibilidad, depuración y rendimiento"
area: ia-cuantica
trunk_level: 16
prerequisites: [ia-redes-desde-cero, ia-python-datos]
academic_sources:
  - "Paszke, A. et al. PyTorch: An Imperative Style, High-Performance Deep Learning Library. NeurIPS 2019; documentación de PyTorch 2.5 (pytorch.org/docs), consultada en noviembre de 2026."
  - "Ansel, J. et al. PyTorch 2: Faster Machine Learning Through Dynamic Python Bytecode Transformation and Graph Compilation. ASPLOS 2024."
  - "Micikevicius, P. et al. Mixed Precision Training. ICLR 2018; Kalamkar, D. et al. A Study of BFLOAT16 for Deep Learning Training. arXiv:1905.12322, 2019."
  - "Stevens, E.; Antiga, L.; Viehmann, T. Deep Learning with PyTorch. Manning, 2020."
exercises:
  - id: pasos-y-contiguidad
    tier: 1
    prompt: |
      `x = torch.arange(12).reshape(3, 4)`. ¿Qué `stride()` tiene `x.T` y es contigua?

      Respuesta: `paso0,paso1;si` o `…;no`.
    answers: ["sha256:46ada4ab6f6831a4bc42d1cd951ee014031135733be774cc2485cd3f689bd04b"]
  - id: acumulacion-de-gradientes
    tier: 2
    prompt: |
      `w = torch.tensor(2.0, requires_grad=True)`. Se calcula `(w**2 + 3*w).backward()`, se lee `w.grad`, y se repite el cálculo y `backward()` sin poner a cero los gradientes. ¿Qué vale `w.grad` la primera y la segunda vez?

      Respuesta: `primera;segunda`.
    answers: ["sha256:f080a41ee58c93d54bac811e1cef61646c4636f048b2cfcb5910548413b23d76"]
  - id: numero-de-parametros
    tier: 1
    prompt: |
      ¿Cuántos parámetros entrenables tienen `nn.Linear(10, 5)` y `nn.Sequential(nn.Linear(784, 256), nn.ReLU(), nn.Linear(256, 10))`?

      Respuesta: `primero;segundo`.
    answers: ["sha256:7a4fcbca572926b0892516665ae3f5fc2fbd22503ec35f2773a0ee39c46f6365"]
  - id: entropia-cruzada
    tier: 2
    prompt: |
      ¿Qué devuelve `F.cross_entropy` para los logits `[[2, 1, 0]]` y la clase 0, sin suavizado y con `label_smoothing=0.1`?

      Respuesta: `sin;con` con 4 decimales.
    answers: ["sha256:0a356ed4a188cba06b0059e2635f9773b4bf6a3d8c75b16456da84e48751ed56"]
  - id: forma-de-una-convolucion
    tier: 1
    prompt: |
      ¿Qué forma tiene la salida de `nn.Conv2d(3, 16, 5, stride=2, padding=1)` aplicada a un tensor de forma (8, 3, 32, 32)?

      Respuesta: las cuatro dimensiones separadas por comas.
    answers: ["sha256:14e1493d0ac3a97d6e0fb171d34a2808693afbd93e788f4525db1293102c7cee"]
  - id: tipo-por-defecto
    tier: 1
    prompt: |
      ¿Qué `dtype` tiene `torch.tensor([1, 2]) * 1.5`?

      Respuesta: como lo imprime PyTorch (por ejemplo `torch.int64`).
    answers: ["sha256:ad88df0b8b9de1789dbaa2a58c2b82e33de557553b203a4b14ed28d7cdf19622"]
  - id: sgd-con-momento-de-pytorch
    tier: 2
    prompt: |
      Con `torch.optim.SGD([w], lr=0.1, momentum=0.9)`, w = 1 y pérdida w², ¿cuánto vale w tras 2 pasos? (PyTorch usa b ← μ·b + g, con b = g en el primer paso, y w ← w − lr·b.)

      Respuesta: con 4 decimales.
    answers: ["sha256:ad9dadb817c4ea957beef59cc28b49ccb843c8c0996b1492547942a1cc6925ba"]
  - id: adam-de-pytorch
    tier: 3
    prompt: |
      Con `torch.optim.Adam([w], lr=0.1)` (β₁ = 0,9, β₂ = 0,999, ε = 10⁻⁸), w = 1 y pérdida w², ¿cuánto vale w tras 2 pasos?

      Respuesta: con 4 decimales.
    answers: ["sha256:15b26c209163f5e8d573bfe34edc70fa265176a0c0de92aa466f3d017dac706c"]
  - id: lotes-del-dataloader
    tier: 1
    prompt: |
      Un `DataLoader` sobre 1000 ejemplos con `batch_size=64`, ¿cuántos lotes da con `drop_last=True` y con `drop_last=False`?

      Respuesta: `con;sin`.
    answers: ["sha256:3027fab138fab84bb92796c845a3d05027e766dbd81641d6868b0e61d1a46631"]
  - id: dropout-en-entrenamiento-y-evaluacion
    tier: 2
    prompt: |
      `nn.Dropout(0.5)` en modo de entrenamiento aplicado a un vector de unos: ¿qué valor tienen los elementos que no se anulan? Tras `.eval()`, ¿cuánto suma su salida para `torch.ones(4)`?

      Respuesta: `valor;suma`.
    answers: ["sha256:5c062f977e5d0e39b746d58304e9711596badda6c7fa054f415a197c006080d5"]
  - id: medias-moviles-de-batchnorm
    tier: 3
    prompt: |
      Una `nn.BatchNorm1d(1)` recién creada (media móvil 0, varianza móvil 1, momento 0,1) procesa en modo de entrenamiento el lote [1, 2, 3, 4, 10]. ¿Cuánto valen después `running_mean` y `running_var`? (La varianza móvil se actualiza con el estimador insesgado.)

      Respuesta: `media;varianza`.
    answers: ["sha256:04ae274da44d392281d6cb0d037a51f77370c82ddf9114091ba978d26fec4f61"]
  - id: recorte-de-gradientes
    tier: 1
    prompt: |
      Un parámetro con gradiente (3, 4) pasa por `clip_grad_norm_([p], 1.0)`. ¿Qué norma total devuelve y cuánto vale después la primera componente del gradiente?

      Respuesta: `norma;componente`.
    answers: ["sha256:c0fd1cc29ca531766edadc7f51c3f55145eb74d8abaa2c52b8a38c00a8c26aca"]
  - id: detach
    tier: 1
    prompt: |
      `a = torch.ones(2, requires_grad=True)`. ¿Tiene `requires_grad` el tensor `(a * 2).detach()`?

      Respuesta: `si` o `no`.
    answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
  - id: bfloat16
    tier: 2
    prompt: |
      ¿Qué valores guardan `torch.tensor(1/3, dtype=torch.bfloat16)` y `torch.tensor(257.0, dtype=torch.bfloat16)`? (bfloat16 conserva los 16 bits altos de un float32: 8 de exponente y 7 de mantisa, redondeando al par más cercano.)

      Respuesta: `primero;segundo` en decimal exacto.
    answers: ["sha256:a426b29227b3954eecb3362a9cda8cdb03007d13b257fee94dab6657c74da93b"]
  - id: claves-del-state-dict
    tier: 1
    prompt: |
      ¿Cuántas entradas tiene el `state_dict()` de `nn.Sequential(nn.Linear(4, 3), nn.ReLU(), nn.Linear(3, 2))` y cómo se llama la tercera?

      Respuesta: `numero;nombre`.
    answers: ["sha256:ae51f34a67b96b7cc8b54a3d5a0259c87c4bc76a3ca80deec259266fc149eb7b"]
---

En [[ia-redes-desde-cero]] escribiste cada derivada a mano; en la práctica nadie lo hace. **PyTorch** registra las operaciones sobre tensores mientras se ejecutan, construye el grafo y calcula los
gradientes automáticamente (diferenciación en modo inverso, como en [[proy-ia-autograd]]), en CPU o GPU. Es la biblioteca dominante en investigación y una de las dos grandes en producción. Este nodo enseña
a usarla **entendiendo lo que hace**: dónde vive cada tensor, cuándo se acumula un gradiente, qué cambia entre entrenar y evaluar, qué fórmula exacta aplica cada optimizador. Con eso se evita la mayoría
de los errores silenciosos que estropean un entrenamiento.

## Objetivos

Al terminar sabrás:

1. Manejar tensores: tipos, dispositivos, vistas, contigüidad y difusión.
2. Explicar autograd: hojas, grafo dinámico, acumulación de gradientes, `no_grad` y `detach`.
3. Escribir modelos con `nn.Module` y el bucle de entrenamiento canónico, con datos, pérdidas, optimizadores y calendarios.
4. Usar precisión mixta, guardar y cargar puntos de control y hacer el entrenamiento reproducible.
5. Depurar y acelerar: anomalías, ganchos, perfilador, `torch.compile`.

## Qué debes dominar antes

[[ia-redes-desde-cero]] (retropropagación, optimizadores, normalización) e [[ia-python-datos]] (NumPy: vistas, difusión, tipos).

> [!question] Test de entrada
> 1. ¿Qué diferencia hay entre una vista y una copia de un array?
> 2. ¿Qué calcula la retropropagación?
> 3. ¿Por qué se usa la GPU para entrenar redes?
>
> Respuestas: la vista comparte memoria con el original (cambiar una cambia el otro) y la copia no; el gradiente de la pérdida respecto a todos los parámetros, aplicando la regla de la cadena hacia atrás
> por el grafo de operaciones; porque el trabajo es sobre todo productos de matrices, muy paralelos, y la GPU tiene miles de unidades aritméticas y mucho ancho de banda de memoria.

## 1. Tensores

Un `torch.Tensor` es como un array de NumPy (almacenamiento, `dtype`, forma, `stride`) con dos añadidos: un **dispositivo** (`cpu`, `cuda:0`, `mps`) y la posibilidad de **registrar gradientes**.

- **Tipos**: el de coma flotante por defecto es `float32` (no `float64` como en NumPy); un entero por un decimal da `float32`. `bfloat16` conserva el rango de `float32` (8 bits de exponente) con solo 7 de
  mantisa: menos precisión, pero sin desbordamientos; `float16` tiene más mantisa y mucho menos rango.
- **Vistas**: `view`, `transpose`, `permute`, cortes y `expand` no copian; cambian forma y pasos. `view` exige memoria contigua; `reshape` copia si hace falta; `.contiguous()` copia a orden C. Las operaciones
  terminadas en `_` (`add_`, `zero_`) modifican en el sitio, y hacerlo sobre un tensor que autograd necesita produce un error (o, peor, un gradiente erróneo si se esquiva).
- **Dispositivos**: las operaciones exigen que todos los tensores estén en el mismo; `.to(device)` copia. Mover datos entre CPU y GPU es caro: se hace una vez por lote (con `pin_memory=True` en el
  `DataLoader` para que la copia sea asíncrona).

## 2. Autograd

Cada operación sobre un tensor con `requires_grad=True` añade un nodo al grafo (`grad_fn`). Los tensores creados por el usuario son **hojas**; `loss.backward()` recorre el grafo hacia atrás y **suma**
el gradiente en el atributo `.grad` de cada hoja. Consecuencias:

- **Los gradientes se acumulan**: si no se ponen a cero (`optimizer.zero_grad()`, que por defecto los deja en `None`), el siguiente `backward()` los suma a los anteriores. Se aprovecha a propósito para
  simular lotes grandes acumulando varios pequeños.
- El grafo se libera tras `backward()`; para recorrerlo dos veces hace falta `retain_graph=True`.
- `torch.no_grad()` (o `torch.inference_mode()`, más rápido) desactiva el registro: para evaluar y para actualizar parámetros a mano. `detach()` devuelve un tensor que comparte datos pero sale del grafo.
- El grafo es **dinámico**: se construye en cada pasada, así que el código puede tener `if`, bucles y recursión en Python normal.

## 3. Módulos

`nn.Module` agrupa **parámetros** (`nn.Parameter`, entrenables, aparecen en `.parameters()`), **búferes** (estado no entrenable, como las medias móviles de BatchNorm) y submódulos. Su `state_dict()` es un
diccionario ordenado con todo ello, con nombres jerárquicos (`"0.weight"`, `"encoder.capa2.bias"`), y es lo que se guarda en un punto de control. El **modo**: `model.train()` y `model.eval()` cambian el
comportamiento de Dropout (en entrenamiento anula con probabilidad p y escala lo demás por 1/(1 − p); en evaluación no hace nada) y de BatchNorm (en entrenamiento normaliza con el lote y actualiza
`running_mean ← (1 − m)·running_mean + m·media` y la varianza móvil con el estimador **insesgado**; en evaluación usa las móviles). Olvidar `eval()` al validar es un error clásico.

## 4. El bucle de entrenamiento

```text
for epoca in range(epocas):
    modelo.train()
    for x, y in cargador:
        x, y = x.to(dispositivo), y.to(dispositivo)
        optimizador.zero_grad()
        perdida = criterio(modelo(x), y)
        perdida.backward()
        torch.nn.utils.clip_grad_norm_(modelo.parameters(), 1.0)   # opcional
        optimizador.step()
        calendario.step()                                             # si el calendario es por paso
    modelo.eval()
    with torch.no_grad():
        ...                                                           # validación
```

- **Datos**: un `Dataset` (con `__len__` y `__getitem__`) y un `DataLoader` que forma lotes (`batch_size`, `shuffle=True` en entrenamiento, `num_workers` para cargar en paralelo, `drop_last` para descartar el
  lote incompleto).
- **Pérdidas**: `nn.CrossEntropyLoss` espera **logits** (sin softmax) e **índices de clase** (o probabilidades), aplica `log_softmax` internamente y admite `label_smoothing` (la etiqueta correcta recibe
  1 − ε + ε/K y las demás ε/K); `BCEWithLogitsLoss` para binario y multietiqueta.
- **Optimizadores**: el SGD de PyTorch con momento usa b ← μ·b + g (con b = g en el primer paso) y w ← w − lr·b, una formulación distinta pero equivalente a la de otros textos salvo por la escala del ritmo;
  Adam y AdamW aplican la corrección de sesgo de Kingma y Ba. `clip_grad_norm_` escala todos los gradientes para que su norma conjunta no pase de un máximo y devuelve la norma original.
- **Calendarios** (`torch.optim.lr_scheduler`): `CosineAnnealingLR`, `OneCycleLR`, calentamiento con `LinearLR` encadenado.

## 5. Precisión mixta, puntos de control y reproducibilidad

- **Precisión mixta** (Micikevicius et al., 2018): `with torch.autocast(device_type="cuda", dtype=torch.bfloat16):` ejecuta los productos de matrices en 16 bits (más rápidos y con la mitad de memoria) y
  mantiene en 32 bits lo sensible (sumas de reducción, pérdidas, los pesos maestros). Con `float16` hace falta `GradScaler` para que los gradientes pequeños no se queden en cero; con `bfloat16`, no.
- **Puntos de control**: guardar `state_dict` del modelo, del optimizador y del calendario, la época y la semilla, para poder reanudar exactamente. Cargar con `torch.load(…, weights_only=True)`: un
  archivo `.pt` es un *pickle* y cargar uno ajeno sin esa opción puede ejecutar código.
- **Reproducibilidad**: `torch.manual_seed`, semillas en los trabajadores del `DataLoader`, `torch.use_deterministic_algorithms(True)` (algunas operaciones de GPU no son deterministas por defecto). Aun
  así, distinto hardware o versión puede dar resultados ligeramente distintos.

## 6. Depurar y acelerar

- **Comprobar formas** en cada paso al principio; **sobreajustar un lote** a propósito (si la red no consigue pérdida casi nula en 10 ejemplos, hay un error); `torch.autograd.set_detect_anomaly(True)` para
  localizar el primer NaN; **ganchos** (`register_forward_hook`) para mirar activaciones y gradientes.
- **Perfilador** (`torch.profiler`): dónde se va el tiempo (¿el `DataLoader` deja la GPU esperando?).
- **`torch.compile`** (PyTorch 2, Ansel et al., 2024): captura el grafo del código Python (TorchDynamo) y genera núcleos fusionados (TorchInductor), a menudo con aceleraciones importantes sin cambiar el
  modelo.
- **Varias GPU**: `DistributedDataParallel` (cada proceso con una réplica y un trozo del lote; los gradientes se promedian); para modelos que no caben, FSDP reparte parámetros, gradientes y estado del
  optimizador.

## 7. Comprobar con un programa

Un clasificador para dos «lunas» sintéticas con el bucle canónico, evaluación en modo `eval`, guardado y carga del `state_dict`, y la comprobación de que dos ejecuciones con la misma semilla dan lo mismo
(ejecutado con PyTorch 2.5.1 en CPU):

```python
# Bucle canónico de PyTorch: datos sintéticos, entrenamiento, evaluación, punto de control y reproducibilidad
import io
import math

import torch
import torch.nn as nn


def lunas(n, generador):
    t = torch.rand(n, generator=generador) * math.pi
    clase = torch.randint(0, 2, (n,), generator=generador)
    x = torch.stack([torch.cos(t), torch.sin(t)], 1)
    x[clase == 1] = torch.stack([1 - torch.cos(t), 0.5 - torch.sin(t)], 1)[clase == 1]
    return x + 0.1 * torch.randn(n, 2, generator=generador), clase


def entrenar(semilla):
    torch.manual_seed(semilla)
    g = torch.Generator().manual_seed(semilla)
    xe, ye = lunas(800, g)
    xp, yp = lunas(200, g)
    modelo = nn.Sequential(nn.Linear(2, 32), nn.ReLU(), nn.Linear(32, 32), nn.ReLU(), nn.Linear(32, 2))
    opt = torch.optim.AdamW(modelo.parameters(), lr=0.01)
    cargador = torch.utils.data.DataLoader(torch.utils.data.TensorDataset(xe, ye), batch_size=64, shuffle=True, generator=g)
    criterio = nn.CrossEntropyLoss()
    for _ in range(30):
        modelo.train()
        for x, y in cargador:
            opt.zero_grad()
            criterio(modelo(x), y).backward()
            opt.step()
    modelo.eval()
    with torch.no_grad():
        acierto = (modelo(xp).argmax(1) == yp).float().mean().item()
    return modelo, acierto


modelo, acierto = entrenar(7)
_, acierto_bis = entrenar(7)
print("acierto en prueba: %.3f  misma semilla, mismo resultado: %s" % (acierto, acierto == acierto_bis))

buf = io.BytesIO()
torch.save(modelo.state_dict(), buf)
buf.seek(0)
copia = nn.Sequential(nn.Linear(2, 32), nn.ReLU(), nn.Linear(32, 32), nn.ReLU(), nn.Linear(32, 2))
copia.load_state_dict(torch.load(buf, weights_only=True))
x = torch.tensor([[0.0, 0.5], [1.5, -0.3]])
with torch.no_grad():
    print("la copia predice igual:", torch.equal(modelo(x), copia(x)), " claves:", list(copia.state_dict())[:2])
```

Salida:

```
acierto en prueba: 1.000  misma semilla, mismo resultado: True
la copia predice igual: True  claves: ['0.weight', '0.bias']
```

## 8. Errores típicos

- No llamar a `zero_grad()` (gradientes acumulados sin querer) o llamarlo entre `backward()` y `step()`.
- Validar sin `model.eval()` o sin `no_grad()`.
- Aplicar softmax antes de `CrossEntropyLoss`; pasar etiquetas *one-hot* de tipo entero donde espera índices.
- Tensores en dispositivos distintos; copiar a la GPU dentro de bucles internos; el `DataLoader` como cuello de botella.
- Guardar el modelo entero con `pickle` en vez del `state_dict`; cargar archivos ajenos sin `weights_only=True`.
- Comparar `float32` con `==`; creer que la misma semilla garantiza resultados idénticos en otro hardware.

## 9. Resumen

- Tensores: `dtype` (float32 por defecto, bfloat16, float16), dispositivo, vistas y contigüidad, operaciones en el sitio.
- Autograd: hojas, `grad_fn`, acumulación en `.grad`, `retain_graph`, `no_grad`/`inference_mode`, `detach`, grafo dinámico.
- `nn.Module`: parámetros, búferes, `state_dict`, `train()`/`eval()` (Dropout, BatchNorm).
- Bucle: `zero_grad` → pasada → pérdida → `backward` → (recorte) → `step` → calendario; `Dataset`/`DataLoader`; `CrossEntropyLoss` con logits.
- Precisión mixta (`autocast`, `GradScaler`), puntos de control seguros, determinismo; depuración, perfilador, `torch.compile`, DDP/FSDP.

## Repaso: lo que debe quedarte dentro de un mes

1. `backward()` suma; `zero_grad()` en cada paso.
2. Entrenar con `train()`, evaluar con `eval()` y `no_grad()`.
3. `CrossEntropyLoss` recibe logits e índices.
4. Sobreajusta un lote antes de entrenar en serio.
5. `weights_only=True` al cargar.

## Siguiente

`ia-vision`, `ia-nlp` y `ia-transformers-llm`, todos con PyTorch; y el proyecto `proy-ia-mini-gpt`.
