/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:28:35
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-09 17:21:54
 * @Description  :
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    new HtmlWebpackPlugin({
      title: 'Ouput Management',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
};
