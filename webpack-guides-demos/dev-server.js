/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 17:52:47
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-09 17:55:45
 * @Description  :
 */

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config');
const option = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
};

webpackDevServer.addDevServerEntrypoints(config, option);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, option);

server.listen(5201, 'localhost', () => {
  console.log('dev server listening on port 5201');
});
