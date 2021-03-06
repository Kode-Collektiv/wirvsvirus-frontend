#########################
### build environment ###
#########################

FROM node:12-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only-prod

COPY . .

RUN npm run build

##################
### production ###
##################

FROM nginx:1.17-alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
