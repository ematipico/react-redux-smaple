var path = require('path')
var webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const env = process.env.NODE_ENV

let entry = []
let plugins = []
let outputPath = ''
let styleRules = []
if (env === 'production') {
  entry = [
    'babel-polyfill',
    './src/index'
  ]
  plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        dead_code: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin('styles.css')
  ]
  styleRules = [
    {
      test: /(\.css|\.scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?sourceMap', 'sass-loader?outputStyle=compressed']
      })
    }
  ]
  outputPath = path.join(__dirname, './dist/')
} else {
  entry = [
    'babel-polyfill',
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/index'
  ]
  plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
  styleRules = [
    { test: /(\.css|\.scss)$/, include: path.join(__dirname, 'src'), loaders: ['style-loader', 'css-loader', 'sass-loader'] },
    { test: /\.css$/, loader: 'style-loader!css-loader' }
  ]
  outputPath = path.join(__dirname, './')
}

module.exports = {
  cache: false,
  devtool: env === 'development' ? 'eval-source-map' : 'source-map',
  entry: entry,
  watch: env === 'development',
  target: 'web',
  output: {
    path: outputPath,
    publicPath: '/',
    filename: 'bundle.js',
    pathinfo: true
  },
  plugins: plugins,
  module: {
    noParse: /jsonpath\.min\.js/gi,
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '/src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, '/src'),
        enforce: 'pre',
        loader: 'standard-loader'
      },
      ...styleRules
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ]
  }
}
