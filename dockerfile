FROM node:12.3.1-alpine
WORKDIR /app
COPY . .
RUN i


ENTRYPOINT ["npm","run","start"]
