
import { square, diag } from './001';
import * as obj from './001';
console.log(obj)
// import {t0,t1} from './001';
import t0 from './001';
console.log(t0(100,100))
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

// $(document).ready(function () {

//     //轮播图
//     var index = 0;
//     var timer;
//     var ul = $("#showItems"); //要轮播的ul
//     var lis = $(".show_box > ul > li"); //每个轮播内容li
//     var oneWidth = lis.eq(0).width(); //每个li的宽度
//     for (var i = 0; i < lis.length; i++) { //给每个li定义一个left，让其在ul里排开
//         lis.eq(i).css("left", oneWidth * i + "px");
//     }
//     //自动切换
//     showtime();
//     //鼠标在箭头和轮播块上时不自动切换
//     $("#showItems").mouseover(function () {
//         clearInterval(timer);
//     });
//     $("#showItems").mouseout(function () {
//         showtime();
//     });
//     $(".pre_slide").mouseover(function () {
//         clearInterval(timer);
//     });
//     $(".pre_slide").mouseout(function () {
//         showtime();
//     });
//     $(".next_slide").mouseover(function () {
//         clearInterval(timer);
//     });
//     $(".next_slide").mouseout(function () {
//         showtime();
//     });
//     //鼠标在箭头和轮播块上时不自动切换 end
//     //鼠标左右方向切换
//     var left_arrow = $(".pre_slide");
//     var right_arrow = $(".next_slide");
//     //左右切换轮播图切入方向不同
//     right_arrow.click(function () {
//         index++;

//         if (index == lis.length) {
//             index = 0;
//         }
//         right_show(index);
//     });
//     left_arrow.click(function () {
//         index--;
//         if (index == -1) {
//             index = lis.length - 1;
//         }
//         left_show(index);
//     });
//     function showtime() {
//         timer = setInterval(function () {
//             index++;
//             if (index == lis.length) {
//                 index = 0;
//             }
//             right_show(index);
//         }, 2000) //每2秒
//     }
//     //右==向左移动
//     function right_show(index) {
//         var pre = index - 1;
//         if (pre < 0) {
//             pre = lis.length - 1;
//         }
//         if (pre == 0) {
//             var preMove = oneWidth * (lis.length - 1);
//         } else {
//             var preMove = oneWidth * pre;
//         }
//         lis.eq(pre).animate({ left: -oneWidth }, 400);
//         lis.eq(pre).animate({ left: preMove }, 0);
//         lis.eq(index).animate({ left: 0 }, 400);
//     }
//     //左==向右移动
//     function left_show(index) {
//         var next = index + 1;
//         if (next == lis.length) {
//             next = 0;
//         }
//         lis.eq(next).animate({ left: oneWidth }, 400);
//         lis.eq(index).animate({ left: -oneWidth }, 0);
//         lis.eq(index).animate({ left: 0 }, 400);
//     }
// });
