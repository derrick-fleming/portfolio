const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [
    './src/index.tsx',
    isDevelopment && 'webpack-hot-middleware/client?timeout=1000'
  ].filter(Boolean),
  devtool: isDevelopment ? 'cheap-module-source-map' : 'source-map',
  output: {
    path: path.join(__dirname, 'server', 'public'),
    filename: 'main.js'
  },
  devServer: {
    static: './public'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    isDevelopment && new webpack.NoEmitOnErrorsPlugin(),
    isDevelopment && new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean)
};
