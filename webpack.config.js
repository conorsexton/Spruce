const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/main.jsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'main.js',
    publicPath: '/build/',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/build/',
    index: 'index.html',
    proxy: {
      '/api': 'http://localhost:3000',
    },
    // hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
