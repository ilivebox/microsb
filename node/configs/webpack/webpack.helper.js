var path = require('path');

module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  root: function (args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname, '/../..'].concat(args));
  }
};
