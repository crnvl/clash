FROM node:latest
ENV NODE_ENV=production

WORKDIR /usr/src/

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]
# docker run -p 3004:3000 -d clash_backend