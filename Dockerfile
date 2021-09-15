FROM node:14 as base

WORKDIR /home/node/app

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

CMD ["node", "dist/server.js"]
