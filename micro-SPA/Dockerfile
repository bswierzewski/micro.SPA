FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

FROM arm32v7/nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/