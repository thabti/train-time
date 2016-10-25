const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = process.env.NODE_ENV === 'development';

module.exports = [
  {
   test: /\.js|.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['react-hot','babel'],
  },
  {
    test: /\.css|.scss$/,
    loader: dev ? 'style!css!sass?outputStyle=expanded' : ExtractTextPlugin.extract('style', ['css', 'sass?outputStyle=expanded']),
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file',
  },
  {
    test: /\.(woff|woff2)$/,
    loader: 'url?prefix=font/&limit=5000',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml',
  },
  {
    test: /\.gif/,
    loader: 'url-loader?limit=10000&mimetype=image/gif',
  },
  {
    test: /\.jpg/,
    loader: 'url-loader?limit=10000&mimetype=image/jpg',
  },
  {
    test: /\.png/,
    loader: 'url-loader?limit=10000&mimetype=image/png',
  },

  {
    test: /\.svg/,
    loader: 'url-loader?limit=10000&mimetype=image/png',
  },
];
