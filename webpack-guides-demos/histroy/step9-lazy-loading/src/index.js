/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:21:30
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-17 09:36:00
 * @Description  :
 */

function component() {
  const element = document.createElement('div')
  const button = document.createElement('button')
  const br = document.createElement('br')

  button.innerHTML = 'click me and look at the console!'
  element.appendChild(br)
  element.appendChild(button)

  button.onclick = (e) =>
    import(/* webpackChunkName: 'print' */ './print').then((module) => {
      const print = module.default
      print()
    })
  return element
}

document.body.appendChild(component())
