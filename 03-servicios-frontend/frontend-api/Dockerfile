ARG NODE_VER=18

FROM node:${NODE_VER}-alpine AS build

WORKDIR /usr/src/app

COPY . .
RUN npm install --no-audit && \
    npm run build

RUN npm prune --production && npm dedupe

# Salida
FROM node:${NODE_VER}-alpine as app

WORKDIR /usr/src/app
COPY --chown=node:node . .

COPY --from=build --chown=node:node /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build --chown=node:node /usr/src/app/dist /usr/src/app/dist

USER node

CMD [ "node", "--enable-source-maps", "." ]