'use strict';

var util = {
    runCallback: function (done) {
        return function (err) {
            if (!err) {
                done();
            }
        };
    }
};

module.exports = util;
