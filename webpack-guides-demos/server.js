/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 17:22:12
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-09 17:25:44
 * @Description  :
 */

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

app.listen(5201, () => {
  console.log('localhost: 5201');
});
