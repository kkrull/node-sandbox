// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
  config.set({
    angularCli: {
      environment: 'dev'
    },
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    colors: true,
    coverageIstanbulReporter: {
      reports: [
        'html',
        'lcovonly'
      ],
      fixWebpackSourcePaths: true
    },
    frameworks: [
      'jasmine',
      '@angular/cli'
    ],
    logLevel: config.LOG_INFO,
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    port: 9876,
    reporters: [
      'progress',
      'kjhtml'
    ],
    singleRun: false
  });
};
