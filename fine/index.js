$(function () {
    var $navTagList = $('.nav-wrapper').find('a[href^="#"]');
    var $mainContent = $('.content-wrapper');
    // top取content id
    var rock = {
        top: $('#content4').offset().top,
        heiht: $('#content4').outerHeight(),
        isRan: false
    }
    var mainTopArr = new Array();
    for (var i = 0; i < $mainContent.length; i++) {
        var top = $mainContent.eq(i).offset().top;
        mainTopArr.push(top);
    }

    $navTagList.click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 300);
    });

    $(window).scroll(throttle(function () {
        var scrollTop = $(window).scrollTop();
        // console.log(scrollTop)
        var indexTmp;
        for (var i = 0; i < mainTopArr.length; i++) {
            if (scrollTop >= mainTopArr[i]) {
                indexTmp = i;
            }
        }
        $navTagList.eq(indexTmp).addClass('active').siblings().removeClass('active');
        if (checkVisible(rock, scrollTop)) {
            // console.log('scrollTop:' + scrollTop, 'winHeiht:' + winHeiht)
            setTimeout(function () {
                $('.number-rock').numberRock({
                    speed: 10,
                    count: 5676
                })
            }, 1000);

            rock.isRan = '';
        }
    }));

    // 数字翻滚
    $.fn.numberRock = function (options) {
        console.log('run')
        var defaults = {
            speed: 24,
            count: 100
        };
        var opts = $.extend({}, defaults, options);

        var div_by = 100,
            count = opts['count'],
            speed = Math.floor(count / div_by),
            sum = 0,
            $display = this,
            run_count = 1,
            int_speed = opts['speed'];
        var int = setInterval(function () {
            if (run_count <= div_by && speed != 0) {
                $display.text(sum = speed * run_count);
                run_count++;
            } else if (sum < count) {
                $display.text(++sum);
            } else {
                clearInterval(int);
            }
        }, int_speed);
    }
    // 检查是否可见
    function checkVisible(target, scrollTop) {
        return !target.isRan && (scrollTop < target.top + target.heiht) && (scrollTop > target.top - $(window).height())
    }
    // 节流
    function throttle(fn, interval) {
        var timer = null;
        var firstTime = true;
        return function () {
            if (firstTime) {
                fn.apply(this);
                return firstTime = false;
            }
            if (timer) {
                return;
            }
            timer = setTimeout(function () {
                clearTimeout(timer);
                timer = null;
                fn.apply(this);
            }, interval || 100);
        };
    }
});