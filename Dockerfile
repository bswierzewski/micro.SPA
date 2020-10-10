FROM node:alpine As builder
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g @angular/cli@10.0.8
COPY . .
RUN ng build --prod

FROM arm32v7/nginx:alpine
COPY --from=builder /usr/src/app/dist/micro/ /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g","daemon off;"]