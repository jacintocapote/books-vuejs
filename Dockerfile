# build stage
FROM node:12.10.0-alpine
WORKDIR /usr/app/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
