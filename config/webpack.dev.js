const path = require('path'); // eslint-disable-line no-undef
const webpack = require('webpack'); // eslint-disable-line no-undef
const _ = require('lodash'); // eslint-disable-line no-undef

const baseConfig = require('./webpack.base.js'); // eslint-disable-line no-undef

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
      poll: true,
    },
    contentBase: path.join(__dirname, '../client'), // eslint-disable-line no-undef
    compress: true, // enable gzip compression
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

dev = _.merge(baseConfig, dev);

module.exports = dev; // eslint-disable-line no-undef
