FROM node:alpine as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.27.1-alpine

COPY --from=builder /usr/src/app/dist/super-tool-ui/browser /usr/share/nginx/html