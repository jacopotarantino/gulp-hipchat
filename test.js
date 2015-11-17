'use strict'
var assert = require('assert')
var gutil = require('gulp-util')
var hipchat = require('./')

// it('should ', function (cb) {
//   var stream = hipchat()

//   stream.on('data', function (file) {
//     assert.strictEqual(file.contents.toString(), 'unicorns')
//   })

//   stream.on('end', cb)

//   stream.write(new gutil.File({
//     base: __dirname,
//     path: __dirname + '/file.ext',
//     contents: new Buffer('unicorns')
//   }))

//   stream.end()
// })

it('should take `node-hipchat` as an argument', function () {})

it('should error out if the api key is missing', function () {})

it('should send a notification to hipchat', function () {})

it('should handle any errors passed back from hipchat', function () {})

it('should pass through successfully if hipchat returned successfully', function () {})
