FROM oven/bun:1.4-slim@sha256:cb3bbbb08e13a4a2ff400f24c7a2a1d5efa83f6ef8544d52d95a519631e2fc61 AS build_stage

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM node:26-alpine@sha256:2d984a15c9b54fd0aeb608b8e0d0d83529eb34d2966db27a1fb4f1edc3d298a3

WORKDIR /app

COPY --chown=node:node --from=build_stage /app/package.json ./package.json
COPY --chown=node:node --from=build_stage /app/node_modules ./node_modules
COPY --chown=node:node --from=build_stage /app/.next ./.next
COPY --chown=node:node --from=build_stage /app/public ./public

EXPOSE 3000

USER node

CMD ["npx", "next", "start"]
