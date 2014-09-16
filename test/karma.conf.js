// Configuration file for Karma
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    frameworks: [/*'browserify', */'jasmine'],
    browsers: ['Chrome'/*,'PhantomJS'*/],
    reporters: ['spec', 'failed', 'coverage'],
    autowatch: false,
    singleRun: true,

    preprocessors: {
      "./src/**/*.js": ["browserify"/*, "coverage"*/],
//      "./**/*.spec.js": ["browserify"]
    },

    browserify: {
      // Options passed to browserify(), see browserify for available options
      options: {
        // Options passed to browserify() for separate bundle
        external: {}
      },
      // Enable/disable source maps, defaults to true
      debug: true,
      prebundle: function(bundle) {
        //bundle.external('firebase');
      }
    },

    coverageReporter: {
      type: "html"
    },

    files: [
//      '../bower_components/mockfirebase/dist/mockfirebase.js',
//      '../src/**/*.js',
      '../dist/bundle.js',
      './**/*.spec.js'
    ]
  });
};
