const { resolve } = require('path');
const webpack = require('webpack');

const publicPath = 'http://localhost:8080/';
const ENV = process.env.NODE_ENV;

const config = {
  mode: ENV === 'development' ? 'development' : 'production',
  entry: ['regenerator-runtime/runtime', resolve(__dirname, '../source/server/index.js')],
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'server.js',
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
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          emitFile: false,
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      publicPath: JSON.stringify(publicPath),
      ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      app: resolve(__dirname, '../source/app'),
    },
  },
  target: 'node',
  watch: ENV === 'development',
};

module.exports = config;
