const path = require('path');

module.exports = {
  entry: './src/index',

  output: {
    path: path.join(__dirname, '../client/assets'),
    filename: 'bundle.[hash].js',
    publicPath: '/assets/',
  },

  resolve: {
    extensions: ['.js']
  },

  context: path.join(__dirname, '../client')
}
