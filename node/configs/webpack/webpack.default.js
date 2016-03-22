var root = require('./webpack.helper').root;

module.exports = {
  context: __dirname,
  resolve: {
    root: root()
  },
  output: {
    publicPath: root(),
    filename: '[name].bundle.js'
  }
};


