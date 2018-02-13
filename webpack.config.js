const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    "basic-routing": './src/js/basic-routing.js',
    "basic-routing-shiny-plugin": './src/js/basic-routing-shiny-plugin.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/lib'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js/,
        // Include: [path.resolve(__dirname, 'app/js')]
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'stage-0'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};
