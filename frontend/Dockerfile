FROM node:lts AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .


FROM base as development

EXPOSE 3000
CMD npm run start


FROM base as build

RUN npm run build


FROM nginx:stable-alpine as production

COPY --from=build /usr/src/app/build /usr/share/nginx/html
# RUN rm -rf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]