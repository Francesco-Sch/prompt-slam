# For development purposes use `pnpm run dev` to start the server

# Production Build
FROM node:lts-alpine AS build

RUN npm install -g pnpm
 
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["node", "build"]