/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:21:30
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-09 16:06:34
 * @Description  :
 */
import loadsh from 'loadsh';

import './style.css';
import avatorImg from './avator.jpg';

import data1 from './export_cda.xml';
function component() {
  const element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const avatorDom = new Image();
  avatorDom.src = avatorImg;
  element.appendChild(avatorDom);
  element.innerHTML = JSON.stringify(data1)
  console.log(data1);

  return element;
}

document.body.appendChild(component());
