/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:21:30
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-17 09:25:55
 * @Description  :
 */
// import _ from 'loadsh'

// function component() {
//   var element = document.createElement('div')

//   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ')

//   return element
// }

document.body.appendChild(component())

function getComponent(params) {
  return import(/* webpackChunkName: 'loadsh' */ 'loadsh')
    .then(({ default: _ }) => {
      const element = document.createElement('div')
      element.innerHTML = _.join(['hallo', 'webpack', ''])
      return element
    })
    .catch((err) => 'An error occurred while loading the componen')
}

getComponent().then((component) => {
  document.body.appendChild(component)
})
