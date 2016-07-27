var webpackMerge = require('webpack-merge');

var defaults = require('./webpack.default');

var common = require('./webpack.common');

var client = require('./webpack.client');

module.exports = [
  webpackMerge({}, defaults, common, client),
];
