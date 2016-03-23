var path = require('path');
var root = require('./webpack.helper').root;

module.exports = {
  target: 'node',
  entry: {
    'index': '../../server'
  },
  output: {
    filename: '[name].js',
    path: root('dist', 'server')
  },
  externals: function checkNodeImport(context, request, cb) {
    if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
      cb(null, 'commonjs ' + request);
      return;
    }
    cb();
  },
  node: {
    global: true,
    __dirname: false,
    __filename: false,
    process: true,
    Buffer: true
  }
};
