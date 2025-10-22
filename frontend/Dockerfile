# ---------- Etapa de BUILD ----------
FROM node:20.12.2-alpine AS build
WORKDIR /app

# Como el contexto es ./frontend, estos archivos existen en el root del contexto
COPY package*.json ./
# Si no tienes package-lock.json, usa npm install
RUN npm ci || npm install

COPY . .
RUN npm run build

# ---------- Etapa de RUNTIME (Nginx) ----------
FROM nginx:stable-alpine

# Config SPA (si aplica)
RUN printf 'server {\n\
  listen 80;\n\
  server_name _;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location / { try_files $uri /index.html; }\n\
}\n' > /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
