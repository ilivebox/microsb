FROM binarytales/heroku-nodejs:latest

MAINTAINER geminiyellow<geminiyellow@gmail.com>

ADD package.json /app/user/
RUN /app/heroku/node/bin/npm install -s
ADD . /app/user/

RUN useradd -ms /bin/bash docker
RUN chown -R docker /app/user
USER docker
