var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.js')
var webpack = require('webpack')
var bundler = webpack(config)

module.exports = {
  server: {
    baseDir: 'src',
    index: 'index.html'
  },
  middleware: [
    webpackDevMiddleware(bundler, {
      publicPath: bundler.options.output.publicPath,
      stats: {
        colors: true,
        usedExports: true,
        reasons: true
      }
    }),
    webpackHotMiddleware(bundler)
  ],
  files: [
    '../js/**/*.js',
    '../css/app.css',
    '../**/*.html'
  ],
  online: false,
  ghostMode: true,
  minify: false
}
