var fs = require('fs')
var path = require('path')
var MemoryFS = require("memory-fs")
var webpack = require("webpack")

var DIRECTORY = __dirname

// var mfs = new MemoryFS()
var compiler = webpack({
  entry: './assets/index.ios.js',
  output: {
    filename: './bundle/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          "babelrc": false,
          "presets": [
            "es2015",
            "stage-1",
            "react",
          ],
          "plugins": [
            "transform-decorators-legacy",
          ],
          cacheDirectory: true,
        }
      },
    ]
  },
})

// compiler.outputFileSystem = mfs
compiler.run(function(err, stats) {
  if (err) {
    throw err
  } else if (stats.hasErrors()) {
    console.log('biuld erros')
    stats.toString({
      chunks: false, // Makes the build much quieter
      colors: false,
    })
    return
  }
  console.log('stats', stats)
  var statsString = JSON.stringify(stats.toJson('verbose'), null, 2)
  fs.writeFileSync(path.join(DIRECTORY, 'bundle', 'stats.json'), statsString)
  // var fileContent = mfs.readFileSync("...")
})
