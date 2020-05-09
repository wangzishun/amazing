/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 18:47:55
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-09 18:57:21
 * @Description  :
 */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
