# ---- build ----
FROM node:20-alpine AS build
WORKDIR /app

ARG VITE_TG_BOT_TOKEN
ARG VITE_TG_CHAT_ID

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- serve ----
FROM nginx:alpine AS serve
COPY deploy/nginx.container.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
