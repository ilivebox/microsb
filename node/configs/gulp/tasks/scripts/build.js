'use strict';

const env = require('../../../index');
const typescript = require('gulp-typescript');
const tscConfig = require(env.inProject('tsconfig.json'));

module.exports = function (gulp, callback) {
  return gulp
    .src(env.inServer('**/*.ts'))
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest(env.inDist('server')));
};
