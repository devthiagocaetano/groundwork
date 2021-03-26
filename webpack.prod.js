const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/views/template.html',
    //   minify: {
    //     removeComments: true,
    //     removeAttributeQuotes: true,
    //     collapseWhitespace: true,
    //   }
    // }),
  ]
});