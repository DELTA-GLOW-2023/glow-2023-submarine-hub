FROM node:18.17.0-alpine

RUN npm i

COPY . .

RUN npm run compile

RUN npm prune --omit=dev

ENTRYPOINT [ "npm", "start" ]
