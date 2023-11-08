FROM node:18.17.0-alpine

WORKDIR /usr/src/app

RUN npm ci

COPY . .

RUN npm run compile

RUN npm prune --omit=dev

USER node

ENTRYPOINT [ "npm", "start" ]
