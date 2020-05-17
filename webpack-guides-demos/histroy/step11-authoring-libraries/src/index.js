/*
 * @Author       : wangzishun
 * @Date         : 2020-05-09 15:21:30
 * @LastEditors  : wangzishun
 * @LastEditTime : 2020-05-17 11:34:51
 * @Description  :
 */
import _ from 'loadsh';
import numRef from './ref.json';

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    '',
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1,
  );
}
