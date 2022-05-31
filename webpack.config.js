const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
   filename: 'main.[contenthash].js',
   path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(`${__dirname}/src/assets`), to: path.resolve(`${__dirname}/dist/assets`)},
      ],
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(`${__dirname}/src/index.html`)
      }),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css'
    }),

  ],

  devServer: {
    hot: true,
    open: true,
    watchFiles: ['./src/*']
  }

 }