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

  describe('#graphs()', function () {
    it('should return a list of all Circonus graphs', function(done) {
      var circ = circonus()
      circ.graphs(done);
    })
  })

  describe('#worksheets()', function () {
    it('should return a list of all Circonus worksheets', function(done) {
      var circ = circonus()
      circ.worksheets(done);
    })
  })

//  describe('#graph()', function () {
//    it('should return details on Circonus a graph', function(done) {
//      var circ = circonus()
//      circ.graph('888e9911-f88e-6996-f669-d22d22ed9988', done);
//    })
//  })

//  describe('#worksheet()', function () {
//    it('should return details on Circonus a worksheet', function(done) {
//      var circ = circonus()
//      circ.worksheet('888e9911-f88e-6996-f669-d22d22ed9988', done);
//    })
//  })

})