FROM node:alpine
ENV NODE_ENV development
WORKDIR /frontend
COPY package.json .
RUN npm install
RUN npm audit fix --force
COPY . .
EXPOSE 3000
CMD ["npm","start"]