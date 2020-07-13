/*
 * @Author       : wangzishun
 * @Date         : 2020-05-29 22:43:19
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-30 00:38:36
 * @Description  :
 */

@testable(true)
class MyTestableClass {
    static isTestable = 0;
    static my = 'wang';
}

function testable(isTestable: any) {
    return function (target: any) {
        console.log(target.my);

        target.isTestable = isTestable;
    };
}

console.log(MyTestableClass.isTestable);

console.log(111);
