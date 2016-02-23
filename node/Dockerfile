FROM binarytales/heroku-nodejs:latest

RUN /app/heroku/node/bin/npm install -g typescript tsd typings webpack

ADD package.json /app/user/
RUN /app/heroku/node/bin/npm install
ADD . /app/user/
