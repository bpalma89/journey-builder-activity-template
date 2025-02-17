FROM node:10

WORKDIR ~/journey-builder-activity-template

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]