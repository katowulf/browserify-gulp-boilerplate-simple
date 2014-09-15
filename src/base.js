
var base = {hello: 'world'};

_.extend(base, require('./alpha/exports'));

module.exports = base;
