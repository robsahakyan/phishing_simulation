FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 3001

ENV PORT 3001


CMD ["npm", "run", "dev"]
