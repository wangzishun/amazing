/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:21:30
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-09 18:17:19
 * @Description  :
 */
import { cube } from './math.js';

function component() {
  var element = document.createElement('pre');

  element.innerHTML = ['hello webpack', '4 cubed is equal to ' + cube(4)].join('\n');

  return element;
}

document.body.appendChild(component());
