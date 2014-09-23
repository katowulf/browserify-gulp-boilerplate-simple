
# Gulp + Browserify + Karma Boilerplate

This is a boilerplate demonstrating a working setup of gulp, browserify, and karma/jasmine test units.
It performs concat, minification, and bundling for distro.
 
The src/alpha/exports.js includes one external library (firebase.js) which is installed via npm install
for demonstration purposes, since external libs gave me some grief initially with browserify.

This bundles up all the contents of src/ and makes them available using `require('base')` or by
simply calling `require('./dist/bundle.js')`; both are equivalent.

## Installation

    npm install
    gulp

## Commands available

 * `gulp bundle`: lint, build, and minify the code into the `dist/bundle.js` and `dist/bundle.min.js` files.
 * `gulp test`: run test units in karma/jasmine
 * `gulp watch`: watch any src/ or test/ files for changes and re-run test units
 * `gulp`: runs `bundle` and `test`
 
# Directory structure

    /dist/bundle*.js    the browserified output for use in production
    /gulp/*             config files for gulp commands
    /src/base.js        compiles all the src/ contents into one export
    /src/**/*.js        the app modules
    /test/**/*.spec.js  the test units
