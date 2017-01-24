var path = require('path')
var webpack = require('webpack')
module.exports = {
  cache: false,
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/index'
  ],
  watch: true,
  target: 'web',
  output: {
    path: path.join(__dirname, './'),
    publicPath: '/',
    filename: 'bundle.js',
    pathinfo: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    // new webpack.DllReferencePlugin({
    //   context: '.',
    //   manifest: require('./vendors-manifest.json')
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      __DEV__: true
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
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
        test: /\.css.js$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader?parser=postcss-js',
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ]
  }
}
