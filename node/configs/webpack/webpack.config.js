var webpackMerge = require('webpack-merge');
var path = require('path');

// Client:
var HtmlWebpackPlugin = require('html-webpack-plugin');

var common = {
  resolve: {
    extensions: ['', '.ts', '.json', '.js', '.html']
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
  entry: {
    app: '../../client/bootstrap.ts'
  },
  output: {
    path: path.join(__dirname, '/../../dist/client')
  },
  plugins: [
    // Inject script and link tags into html files
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: '../../client/public/index.html',
      inject: 'body',
      chunksSortMode: function compare(a, b) {
        // common always first
        if (a.names[0] === 'common') {
          return -1;
        }
        // app always last
        if (a.names[0] === 'app') {
          return 1;
        }
        // vendor before app
        if (a.names[0] === 'vendor' && b.names[0] === 'app') {
          return -1;
        } else {
          return 1;
        }
        // a must be equal to b
        return 0;
      }
    }),
  ]
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
