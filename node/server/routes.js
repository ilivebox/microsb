'use strict';

var path = require('path');
var errors = require('./components/errors');

var redis = require('redis');

// console.log(process.env.HEROKUREDIS_PORT_6379_TCP_ADDR + ':' + process.env.HEROKUREDIS_PORT_6379_TCP_PORT);

// APPROACH 1: Using environment variables created by Docker
// var client = redis.createClient(
// 	process.env.HEROKUREDIS_PORT_6379_TCP_PORT,
//   	process.env.HEROKUREDIS_PORT_6379_TCP_ADDR
// );

// APPROACH 2: Using host entries created by Docker in /etc/hosts
// var client = redis.createClient('6379', 'herokuRedis');

// APPROACH 3: Using environment, for heroku
var client = redis.createClient(process.env.REDIS_URL);

module.exports = function (app) {

  // All undefined asset routes should return a 404
  app.route('/:url(components|app)/*')
    .get(errors[404]);

  app.get('/api/counter', function (req, res, next) {
    client.incr('counter', function (err, counter) {
      if (err) return next(err);
      res.send('This page has been viewed ' + counter + ' times!');
    });
  });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function (req, res) {
      res.sendFile(path.join(app.get('client'), 'index.html'));
    });
};
