FROM node:13

RUN npm install -g nodemon

WORKDIR /app
COPY . /app

RUN npm install

ENTRYPOINT [ "nodemon", "/app/src/index.js" ]
