FROM node:latest

WORKDIR /usr/src
COPY . .

RUN npm install --production
EXPOSE 3000

CMD ["npm", "start"]
# docker run -p 3004:3000 -d clash_backend