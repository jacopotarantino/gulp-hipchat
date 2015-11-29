'use strict'
let assert = require('assert')
    , sinon = require('sinon')
    , gutil = require('gulp-util')
    , https = require('https')
    , hipchat = require('./')

describe('gulp-hipchat', () => {

  before( (done) => {
    sinon
      .stub(https, 'request')
      .yields(null, null, JSON.stringify({login: "bulkan"}))
    done()
  })

  after( (done) => {
    https.request.restore()
    done()
  })

  it('should have `node-hipchat` as a dependency', () => {
    var node_hipchat = require('node-hipchat')
    assert(node_hipchat !== undefined && node_hipchat !== null)
  })

  it('should error out if the api key is missing', () => {
    function hipchat_with_empty_options () {
      hipchat({})
    }

    assert.throws(hipchat, TypeError)
    assert.throws(hipchat_with_empty_options, Error)
  })

  it('should send a notification to hipchat', done => {
    hipchat({
      apiKey: 'asdfasdfasfd',
      room: 123456,
      from: 'FunkyMonkey',
      message: 'Some HTML <strong>formatted</strong> string',
      color: 'yellow'
    }, data => {

      https.request.called.should.be.equal(true)
      done()
    })
  })

  it('should handle any errors passed back from hipchat', () => {
    hipchat({
      apiKey: 'asdfasdfasfd',
      room: 123456,
      from: 'FunkyMonkey',
      message: 'Some HTML <strong>formatted</strong> string',
      color: 'yellow'
    }, data => {

      https.request.called.should.be.equal(true)
      done()
    })
  })

  it('should pass through successfully if hipchat returned successfully', () => {
    hipchat({
      apiKey: 'asdfasdfasfd',
      room: 123456,
      from: 'FunkyMonkey',
      message: 'Some HTML <strong>formatted</strong> string',
      color: 'yellow'
    }, data => {
      assert( data.success === true )
      https.request.called.should.be.equal(true)
      done()
    })
  })

})
