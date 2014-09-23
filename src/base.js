var extend = require('xtend');

// merge all our libs into one exports, so we can just require base.js
module.exports = extend({}, require('./alpha/exports'), require('./beta/exports'));