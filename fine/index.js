$(function () {
    var nav = $('.nav-wrapper');
    var mainContent = $('.content-wrapper');
    var numberRockTag = $('.number-rock').offset().top;

    var mainTopArr = new Array();
    for (var i = 0; i < mainContent.length; i++) {
        var top = mainContent.eq(i).offset().top;
        mainTopArr.push(top);
    }

    nav.find('a[href^="#"]').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 400);
    });

    $(window).scroll(throttle(function () {
        var scrollTop = $(window).scrollTop();
        for (var i = 0; i < mainTopArr.length; i++) {
            if (scrollTop >= mainTopArr[i]) {
                nav.find('a').eq(i).addClass('active').siblings().removeClass('active');
                if (numberRockTag) {
                    $('.number-rock').numberRock({
                        speed: 10,
                        count: 5676
                    })
                    numberRockTag = '';
                    // $('.value').numberRock({
                    //     speed: 10,
                    //     count: 5674
                    // });
                    // $('.value2').numberRock({
                    //     speed: 15,
                    //     count: 6666
                    // });
                    // $('.value3').numberRock({
                    //     speed: 20,
                    //     count: 7777
                    // });
                }
            }
        }
        console.log(scrollTop)
    }));
    $.fn.numberRock = function (options) {
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
            }, interval || 40);
        };
    }
});