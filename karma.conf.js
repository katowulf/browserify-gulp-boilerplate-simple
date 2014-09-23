module.exports = function(config) {
  config.set({
    files: [
      'test/**/*.spec.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
      'test/**/*.spec.js': [/*'coverage',*/ 'browserify']
    },
    browsers: ['PhantomJS'],
    reporters: [/*'coverage',*/ 'spec', 'failed'],
    browserify: {
      debug: true // output source maps
      //transform: ['browserify-istanbul']
    }
  })
};