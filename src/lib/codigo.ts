/**
 * Ejercicios de código (tipo `codigo`). El código del alumno **nunca se ejecuta en el servidor** (STATUS.md §6):
 * se ejecuta en su máquina con un script de pruebas (`prueba.sh`) que le pasa entradas fijas, junta las salidas y
 * imprime un «código del ejercicio» (los 12 primeros caracteres hexadecimales del SHA-256 de todas las salidas). El
 * alumno pega ese código en Exodus, que lo compara con el hash del código correcto. Las salidas esperadas no se
 * publican en ningún sitio: solo su huella. Es el mismo esquema que los hitos con `prueba.sh` de los proyectos.
 *
 * Dos formas:
 *  - `cases`: Exodus genera el script con las entradas del vault (este módulo) y el alumno lo descarga.
 *  - `harness`: un `prueba.sh` escrito a mano en los adjuntos del nodo (proyectos con hitos), con `stage` = hito.
 *
 * Formato de cada caso (idéntico en el script y en `codeFor`): `nombre|salida\n[estado N]\n`, donde `salida` es la
 * salida estándar sin `\r` y sin saltos de línea finales, y N el código de salida del programa.
 * Módulo puro: lo usan el servidor, los tests y scripts/ex-inject.ts.
 */
import crypto from "node:crypto";

export const LANGUAGES = ["python", "c", "cpp", "rust", "bash", "cualquiera"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_LABEL: Record<Language, string> = {
  python: "Python 3",
  c: "C (C17)",
  cpp: "C++ (C++20)",
  rust: "Rust",
  bash: "Bash",
  cualquiera: "El lenguaje que quieras",
};

/** Cómo compilar y ejecutar en cada lenguaje (lo que se muestra al alumno). */
export const LANGUAGE_RUN: Record<Language, { archivo: string; preparar?: string; ejecutar: string }> = {
  python: { archivo: "solucion.py", ejecutar: "python3 solucion.py" },
  c: { archivo: "solucion.c", preparar: "gcc -std=c17 -O2 -Wall -Wextra -o solucion solucion.c -lm", ejecutar: "./solucion" },
  cpp: { archivo: "solucion.cpp", preparar: "g++ -std=c++20 -O2 -Wall -Wextra -o solucion solucion.cpp", ejecutar: "./solucion" },
  rust: { archivo: "solucion.rs", preparar: "rustc -O -o solucion solucion.rs", ejecutar: "./solucion" },
  bash: { archivo: "solucion.sh", ejecutar: "bash solucion.sh" },
  cualquiera: { archivo: "solucion", ejecutar: "./solucion" },
};

export interface CodeCase {
  name: string;
  /** Entrada estándar (texto). */
  stdin: string;
  /** Argumentos de línea de órdenes (opcional). */
  args?: string[];
}

/** Salida canónica de un caso: sin `\r` y sin saltos de línea finales (como `$(...)` en bash). */
export const canonicalOutput = (stdout: string) => stdout.replace(/\r/g, "").replace(/\n+$/, "");

/** Código del ejercicio a partir de las salidas esperadas (lo usa ex-inject; el script calcula lo mismo). */
export function codeFor(cases: CodeCase[], outputs: { stdout: string; status?: number }[]): string {
  if (cases.length !== outputs.length) throw new Error("casos y salidas no coinciden");
  let total = "";
  cases.forEach((c, i) => {
    total += `${c.name}|${canonicalOutput(outputs[i].stdout)}\n[estado ${outputs[i].status ?? 0}]\n`;
  });
  return crypto.createHash("sha256").update(total, "utf8").digest("hex").slice(0, 12);
}

const NOMBRE_CASO = /^[A-Za-z0-9_.-]{1,40}$/;
export const caseNameOk = (s: string) => NOMBRE_CASO.test(s);

/** Comillas simples seguras para bash. */
const q = (s: string) => `'${s.replace(/'/g, `'\\''`)}'`;
const b64 = (s: string) => Buffer.from(s, "utf8").toString("base64");

export interface RunnerExercise {
  id: string;
  title: string;
  cases: CodeCase[];
}

/**
 * Script de pruebas de los ejercicios de código de un nodo. Uso:
 *   bash prueba.sh <ejercicio> [-v] -- <orden para ejecutar tu programa>
 * Funciona en Linux, macOS, WSL y Git Bash (Windows). No envía nada a ningún sitio.
 */
export function runnerScript(nodeId: string, exercises: RunnerExercise[]): string {
  for (const e of exercises) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.id)) throw new Error("id de ejercicio inválido");
    for (const c of e.cases) if (!caseNameOk(c.name)) throw new Error(`nombre de caso inválido: ${c.name}`);
  }
  const ramas = exercises
    .map((e) => {
      const casos = e.cases
        .map((c) => `  caso ${q(c.name)} ${q(b64(c.stdin))}${(c.args ?? []).map((a) => " " + q(a)).join("")}`)
        .join("\n");
      return `${e.id})\n  # ${e.title.replace(/\n/g, " ")}\n${casos}\n  ;;`;
    })
    .join("\n");
  const lista = exercises.map((e) => e.id).join(" ");
  return `#!/usr/bin/env bash
# Pruebas de los ejercicios de código de ${nodeId} (Exodus).
#
# Uso:  bash prueba.sh <ejercicio> [-v] -- <orden que ejecuta tu programa>
#   bash prueba.sh ${exercises[0]?.id ?? "ejercicio"} -- python3 solucion.py
#   bash prueba.sh ${exercises[0]?.id ?? "ejercicio"} -v -- ./solucion        (-v muestra cada salida completa)
# Ejercicios: ${lista}
#
# Tu programa lee la entrada estándar (y, si el caso los tiene, argumentos) y escribe en la salida estándar.
# Si todo es correcto, el «código del ejercicio» que se imprime al final es la respuesta que pegas en Exodus.
# Las salidas esperadas no están aquí: Exodus solo guarda la huella del código correcto.
# Este script solo ejecuta tu programa en tu ordenador; no envía nada a ningún sitio.
set -u
ej=\${1:-}
shift || true
detalle=""
if [ "\${1:-}" = "-v" ]; then detalle=1; shift; fi
[ "\${1:-}" = "--" ] && shift
if [ -z "$ej" ] || [ $# -eq 0 ]; then
  sed -n '3,8p' "$0" >&2
  exit 2
fi
if command -v sha256sum >/dev/null 2>&1; then huella() { sha256sum | cut -c1-12; }
else huella() { shasum -a 256 | cut -c1-12; }; fi
if command -v timeout >/dev/null 2>&1; then limite() { timeout 20 "$@"; }; else limite() { "$@"; }; fi
t=$(mktemp -d)
trap 'rm -rf "$t"' EXIT
total=""
caso() {
  local nombre=$1 entrada=$2
  shift 2
  printf '%s' "$entrada" | base64 -d > "$t/in" 2>/dev/null || printf '%s' "$entrada" | base64 -D > "$t/in"
  limite "\${prog[@]}" "$@" < "$t/in" > "$t/out" 2>"$t/err"
  local st=$?
  local r
  r=$(tr -d '\\r' < "$t/out")
  r="$r"$'\\n'"[estado $st]"
  total+="$nombre|$r"$'\\n'
  printf '  %-24s %s\\n' "$nombre" "$(printf '%s' "$r" | tr '\\n' ' ' | cut -c1-70)"
  if [ -n "$detalle" ]; then
    printf '%s\\n' "$r" | sed 's/^/      | /'
    [ -s "$t/err" ] && sed 's/^/      ! /' "$t/err"
  fi
}
prog=("$@")
case "$ej" in
${ramas}
*) echo "ejercicio desconocido: $ej (hay: ${lista})" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | huella)
echo "código del ejercicio $ej: $codigo"
`;
}
