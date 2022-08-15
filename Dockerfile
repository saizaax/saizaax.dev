# Install dependencies
FROM node:17-alpine as dependencies
WORKDIR /saizaax-dev
COPY package.json package-lock.json* ./

RUN npm ci

# Build
FROM node:17-alpine as builder
WORKDIR /saizaax-dev

COPY . .
COPY --from=dependencies /saizaax-dev/node_modules ./node_modules

RUN npm run build

# Run
FROM node:17-alpine as runner
WORKDIR /saizaax-dev

ENV NODE_ENV production

COPY --from=builder /saizaax-dev/public ./public
COPY --from=builder /saizaax-dev/package.json ./package.json
COPY --from=builder /saizaax-dev/.next ./.next
COPY --from=builder /saizaax-dev/node_modules ./node_modules
COPY --from=builder /saizaax-dev/next.config.js ./

EXPOSE 3000

CMD ["npm", "run", "start"]