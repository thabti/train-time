const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 5000;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
const occurenceOrder = new OccurenceOrderPlugin();
console.log(`
    Welcome...
    ENV: ${process.env.NODE_ENV}
  `);
const config = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
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
  devServer: {
    contentBase: path.join(__dirname, "./build"),
    noInfo: false, //  --no-info option
    hot: true,
    inline: true,
    port: PORT,
    host: HOST,
  },
  plugins: [
      occurenceOrder,
      new CleanWebpackPlugin(['build'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("[name].css"),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "index.html")},
    ]),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
