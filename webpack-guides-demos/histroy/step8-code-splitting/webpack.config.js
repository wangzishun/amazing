/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:28:35
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-17 09:20:39
 * @Description  :
 */

const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    // another: './src/another-module.js',
  },

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
}
