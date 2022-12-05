[![Frontend](https://github.com/angelsflyinhell/clash/actions/workflows/node.js.yml/badge.svg)](https://github.com/angelsflyinhell/clash/actions/workflows/node.js.yml)
[![Backend](https://github.com/angelsflyinhell/clash/actions/workflows/backend.yml/badge.svg)](https://github.com/angelsflyinhell/clash/actions/workflows/backend.yml)
[![CodeQL](https://github.com/angelsflyinhell/clash/actions/workflows/codeql.yml/badge.svg)](https://github.com/angelsflyinhell/clash/actions/workflows/codeql.yml)

# clash
fun stack using:
- vue
- typescript
- tailwind
- mongodb

# Run with Docker
```console
docker pull ghcr.io/angelsflyinhell/clash_backend:latest
docker run --net host --env MONGO_URI=$MONGO_URI -d ghcr.io/angelsflyinhell/clash_backend

docker pull ghcr.io/angelsflyinhell/clash_frontend:latest
docker run -p 3003:80 -d ghcr.io/angelsflyinhell/clash_frontend
```
