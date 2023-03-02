FROM node:16-alpine

WORKDIR /src/api

COPY package.json .
COPY package-lock.json .

RUN npm install --quiet

COPY . .
COPY ./.env.prod ./.env

CMD ["npm", "run", "start:dev"]

EXPOSE 3000