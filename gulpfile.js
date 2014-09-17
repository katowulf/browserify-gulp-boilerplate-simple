'use strict';

var gulp       = require('gulp');
var plugins    = require('gulp-load-plugins')();
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var karma      = require('karma-as-promised');

gulp.task('bundle', function(){
  return browserify({debug: true})
    .add('./src/base.js')
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
  return karma.server.start({
    files: [
      'test/**/*.spec.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
      'test/**/*.spec.js': ['browserify']
    },
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    browserify: {
      debug: true
    },
    singleRun: true
  });
});

gulp.task('lint', function () {
  return gulp.src(['./gulpfile.js', './src/**/*.js', './test/**/*.spec.js'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('default', ['lint', 'bundle', 'test']);
