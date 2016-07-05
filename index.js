var path = require('path')
var MemoryFS = require("memory-fs")
var webpack = require("webpack")

var DIRECTORY = __dirname

var mfs = new MemoryFS()
var compiler = webpack({
  entry: {
    index: path.join(DIRECTORY, 'assets', 'index.ios.js'),
  },
  output: {
    filename: path.join(DIRECTORY, 'bundle', 'index.js'),
  },
})

compiler.outputFileSystem = mfs
compiler.run(function(err, stats) {
  if (err || stats.hasError()) {
    console.log('err', err)
    return
  }
  fs.writeFileSync(path.join(DIRECTORY, 'bundle', 'stats.json'), JSON.stringify(stats))
  // var fileContent = mfs.readFileSync("...")
})
