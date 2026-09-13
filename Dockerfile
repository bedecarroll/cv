FROM oven/bun:1.4-slim@sha256:cb3bbbb08e13a4a2ff400f24c7a2a1d5efa83f6ef8544d52d95a519631e2fc61 AS build_stage

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM node:26-alpine@sha256:ef24c5053d50fdc3e4e56eb4e7ddb7861874ab0fdc797046ba897581deb8e868

WORKDIR /app

COPY --chown=node:node --from=build_stage /app/package.json ./package.json
COPY --chown=node:node --from=build_stage /app/node_modules ./node_modules
COPY --chown=node:node --from=build_stage /app/.next ./.next
COPY --chown=node:node --from=build_stage /app/public ./public

EXPOSE 3000

USER node

CMD ["npx", "next", "start"]
