<template>
    <div class="show-time">
        <pageNavigation></pageNavigation>
        <pageMain></pageMain>
    </div>
</template>

<script>
import pageMain from "@/components/swiperPageMain.vue";
import pageNavigation from "@/components/swiperPageNavigation.vue";

export default {
    name: 'showTime',
    methods: {
        flexible(window, document) {
            let docEl = document.documentElement
            let dpr = window.devicePixelRatio || 1

            // adjust body font size
            function setBodyFontSize() {
                if (document.body) {
                    document.body.style.fontSize = (12 * dpr) + 'px'
                }
                else {
                    document.addEventListener('DOMContentLoaded', setBodyFontSize)
                }
            }
            // setBodyFontSize();

            // set 1rem = viewWidth / 10
            function setRemUnit() {
                let rem = docEl.clientWidth / 10
                docEl.style.fontSize = rem + 'px'
            }

            setRemUnit()

            // reset rem unit on page resize
            window.addEventListener('resize', setRemUnit)
            window.addEventListener('pageshow', function (e) {
                if (e.persisted) {
                    setRemUnit()
                }
            })

            // detect 0.5px supports
            if (dpr >= 2) {
                let fakeBody = document.createElement('body')
                let testElement = document.createElement('div')
                testElement.style.border = '.5px solid transparent'
                fakeBody.appendChild(testElement)
                docEl.appendChild(fakeBody)
                if (testElement.offsetHeight === 1) {
                    docEl.classList.add('hairlines')
                }
                docEl.removeChild(fakeBody)
            }
        },
        rem(e, t) {
            function n() {
                var t = r.getBoundingClientRect().width,
                    n = t / 7.5;
                r.style.fontSize = n + "px", d.rem = e.rem = n
            }
            var i, o = e.document,
                r = o.documentElement,
                a = 0,
                d = t.flexible || (t.flexible = {}),
                s = e.navigator.appVersion.match(/iphone/gi),
                m = e.devicePixelRatio;
            a = s ? m >= 3 && (!a || a >= 3) ? 3 : m >= 2 && (!a || a >= 2) ? 2 : 1 : 1, r.setAttribute("data-dpr", a),
                "complete" === o.readyState ? o.body.style.fontSize = "12px" : o.addEventListener("DOMContentLoaded",
                    function () {
                        o.body.style.fontSize = "12px"
                    }, !1);
            var p = "onorientationchange" in window ? "orientationchange" : "resize";
            e.addEventListener(p, function () {
                clearTimeout(i), i = setTimeout(n, 300)
            }, !1), e.addEventListener("pageshow", function (e) {
                e.persisted && (clearTimeout(i), i = setTimeout(n, 300))
            }, !1), n(), d.dpr = e.dpr = a, d.refreshRem = n, d.rem2px = function (e) {
                var t = parseFloat(e) * this.rem;
                return "string" == typeof e && e.match(/rem$/) && (t += "px"), t
            }, d.px2rem = function (e) {
                var t = parseFloat(e) / this.rem;
                return "string" == typeof e && e.match(/px$/) && (t += "rem"), t
            }
        },
    },

    created() {
        // this.flexible(window, document);
        // window, window.lib || (window.lib = {})
        this.rem(window, window.lib || (window.lib = {}))
    },
    components: {
        pageMain,
        pageNavigation,
    }
}
</script>

<style>
html {
    /* font-size: 62.5%; */
}
.show-time {
    background-color:tomato;
}
</style>