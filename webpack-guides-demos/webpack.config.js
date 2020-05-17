/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:28:35
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-17 11:42:17
 * @Description  :
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _: 'lodash',
      join: ['lodash', 'join'],
    }),
  ],
};
