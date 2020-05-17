/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:21:30
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-17 11:43:08
 * @Description  :
 */
function component() {
  var element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  this.alert("Hmmm, this probably isn't a great idea...");
  const s = 'sss';
  return element;
}

document.body.appendChild(component());
