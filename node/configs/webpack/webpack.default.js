var root = require('./webpack.helper').root;

module.exports = {
  context: __dirname,
  output: {
    publicPath: root(),
    filename: '[name].bundle.js'
  }
};


