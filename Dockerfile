FROM node:12-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install && npm run build && npm prune --production

EXPOSE 3000

CMD ["npm", "start"]
