FROM node:current-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production

COPY --from=build /usr/src/app/build /usr/share/nginx/html

# RUN rm -rf /etc/nginx/conf.d

COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]