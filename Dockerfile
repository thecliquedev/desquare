#add an image for node
FROM node:15.11.0 as build-stage
RUN npm install -g pnpm

WORKDIR /src


COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build 

# production environment
FROM nginx:1.16

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /src/build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
