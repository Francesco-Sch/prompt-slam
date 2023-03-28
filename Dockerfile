# For development purposes use `npm run dev` to start the server

# Production build
FROM node:19-alpine AS build

RUN npm install -g pnpm
 
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["node", "build"]