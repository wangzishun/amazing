<template>
    <div ref="numberRun" :data-time="time" :data-value="value"></div>
</template>

<script>
export default {
    props: {
        run: false,
        time: {
            type: Number,
            default: 3
        },
        value: {
            type: Number,
            default: 100
        },
        sign: {
            type: String,
            default: '+'
        }
    },
    methods: {
        numberRun(el) {
            let _this = this
            let step = Math.ceil((_this.value) / (_this.time * 100));
            let current = 0;
            let start = 0;
            let t = setInterval(function () {
                start += step;
                if (start > _this.value) {
                    clearInterval(t);
                    start = _this.value;
                    el.innerHTML = start + _this.sign;
                    t = null;
                    return;
                }
                if (current === start) {
                    return;
                }
                current = start;
                el.innerHTML = current;

            }, 10)
        }
    },
    mounted() {
        this.numberRun(this.$refs.numberRun);
    },
    // computed: {
    //     irun() {
    //         console.log(this.$refs);

    //         // debugger
    //         if (this.run == true) {
    //             this.numberRun(this.$refs.numberRun);
    //         }
    //         console.log('number run');

    //     }
    // }
    watch: {
        run() {
            if (this.run == true) {
                this.numberRun(this.$refs.numberRun);
            }
        }
    }
}
</script>