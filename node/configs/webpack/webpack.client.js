var path = require('path');
var autoprefixer = require('autoprefixer');

// Webpack Plugins
var webpack = require('webpack');
var DefinePlugin = webpack.DefinePlugin;
var NoErrorsPlugin = webpack.NoErrorsPlugin;
var DedupePlugin = webpack.optimize.DedupePlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var root = require('./webpack.helper').root;
var ENV = require('./webpack.helper').ENV;

module.exports = {
  target: 'web',
  resolve: {
    root: root('client'),
    // only discover files that have those extensions
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html']
  },
  entry: {
    'vendor': root('client', 'vendor.ts'),
    'index': root('client', 'bootstrap.ts')
  },
  output: {
    path: root('dist', 'client'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  module: {
    preLoaders: [],
    loaders: [
      // Support for CSS as raw text
      // use 'null' loader in test mode (https://github.com/webpack/null-loader)
      // all css in client/assets/stylesheets will be bundled in an external css file
      {
        test: /\.css$/,
        include: root('client', 'assets', 'stylesheets'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
      },
      // all css required in client/javascripts files will be merged in js files
      { test: /\.css$/, include: root('client', 'javascripts'), loader: 'raw!postcss' },

      // support for .scss files
      // use 'null' loader in test mode (https://github.com/webpack/null-loader)
      // all css in client/assets/stylesheets will be bundled in an external css file
      {
        test: /\.scss$/,
        include: root('client', 'assets', 'stylesheets'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
      },
      // all css required in client files will be merged in js files
      { test: /\.scss$/, include: root('client', 'javascripts'), loader: 'raw!postcss!sass' },

      // Raw loader support for *.html
      // Returns file content as string
      // See: https://github.com/webpack/raw-loader
      { test: /\.html$/, loader: 'raw', exclude: [root('client', 'index.html')] }
    ],
    postLoaders: [],
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/]
  },
  plugins: [
    // TODO: for dev.
    // // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // // Minify all javascript, switch loaders to minimizing mode
    // new UglifyJsPlugin({
    //   // Angular 2 is broken again, disabling mangle until beta 6 that should fix the thing
    //   // Todo: remove this with beta 6
    //   mangle: false
    // }),
    //
    // // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // // Dedupe modules in the output
    // new DedupePlugin(),
    // // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // // Only emit files when there are no errors
    // new NoErrorsPlugin(),

    // Define env variables to help with builds
    // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    // Environment helpers
    new DefinePlugin({ 'process.env': { ENV: JSON.stringify(ENV) } }),

    // Generate common chunks if necessary
    // Reference: https://webpack.github.io/docs/code-splitting.html
    // Reference: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
    new CommonsChunkPlugin({ name: 'vendor', filename: '[name].[hash].js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common', filename: '[name].[hash].js', minChunks: 2, chunks: ['index', 'vendor'] }),

    // Inject script and link tags into html files
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: root('client', 'index.html'),
      favicon: root('client', 'assets', 'images', 'favicon.ico'),
      inject: 'body',
      chunksSortMode: function compare(a, b) {
        // common always first
        if (a.names[0] === 'common') {
          return -1;
        }
        // app always last
        if (a.names[0] === 'index') {
          return 1;
        }
        // vendor before app
        if (a.names[0] === 'vendor' && b.names[0] === 'index') {
          return -1;
        } else {
          return 1;
        }
        // a must be equal to b
        return 0;
      }
    }),
    // Extract css files
    // Reference: https://github.com/webpack/extract-text-webpack-plugin
    // Disabled when in test mode or not in build mode
    new ExtractTextPlugin('[name].[hash].css'),

    // Copy assets from the public folder
    // Reference: https://github.com/kevlened/copy-webpack-plugin
    new CopyWebpackPlugin([{
      from: root('client/public')
    }])
  ],
  /**
   * PostCSS
   * Reference: https://github.com/postcss/autoprefixer-core
   * Add vendor prefixes to your css
   */
  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ]
};
