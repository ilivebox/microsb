'use strict';

// https://github.com/betsol/gulp-require-tasks
// Require the module.
const gulpRequireTasks = require('gulp-require-tasks');
const gulp = require('gulp');
const env = require('../index');

// Call it when necessary.
gulpRequireTasks({
  // Pass any options to it. Please see below.
  path: env.inConfigs('gulp', 'tasks')// This is default
});

gulp.task('default', ['scripts:build', 'json-copy:build']);
