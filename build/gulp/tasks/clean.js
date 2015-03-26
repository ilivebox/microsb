'use strict';

var gulp   = require('gulp');
var del    = require('del');
var _      = require('../../util');

gulp.task('clean', function (done) {
    del([
        'release',
        'www/**/*',
        '!www/.gitignore',
    ], {
        dot: true
    }, _.runCallback(done));
});

gulp.task('clean-all', function (done) {
    del([
        'release',
        'www/**/*',
        '!www/.gitignore',
        'node_modules',
        'bower_components'
    ], {
        dot: true
    }, _.runCallback(done));
});