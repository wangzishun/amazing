/*
 * @Author       : wangzishun
 * @Date         : 2020-05-29 22:53:16
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-29 23:00:36
 * @Description  :
 */
const t = 1;

console.log(111, t);
@testable
class MyTestableClass {}

function testable(target) {
    target.isTestable = true;
}

MyTestableClass.isTestable; // true
