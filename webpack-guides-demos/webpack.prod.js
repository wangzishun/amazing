/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 18:48:10
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-09 18:53:49
 * @Description  :
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
});
