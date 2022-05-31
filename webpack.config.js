const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
   filename: 'main.[contenthash].js',
   path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
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
        template: 'src/index.html'
      }),

  ],
 }