/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:28:35
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-17 11:33:47
 * @Description  :
 */

const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'webpack-numbers.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'webpackNumbers',
    libraryTarget: 'umd',
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};
