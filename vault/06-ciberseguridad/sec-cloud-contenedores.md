---
id: sec-cloud-contenedores
title: "Seguridad en la nube y en contenedores: responsabilidad compartida, identidades y políticas IAM, metadatos de instancia, aislamiento de contenedores, imágenes y cadena de suministro, Kubernetes (RBAC, Pod Security, NetworkPolicy, Secrets)"
area: ciberseguridad
trunk_level: 17
prerequisites: [sec-seguridad-so, sec-seguridad-redes, sec-metodologia-pentest]
academic_sources:
  - "Souppaya, M.; Morello, J.; Scarfone, K. NIST SP 800-190, Application Container Security Guide, 2017; NIST SP 800-207, Zero Trust Architecture, 2020."
  - "AWS Identity and Access Management User Guide (lógica de evaluación de políticas, límites de permisos) y Amazon EC2 User Guide (IMDSv2), consultados en noviembre de 2026."
  - "Documentación de Kubernetes: Pod Security Standards, RBAC, Network Policies, Secrets y cifrado en reposo (kubernetes.io), consultada en noviembre de 2026; CIS Kubernetes y CIS Docker Benchmarks."
  - "SLSA v1.0 (slsa.dev, 2023); especificación de imágenes OCI (opencontainers.org); Sigstore (cosign, Rekor)."
exercises:
  - id: evaluacion-iam
    tier: 2
    prompt: |
      Una identidad tiene estas declaraciones: Allow `s3:Get*` sobre `arn:aws:s3:::informes/*`; Allow `s3:ListBucket` sobre `arn:aws:s3:::informes`; Deny `s3:*` sobre `arn:aws:s3:::informes/confidencial/*`. No hay políticas de recurso. ¿Qué peticiones se permiten? a) `s3:GetObject` sobre `arn:aws:s3:::informes/2026/q3.pdf`; b) `s3:GetObject` sobre `arn:aws:s3:::informes/confidencial/nominas.csv`; c) `s3:PutObject` sobre `arn:aws:s3:::informes/x.txt`; d) `s3:ListBucket` sobre `arn:aws:s3:::informes`; e) `s3:GetObject` sobre `arn:aws:s3:::otros/x.txt`.

      Respuesta: las letras permitidas en orden, separadas por espacios.
    answers: ["sha256:70ba33708cbfb103f1a8e34afef333ba7dc021022b2d9aaa583aabb8058d8d67"]
  - id: limite-de-permisos
    tier: 2
    prompt: |
      Ahora la identidad tiene además un límite de permisos (*permissions boundary*) que solo permite `s3:GetObject` sobre `*`. ¿Qué peticiones de la lista anterior se permiten?

      Respuesta: las letras en orden.
    answers: ["sha256:ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"]
  - id: imdsv2
    tier: 1
    prompt: |
      En AWS, ¿cuál es el tiempo de vida máximo (en segundos) que se puede pedir para un token de IMDSv2, y qué límite de saltos (TTL de IP) tiene por defecto la respuesta al PUT que lo emite? (Por eso un contenedor detrás de un puente no alcanza el servicio si no se sube a 2.)

      Respuesta: `segundos;saltos`.
    answers: ["sha256:de7ab7385287a2256e6d44cbc23118b6f9618840ea3dd060e6a4926c88f83074"]
  - id: contenedor-privilegiado
    tier: 1
    prompt: |
      ¿Puede un contenedor de Docker lanzado con `--privileged` montar un sistema de archivos (`mount -t tmpfs t /mnt`)? ¿Y uno con las opciones por defecto?

      Respuesta: `si` o `no` para cada uno: `privilegiado;defecto`.
    answers: ["sha256:fe3f6068a19d78f1b263188711e838b9661969d0c02859bf5c25a8e494e1696a"]
  - id: seccomp-por-defecto
    tier: 2
    prompt: |
      Dentro de un contenedor de Docker con el perfil seccomp por defecto, ¿funciona `unshare -U true` (crear un espacio de nombres de usuario)? ¿Y con `--security-opt seccomp=unconfined`?

      Respuesta: `defecto;sin_seccomp`.
    answers: ["sha256:7a4dae830a7a38317563e00b59f9f4bf818813dec10ba189db782363d23d9432"]
  - id: secreto-en-una-capa
    tier: 2
    prompt: |
      Un Dockerfile hace `COPY secreto.txt /secreto.txt` y en la instrucción siguiente `RUN rm /secreto.txt`. ¿Existe `/secreto.txt` en un contenedor creado con esa imagen? ¿Y está su contenido dentro de la imagen exportada con `docker save`?

      Respuesta: `contenedor;imagen`.
    answers: ["sha256:7a4dae830a7a38317563e00b59f9f4bf818813dec10ba189db782363d23d9432"]
  - id: raiz-de-solo-lectura
    tier: 1
    prompt: |
      Con `docker run --read-only --tmpfs /tmp`, ¿se puede crear `/tmp/x`? ¿Y con `--read-only` sin `--tmpfs`?

      Respuesta: `con_tmpfs;sin_tmpfs`.
    answers: ["sha256:fe3f6068a19d78f1b263188711e838b9661969d0c02859bf5c25a8e494e1696a"]
  - id: pod-security-restricted
    tier: 2
    prompt: |
      ¿Qué campos de un pod incumplen el perfil `restricted` de los Pod Security Standards de Kubernetes? a) `runAsNonRoot: true`; b) `allowPrivilegeEscalation: true`; c) `capabilities.add: [NET_BIND_SERVICE]`; d) `hostNetwork: true`; e) `seccompProfile.type: RuntimeDefault`; f) `capabilities.drop: []`.

      Respuesta: las letras que incumplen, en orden.
    answers: ["sha256:0f7265ed83ae13f269e0be5688d7db968f6902d66ab7cdf0fe0e2e95232122f9"]
  - id: networkpolicy
    tier: 2
    prompt: |
      En un espacio de nombres hay una NetworkPolicy que deniega toda entrada a todos los pods, otra que permite a los pods `app=api` recibir de `app=frontend` en TCP 8080, y otra que permite a `app=db` recibir de `app=api` en TCP 5432. ¿Qué conexiones se permiten? a) frontend → api:8080; b) frontend → api:9090; c) batch → api:8080; d) api → frontend:80; e) frontend → db:5432; f) api → db:5432.

      Respuesta: las letras en orden.
    answers: ["sha256:503126878d17fcd6bde7df320ff6eb7c278a1c42f30014a03b17f3dd0c023c1d"]
  - id: rbac
    tier: 2
    prompt: |
      Una cuenta de servicio está ligada a dos roles: uno con los verbos `get`, `list`, `watch` sobre `pods` y `services`, y otro con `get`, `update`, `patch` sobre `deployments`. ¿Qué puede hacer? a) `delete pods`; b) `list services`; c) `patch deployments`; d) `get secrets`; e) `create deployments`.

      Respuesta: las letras permitidas en orden.
    answers: ["sha256:1e0bbd6c686ba050b8eb03ffeedc64fdc9d80947fce821abbe5d6dc8d252c5ac"]
  - id: secretos-de-kubernetes
    tier: 1
    prompt: |
      Un objeto Secret de Kubernetes guarda `password: czNjcjN0LWRlLWxhLWJk`. ¿Qué contraseña es? (Moraleja: un Secret no está cifrado salvo que se active el cifrado en reposo de etcd.)

      Respuesta: la contraseña.
    answers: ["sha256:211e23ef2201906a95642e590471bdddb40a0c5ea148204a1ef97c7e16d8349c"]
  - id: direccionamiento-por-contenido
    tier: 2
    prompt: |
      Las imágenes OCI se identifican por el SHA-256 de su manifiesto. ¿Cuáles son las primeras 16 cifras hexadecimales del resumen del manifiesto `{"schemaVersion":2,"mediaType":"application/vnd.oci.image.manifest.v1+json","layers":[]}` (exactamente esos bytes)?

      Respuesta: 16 cifras hexadecimales.
    answers: ["sha256:417c2dbfe05e55db0052f575cb4e453ab48c9452f43892b4beb5d3dd1b70d6e6"]
  - id: niveles-slsa
    tier: 1
    prompt: |
      En SLSA v1.0, ¿qué nivel del eje de construcción exige además una plataforma endurecida que impida que unas construcciones influyan en otras y que proteja el material de firma de la procedencia?

      Respuesta: el número del nivel.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: responsabilidad-compartida
    tier: 1
    prompt: |
      ¿Quién aplica los parches del sistema operativo de los servidores en cada modelo? 1) IaaS (máquinas virtuales); 2) PaaS (plataforma gestionada); 3) SaaS. Opciones: a) el proveedor; b) el proveedor (el cliente solo su código y su configuración); c) el cliente.

      Respuesta: las letras para 1, 2 y 3, separadas por espacios.
    answers: ["sha256:6d970874d0db767a7058798973f22cf6589601edab57996312f2ef7b56e5584d"]
---

En la nube, el perímetro ya no es un cortafuegos en la puerta del centro de datos: es la **identidad**. Quien tiene una clave con permisos amplios no necesita atacar ninguna máquina, y una sola
política mal escrita expone millones de registros. Los contenedores, por su parte, aíslan mucho menos de lo que parece: comparten el núcleo del anfitrión, y una opción de más (`--privileged`, un montaje
del *socket* de Docker) devuelve el control de la máquina. Este nodo estudia las dos cosas desde el diseño y la auditoría, apoyándose en el aislamiento de [[sec-seguridad-so]] (espacios de nombres,
capacidades, seccomp) y en la red de [[sec-seguridad-redes]].

## Objetivos

Al terminar sabrás:

1. Explicar el modelo de responsabilidad compartida y qué controla el cliente en IaaS, PaaS y SaaS.
2. Leer y evaluar políticas de IAM (denegación explícita, límites de permisos, políticas de recurso) y aplicar el privilegio mínimo a identidades humanas y de máquina.
3. Proteger los metadatos de instancia, el almacenamiento y los registros de auditoría de una cuenta en la nube.
4. Configurar contenedores con el menor privilegio y construir imágenes reproducibles, firmadas y sin secretos.
5. Endurecer un clúster de Kubernetes: RBAC, Pod Security Standards, NetworkPolicy, Secrets y control de admisión.

## Qué debes dominar antes

[[sec-seguridad-so]] (capacidades, seccomp, espacios de nombres), [[sec-seguridad-redes]] (segmentación, confianza cero) y [[sec-metodologia-pentest]] (alcance y autorización: las pruebas en la nube
siguen las políticas de cada proveedor).

> [!question] Test de entrada
> 1. ¿Qué diferencia un contenedor de una máquina virtual en cuanto al núcleo?
> 2. ¿Qué es el principio de privilegio mínimo?
> 3. ¿Por qué base64 no es cifrado?
>
> Respuestas: el contenedor comparte el núcleo del anfitrión (solo se aíslan vistas y recursos); la máquina virtual tiene el suyo, separado por el hipervisor; dar a cada componente solo los permisos
> que necesita para su función y nada más; porque es una codificación reversible sin clave: cualquiera la deshace.

## 1. Responsabilidad compartida

El proveedor protege lo que gestiona y el cliente lo que configura. En **IaaS** (máquinas virtuales) el proveedor responde del hardware, la red física y el hipervisor; el cliente, del sistema operativo
invitado y sus parches, la red virtual, las identidades y los datos. En **PaaS** (bases de datos o plataformas gestionadas) el proveedor parchea también el sistema y el entorno de ejecución, y el cliente
responde de su código, su configuración y sus accesos. En **SaaS** el proveedor gestiona casi todo, pero las cuentas, los permisos y lo que se comparte siguen siendo cosa del cliente. Las brechas en la
nube son, sobre todo, **errores de configuración del cliente**: almacenamiento público, claves expuestas, permisos excesivos.

## 2. Identidad y políticas

**IAM** (AWS; equivalentes en Azure y Google Cloud) decide cada llamada a la API con políticas JSON de declaraciones `Effect` (Allow o Deny), `Action`, `Resource` y `Condition`. La lógica de AWS:

1. Por defecto, todo está **denegado** (denegación implícita).
2. Un **Deny explícito** en cualquier política aplicable (de identidad, de recurso, de la organización —SCP— o un límite de permisos) gana siempre.
3. Si no hay Deny, hace falta un **Allow** aplicable; dentro de una cuenta basta con que lo dé la política de identidad o la de recurso.
4. Un **límite de permisos** (*permissions boundary*) no concede nada: el permiso efectivo es la **intersección** de lo que conceden las políticas de identidad y lo que permite el límite. Las SCP de
   la organización actúan igual sobre cuentas enteras.

Los comodines (`s3:Get*`, `arn:aws:s3:::bucket/*`) hacen las políticas cortas y peligrosas: `Action: "*"` sobre `Resource: "*"` es administrador. Buenas prácticas: identidades humanas con inicio de
sesión federado y MFA, **sin claves de larga duración**; cargas de trabajo con **roles** y credenciales temporales (y, entre nubes o desde CI, federación OIDC en lugar de secretos); políticas mínimas
generadas a partir del uso real; análisis de acceso externo; y un registro de auditoría (CloudTrail) inmutable y enviado a otra cuenta.

## 3. Metadatos de instancia, almacenamiento y registros

Cada máquina virtual consulta en `169.254.169.254` sus metadatos y las **credenciales temporales de su rol**. Con IMDSv1 bastaba un GET: una vulnerabilidad SSRF en una aplicación (que hace peticiones a
URL que controla el atacante) permitía robar esas credenciales; así ocurrió la brecha de Capital One en 2019. **IMDSv2** exige primero un `PUT` que devuelve un token de sesión (con la cabecera
`X-aws-ec2-metadata-token-ttl-seconds`, hasta 6 horas) y lo pide en cada GET; una SSRF típica no puede hacer PUT con cabeceras propias, y la respuesta del PUT sale con un **límite de saltos** IP pequeño,
para que no llegue más allá de la propia instancia (un contenedor detrás de un puente necesita que se suba en uno). Se exige IMDSv2 en toda la cuenta.

**Almacenamiento**: bloqueo de acceso público a nivel de cuenta, cifrado con claves gestionadas (KMS) y políticas de recurso que exijan TLS y la propia organización. **Red**: grupos de seguridad mínimos,
puntos de enlace privados para los servicios gestionados, nada de bases de datos con IP pública.

## 4. Contenedores

Un contenedor es un proceso con **espacios de nombres** (PID, red, montaje, usuario…), límites de **cgroups**, un conjunto reducido de **capacidades** y un perfil **seccomp** que bloquea llamadas al sistema
peligrosas (el perfil por defecto de Docker impide, entre otras, crear espacios de nombres de usuario o cargar módulos). Lo que rompe el aislamiento:

- `--privileged`: todas las capacidades, sin seccomp ni AppArmor, acceso a los dispositivos. Un contenedor privilegiado puede montar el disco del anfitrión.
- Montar el *socket* de Docker (`/var/run/docker.sock`) o rutas sensibles del anfitrión: quien habla con el demonio de Docker es root en la máquina.
- `--pid=host`, `--net=host`, capacidades como `CAP_SYS_ADMIN`, ejecutarse como root dentro sin espacio de nombres de usuario.

Configuración mínima: usuario sin privilegios (`USER` en la imagen), `--cap-drop=ALL` y añadir solo lo necesario, `--security-opt no-new-privileges`, sistema de archivos raíz de **solo lectura** con
`tmpfs` donde haga falta escribir, límites de memoria y de procesos, y modos *rootless* (Docker o Podman sin root) cuando se pueda. Para cargas no confiables, aislamiento más fuerte: gVisor (núcleo en
espacio de usuario) o microVM (Firecracker, Kata). NIST SP 800-190 recoge las amenazas y contramedidas por capa (imagen, registro, orquestador, contenedor, anfitrión).

## 5. Imágenes y cadena de suministro

- **Capas**: cada instrucción del Dockerfile crea una capa inmutable. Un archivo copiado en una capa y borrado en la siguiente **sigue dentro de la imagen** (y de cualquier copia que se haya distribuido).
  Los secretos de construcción se pasan con montajes de secretos de BuildKit (`RUN --mount=type=secret`) y las construcciones de varias etapas dejan fuera las herramientas de compilación.
- **Bases mínimas** (distroless, Alpine, imágenes *scratch* para binarios estáticos) y referencias por **resumen** (`imagen@sha256:…`), no por etiquetas que cambian: las imágenes OCI se identifican por
  el SHA-256 de su manifiesto (direccionamiento por contenido).
- **Escaneo** de vulnerabilidades (Trivy, Grype) y **SBOM** (SPDX, CycloneDX) para saber qué lleva cada imagen.
- **Firma y procedencia**: cosign (Sigstore) firma imágenes con identidades efímeras y registra las firmas en un registro de transparencia (Rekor). **SLSA** gradúa la confianza en la construcción: en el
  eje de construcción, L1 exige procedencia, L2 una plataforma alojada que la firme y L3 además una plataforma endurecida en la que unas construcciones no puedan influir en otras.

## 6. Kubernetes

- **API y etcd**: el servidor de la API es la puerta; etcd guarda todo el estado (incluidos los Secrets) y debe ir cifrado y accesible solo desde el plano de control.
- **RBAC**: `Role`/`ClusterRole` con verbos (`get`, `list`, `watch`, `create`, `update`, `patch`, `delete`) sobre recursos, ligados a usuarios o cuentas de servicio con `RoleBinding`. Los permisos solo
  se **suman**: no hay denegaciones. Peligros: `*` en verbos o recursos, permiso para crear pods (quien crea pods puede montar cualquier Secret del espacio de nombres o ejecutar como privilegiado si
  nada lo impide), `escalate`, `bind` e `impersonate`.
- **Pod Security Standards**: tres perfiles. `privileged` (sin restricciones), `baseline` (impide lo que da escalada conocida: `hostNetwork`, `hostPID`, contenedores privilegiados, montajes `hostPath`,
  capacidades fuera de una lista) y `restricted` (además, ejecutar sin root, `allowPrivilegeEscalation: false`, quitar todas las capacidades salvo, si acaso, `NET_BIND_SERVICE`, y un perfil seccomp
  `RuntimeDefault` o `Localhost`). Se aplican por espacio de nombres con la admisión de Pod Security; políticas más finas con Kyverno u OPA Gatekeeper.
- **NetworkPolicy**: sin ninguna, todos los pods se hablan con todos. Una política que selecciona un pod lo aísla en esa dirección y solo deja pasar lo que alguna política permita; lo habitual es denegar
  toda la entrada (y la salida) por defecto y abrir flujo a flujo por etiquetas y puertos. Necesita un complemento de red que la aplique (Calico, Cilium).
- **Secrets**: por defecto se guardan en base64 en etcd, **sin cifrar**. Hay que activar el cifrado en reposo (con un proveedor KMS), limitar quién los lee con RBAC y, mejor aún, traerlos de un gestor
  externo. Los *tokens* de las cuentas de servicio deben ser proyectados y de vida corta, y no montarse en los pods que no hablan con la API (`automountServiceAccountToken: false`).

## 7. Comprobar con un programa

Un evaluador de políticas de IAM con comodines, Deny explícito y límite de permisos, y una comprobación del perfil `restricted` (con datos distintos de los ejercicios):

```python
# Evaluación de políticas IAM (Deny explícito, Allow, límite de permisos) y comprobación de Pod Security «restricted»
import fnmatch


def permitido(politicas, accion, recurso):
    aplicables = [p for p in politicas
                  if fnmatch.fnmatchcase(accion, p["accion"]) and fnmatch.fnmatchcase(recurso, p["recurso"])]
    if any(p["efecto"] == "Deny" for p in aplicables):
        return False
    return any(p["efecto"] == "Allow" for p in aplicables)


identidad = [
    {"efecto": "Allow", "accion": "dynamodb:*", "recurso": "arn:aws:dynamodb:eu-west-1:111122223333:table/pedidos"},
    {"efecto": "Deny", "accion": "dynamodb:Delete*", "recurso": "*"},
]
limite = [{"efecto": "Allow", "accion": "dynamodb:Get*", "recurso": "*"},
          {"efecto": "Allow", "accion": "dynamodb:Query", "recurso": "*"}]
tabla = "arn:aws:dynamodb:eu-west-1:111122223333:table/pedidos"
for accion in ("dynamodb:GetItem", "dynamodb:PutItem", "dynamodb:DeleteTable", "dynamodb:Query"):
    solo_identidad = permitido(identidad, accion, tabla)
    con_limite = solo_identidad and permitido(limite, accion, tabla)
    print(f"{accion:22} identidad: {solo_identidad!s:5}  con límite: {con_limite}")


def problemas_restricted(c):
    sc = c.get("securityContext", {})
    p = []
    if sc.get("runAsNonRoot") is not True:
        p.append("runAsNonRoot")
    if sc.get("allowPrivilegeEscalation") is not False:
        p.append("allowPrivilegeEscalation")
    caps = sc.get("capabilities", {})
    if "ALL" not in caps.get("drop", []):
        p.append("capabilities.drop")
    if set(caps.get("add", [])) - {"NET_BIND_SERVICE"}:
        p.append("capabilities.add")
    if sc.get("seccompProfile", {}).get("type") not in ("RuntimeDefault", "Localhost"):
        p.append("seccompProfile")
    return p


bueno = {"securityContext": {"runAsNonRoot": True, "allowPrivilegeEscalation": False,
                             "capabilities": {"drop": ["ALL"]}, "seccompProfile": {"type": "RuntimeDefault"}}}
malo = {"securityContext": {"capabilities": {"add": ["SYS_ADMIN"]}}}
print("bueno:", problemas_restricted(bueno))
print("malo:", problemas_restricted(malo))
```

Salida:

```
dynamodb:GetItem       identidad: True   con límite: True
dynamodb:PutItem       identidad: True   con límite: False
dynamodb:DeleteTable   identidad: False  con límite: False
dynamodb:Query         identidad: True   con límite: True
bueno: []
malo: ['runAsNonRoot', 'allowPrivilegeEscalation', 'capabilities.drop', 'capabilities.add', 'seccompProfile']
```

Prueba en tu máquina, con Docker, lo que hace `--privileged`, `--read-only` o `--cap-drop=ALL` antes de fiarte de lo que dice la documentación.

## 8. Errores típicos

- Claves de acceso de larga duración en repositorios, imágenes o variables de entorno de CI.
- Políticas con `*`; roles de administrador "temporales" que se quedan.
- IMDSv1 activo; almacenamiento público; registros de auditoría que el atacante puede borrar.
- Contenedores privilegiados, como root, con el *socket* de Docker montado.
- Secretos en capas de la imagen; etiquetas `latest` en producción.
- Clústeres sin NetworkPolicy, con Secrets sin cifrar en etcd y cuentas de servicio con permisos de crear pods.

## 9. Resumen

- Responsabilidad compartida: el cliente siempre responde de identidades, configuración y datos.
- IAM: denegación implícita, Deny explícito gana, intersección con límites y SCP; roles y credenciales temporales; auditoría fuera de alcance del atacante.
- IMDSv2 contra SSRF; almacenamiento sin acceso público y cifrado.
- Contenedores: comparten núcleo; sin privilegios, sin capacidades, seccomp, solo lectura, sin root.
- Imágenes: capas inmutables (los secretos borrados siguen ahí), resúmenes, SBOM, firmas, SLSA.
- Kubernetes: RBAC aditivo, Pod Security Standards, NetworkPolicy por defecto denegar, Secrets cifrados en reposo.

## Repaso: lo que debe quedarte dentro de un mes

1. En la nube, la identidad es el perímetro.
2. Un Deny explícito gana; un límite de permisos solo resta.
3. Un contenedor privilegiado es root en el anfitrión.
4. Lo que entró en una capa de la imagen no sale borrándolo después.
5. En Kubernetes, sin NetworkPolicy todo habla con todo, y un Secret es solo base64.

## Siguiente

`sec-gestion-riesgo` (cómo se decide qué proteger y con cuánto esfuerzo) y `proy-sec-ids`.
