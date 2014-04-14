/* global requirejs */
var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/dist',

  shim: {},

  paths: {
    'superagent-lib': '../tests/vendor/superagent/superagent',
    superapi: 'superapi.amd',
    superagent: '../tests/vendor/superagent'
  },

  // ask Require.js to load these files (all our tests)
  //deps: tests.concat(['jquery', 'underscore']),
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
