FROM rust:latest

WORKDIR /usr/src
COPY . .

RUN cargo install --path .
EXPOSE 3000

CMD ["cargo", "run"]
# docker run -p 3004:3000 -d clash_backend