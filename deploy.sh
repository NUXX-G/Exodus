#!/usr/bin/env sh
# Despliegue de Exodus en una línea:
#   ./deploy.sh                                        local o VPS por túnel SSH
#   EXODUS_DOMAIN=exodus.midominio.com ./deploy.sh     VPS con dominio y HTTPS automático (Caddy)
#   EXODUS_PROXY=externo ./deploy.sh                   VPS con Apache/nginx propio delante (sin Caddy)
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

if [ "${EXODUS_PROXY:-}" = "externo" ]; then
  # El HTTPS lo pone el servidor web que ya tienes (Apache, nginx) con proxy a 127.0.0.1:$PORT.
  # Se confía en su X-Forwarded-For para distinguir a cada visitante en el limitador de intentos.
  EXODUS_TRUST_PROXY=1
  export EXODUS_TRUST_PROXY
  URL="http://127.0.0.1:$PORT"
  echo "Modo proxy externo: Exodus escucha en 127.0.0.1:$PORT y tu servidor web lo publica por HTTPS."
elif [ -n "${EXODUS_DOMAIN:-}" ]; then
  # Caddy necesita los puertos 80 y 443 libres: si otro servidor web los usa, usa EXODUS_PROXY=externo.
  if command -v ss >/dev/null 2>&1 && ss -ltnH 2>/dev/null | awk '{print $4}' | grep -Eq '[:.](80|443)$'     && ! docker ps --format '{{.Names}}' | grep -q '^exodus-caddy'; then
    echo "Los puertos 80/443 ya están en uso (¿Apache o nginx?). Caddy no puede arrancar." >&2
    echo "Si ese servidor ya hace de proxy hacia Exodus, despliega con: EXODUS_PROXY=externo ./deploy.sh" >&2
    exit 1
  fi
  EXODUS_TRUST_PROXY=1
  export EXODUS_DOMAIN EXODUS_TRUST_PROXY
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
    code="$($COMPOSE logs web 2>/dev/null | sed -n 's/.*de configuración: \([0-9a-f]*\).*/\1/p' | tail -n 1)"
    if [ -n "$code" ]; then
      printf 'Primer arranque: crea la cuenta en %s/configurar\n' "$URL"
      printf 'Código de configuración: %s\n' "$code"
    fi
    exit 0
  fi
  printf '.'
  sleep 2
  i=$((i + 1))
done

printf '\nEl contenedor no pasó la comprobación de salud. Últimos registros:\n' >&2
$COMPOSE logs --tail 40 web >&2
exit 1
