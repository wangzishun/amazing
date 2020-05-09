/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:21:30
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-09 18:03:14
 * @Description  :
 */
import loadsh from 'loadsh';

import printMe from './print';
import './style.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('accepting the updated printMe module');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
