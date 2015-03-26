'use strict';

var fs     = require('fs');
var path   = require('path');
var notify = require('gulp-notify');

var regxJS = /(\.(js)$)/i; 
// don't need duplicated error messages
notify.logLevel(0);

// load the tasks
fs.readdirSync('./build/gulp/tasks/')
    .filter(function (name) {
        return regxJS.test(path.extname(name));
    })
    .forEach(function (task) {
        require(path.resolve('./build/gulp/tasks/', task));
    });
