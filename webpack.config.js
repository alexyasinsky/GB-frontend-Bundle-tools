const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mp3|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 50
              }
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(`${__dirname}/src/index.html`)
      }),
  ],

  devServer: {
    hot: true,
    open: true,
    watchFiles: ['./src/*']
  }

 }