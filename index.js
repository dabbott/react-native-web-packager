var fs = require('fs')
var path = require('path')
var MemoryFS = require('memory-fs')
var webpack = require('webpack')

var DIRECTORY = __dirname

var mfs = new MemoryFS()
var compiler = webpack({
  entry: {
    index: path.join(DIRECTORY, 'input', 'index.ios.js'),
  },
  output: {
    path: path.join(DIRECTORY, 'output'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'react-native': {
      root: 'ReactNative',
      commonjs2: 'react-native',
      commonjs: 'react-native',
      amd: 'react-native'
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: ['react-native'],
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
    console.log('BUILD ERRORS')
    console.log(stats.toJson().errors)
    return
  }

  console.log('BUILD SUCCESS')
  console.log(stats)

  var statsString = JSON.stringify(stats.toJson('verbose'), null, 2)
  var fileContent = mfs.readFileSync(path.join(DIRECTORY, 'output', 'index.js'), 'utf8')

  try {
    fs.mkdirSync(path.join(DIRECTORY, 'output'))
  } catch (e) {
    ;
  }

  fs.writeFileSync(path.join(DIRECTORY, 'output', 'stats.json'), statsString)
  fs.writeFileSync(path.join(DIRECTORY, 'output', 'index.string.js'), JSON.stringify(fileContent))
  fs.writeFileSync(path.join(DIRECTORY, 'output', 'index.js'), fileContent)
})
