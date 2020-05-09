/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 18:48:04
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-09 18:53:01
 * @Description  :
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: '#inline-source-map',
  devServer: {
    contentBase: 'dist',
  },
});
