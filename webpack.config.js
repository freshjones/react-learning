const path = require('path')

module.exports = {

  entry: [
    'react-hot-loader/patch',
    './src/index.jsx',
  ],
  output: {
    publicPath: '/static/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval',

}
