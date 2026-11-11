#!/usr/bin/env sh
# Despliegue de Exodus en una línea:
#   ./deploy.sh                                        local o VPS por túnel SSH
#   EXODUS_DOMAIN=exodus.midominio.com ./deploy.sh     VPS con dominio y HTTPS automático
set -eu

cd "$(dirname "$0")"

if ! docker compose version >/dev/null 2>&1; then
  echo "Falta Docker con el plugin Compose v2: https://docs.docker.com/engine/install/" >&2
  exit 1
fi

# El contenedor escribe database/exodus.db: debe usar el mismo UID/GID que el dueño del repo.
EXODUS_UID="${EXODUS_UID:-$(id -u)}"
EXODUS_GID="${EXODUS_GID:-$(id -g)}"
export EXODUS_UID EXODUS_GID

PORT="${EXODUS_PORT:-3210}"
COMPOSE="docker compose -f docker/docker-compose.yml"

if [ -n "${EXODUS_DOMAIN:-}" ]; then
  export EXODUS_DOMAIN
  COMPOSE="$COMPOSE --profile https"
  URL="https://$EXODUS_DOMAIN"
else
  URL="http://127.0.0.1:$PORT"
fi

$COMPOSE up -d --build

printf 'Esperando a que Exodus responda'
i=0
while [ "$i" -lt 60 ]; do
  status="$(docker inspect --format '{{.State.Health.Status}}' "$($COMPOSE ps -q web)" 2>/dev/null || echo starting)"
  if [ "$status" = "healthy" ]; then
    printf '\nExodus está en marcha: %s\n' "$URL"
    printf 'Si es el primer arranque, crea ahora la cuenta en %s/configurar\n' "$URL"
    exit 0
  fi
  printf '.'
  sleep 2
  i=$((i + 1))
done

printf '\nEl contenedor no pasó la comprobación de salud. Últimos registros:\n' >&2
$COMPOSE logs --tail 40 web >&2
exit 1
