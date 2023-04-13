# Crear sitio estático
ARG NODE_VER=18

FROM node:${NODE_VER}-alpine AS builder

WORKDIR /usr/src/app/production

COPY package*.json ./
RUN npm install --no-audit
COPY . .
RUN npm run build

# Crear servidor web para entregar contenido estático
FROM nginx:alpine

COPY --from=builder --chown=nginx:nginx /usr/src/app/production/build /usr/share/nginx/html

# Agregar permisos de Nginx
RUN chmod -R 755 /usr/share/nginx/html && \
chown -R nginx:nginx /var/cache/nginx && \
chown -R nginx:nginx /var/log/nginx && \
chown -R nginx:nginx /etc/nginx/conf.d

RUN touch /var/run/nginx.pid && \
chown -R nginx:nginx /var/run/nginx.pid

USER nginx