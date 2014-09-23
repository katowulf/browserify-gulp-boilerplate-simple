// not sure why this is necessary, but external libs that will be included
// with a script tag do not appear in the require() scope for browsers if
// they are included with browserify().external(...), even if given a package name
var Firebase = global.Firebase || require('firebase');

exports.foo = 'bar';
exports.Firebase = Firebase;
