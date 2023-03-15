
#---------------------------------------------------


FROM node as builder
RUN git clone https://github.com/MaksonMakaron/form-authorization-reactJS
COPY package.json package-lock.json ./
RUN npm install && mkdir /react-auth && mv ./node_modules ./react-auth
WORKDIR /react-auth
COPY . .
RUN npm run build
FROM nginx:alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /react-auth/build /usr/share/nginx/html
EXPOSE 3000 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]