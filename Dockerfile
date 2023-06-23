FROM node:18

WORKDIR /app-ecomm

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]