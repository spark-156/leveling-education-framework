FROM node:16 AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install


FROM base as development

EXPOSE 3000
CMD npm run start


FROM base as build

COPY . .
RUN npm run build


FROM nginx:stable-alpine as production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html
# RUN rm -rf /etc/nginx/conf.d
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]