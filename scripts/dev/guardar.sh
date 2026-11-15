#!/usr/bin/env bash
# Guarda el trabajo de la v2: comprueba, hace commit en la rama v2 y la sube a GitHub como copia de seguridad.
#
# Uso:  bash scripts/dev/guardar.sh "v2: fase 3 completada"        (cierre de fase)
#       bash scripts/dev/guardar.sh "v2: fase 3 · tipo desarrollo"  (guardado intermedio, p. ej. antes de que se
#                                                                    llene el contexto)
#       RAPIDO=1 bash scripts/dev/guardar.sh "..."                  (sin build; los checks obligatorios se hacen igual)
#
# Nunca fusiona en main ni abre PR: la v2 se fusiona solo cuando lo decida el usuario.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
msg="${1:?Falta el mensaje del commit}"

[ "$(git branch --show-current)" = "v2" ] || { echo "No estás en la rama v2: git checkout v2"; exit 1; }

echo "== vault:check";  npm run -s vault:check 2>&1 | tail -3
npm run -s vault:check >/dev/null 2>&1 || { echo "FALLA vault:check"; exit 1; }
echo "== typecheck";    npm run -s typecheck || { echo "FALLA typecheck"; exit 1; }
echo "== tests";        npm test 2>&1 | grep -E "^ℹ (pass|fail)" || true
npm test >/dev/null 2>&1 || { echo "FALLAN los tests"; exit 1; }
if [ -z "${RAPIDO:-}" ]; then
  echo "== build";      npm run -s build >/dev/null 2>&1 || { echo "FALLA el build (npm run build para ver el error)"; exit 1; }
fi

# AGENTS.md lo generan a veces otras herramientas en la raíz: no se versiona.
git add -A -- . ':(exclude)AGENTS.md'
if git diff --cached --quiet; then echo "Nada que guardar"; exit 0; fi
git commit -q -F - <<EOF
$msg

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
git push -q -u origin v2 2>&1 | grep -v "^remote:" || true
git log --oneline -1
