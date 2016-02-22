FROM binarytales/heroku-nodejs:latest

ADD package.json /app/user/
RUN /app/heroku/node/bin/npm install
ADD . /app/user/
