const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './app/index.jsx'
  ],
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, "./build")
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
  module: {
    loaders,
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "index.html")},
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.UglifyJsPlugin({
     mangle: {
       except: ['require', 'export', '$super']
     },
     compress: {
       warnings: false,
       sequences: true,
       dead_code: true,
       conditionals: true,
       booleans: true,
       unused: true,
       if_return: true,
       drop_console: false
     }
   })
  ]
};
