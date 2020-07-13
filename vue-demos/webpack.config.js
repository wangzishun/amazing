/*
 * @Author       : wangzishun
 * @Date         : 2020-05-17 17:54:37
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-17 17:56:48
 * @Description  :
 */
import path from 'path';

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  rules: [
    {
      test: /\.vue/,
      use: 'vue-loader',
    },
  ],
};
