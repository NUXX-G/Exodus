---
id: prog-powershell-batch
title: "Scripting en Windows: archivos por lotes de cmd y PowerShell 7 (objetos en la tubería, funciones avanzadas, errores, módulos, remoting y pruebas)"
area: bajo-nivel
trunk_level: 4
prerequisites: [prog-bash-scripting]
academic_sources:
  - "Microsoft. PowerShell documentation (PowerShell 7.6 LTS, about_* topics) y Windows Commands reference (cmd, for, set, if, call). learn.microsoft.com, consultada en noviembre de 2026."
  - "Payette, B.; Siddaway, R. Windows PowerShell in Action, 3ª ed. Manning, 2017."
  - "Jones, D.; Hicks, J.; Petty, J.; Plunk, T.; Leonhardt, T. Learn PowerShell in a Month of Lunches, 4ª ed. Manning, 2022."
exercises:
  - id: for-f-tokens
    tier: 1
    prompt: |
      ¿Qué imprime este archivo por lotes (`.bat`) en cmd?

      ```bat
      @echo off
      for /f "tokens=2,3 delims=," %%a in ("rojo,verde,azul,negro") do echo %%b-%%a
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:cc78334e5991e7b61992180d5dd495c8500fe3a74af465f22d4bca418346993e"]
  - id: subcadenas
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```bat
      @echo off
      set s=Hola_mundo_cruel
      echo %s:~5,5%
      echo %s:_= %
      echo %s:~-5%
      ```

      Respuesta: las tres líneas separadas por `;`.
    answers: ["sha256:d51d2556088b0c00df83c498775f23695035a3ce22d5a59316057cb8c56f94a3"]
  - id: set-a
    tier: 1
    prompt: |
      ¿Qué imprime? (`%%` es un `%` literal dentro de un `.bat`.)

      ```bat
      @echo off
      set /a "x=7/2, y=-7/2, z=7%%3, w=1<<4"
      echo %x% %y% %z% %w%
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:05f1a62a01a295ba6635cab3fc2cdadae0cbc5be74c378a63d7e482dcee90967"]
  - id: tuberia-de-objetos
    tier: 1
    prompt: |
      ¿Qué imprime este script de PowerShell?

      ```powershell
      1..10 | Where-Object { $_ % 3 -eq 0 } | Measure-Object -Sum | Select-Object -ExpandProperty Sum
      ```

      Respuesta: un número.
    answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
  - id: comparaciones
    tier: 1
    prompt: |
      ¿Qué imprime cada línea?

      ```powershell
      'ERROR' -eq 'error'
      'ERROR' -ceq 'error'
      'informe.txt' -like '*.TXT'
      if ('v12.3' -match '^v(\d+)\.(\d+)) { $Matches[1] }
      ```

      Respuesta: las cuatro salidas separadas por `;` (`True`/`False` tal cual).
    answers: ["sha256:dfae494537773662ea88a30ba9e1e8d0a43ee09cc1aec69371167dfd5b0a04e3"]
  - id: json
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```powershell
      [pscustomobject]@{ n = 'x'; v = 1, 2 } | ConvertTo-Json -Compress
      ```

      Respuesta: el JSON tal cual.
    answers: ["sha256:99e2596c4dd9417180226e21614ba54b12e2256fb3e14189198ad3f515436c3f"]
  - id: cadenas
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```powershell
      ('a,b;c' -split '[,;]') -join '|'
      '{0:D3}-{1}' -f 7, 'x'
      ```

      Respuesta: las dos líneas separadas por `;`.
    answers: ["sha256:7a735ce754e4df5fa4c644add255e7bed07efda0bf65fdcfeb858a6b8e655607"]
  - id: expansion-retardada
    tier: 2
    prompt: |
      cmd expande `%var%` al **leer** un bloque entre paréntesis, no al ejecutar cada línea. ¿Qué imprime?

      ```bat
      @echo off
      set x=1
      if 1==1 (
        set x=2
        echo %x%
      )
      echo %x%
      setlocal enabledelayedexpansion
      set y=1
      if 1==1 (
        set y=2
        echo !y!
      )
      ```

      Respuesta: las tres líneas separadas por `;`.
    answers: ["sha256:d6372941172d01d7864c3b8acb49ff65a87d7fed789a932a72637e2c0e58cd44"]
  - id: errorlevel
    tier: 2
    prompt: |
      ¿Qué imprime? (`if errorlevel n` es cierto si el código es **mayor o igual** que `n`.)

      ```bat
      @echo off
      cmd /c exit 3
      if errorlevel 2 (echo mayor-o-igual-2) else (echo menor)
      if errorlevel 4 (echo cuatro) else (echo no-cuatro)
      if %errorlevel%==3 echo tres
      ```

      Respuesta: las líneas separadas por `;`.
    answers: ["sha256:d18dbe6fda7ab5837adae9aae57837b7ff1aa602bc0ff36932725b657c5bac8a"]
  - id: subrutinas
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```bat
      @echo off
      call :doble 21
      echo %errorlevel% %res%
      goto :eof

      :doble
      set /a res=%~1*2
      exit /b 7
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:ccbcd0d62f439eacea8b0fa4139d934d2782bae1b8046e8764e598dc64a9f421"]
  - id: escalar-o-array
    tier: 2
    prompt: |
      Una tubería que devuelve un solo objeto no devuelve un array. ¿Qué imprime?

      ```powershell
      $r = 'a', 'b' | Where-Object { $_ -eq 'a' }
      $r.GetType().Name
      @($r).Count
      $v = @()
      $v.Count
      ```

      Respuesta: las tres líneas separadas por `;`.
    answers: ["sha256:e915c0cadc58fb592d3a524b449e1bf55cfb2d7a15231008cf86b6a6bf83ba9b"]
  - id: agrupar
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```powershell
      $csv = @"
      region,producto,importe
      norte,tornillos,120.50
      sur,tuercas,80.00
      norte,arandelas,35.25
      este,tornillos,210.00
      sur,tornillos,99.90
      norte,tuercas,64.25
      este,arandelas,15.10
      "@
      $inv = [cultureinfo]::InvariantCulture
      $top = $csv | ConvertFrom-Csv | Group-Object region | ForEach-Object {
          $total = 0
          foreach ($fila in $_.Group) { $total += [double]::Parse($fila.importe, $inv) }
          [pscustomobject]@{ Region = $_.Name; Total = $total }
        } | Sort-Object Total -Descending | Select-Object -First 1
      '{0} {1}' -f $top.Region, $top.Total.ToString('F2', $inv)
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:abbd4000b51fabeec7f3086649d21786659c2176559f585634313ccea3a3cbde"]
  - id: errores
    tier: 2
    prompt: |
      Si no existe `no-existe-xyz`, ¿qué imprime? (Errores **no terminantes** frente a terminantes.)

      ```powershell
      try { Get-Item 'no-existe-xyz' -ErrorAction SilentlyContinue; 'tras-silencio' } catch { 'capturado1' }
      try { Get-Item 'no-existe-xyz' -ErrorAction Stop; 'no-llega' } catch { 'capturado2' }
      Get-Item 'no-existe-xyz' -ErrorAction SilentlyContinue; $?
      ```

      Respuesta: las tres líneas separadas por `;`.
    answers: ["sha256:0028c090ae627d22179cca12e616fb61f9680fca08aca88e2abd0ca2373f6fa6"]
  - id: funcion-avanzada
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```powershell
      function Get-Area {
        [CmdletBinding()]
        param(
          [Parameter(Mandatory)][ValidateRange(0, 100)][double]$Ancho,
          [double]$Alto = 2
        )
        $Ancho * $Alto
      }
      $p = @{ Ancho = 3; Alto = 4 }
      Get-Area @p
      Get-Area -Ancho 5
      try { Get-Area -Ancho 200 } catch { 'fuera de rango' }
      ```

      Respuesta: las tres líneas separadas por `;`.
    answers: ["sha256:8ba85a30e60162001a45c89e422e43aa84184393c2194c01b3e384fda7f2fbe1"]
  - id: registro
    tier: 3
    prompt: |
      Este script cuenta los rechazos de conexión por IP en un registro con `Select-String` y `Group-Object`. Escríbelo tú antes de mirarlo y di qué imprime:

      ```powershell
      $log = @"
      2026-11-13 10:00:05 ERROR conexion rechazada por 10.0.0.5
      2026-11-13 10:01:12 WARN reintento 1
      2026-11-13 10:03:02 ERROR conexion rechazada por 10.0.0.7
      2026-11-13 10:04:10 ERROR conexion rechazada por 10.0.0.5
      2026-11-13 10:05:00 INFO terminado
      2026-11-13 10:06:31 ERROR conexion rechazada por 10.0.0.5
      "@
      $top = $log -split '\r?\n' | Select-String -Pattern 'rechazada por (\S+)' |
        ForEach-Object { $_.Matches[0].Groups[1].Value } | Group-Object | Sort-Object Count -Descending | Select-Object -First 1
      '{0} {1}' -f $top.Name, $top.Count
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:6c66ff9d8a28dcad6eaa3fbd5c709b94a02f26be725d4e11979114fb10462baa"]
  - id: paralelo
    tier: 3
    prompt: |
      Este script usa tres novedades de PowerShell 7 (no funciona en Windows PowerShell 5.1). ¿Qué imprime?

      ```powershell
      (1..10 | ForEach-Object -Parallel { $_ * $_ } -ThrottleLimit 4 | Measure-Object -Sum).Sum
      $n = 5
      $n -gt 3 ? 'grande' : 'pequeno'
      Write-Output 'a' && Write-Output 'b'
      ```

      Respuesta: las cuatro líneas separadas por `;`.
    answers: ["sha256:fbbd5a52896b47bed41733e69443c50b1421e4da7bf0631c252e1abc3bdae648"]
---

La mayoría de los ordenadores de empresa ejecutan Windows, y su administración (Active Directory, Microsoft 365, Azure, servidores, puestos de
trabajo) se automatiza con **PowerShell**; además, los runners de Windows de cualquier CI y miles de instaladores siguen usando **archivos por lotes**
(`.bat`, `.cmd`). Este nodo cubre los dos con la misma exigencia que [[prog-bash-scripting]]: cómo funcionan de verdad, dónde fallan y cómo escribir
scripts robustos. La idea central de PowerShell es distinta de la de Unix: por la tubería no pasa **texto**, pasan **objetos .NET** con
propiedades y tipos, así que se filtra y se ordena por campos sin trocear cadenas. Y PowerShell 7 es multiplataforma: lo que aprendas sirve también en
Linux y macOS.

## Objetivos

Al terminar sabrás:

1. Distinguir cmd, Windows PowerShell 5.1 y PowerShell 7, y elegir el adecuado.
2. Escribir archivos por lotes correctos: expansión de variables (inmediata y retardada), parámetros, `for /f`, subrutinas, `errorlevel`.
3. Usar la tubería de objetos de PowerShell: cmdlets, `Get-Member`, filtrar, seleccionar, agrupar, medir, exportar.
4. Dominar operadores, tipos, colecciones (arrays, tablas hash, `PSCustomObject`) y sus trampas (desenrollado, cultura).
5. Escribir funciones avanzadas con parámetros validados, entrada por tubería, `-WhatIf` y ayuda; empaquetarlas en módulos.
6. Manejar errores terminantes y no terminantes, `try`/`catch`, `$LASTEXITCODE` y el modo estricto.
7. Conocer remoting, la política de ejecución y los registros de seguridad, y probar el código con Pester.

## Qué debes dominar antes

[[prog-bash-scripting]]: estados de salida, redirecciones, comillas y tuberías; aquí se comparan una y otra vez. Algo de programación orientada a objetos de
[[prog-poo-diseno]] (clases, propiedades, métodos) ayuda a entender los objetos .NET.

> [!question] Test de entrada
> 1. En bash, ¿cómo ordenarías la salida de `ls -l` por tamaño?
> 2. ¿Qué es una propiedad de un objeto?
> 3. ¿Qué indica un estado de salida distinto de 0?
>
> Respuestas: `ls -l | sort -k5,5n` (trocear texto y elegir la columna); un dato con nombre que pertenece al objeto (por ejemplo `Length` de un archivo); que la orden falló.

## 1. Para qué sirve

- **Administración de Windows y de la nube de Microsoft**: usuarios y grupos, servicios, registro, tareas programadas, Exchange, Azure (módulo `Az`), Microsoft Graph.
- **CI/CD en Windows**: pasos de GitHub Actions o Azure Pipelines en runners Windows, compilaciones con MSBuild, empaquetado.
- **Automatización multiplataforma**: PowerShell 7 corre en Linux y macOS y trata JSON, CSV y APIs REST como objetos.
- **Seguridad**: los equipos de defensa analizan registros de PowerShell para detectar ataques que lo usan (*living off the land*), y auditan
  configuraciones con scripts.

## 2. Tres intérpretes

- **cmd.exe**: el intérprete heredado de MS-DOS. Sus archivos por lotes (`.bat`, `.cmd`) siguen en todas partes porque no requieren nada instalado y
  arrancan al instante, pero su lenguaje es limitado y lleno de rarezas.
- **Windows PowerShell 5.1**: incluido en Windows, sobre .NET Framework. Ya no recibe funciones nuevas (solo correcciones de seguridad) y su ejecutable es
  `powershell.exe`.
- **PowerShell 7** (`pwsh`): de código abierto y multiplataforma, sobre el .NET moderno. La versión de soporte largo vigente es la **7.6 LTS** (marzo de 2026,
  sobre .NET 10, con soporte hasta noviembre de 2028); las 7.4 y 7.5 dejaron de tener soporte en noviembre de 2026. Convive con la 5.1 y añade, entre
  otras cosas, `ForEach-Object -Parallel`, los operadores `&&`/`||` entre órdenes, el ternario `? :`, el operador `??` y el remoting por SSH.

Regla práctica: scripts nuevos en PowerShell 7; la 5.1 solo si el script debe correr en equipos donde no puedes instalar nada (y entonces, prueba en las dos);
`.bat` para lanzadores mínimos.

## 3. Archivos por lotes (cmd)

cmd lee y ejecuta **línea a línea** (y vuelve a leer el archivo durante la ejecución: modificar un `.bat` que se está ejecutando produce errores extraños).
Lo esencial:

- **Variables**: `set nombre=valor` (¡sin espacios alrededor del `=`, o formarán parte del nombre y del valor!), `%nombre%`. `setlocal` … `endlocal` hacen las
  variables locales al script. `set /a` evalúa aritmética entera de 32 bits (división truncada, `%%` para el módulo dentro de un `.bat`, operadores de bits);
  `set /p var=Pregunta: ` lee del teclado.
- **Expansión al analizar**: `%var%` se sustituye cuando cmd **lee** la línea, y un bloque entre paréntesis (un `if` o un `for` de varias líneas) se lee de una
  vez: dentro del bloque, `%var%` tiene el valor de **antes** del bloque. La solución es `setlocal enabledelayedexpansion` y `!var!`, que se expande al
  ejecutar. Es el error número uno de los archivos por lotes.
- **Parámetros**: `%1`…`%9`, `%*` (todos), `shift`, y los modificadores `%~1` (sin comillas), `%~f1` (ruta completa), `%~dp0` (unidad y directorio del propio
  script, indispensable para no depender del directorio actual), `%~n1`, `%~x1` (nombre, extensión).
- **Subcadenas y sustituciones**: `%s:~5,3%` (desde la posición 5, 3 caracteres), `%s:~-4%` (los 4 últimos), `%s:viejo=nuevo%`.
- **Control**: `if [/i] [not] a==b`, `if exist ruta`, `if defined var`, `if errorlevel n` (**mayor o igual** que n; para comparar exacto, `if %errorlevel%==3`),
  `goto etiqueta`, `call :etiqueta args` (subrutina: vuelve al terminar o con `exit /b n`), `exit /b n` (termina el script o la subrutina con código n, sin cerrar la
  ventana). `&&` y `||` funcionan como en sh.
- **Bucles `for`**: `for %%f in (*.txt)` (archivos), `for /l %%i in (1,1,10)` (contador), `for /d` (directorios), `for /r` (recursivo) y **`for /f`** (leer
  líneas de un archivo, de una cadena o de la salida de una orden, partiéndolas con `"tokens=1,3 delims=,"`, `skip=1`, `usebackq`). En un `.bat` la variable es
  `%%f`; en la línea de órdenes, `%f`.
- **Redirecciones** como en sh (`>`, `>>`, `2>&1`, `>nul`); `^` escapa caracteres especiales (`^&`, `^|`, `^>`).
- **Finales de línea**: guarda los `.bat` con **CRLF**; con finales LF, `goto` y `call :etiqueta` pueden fallar de forma intermitente.

## 4. PowerShell: la tubería de objetos

Las órdenes de PowerShell son **cmdlets** con nombre `Verbo-Sustantivo` (`Get-ChildItem`, `Stop-Service`) y parámetros con nombre (`-Path`, `-Recurse`), con
alias cortos (`ls`, `dir`, `gci`) pensados para la consola, no para scripts. Lo que devuelven son **objetos**: `Get-ChildItem | Get-Member` lista sus propiedades
y métodos. Los cmdlets de la tubería trabajan con ellos:

```powershell
# sin-ejecutar (depende del sistema de archivos de cada uno)
Get-ChildItem -Path C:\registros -Filter *.log -Recurse |
    Where-Object { $_.Length -gt 10MB -and $_.LastWriteTime -lt (Get-Date).AddDays(-30) } |
    Sort-Object Length -Descending |
    Select-Object FullName, @{ Name = 'MB'; Expression = { [math]::Round($_.Length / 1MB, 1) } } -First 10
```

`$_` (o `$PSItem`) es el objeto actual. `Select-Object` elige propiedades o crea **propiedades calculadas**; `Group-Object`, `Measure-Object` (`-Sum -Average -Maximum`),
`Sort-Object`, `ForEach-Object` y `Where-Object` completan el álgebra de colecciones. Los objetos se exportan sin trocear texto: `Export-Csv`, `ConvertTo-Json`,
`ConvertFrom-Json`, `Invoke-RestMethod` (que ya devuelve el JSON como objetos). Solo al final, `Format-Table` o `Format-List` los convierten en texto para leerlos:
nunca pongas un `Format-*` en medio de una tubería.

Los **proveedores** exponen otros almacenes como unidades: `Env:` (variables de entorno, `$env:PATH`), `HKLM:` (registro), `Cert:` (certificados), además del sistema
de archivos.

## 5. Lenguaje: tipos, operadores y colecciones

- **Variables y tipos**: `$x = 5` es un `[int]`; puedes fijar el tipo (`[int]$n = '42'` convierte), y usar cualquier tipo de .NET (`[datetime]::Now`,
  `[System.IO.Path]::GetExtension($f)`, `[math]::Sqrt(2)`).
- **Comparación**: `-eq -ne -gt -ge -lt -le`, `-like` (comodines), `-match` (expresión regular de .NET; los grupos quedan en `$Matches`), `-contains`/`-in`
  (pertenencia), `-replace`, `-split`, `-join`. Son **insensibles a mayúsculas por defecto**; con prefijo `c` las distinguen (`-ceq`, `-cmatch`). Con un array a la
  izquierda, filtran: `1,2,3 -gt 1` devuelve `2,3`.
- **Cadenas**: `'literal'`, `"interpolada $var y $($obj.Prop)"`, here-strings `@" ... "@`, formato `'{0:N2}' -f $x` (como `String.Format` de .NET).
- **Colecciones**: arrays `@(1, 2, 3)` (de tamaño fijo; `+=` crea uno nuevo cada vez, lento en bucles grandes: usa `[System.Collections.Generic.List[object]]`),
  tablas hash `@{ clave = 'valor' }` (`[ordered]@{}` conserva el orden) y objetos `[pscustomobject]@{ Nombre = 'x'; Edad = 3 }`.
- **Desenrollado**: una tubería que produce **un solo** objeto devuelve ese objeto, no un array de uno; y una que no produce nada devuelve `$null`. Si el código
  espera un array, envuélvelo: `@(...)`. Fuente inagotable de errores del tipo "funciona con dos archivos y falla con uno".
- **Cultura**: `ToString()`, `-f` y las conversiones de texto a número usan la configuración regional del sistema (en España, coma decimal). Para datos que
  intercambian máquinas, usa `[cultureinfo]::InvariantCulture`.
- **Control**: `if/elseif/else`, `switch` (con `-Regex`, `-Wildcard`, y que recorre arrays), `foreach ($x in $col)` (sentencia, rápida) frente a `ForEach-Object`
  (cmdlet de tubería), `while`, `do/until`.

## 6. Funciones avanzadas, módulos y buenas prácticas

Una función con `[CmdletBinding()]` se comporta como un cmdlet: recibe los parámetros comunes (`-Verbose`, `-ErrorAction`…), y en su bloque `param()` admite
**atributos de validación** (`[Parameter(Mandatory)]`, `[ValidateRange(0,100)]`, `[ValidateSet('a','b')]`, `[ValidatePattern()]`) que rechazan valores incorrectos antes de
ejecutar nada. Con `ValueFromPipeline` recibe objetos por la tubería y los procesa en un bloque `process { }` (uno por objeto), con `begin { }` y `end { }`
para preparar y cerrar. `SupportsShouldProcess` añade `-WhatIf` y `-Confirm` a las funciones que cambian cosas. La **ayuda basada en comentarios**
(`.SYNOPSIS`, `.EXAMPLE`) hace que `Get-Help` funcione con tus funciones. El **splatting** pasa parámetros desde una tabla hash: `$p = @{ Path = $f; Force = $true };
Remove-Item @p`.

Las funciones se agrupan en **módulos** (`.psm1` más un manifiesto `.psd1` con versión y exportaciones) que se instalan desde la PowerShell Gallery
(`Install-PSResource`). **PSScriptAnalyzer** revisa el estilo y los errores comunes (como ShellCheck), y **Pester** es el marco de pruebas (`Describe`, `It`,
`Should -Be`).

## 7. Errores

PowerShell distingue dos clases:

- **No terminantes**: el cmdlet informa del error (en `$Error` y en la salida de error) y **sigue** con el siguiente elemento. Es el comportamiento por defecto de
  la mayoría de cmdlets (un `Get-Item` sobre una ruta inexistente).
- **Terminantes**: detienen la ejecución y se capturan con `try { } catch { } finally { }`. Un error no terminante se vuelve terminante con `-ErrorAction Stop`
  (o `$ErrorActionPreference = 'Stop'` para todo el script).

`$?` indica si la última orden tuvo éxito; para programas externos, el código de salida queda en **`$LASTEXITCODE`** (PowerShell no se detiene solo porque un
programa externo falle; en PowerShell 7.4 o superior, `$PSNativeCommandUseErrorActionPreference = $true` hace que un código distinto de 0 genere un error).
`Set-StrictMode -Version Latest` convierte en errores las variables sin definir y las propiedades inexistentes (el equivalente de `set -u`). El inicio
habitual de un script serio: `Set-StrictMode -Version Latest` y `$ErrorActionPreference = 'Stop'`.

## 8. Remoting, política de ejecución y seguridad

`Invoke-Command -ComputerName srv1, srv2 -ScriptBlock { ... }` ejecuta en paralelo en varias máquinas (por WinRM en Windows; PowerShell 7 también por SSH), y
`Enter-PSSession` abre una sesión interactiva. La **política de ejecución** (`Get-ExecutionPolicy`, `RemoteSigned`, `AllSigned`) evita ejecutar scripts por
accidente, pero **no es una barrera de seguridad** (se puede saltar con `-ExecutionPolicy Bypass` o pegando el código): la seguridad real viene de los permisos,
la firma de código, el modo de lenguaje restringido (*Constrained Language Mode*) con las políticas de control de aplicaciones, y del **registro de bloques de
script** y de transcripciones, que los defensores usan para reconstruir lo que ejecutó un atacante. AMSI permite que el antivirus inspeccione el código justo
antes de ejecutarlo, incluso si llegó ofuscado.

## 9. Equivalencias rápidas

| Tarea | bash | cmd | PowerShell |
|---|---|---|---|
| Variable | `x=1; echo "$x"` | `set x=1` / `echo %x%` | `$x = 1; $x` |
| Variable de entorno | `$HOME` | `%USERPROFILE%` | `$env:USERPROFILE` |
| Estado de la última orden | `$?` | `%errorlevel%` | `$?`, `$LASTEXITCODE` |
| Buscar texto | `grep -i error f` | `findstr /i error f` | `Select-String -Pattern error f` |
| Contar líneas | `wc -l < f` | `find /c /v "" f` | `(Get-Content f).Count` |
| Bucle sobre archivos | `for f in *.txt` | `for %%f in (*.txt)` | `foreach ($f in Get-ChildItem *.txt)` |
| Función | `f() { ...; }` | `call :f` | `function f { }` |
| Salir con código | `exit 3` | `exit /b 3` | `exit 3` |

> [!example] Ejemplo resuelto 1: el error de la expansión en un bucle
> Se quiere numerar los `.txt` de una carpeta con `set /a n+=1` y `echo %n%` dentro de un `for`. Imprime siempre el valor de antes del bucle, porque todo el
> cuerpo se expandió al leerlo. Con `setlocal enabledelayedexpansion` y `echo !n!` funciona. Si además algún nombre contiene `!`, la expansión retardada lo
> estropea: la solución robusta es mover el cuerpo a una subrutina (`call :procesar "%%f"`), donde cada llamada se analiza de nuevo. El bloque `bat` del
> §10 lo comprueba.

> [!example] Ejemplo resuelto 2: una función que se comporta como un cmdlet
> `ConvertTo-Fahrenheit` recibe grados Celsius por parámetro o por la tubería, rechaza valores por debajo del cero absoluto con `[ValidateRange(-273.15,
> [double]::MaxValue)]`, procesa cada valor en `process` y cuenta cuántos convirtió en `end`. Como lleva `[CmdletBinding()]`, `-Verbose` funciona sin escribir
> nada más. `0, 100, -40 | ConvertTo-Fahrenheit` devuelve 32, 212 y −40.

> [!example] Ejemplo resuelto 3: un informe con objetos (con menos ayuda)
> Repite en PowerShell el ejemplo de awk de `prog-unix-texto`: a partir de un CSV de pedidos y otro de precios, calcula el importe por cliente con
> `Import-Csv`, una tabla hash de precios y `Group-Object`, y expórtalo a JSON. Comprueba en el bloque del §10 que el importe de `ana` es 98,75 con las dos
> versiones de PowerShell, y piensa qué pasaría con `-f '{0:N2}'` en un equipo configurado en español.

## 10. Comprobar con un programa

El primer bloque es un archivo por lotes (ejecutado con el `cmd.exe` de Windows 11) que comprueba el ejemplo 1; el segundo, un script de PowerShell que pasa en
PowerShell 7.6 y en Windows PowerShell 5.1 y comprueba el desenrollado, la cultura, el ejemplo 2, los errores y el ejemplo 3.

```bat
@echo off
setlocal
set fallos=0
set n=0
for %%i in (a b c) do (
  set /a n+=1
  if %n%==0 set inmediata=sigue-a-cero
)
if not "%inmediata%"=="sigue-a-cero" (echo MAL expansion inmediata & set /a fallos+=1) else (echo ok   expansion inmediata ve el valor de antes del bucle)
setlocal enabledelayedexpansion
set m=0
for %%i in (a b c) do (
  set /a m+=1
  set ultima=!m!
)
if not "!ultima!"=="3" (echo MAL expansion retardada & set /a fallos+=1) else (echo ok   expansion retardada ve 3)
endlocal
set k=0
for %%i in (uno dos tres) do call :sumar
if not "%k%"=="3" (echo MAL subrutina & set /a fallos+=1) else (echo ok   call :sumar reanaliza cada vez)
call :doble 21
if not "%errorlevel% %res%"=="5 42" (echo MAL exit /b & set /a fallos+=1) else (echo ok   exit /b devuelve 5 y res=42)
echo fallos: %fallos%
exit /b %fallos%

:sumar
set /a k+=1
exit /b 0

:doble
set /a res=%~1*2
exit /b 5
```

```powershell
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$script:fallos = 0
function ok($real, $esperado, $texto) {
  if ("$real" -ceq "$esperado") { "ok   $texto" } else { "MAL  ${texto}: «$real» frente a «$esperado»"; $script:fallos++ }
}

# 1. Desenrollado: uno, varios y ninguno.
$uno = 'a', 'b' | Where-Object { $_ -eq 'a' }
$ninguno = 'a', 'b' | Where-Object { $_ -eq 'z' }
ok $uno.GetType().Name 'String' 'un solo resultado no es un array'
ok @($uno).Count 1 '@() lo convierte en array'
ok ($null -eq $ninguno) $true 'ningún resultado es $null'

# 2. Cultura: el mismo número formateado en España y de forma invariante.
$es = [cultureinfo]::GetCultureInfo('es-ES')
ok (1234.5).ToString('N2', $es) '1.234,50' 'formato español'
ok (1234.5).ToString('N2', [cultureinfo]::InvariantCulture) '1,234.50' 'formato invariante'
ok ([double]::Parse('98.75', [cultureinfo]::InvariantCulture)) 98.75 'leer un número sin depender de la cultura'

# 3. Ejemplo resuelto 2: función avanzada con entrada por tubería y validación.
function ConvertTo-Fahrenheit {
  [CmdletBinding()]
  param(
    [Parameter(Mandatory, ValueFromPipeline)]
    [ValidateRange(-273.15, [double]::MaxValue)]
    [double]$Celsius
  )
  begin { $n = 0 }
  process { $n++; $Celsius * 9 / 5 + 32 }
  end { Write-Verbose "convertidos: $n" }
}
ok ((0, 100, -40 | ConvertTo-Fahrenheit) -join ' ') '32 212 -40' 'tubería con process'
$rechazo = try { ConvertTo-Fahrenheit -Celsius -300; 'aceptado' } catch { 'rechazado' }
ok $rechazo 'rechazado' 'ValidateRange'

# 4. Errores no terminantes frente a terminantes.
$r = try { Get-Item 'no-existe-xyz' -ErrorAction SilentlyContinue; 'siguió' } catch { 'paró' }
ok $r 'siguió' 'no terminante silenciado'
$r = try { Get-Item 'no-existe-xyz'; 'siguió' } catch { 'paró' }
ok $r 'paró' "con ErrorActionPreference = 'Stop'"

# 5. Ejemplo resuelto 3: importe por cliente.
$inv = [cultureinfo]::InvariantCulture
$precios = @{}
'producto,precio', 'tornillo,0.25', 'tuerca,0.10', 'llave,12.50' | ConvertFrom-Csv |
  ForEach-Object { $precios[$_.producto] = [double]::Parse($_.precio, $inv) }
$pedidos = 'cliente,producto,unidades', 'ana,llave,7', 'luis,tuerca,30', 'ana,tornillo,45', 'luis,llave,1' | ConvertFrom-Csv
$importes = $pedidos | Group-Object cliente | ForEach-Object {
  $t = 0
  foreach ($p in $_.Group) { $t += $precios[$p.producto] * [int]$p.unidades }
  [pscustomobject]@{ Cliente = $_.Name; Importe = $t }
}
$ana = @($importes | Where-Object Cliente -eq 'ana')[0]
ok $ana.Importe.ToString('F2', $inv) '98.75' 'importe de ana'
ok (($importes | Sort-Object Cliente | ConvertTo-Json -Compress) -replace '\s', '') '[{"Cliente":"ana","Importe":98.75},{"Cliente":"luis","Importe":15.5}]' 'exportado a JSON'

"fallos: $script:fallos"
exit $script:fallos
```

## 11. Errores típicos

- `set x = 1` en cmd (crea la variable `x ` con valor ` 1`).
- `%var%` dentro de un bloque `for`/`if` esperando el valor actualizado; olvidar `enabledelayedexpansion`.
- `if errorlevel 1` creyendo que compara igualdad; usar `exit` (cierra la consola) en vez de `exit /b`.
- Depender del directorio actual en un `.bat` en lugar de `%~dp0`; guardar `.bat` con finales LF.
- En PowerShell: tratar la salida como texto (`Format-Table` en medio de la tubería, `Out-String | Select-String`) en vez de usar propiedades.
- Suponer que una consulta devuelve siempre un array; olvidar `@()`.
- Formatear o leer números con la cultura del sistema en datos que viajan entre máquinas.
- Esperar que un `try` capture errores no terminantes sin `-ErrorAction Stop`; ignorar `$LASTEXITCODE` de programas externos.
- `+=` sobre arrays en bucles de miles de elementos.
- Creer que la política de ejecución protege de nada.

## 12. Resumen

- cmd (`.bat`, CRLF), Windows PowerShell 5.1 (congelado) y PowerShell 7 (7.6 LTS, multiplataforma).
- cmd: `set` sin espacios, `%var%` al leer frente a `!var!` al ejecutar, `%~dp0`, `%~1`, subcadenas, `if errorlevel` ≥, `for /f` con tokens, `call :etiqueta`, `exit /b`.
- PowerShell: cmdlets Verbo-Sustantivo, objetos, `Get-Member`, `Where/Select/Sort/Group/Measure-Object`, `ConvertTo-Json`, `Format-*` solo al final, proveedores.
- Operadores `-eq -like -match -split -join -contains`, insensibles a mayúsculas; desenrollado y `@()`; cultura invariante.
- Funciones avanzadas: `[CmdletBinding()]`, validación, `ValueFromPipeline` y `process`, `-WhatIf`, splatting, módulos, PSScriptAnalyzer, Pester.
- Errores: no terminantes frente a terminantes, `-ErrorAction Stop`, `try/catch`, `$LASTEXITCODE`, `Set-StrictMode`.
- Remoting, política de ejecución (no es seguridad), registro de bloques de script, AMSI.

## Repaso: lo que debe quedarte dentro de un mes

1. En cmd, `%var%` se expande al leer el bloque; `!var!`, al ejecutarlo.
2. `if errorlevel n` significa "mayor o igual".
3. Por la tubería de PowerShell pasan objetos: filtra por propiedades.
4. Un solo resultado no es un array: `@()`.
5. Los errores no terminantes no los captura `try` sin `-ErrorAction Stop`.

## Siguiente

El proyecto `proy-sys-automatizacion` (un kit de copias, auditoría y despliegue en bash y PowerShell), `sec-seguridad-so` (registros y defensa en Windows y
Linux) y `sec-forense-logs`.
