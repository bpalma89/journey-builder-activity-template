FROM node:10

WORKDIR ~/journey-builder-activity-template

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]