/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:28:35
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-09 18:42:51
 * @Description  :
 */

const path = require('path');

module.exports = {
  // mode: 'development',
  // optimization: {
  //   usedExports: true
  // },
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
