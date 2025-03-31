FROM node:18-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

ARG VERSION=1.0.0
ENV VERSION=$VERSION

EXPOSE 3000

CMD ["npm", "start"]
