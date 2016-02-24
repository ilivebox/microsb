'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./configs');

// Setup server
var app = express();
var http = require('http');

// Express configuration
require('./configs/express')(app);
// Route configuration
require('./routes')(app);

// Start server
http.createServer(app).listen(config.port, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
module.exports = app;
