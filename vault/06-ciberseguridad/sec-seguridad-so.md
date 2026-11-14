---
id: sec-seguridad-so
title: "Seguridad del sistema operativo: monitor de referencia, control de acceso (DAC, MAC, RBAC), permisos y ACL de Unix, setuid y capacidades de Linux, Bell-LaPadula y Biba, aislamiento y endurecimiento del núcleo"
area: ciberseguridad
trunk_level: 13
prerequisites: [sys-sistemas-operativos, sys-kernel-linux, sec-explotacion-binaria]
academic_sources:
  - "Bos, H. Operating Systems & Virtualisation Security Knowledge Area, v1.0.1. CyBOK, 2021."
  - "Saltzer, J. H.; Schroeder, M. D. The Protection of Information in Computer Systems. Proceedings of the IEEE 63(9), 1975; Lampson, B. Protection. Princeton Symposium, 1971 (reimpreso en ACM OSR 8(1), 1974)."
  - "Jaeger, T. Operating System Security. Morgan & Claypool (Synthesis Lectures on Information Security, Privacy and Trust), 2008; Anderson, R. Security Engineering, 3ª ed. Wiley, 2020 (caps. 6 y 9)."
  - "Páginas del manual de Linux: credentials(7), capabilities(7), acl(5), seccomp(2), namespaces(7), user_namespaces(7), path_resolution(7); Bell, D. E.; LaPadula, L. J. MITRE, 1973-1976; Biba, K. J. MITRE TR-3153, 1977."
exercises:
  - id: permisos-en-octal
    tier: 1
    prompt: |
      ¿Qué modo octal (con el dígito especial delante) corresponde a `-rwsr-x---`?

      Respuesta: 4 cifras.
    answers: ["sha256:a360748ed90aa02c3f79827f821595e497abbd2ea092c7d8fe852ddcb1008393"]
  - id: umask
    tier: 1
    prompt: |
      Con `umask 027`, ¿qué permisos reciben un archivo creado con modo 0666 y un directorio creado con 0777?

      Respuesta: `archivo;directorio` en octal de 3 cifras.
    answers: ["sha256:75f5d32a2f0fb1e57ca7dabbeb2eaf01be7ba7dfd51b95cfcdb02567284e371e"]
  - id: una-sola-clase
    tier: 1
    prompt: |
      `f` es de bob, grupo devs, modo 0604. alice está en devs. ¿Puede alice leerlo?

      Respuesta: `si` o `no`.
    answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
  - id: bit-sticky
    tier: 1
    prompt: |
      En un directorio con modo 1777 (como /tmp), ¿puede alice borrar un archivo de bob?

      Respuesta: `si` o `no`.
    answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
  - id: borrar-sin-permisos
    tier: 2
    prompt: |
      Un archivo de bob con modo 0000 está en un directorio de alice con modo 0700. ¿Puede alice borrarlo?

      Respuesta: `si` o `no`.
    answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
  - id: mascara-de-la-acl
    tier: 2
    prompt: |
      Una ACL tiene `user::rw-`, `user:alice:rwx`, `group::r--`, `mask::r--`, `other::---`. ¿Qué permisos efectivos tiene alice?

      Respuesta: en formato `rwx` (con guiones).
    answers: ["sha256:61d567fc0ab17a454581bb6f59f7c58345bce0b8ad1edbb22cbadbb95ad239c7"]
  - id: identidades-de-setuid
    tier: 2
    prompt: |
      alice (uid 1000) ejecuta un programa de root con el bit setuid. ¿Qué devuelve `getresuid` dentro?

      Respuesta: `real;efectivo;guardado`.
    answers: ["sha256:5ae7bf4504039cbe10c427cf70ec6cb1603d0ede60694185bbabb7f21dc7b655"]
  - id: capacidades-de-docker
    tier: 2
    prompt: |
      Docker arranca los contenedores con el conjunto de capacidades 0x00000000a80425fb (decodifícalo con `capsh --decode`). ¿Cuántas capacidades son?

      Respuesta: un número.
    answers: ["sha256:8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]
  - id: capacidades-de-archivo
    tier: 2
    prompt: |
      Un binario tiene `cap_net_bind_service+ep` y lo ejecuta alice (sin capacidades heredables ni ambientales, conjunto límite de Docker). ¿Qué valor tiene `CapEff` en `/proc/self/status`?

      Respuesta: las 16 cifras hexadecimales.
    answers: ["sha256:d8ee316442f73f2422a687e484304700eca2ad0e23b463c8f6e43358ba2de3c0"]
  - id: bell-lapadula
    tier: 2
    prompt: |
      En Bell-LaPadula, un sujeto (Secreto, {NUC}) y un objeto (Confidencial, {NUC, EUR}). ¿Puede leerlo? ¿Puede escribir en él?

      Respuesta: `si` o `no` para leer y escribir: `leer;escribir`.
    answers: ["sha256:a9b7b51529b9acd69dc6e5bbb878ca17633ddbc94041cbcc2ac0e96141eb4a2c"]
  - id: biba
    tier: 2
    prompt: |
      En Biba (integridad), un sujeto de integridad Secreto y un objeto de integridad Confidencial (sin categorías). ¿Puede leerlo? ¿Puede escribir en él?

      Respuesta: `leer;escribir`.
    answers: ["sha256:7a4dae830a7a38317563e00b59f9f4bf818813dec10ba189db782363d23d9432"]
  - id: filtro-seccomp
    tier: 3
    prompt: |
      Un proceso instala un filtro seccomp-bpf que comprueba la arquitectura (x86-64 o muerte), permite `read`, `write` y `exit_group` y para todo lo demás devuelve `SECCOMP_RET_ERRNO | EPERM`. ¿Qué devuelve después `openat` y con qué `errno`?

      Respuesta: `valor;ERRNO` (por ejemplo `-1;ENOENT`).
    answers: ["sha256:05e0d32d00016a34a5774c791e96aa85308ec6b42f51ff200332a871dff2f632"]
  - id: entropia-de-aslr
    tier: 3
    prompt: |
      Una dirección tiene 16 bits de aleatoriedad. Un atacante prueba direcciones al azar hasta acertar. ¿Cuántos intentos se esperan si el servicio se re-aleatoriza tras cada fallo, y cuántos si no cambia (servidor con `fork`) y el atacante no repite?

      Respuesta: `con;sin`.
    answers: ["sha256:fd8b20b69bc22e839b46116f31d3e2afb6d92a543428beb6e9ec7cc577858bb5"]
  - id: espacio-de-nombres-de-usuario
    tier: 3
    prompt: |
      alice ejecuta `unshare --user --map-root-user`. Dentro, ¿qué da `id -u`, y puede leer un archivo 0600 del root de fuera?

      Respuesta: `uid;si` o `uid;no`.
    answers: ["sha256:53d818d34289db84118297c928fc11f6a2994c1a9f74a3f741d01ee3bb70cc4e"]
  - id: principios-de-saltzer-y-schroeder
    tier: 1
    prompt: |
      ¿Qué principio de Saltzer y Schroeder aplica cada caso? a) un demonio abandona root nada más abrir el puerto 80; b) el cortafuegos deniega todo salvo lo listado; c) se comprueba cada acceso, no solo el primero; d) la seguridad no depende de que el diseño sea secreto. Elige entre: `privilegio-minimo`, `valores-seguros-por-defecto`, `mediacion-completa`, `diseno-abierto`, `economia-de-mecanismo`, `separacion-de-privilegios`.

      Respuesta: los cuatro en orden, separados por espacios.
    answers: ["sha256:f8ea356cc652683d4228f0e19aadb38f980afe6b3b30b883a0cde625148f3c01"]
  - id: no-new-privs
    tier: 3
    prompt: |
      alice ejecuta el mismo programa setuid de root tras `prctl(PR_SET_NO_NEW_PRIVS, 1)` (por ejemplo con `setpriv --no-new-privs`). ¿Qué devuelve `getresuid`?

      Respuesta: `real;efectivo;guardado`.
    answers: ["sha256:c12f10743e5b5e134867f62e818beb862df336c2808597be0249bbd76155dc22"]
---

El sistema operativo es la frontera de seguridad sobre la que se apoya todo lo demás: decide qué proceso puede leer qué archivo, qué memoria es de quién y quién puede hacer qué con el hardware. Si un atacante
consigue ejecutar código en un proceso, lo que pueda hacer después lo decide el SO. Este nodo estudia esa frontera desde el lado de quien la **diseña, configura y audita**: los principios clásicos, los
modelos de control de acceso, cómo los implementa Linux (permisos, ACL, setuid, capacidades, seccomp, espacios de nombres) y cómo se endurece el núcleo. Continúa [[sys-sistemas-operativos]] y
[[sys-kernel-linux]], y es la base de [[lab-sec-hardening]] y de la seguridad de contenedores.

## Objetivos

Al terminar sabrás:

1. Explicar el monitor de referencia, la base de computación de confianza y los principios de Saltzer y Schroeder, y reconocerlos (o su ausencia) en sistemas reales.
2. Razonar con exactitud sobre permisos de Unix: clases, `umask`, bits especiales, directorios, ACL POSIX con máscara.
3. Entender las identidades de un proceso (real, efectiva, guardada), los programas setuid y sus riesgos, y el modelo de capacidades de Linux con su fórmula de `execve`.
4. Aplicar los modelos de control de acceso obligatorio (Bell-LaPadula, Biba, Type Enforcement de SELinux).
5. Configurar y auditar el aislamiento: seccomp-bpf, espacios de nombres, cgroups, y las defensas del núcleo (KASLR, SMEP/SMAP, arranque seguro).

## Qué debes dominar antes

[[sys-sistemas-operativos]] (procesos, memoria virtual, llamadas al sistema), [[sys-kernel-linux]] (cómo entra el núcleo) y [[sec-explotacion-binaria]] (por qué un error de memoria da control a un atacante).

> [!question] Test de entrada
> 1. ¿Qué diferencia hay entre modo usuario y modo núcleo?
> 2. ¿Qué hace la llamada `execve`?
> 3. ¿Por qué un proceso no puede leer la memoria de otro?
>
> Respuestas: en modo usuario el procesador prohíbe las instrucciones privilegiadas y el acceso a la memoria del núcleo, y para pedir algo hay que entrar al núcleo con una llamada al sistema; sustituye la imagen
> del proceso por un programa nuevo (manteniendo el PID y, salvo excepciones, los descriptores abiertos); porque cada proceso tiene su propio espacio de direcciones virtual y sus tablas de páginas no
> apuntan a los marcos del otro.

## 1. Principios

**Monitor de referencia** (informe Anderson, 1972): el componente que decide cada acceso de un sujeto a un objeto debe ser **siempre invocado** (mediación completa), **a prueba de manipulación** y
**lo bastante pequeño para verificarse**. En un SO, el núcleo hace de monitor: cada `open`, `kill` o `mmap` pasa por él. La **base de computación de confianza** (TCB) es todo aquello de lo que depende la
seguridad: el núcleo, los programas setuid, el cargador de arranque, el firmware. Cuanto más grande, más superficie de ataque: el código fuente del núcleo Linux supera los treinta millones de líneas (aunque cada configuración compila solo una parte); el de seL4 (verificado
formalmente, [[sys-verificacion-formal]]) unas diez mil.

**Principios de Saltzer y Schroeder** (1975), que se siguen citando porque los fallos reales casi siempre violan alguno:

| Principio | Qué dice | Ejemplo |
|---|---|---|
| Economía de mecanismo | Diseño pequeño y simple | Un servicio que no necesita un analizador XML no lo lleva |
| Valores seguros por defecto | Denegar salvo permiso explícito | Cortafuegos con política DROP |
| Mediación completa | Comprobar **cada** acceso | No guardar en caché un permiso que pudo revocarse |
| Diseño abierto | La seguridad no depende del secreto del diseño | Principio de Kerckhoffs en criptografía |
| Separación de privilegios | Dos condiciones mejor que una | Dos personas para una operación crítica |
| Privilegio mínimo | Cada componente con lo mínimo | Un demonio abre el puerto 80 y abandona root |
| Mínimo mecanismo común | Compartir lo menos posible entre usuarios | Directorios temporales por usuario |
| Aceptabilidad psicológica | Si es incómodo, se esquivará | `sudo` con un registro, no contraseñas compartidas |

## 2. Modelos de control de acceso

Lampson (1971) describió la protección como una **matriz de acceso**: filas = sujetos, columnas = objetos, celdas = derechos. Guardada por columnas es una **lista de control de acceso** (ACL, junto
al objeto: Unix, Windows); guardada por filas es una lista de **capacidades** (fichas que lleva el sujeto: los descriptores de archivo de Unix, Capsicum de FreeBSD, seL4). Con ACL es fácil saber quién puede
acceder a un objeto y difícil revocar todo lo de un sujeto; con capacidades, al revés.

- **DAC** (discrecional): el propietario decide los permisos de sus objetos. Es el modelo por defecto de Unix y Windows. Su debilidad: un programa que ejecuta el usuario (un troyano) actúa con todos sus permisos.
- **MAC** (obligatorio): una política central que ni el propietario puede saltarse. SELinux, AppArmor, el control de integridad de Windows.
- **RBAC** (por roles; Ferraiolo y Kuhn, 1992; estándar NIST/ANSI 2004): los permisos se asignan a roles y los usuarios reciben roles. Es el modelo de casi todos los sistemas empresariales y de Kubernetes.

## 3. Permisos de Unix con precisión

Cada proceso tiene identidades: **real** (quién lo lanzó), **efectiva** (la que se usa para comprobar permisos), **guardada** (para poder volver a ella) y, en Linux, la del sistema de archivos. Cada archivo
tiene propietario, grupo y 12 bits de modo: `rwx` para propietario, grupo y otros, más **setuid** (4000), **setgid** (2000) y **sticky** (1000). `-rwsr-x---` es 4750.

**Comprobación de acceso** (path_resolution(7)): si el uid efectivo es 0, casi todo se permite; si no, se elige **una sola clase**: si el proceso es el propietario, solo cuentan los bits del propietario; si
no, y pertenece al grupo, solo los del grupo; si no, los de otros. Por eso un archivo 0604 de bob:devs **no** lo puede leer alice si está en devs, aunque cualquier desconocido sí: la clase de grupo,
que no tiene `r`, la excluye. Para llegar al archivo hace falta además `x` en cada directorio del camino.

- **Directorios**: `r` lista, `w` crea y borra entradas, `x` atraviesa. Borrar un archivo es modificar el **directorio**: alice puede borrar un archivo 0000 de bob si está en un directorio suyo con `w` y `x`.
- **Sticky** en un directorio (`/tmp`, 1777): solo el propietario del archivo, el del directorio o root pueden borrar o renombrar.
- **umask**: se quita de los permisos que pide `open`/`mkdir`. Con 027, un archivo pedido con 0666 queda 0640 y un directorio 0777 queda 0750.
- **ACL POSIX** (acl(5)): entradas para usuarios y grupos concretos; las entradas de usuario con nombre, de grupo y de grupo con nombre se limitan con la **máscara**. Con `user:alice:rwx` y `mask::r--`,
  alice tiene solo `r--` (`getfacl` lo muestra como `#effective:r--`). `chmod g=…` sobre un archivo con ACL cambia la máscara, no el grupo.

**setuid**: al ejecutar un programa con el bit setuid, `execve` pone el uid efectivo y el guardado al propietario; el real sigue siendo el de quien lo lanzó. Un programa setuid de root ejecutado por
uid 1000 tiene (1000, 0, 0). Es la forma clásica de dar a un usuario una operación privilegiada concreta (`passwd`, `ping` en sistemas antiguos), y una fuente histórica de escaladas: todo lo que el
programa lee del usuario (argumentos, variables de entorno, archivos, señales) es entrada hostil. El cargador dinámico entra en **modo de ejecución segura** (`AT_SECURE`) e ignora `LD_PRELOAD` y
`LD_LIBRARY_PATH`, pero el programa debe además limpiar el entorno, abandonar el privilegio en cuanto no lo necesite (`setresuid` de los tres) y comprobar que lo ha abandonado.

## 4. Capacidades de Linux

Linux divide el poder de root en unas 40 **capacidades** (capabilities(7)): `CAP_NET_BIND_SERVICE` (puertos < 1024), `CAP_SYS_ADMIN` (un cajón de sastre casi equivalente a root), `CAP_DAC_OVERRIDE`
(saltarse permisos), etc. Cada hilo tiene cinco conjuntos: **permitido** P, **efectivo** E, **heredable** I, **límite** B y **ambiental** A. Un archivo ejecutable puede llevar capacidades de archivo
(F(perm), F(inh) y un bit efectivo). Al hacer `execve`:

```
P'(ambiental) = (archivo privilegiado) ? 0 : P(ambiental)
P'(permitido) = (P(heredable) & F(heredable)) | (F(permitido) & P(límite)) | P'(ambiental)
P'(efectivo)  = F(efectivo) ? P'(permitido) : P'(ambiental)
P'(heredable) = P(heredable)
```

Con `setcap cap_net_bind_service+ep servidor`, cualquier usuario que lo ejecute obtiene **solo** esa capacidad (CapEff = 0x400, el bit 10), en vez de un setuid de root. Docker arranca los contenedores
con 14 capacidades por defecto (0xa80425fb) y quita el resto del conjunto límite.

**no_new_privs** (`prctl(PR_SET_NO_NEW_PRIVS)`): una vez activado, ni setuid ni las capacidades de archivo conceden nada en `execve`, y no se puede desactivar. Es requisito para que un proceso sin
privilegios instale un filtro seccomp, y systemd lo ofrece como `NoNewPrivileges=yes`.

## 5. Control de acceso obligatorio

**Bell-LaPadula** (confidencialidad, entorno militar): niveles (No clasificado < Confidencial < Secreto < Alto secreto) y categorías; una etiqueta **domina** a otra si su nivel es mayor o igual y sus
categorías incluyen las de la otra. Propiedad simple: **no leer hacia arriba** (el sujeto debe dominar al objeto). Propiedad *: **no escribir hacia abajo** (el objeto debe dominar al sujeto), para
que un troyano no pueda copiar un secreto a un archivo público. Un sujeto (Secreto, {NUC}) no puede leer (Confidencial, {NUC, EUR}): le falta la categoría EUR. Tampoco puede escribir en él, porque
Confidencial no domina a Secreto.

**Biba** (integridad, el dual): **no leer hacia abajo** (no contaminarse con datos poco fiables) y **no escribir hacia arriba**. El control de integridad de Windows (niveles bajo, medio, alto y sistema)
aplica la parte de "no escribir hacia arriba": un navegador en nivel bajo no puede modificar archivos de nivel medio.

**SELinux** implementa **Type Enforcement**: cada proceso tiene un dominio (`httpd_t`) y cada archivo un tipo (`httpd_sys_content_t`); solo se permite lo que una regla `allow httpd_t
httpd_sys_content_t:file { read open getattr };` autoriza explícitamente. Un servidor web comprometido no puede leer `user_home_t` aunque los permisos DAC lo dejaran. **AppArmor** hace algo parecido con
perfiles basados en rutas, más fáciles de escribir y menos expresivos.

## 6. Aislamiento

- **seccomp-bpf** (seccomp(2)): un programa BPF que el núcleo ejecuta en cada llamada al sistema con su número, su arquitectura y sus argumentos, y que devuelve permitir, error (`SECCOMP_RET_ERRNO`),
  matar o notificar a un supervisor. Hay que comprobar **la arquitectura** primero (los números de llamada cambian entre x86-64, i386 y x32) y preferir listas de permitidos. Docker, Chrome, OpenSSH y
  systemd (`SystemCallFilter=`) lo usan.
- **Espacios de nombres** (namespaces(7)): montaje, UTS, IPC, PID, red, usuario, cgroup y tiempo. En un espacio de **usuario** propio, un proceso sin privilegios es root (uid 0) **solo para los recursos de
  ese espacio**: no puede leer un archivo 0600 del root real. Mucho código del núcleo se ha vuelto alcanzable para usuarios sin privilegios por esta vía, y varias distribuciones lo restringen.
- **cgroups** limitan recursos (CPU, memoria, procesos), lo que evita denegaciones de servicio entre inquilinos.
- **chroot no es una frontera de seguridad**: un proceso con root dentro puede salir. Un contenedor = espacios de nombres + cgroups + capacidades reducidas + seccomp + MAC, pero **comparte el núcleo**: un
  fallo del núcleo rompe el aislamiento. Una máquina virtual tiene una frontera más pequeña (el hipervisor). Se amplía en `sec-cloud-contenedores`.

## 7. Endurecimiento del núcleo y del arranque

- **KASLR** (dirección aleatoria del núcleo), **SMEP/SMAP** (el núcleo no ejecuta ni lee memoria de usuario sin pedirlo; PXN/PAN en ARM), páginas W^X, `CONFIG_HARDENED_USERCOPY`, módulos firmados,
  **lockdown** (ni root puede modificar el núcleo en ejecución).
- **Entropía**: con b bits aleatorios, si cada intento fallido vuelve a aleatorizar (el proceso se reinicia), el número esperado de intentos es 2ᵇ; si no (un servidor que hace `fork` conserva la disposición)
  y el atacante no repite, (2ᵇ + 1)/2. Por eso la re-aleatorización tras un fallo importa, y por eso un fallo que **filtra** una dirección anula el ASLR.
- **Arranque seguro** (UEFI Secure Boot: cada etapa verifica la firma de la siguiente) y **arranque medido** (cada etapa registra el hash de la siguiente en el TPM, que puede **atestiguarlo** a un tercero).
- **Auditoría**: `auditd` registra llamadas al sistema y accesos según reglas; sin registros no hay investigación posible (`sec-forense-logs`).

**Carreras de comprobación y uso (TOCTOU)**: `if (access(ruta, W_OK) == 0) fd = open(ruta, O_WRONLY);` en un programa setuid es vulnerable: entre las dos llamadas un atacante cambia `ruta` por un enlace
simbólico a `/etc/shadow`. La comprobación y el uso deben ser la misma operación: abandonar privilegios y hacer `open` (el núcleo comprueba con la identidad real), o `openat` con `O_NOFOLLOW`/`openat2`
con `RESOLVE_BENEATH`. Linux protege además los directorios con sticky con `fs.protected_symlinks`.

## 8. Comprobar con un programa

Un modelo de la comprobación de acceso de Unix con ACL y sticky, de la fórmula de capacidades y del orden de Bell-LaPadula, contra los casos del nodo:

```python
# Modelo de la comprobación de acceso de Linux (clases, ACL con máscara, sticky), capacidades en execve y Bell-LaPadula
R, W, X = 4, 2, 1

def clase(proc, f):
    if proc["uid"] == f["uid"]:
        return "propietario"
    if f["gid"] in proc["grupos"] or any(g in proc["grupos"] for g in f.get("acl_grupos", {})):
        return "grupo"
    return "otros"

def permite(proc, f, bit):
    if proc["uid"] == 0:
        return True
    acl = f.get("acl_usuarios", {})
    if proc["uid"] == f["uid"]:
        return bool((f["modo"] >> 6) & bit)
    if proc["uid"] in acl:                              # usuario con nombre: limitado por la máscara
        return bool(acl[proc["uid"]] & f.get("mascara", 7) & bit)
    if f["gid"] in proc["grupos"]:
        return bool(((f["modo"] >> 3) & 7) & f.get("mascara", 7) & bit)
    return bool(f["modo"] & bit)

def puede_borrar(proc, d, f):
    if not (permite(proc, d, W) and permite(proc, d, X)):
        return False
    if d["modo"] & 0o1000:                              # sticky
        return proc["uid"] in (0, f["uid"], d["uid"])
    return True

alice = {"uid": 1000, "grupos": [1000, 1002]}
f3 = {"uid": 1001, "gid": 1002, "modo": 0o604}
print("0604 bob:devs, ¿lee alice?", permite(alice, f3, R))
print("¿lee un desconocido?", permite({"uid": 1003, "grupos": [1003]}, f3, R))
tmp = {"uid": 0, "gid": 0, "modo": 0o1777}
print("/tmp, ¿borra alice lo de bob?", puede_borrar(alice, tmp, {"uid": 1001}))
suyo = {"uid": 1000, "gid": 1000, "modo": 0o700}
print("directorio de alice, ¿borra un 0000 de bob?", puede_borrar(alice, suyo, {"uid": 1001, "modo": 0}))
f6 = {"uid": 1001, "gid": 1002, "modo": 0o640, "acl_usuarios": {1000: 7}, "mascara": R}
print("ACL user:alice:rwx con mask::r--, ¿escribe alice?", permite(alice, f6, W), "¿lee?", permite(alice, f6, R))

def execve_caps(P, F, archivo_privilegiado=True):
    amb = 0 if archivo_privilegiado else P["amb"]
    perm = (P["inh"] & F["inh"]) | (F["perm"] & P["bnd"]) | amb
    return perm if F["ef"] else amb

docker = 0xa80425fb
print("capacidades de Docker:", bin(docker).count("1"))
print("CapEff con cap_net_bind_service+ep: %016x" % execve_caps({"inh": 0, "bnd": docker, "amb": 0}, {"inh": 0, "perm": 1 << 10, "ef": True}))

NIVEL = {"U": 0, "C": 1, "S": 2, "TS": 3}
def domina(a, b):
    return NIVEL[a[0]] >= NIVEL[b[0]] and set(b[1]) <= set(a[1])
s, o = ("S", {"NUC"}), ("C", {"NUC", "EUR"})
print("BLP leer:", domina(s, o), "escribir:", domina(o, s))
```

Salida:

```
0604 bob:devs, ¿lee alice? False
¿lee un desconocido? True
/tmp, ¿borra alice lo de bob? False
directorio de alice, ¿borra un 0000 de bob? True
ACL user:alice:rwx con mask::r--, ¿escribe alice? False ¿lee? True
capacidades de Docker: 14
CapEff con cap_net_bind_service+ep: 0000000000000400
BLP leer: False escribir: False
```

Compruébalo en un contenedor desechable con `stat`, `setfacl`/`getfacl`, `setpriv`, `setcap` y `capsh --decode`.

## 9. Errores típicos

- Pensar que los permisos de grupo se suman a los de otros (solo cuenta una clase).
- Olvidar que borrar depende del directorio, y que `chmod 000` no protege un archivo en un directorio ajeno con escritura.
- Programas setuid que confían en el entorno, en rutas relativas o en `access()` antes de `open()` (TOCTOU), o que abandonan solo el uid efectivo y no el guardado.
- Dar `CAP_SYS_ADMIN` "porque funciona": es casi root. Contenedores con `--privileged`.
- Filtros seccomp que no comprueban la arquitectura o que usan listas de prohibidos.
- Tratar `chroot` o un contenedor como frontera fuerte frente a un atacante con root dentro.
- Desactivar SELinux ante el primer error en vez de leer el registro de denegaciones (`ausearch -m AVC`, `audit2why`).

## 10. Resumen

- Monitor de referencia (siempre invocado, inalterable, verificable), TCB pequeña, principios de Saltzer y Schroeder.
- Matriz de acceso: ACL frente a capacidades; DAC, MAC y RBAC.
- Unix: una sola clase, umask, setuid/setgid/sticky, directorios, ACL con máscara; identidades real/efectiva/guardada.
- Capacidades de Linux, fórmula de `execve`, capacidades de archivo, no_new_privs.
- MAC: Bell-LaPadula (no leer arriba, no escribir abajo), Biba (el dual), Type Enforcement.
- Aislamiento: seccomp-bpf, espacios de nombres, cgroups; el contenedor comparte núcleo. Endurecimiento: KASLR, SMEP/SMAP, lockdown, arranque seguro y medido.

## Repaso: lo que debe quedarte dentro de un mes

1. Cada acceso pasa por el núcleo; lo que no se puede verificar no debería estar en la TCB.
2. En Unix cuenta una sola clase de permisos, y borrar es cosa del directorio.
3. Un programa setuid procesa entrada hostil con privilegios: mejor una capacidad concreta y abandonarla pronto.
4. Bell-LaPadula protege secretos (no leer arriba, no escribir abajo); Biba, integridad.
5. Un contenedor no es una máquina virtual: comparte el núcleo.

## Siguiente

[[lab-sec-hardening]] (auditar un servidor real), `sec-forense-logs` y `sec-cloud-contenedores`.
