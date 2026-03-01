FROM node:20-slim

WORKDIR /app

COPY luna-backend/package*.json ./

RUN npm install

COPY luna-backend .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "src/app.js"]