FROM node:16-alpine3.18

WORKDIR /app

COPY package*.json .

COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8088

CMD [ "yarn", "start" ]