FROM node:lts-alpine
ENV NODE_ENV=production
ENV PORT=3000
ENV MONGO_DB_PASSWORD=8u74wwWhkznUMw0o
ENV MONGO_DB_URI=mongodb+srv://kingsleyanand:8u74wwWhkznUMw0o@db-kingsleyanandsamanth.ikupk8p.mongodb.net/?retryWrites=true&w=majority&appName=db-kingsleyanandsamantha-betest
ENV MONGO_DB_DB_NAME=db_kingsleyanandsamantha_betest
ENV MONGO_DB_COLLECTION=user_data
ENV MONGO_DB_USER_COLLECTION=user
ENV JWT_SECRET=db_kingsleyanandsamantha_betest
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "index.js"]