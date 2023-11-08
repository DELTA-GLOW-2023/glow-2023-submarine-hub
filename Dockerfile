FROM node:18.17.0-alpine

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .

RUN npm run compile

RUN npm prune --omit=dev

USER node

ENTRYPOINT [ "npm", "start" ]
