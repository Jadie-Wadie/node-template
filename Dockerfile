FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD npm run prod
