FROM node:14-alpine
USER node

WORKDIR /home/node

ADD package.json package-lock.json app.js /home/node/

RUN npm ci

CMD ["npm", "start"]
