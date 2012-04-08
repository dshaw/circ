#!/usr/bin/env node
;(function () { // wrapper in case we're in module_context mode

  process.title = 'circ' // set process title

  var circ = require('../lib/circ.js')()
    , args = Array.prototype.splice.call(process.argv, 2)
    , logger = circ.logger
    , cmd = args.shift()

  args.push(function cb (err, data) {
    if (err) console.error(err)
    if (data) console.log(JSON.stringify(data))
  })

  if (circ[cmd]) circ[cmd].apply(circ, args)

})()