/*!
 * circ
 * Copyright(c) 2012 Daniel D. Shaw <dshaw@dshaw.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var request = require('request')
  , logger = console

/**
 * Exports.
 */

module.exports = Circ

/**
 * Circ
 *
 * @param options
 * @constructor
 */
function Circ (options) {
  if (!(this instanceof Circ)) return new Circ(options)

  options || (options = {})
  this.token = options.token || process.env['CIRCONUS_AUTH_TOKEN']
  this.appname = options.appname || process.env['CIRCONUS_APP_NAME']

  this.logger = logger = options.logger || logger
}

Circ.prototype._requestOptions = function (url) {
  return {
      url: url
    , json: true
    , headers: {
        'X-Circonus-Auth-Token': this.token
      , 'X-Circonus-App-Name': this.appname
    }
  }
}

Circ.prototype.agents = function (cb) {
  var options = this._requestOptions('https://circonus.com/api/json/list_agents')
  request(options, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      cb(null, body)
    }
  })
}

Circ.prototype.checks = function (active, cb) {
  if (!cb) {
    cb = active
    active = null
  }
  var params = (active) ? '?active='+active : ''
    , options = this._requestOptions('https://circonus.com/api/json/list_checks'+params)
  request(options, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      cb(null, body)
    }
  })
}

Circ.prototype.metrics = function (check, cb) {
  if (!cb) {
    cb = check
    check = null
  }
  if (!check) cb(new Error('Metrics requires `check_id`'))
  var params = '?check_id='+check
    , options = this._requestOptions('https://circonus.com/api/json/list_metrics='+params)
  request(options, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      cb(null, body)
    }
  })
}


