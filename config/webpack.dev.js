const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');

const baseConfig = require('./webpack.base.js');

baseConfig.module.rules.push({
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'eslint-loader',
    options: {
      parser: 'babel-eslint',
    },
  },
});

let dev = {
  output: {
    pathinfo: true,
    filename: 'bundle.js',
  },
  module: {
    rules: [],
  },

  performance: {
    hints: 'warning',
  },

  devtool: 'source-map',

  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
    watchContentBase: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    contentBase: path.join(__dirname, '../client'),
    compress: true, // enable gzip compression
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

dev = _.merge(baseConfig, dev);

module.exports = dev;
