const path = require('path');
const webpack = require('webpack');

const baseConfig = require('./webpack.base.js');
baseConfig.module.rules.shift({
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'eslint-loader',
        }
      }
})
console.log(baseConfig);

module.exports = {
  output: {
    pathinfo: true,
    filename: 'bundle.js'
  },
  module: {
    rules: [
    ]
  },

  performance: {
    hints: 'warning'
  },

  devtool: "source-map",

  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    watchContentBase: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    contentBase: path.join(__dirname, '../client'),
    compress: true, // enable gzip compression
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
