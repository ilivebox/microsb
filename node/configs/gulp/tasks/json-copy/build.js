'use strict';

const env = require('../../../index');

module.exports = function (gulp, callback) {
  return gulp
    .src(env.inServer('**/*.json'))
    .pipe(gulp.dest(env.inDist('server')));
};
