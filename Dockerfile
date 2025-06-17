FROM oven/bun:1.2-alpine AS builder
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:1.2-alpine AS runtime
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile
COPY svelte.config.js vite.config.ts ./
COPY --from=builder /app/.svelte-kit ./.svelte-kit
EXPOSE 4173
CMD ["bun", "run", "preview", "--host", "0.0.0.0"]