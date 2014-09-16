'use strict';

var gulp       = require('gulp');
var plugins    = require('gulp-load-plugins')();
var _          = require('lodash');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var fs         = require('fs');
var glob       = require('glob');
//var es6ify     = require('es6ify');

gulp.task('bundle', function(){
  var bundler = browserify({debug: true});

  bundler.add('./src/base.js');
//  glob.sync("./src/*/exports.js").forEach(function(file){
//    console.log('adding', file);
//    bundler.add(file);
//  });

  bundler
    .bundle()
    .on('error', function (err) {
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'));
});

gulp.task('cover', function () {
  return gulp.src('./src/**/*.js')
    .pipe(plugins.istanbul());
});

gulp.task('test', ['cover'], function () {
  return gulp.src('test/**/*.spec.js')
//    .pipe(browserify())
    .pipe(plugins.jasmine())
    .pipe(plugins.istanbul.writeReports());
});

var karma = require('karma').server;

/**
 * Run test once and exit
 */
//gulp.task('test', function (done) {
//  karma.start({
//    configFile: __dirname + '/test/karma.conf.js',
//    singleRun: true
//  }, done);
//});

gulp.task('lint', function () {
  return gulp.src(['./gulpfile.js', './src/**/*.js', './test/**/*.spec.js'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('default', ['lint', 'bundle', 'test']);
