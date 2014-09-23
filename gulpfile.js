'use strict';

var gulp       = require('gulp');
var plugins    = require('gulp-load-plugins')();
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var karma      = require('karma-as-promised');
var fs         = require('fs');

//todo bundle source maps externally with gulp-browserify / exorcist

function getBundle(debug, args) {
  return browserify({debug: debug||false}, args)
    .external('firebase', {expose: 'firebase'})
    // make src available as require('base')
    .require('./src/base.js', {expose: 'base'})
    // or just add it to the bundle if it uses globals
    //.add('./src/base.js')
    ;
}

gulp.task('build', function(){
  return getBundle()
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(plugins.header(fs.readFileSync('./gulp/header.txt'), {
      pkg: require('./package.json')
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  return karma.server.start({
    configFile: __dirname + '/karma.conf.js'
  });
});

gulp.task('test', function () {
  return karma.server.start({
    configFile: __dirname+'/karma.conf.js',
    singleRun: true
  });
});

gulp.task('minify', function() {
  getBundle()
    .bundle()
    .pipe(source('./bundle.min.js'))
    .pipe(buffer())
    .pipe(plugins.uglify({ preserveComments: 'some' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function () {
  return gulp.src(['./gulpfile.js', './src/**/*.js', './test/**/*.spec.js'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('bundle', ['lint', 'build', 'minify']);
gulp.task('default', ['bundle', 'test']);
