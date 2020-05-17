/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:21:30
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-17 10:14:56
 * @Description  :
 */
import _ from 'loadsh';
// import Print from './print';
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.onclick = Print.bind(null, 'hello');
  return element;
}

document.body.appendChild(component());
