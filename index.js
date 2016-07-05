var fs = require('fs')
var path = require('path')
var MemoryFS = require("memory-fs")
var webpack = require("webpack")

var DIRECTORY = __dirname

var mfs = new MemoryFS()
var compiler = webpack({
  entry: {
    index: path.join(DIRECTORY, 'input/index.ios.js'),
  },
  output: {
    path: path.join(DIRECTORY, 'output'),
    filename: '[name].js',
  },
  externals: {
    react: 'React',
    "react-dom": 'ReactDOM',
    "react-native": 'ReactNative',
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

compiler.outputFileSystem = mfs
compiler.run(function(err, stats) {
  if (err) {
    throw err
  } else if (stats.hasErrors()) {
    console.log('build errors')
    stats.toString({
      chunks: false, // Makes the build much quieter
      colors: false,
    })
    return
  }
  console.log('stats', stats)
  var statsString = JSON.stringify(stats.toJson('verbose'), null, 2)
  var fileContent = mfs.readFileSync(path.join(DIRECTORY, 'output', 'index.js'), 'utf8')

  fs.writeFileSync(path.join(DIRECTORY, 'output', 'stats.json'), statsString)
  fs.writeFileSync(path.join(DIRECTORY, 'output', 'index.js'), JSON.stringify(fileContent))
  // console.log('fileContent', fileContent)
})
