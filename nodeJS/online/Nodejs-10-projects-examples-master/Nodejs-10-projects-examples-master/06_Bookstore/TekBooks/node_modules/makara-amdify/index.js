"use strict";

var mlpp = require('makara-languagepackpath');

module.exports = {
    build: function (root, cb) {
        require('./build')(root, cb);
    },
    languagePackPath: function (locale) {
        // Require.js insists on adding .js to everything,
        // even though there's no reason javascript URLs have to have .js in them.
        return mlpp.languagePackPath(locale, true);
    },
    middleware: function (_options) {
        var options = Object.assign({nosuffix: true}, _options);

        return mlpp.middleware(options);
    }
};
