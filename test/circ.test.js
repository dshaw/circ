var mocha = require('mocha')
  , assert = require('assert')
  , circonus = require('../')

describe('Circ', function () {

  describe('circ.auth', function () {
    it('should have a `token` property', function(done) {
      var circ = circonus({ token: 'token' })
      assert.equal(circ.token, 'token')
      done()
    })
    it('should have a `appname` property', function(done) {
      var circ = circonus({ appname: 'appname' })
      assert.equal(circ.appname, 'appname')
      done()
    })
    it('should have a `logger` which is by default is `console`', function(done) {
      var circ = circonus()
      assert.equal(circ.logger, console)
      done()
    })
  })

  describe('#agents()', function () {
    it('should return a list of all Circonus agents', function(done) {
      var circ = circonus()
      circ.agents(done);
    })
  })

  describe('#checks()', function () {
    it('should return a list of all Circonus checks', function(done) {
      var circ = circonus()
      circ.checks(done);
    })
  })

  describe('#metrics()', function () {
    it('should return a list of all Circonus metrics', function(done) {
      var circ = circonus()
      circ.metrics(10023, done);
    })
  })

  describe('#check()', function () {
    it('should return details on Circonus a check', function(done) {
      var circ = circonus()
      circ.check(10023, done);
    })
  })

})