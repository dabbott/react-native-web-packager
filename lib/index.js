var fs = require('fs')
var path = require('path')
var MemoryFS = require('memory-fs')
var webpack = require('webpack')

var mfs = new MemoryFS()
var compilers = {}

function createCompiler(filename) {
  var compiler = webpack({
    entry: {
      index: filename,
    },
    cache: true,
    output: {
      path: '/output',
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

  return compiler
}

function compile(filename, callback) {
  callback = callback || function () {}
  console.log('filename', filename)

  var compiler = compilers[filename] ? compilers[filename] : createCompiler(filename)

  return new Promise(function(resolve, reject) {
    compiler.run(function(err, stats) {
      if (err) {
        reject(err)
        callback(err)
      } else if (stats.hasErrors()) {
        var errors = stats.toJson().errors
        console.log('BUILD ERRORS')
        console.log(errors)
        reject(errors)
        callback(errors)
        return
      }

      console.log('BUILD SUCCESS', stats.endTime - stats.startTime)
      // console.log(stats)

      const out = {
        stats: stats.toJson(),
        bundle: mfs.readFileSync(path.join('/output', 'index.js'), 'utf8'),
      }
      resolve(out)
      callback(null, out)
    })
  })
}

module.exports = compile
