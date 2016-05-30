FROM ilivebox/heroku-nodejs:v5.11.0

MAINTAINER geminiyellow<geminiyellow@gmail.com>

ADD package.json /app/user/
RUN /app/heroku/node/bin/npm install -s
ADD . /app/user/

RUN useradd -ms /bin/bash docker
RUN chown -R docker /app/user
USER docker
