//BrowserSync configuration used by lite-server: https://www.browsersync.io/docs/options/
module.exports = {
  logLevel: 'info',
  logPrefix: 'Tour',
  open: false,
  server: {
    index: '/index.html',
    routes: {
      '/tour': 'dist/'
    }
  },
};
