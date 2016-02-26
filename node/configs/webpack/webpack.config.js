var webpackMerge = require('webpack-merge');
var path = require('path');

var common = {
  resolve: {
    extensions: ['', '.ts', '.json', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/node_modules/]
      }
    ]
  }
};

var client = {
  target: 'web',
  entry: '../../client',
  output: {
    path: path.join(__dirname, '/../../dist/client')
  }
};

var server = {
  target: 'node',
  entry: '../../server',
  output: {
    path: path.join(__dirname, '/../../dist/server')
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

var defaults = {
  context: __dirname,
  resolve: {
    root: __dirname + '../../../node'
  },
  output: {
    publicPath: path.resolve(__dirname + '../../../node'),
    filename: '[name].bundle.js'
  }
};

module.exports = [
  // Client
  webpackMerge({}, defaults, common, client),

  // Server
  webpackMerge({}, defaults, common, server)
];
