# Link: https://dev.to/chukwutosin_/step-by-step-guide-setting-up-a-nestjs-application-with-docker-and-postgresql-5hei
FROM node:21

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# npm run start:dev
CMD ["npm", "run", "start:dev"]