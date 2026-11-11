# syntax=docker/dockerfile:1
# Contexto de build: la raíz del repositorio (ver docker-compose.yml).

FROM node:24-bookworm-slim AS deps
WORKDIR /app
# better-sqlite3 compila su binario nativo con node-gyp: hacen falta Python y un compilador de C++
# solo en esta etapa; la imagen final no los lleva.
RUN apt-get update \
 && apt-get install -y --no-install-recommends python3 make g++ \
 && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

FROM node:24-bookworm-slim AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json tsconfig.json next.config.ts ./
COPY src ./src
COPY database/schema.ts ./database/schema.ts
COPY database/migrations ./database/migrations
RUN npm run build

FROM node:24-bookworm-slim AS run
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=3000 \
    VAULT_PATH=/vault \
    DATABASE_PATH=/data/exodus.db

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/database/migrations ./database/migrations

RUN mkdir -p /data /vault && chown -R node:node /data /app
USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
