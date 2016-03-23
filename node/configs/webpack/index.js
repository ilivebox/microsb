var webpackMerge = require('webpack-merge');

var defaults = require('./webpack.defaults');

var common = require('./webpack.common');

var server = require('./webpack.server');

var client = require('./webpack.client');

module.exports = [
  // Client
  webpackMerge({}, defaults, common, client),

  // Server
  webpackMerge({}, defaults, common, server)
];
