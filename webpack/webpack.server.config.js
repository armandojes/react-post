const { resolve } = require('path');
const webpack = require('webpack');
const ip = require('ip');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const publicPath = `http://${ip.address()}:8080/`;
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
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/(node_modules)/',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [['babel-plugin-styled-components']],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          emitFile: false,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new webpack.DefinePlugin({
      publicPath: JSON.stringify(publicPath),
      ENV: JSON.stringify(process.env.NODE_ENV),
      LOCAL_API_URL: JSON.stringify(`http://${ip.address()}:3001`),
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
