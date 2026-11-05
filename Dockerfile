FROM oven/bun:1.4-slim@sha256:1846adf22496bd711036aae8be147e57bdebbaea2e5264e3e0b5af1db187d9a4 AS build_stage

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM node:26-alpine@sha256:0b36e8c136b94cd4fcf02188228e76c31ad5872eef3fec8cbd2eee500cfd9e80

WORKDIR /app

COPY --chown=node:node --from=build_stage /app/package.json ./package.json
COPY --chown=node:node --from=build_stage /app/node_modules ./node_modules
COPY --chown=node:node --from=build_stage /app/.next ./.next
COPY --chown=node:node --from=build_stage /app/public ./public

EXPOSE 3000

USER node

CMD ["npx", "next", "start"]
