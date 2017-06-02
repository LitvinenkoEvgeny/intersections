const path = require('path');

module.exports = {
  entry: './src/index',

  output: {
    path: path.join(__dirname, '../client/assets'),
    filename: 'bundle.[hash].js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-1']
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js']
  },

  context: path.join(__dirname, '../client')
}
