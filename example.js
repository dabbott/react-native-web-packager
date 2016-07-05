var fs = require('fs')
var path = require('path')
var compile = require('./lib/index.js')

var DIRECTORY = __dirname

compile(path.resolve(DIRECTORY, 'input/index.ios.js')).then((output) => {
  var stats = output.stats
  var bundle = output.bundle

  try {
    fs.mkdirSync(path.join(DIRECTORY, 'output'))
  } catch (e) {
    ;
  }

  fs.writeFileSync(path.join(DIRECTORY, 'output', 'stats.json'), JSON.stringify(stats, null, 2))
  fs.writeFileSync(path.join(DIRECTORY, 'output', 'index.string.js'), JSON.stringify(bundle))
  fs.writeFileSync(path.join(DIRECTORY, 'output', 'index.js'), bundle)
})
