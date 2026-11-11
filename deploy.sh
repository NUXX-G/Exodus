#!/usr/bin/env sh
# Despliegue de Exodus en una línea: ./deploy.sh
# Construye la imagen, levanta el contenedor y espera a que responda.
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

PORT="${EXODUS_PORT:-3000}"

docker compose -f docker/docker-compose.yml up -d --build

printf 'Esperando a que Exodus responda'
i=0
while [ "$i" -lt 60 ]; do
  status="$(docker inspect --format '{{.State.Health.Status}}' "$(docker compose -f docker/docker-compose.yml ps -q web)" 2>/dev/null || echo starting)"
  if [ "$status" = "healthy" ]; then
    printf '\nExodus está en marcha: http://127.0.0.1:%s\n' "$PORT"
    exit 0
  fi
  printf '.'
  sleep 2
  i=$((i + 1))
done

printf '\nEl contenedor no pasó la comprobación de salud. Últimos registros:\n' >&2
docker compose -f docker/docker-compose.yml logs --tail 40 web >&2
exit 1
