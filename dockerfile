FROM node:18.15.0
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY src/ ./src/
COPY public/ ./public/ 
COPY mocks/ ./mocks/
EXPOSE 3000
CMD ["yarn","run","dev"]