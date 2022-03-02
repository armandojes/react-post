const { resolve } = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ip = require('ip');

const publicPath = `http://${ip.address()}:8080/`;
const ENV = process.env.NODE_ENV;

const config = {
  mode: ENV === 'development' ? 'development' : 'production',
  entry: ['regenerator-runtime/runtime', resolve(__dirname, '../source/client.jsx')],
  output: {
    path: resolve(__dirname, '../static'),
    filename: 'app.js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/(node_modules)/',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [require.resolve('react-refresh/babel')],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      publicPath: JSON.stringify(publicPath),
      ENV: JSON.stringify(ENV),
    }),
  ],
  devServer: {
    port: 8080,
    hot: 'only',
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      app: resolve(__dirname, '../source/app'),
    },
  },
  target: 'web',
  watch: ENV === 'development',
};

module.exports = config;
