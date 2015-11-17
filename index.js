'use strict'
var gutil = require('gulp-util')
var Hipchat = require('node-hipchat')

module.exports = function (options, callback) {
  if (!options.apiKey) {
    throw new gutil.PluginError('gulp-hipchat', '`apiKey` is required to communicate with hipchat')
  }

  hipchat = new Hipchat(options.apiKey)

  hipchat.postMessage(options, function (data) {
    callback()
  })
}
