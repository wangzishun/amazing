<template>
    <div class="container">
        <img  src="../../static/images/picture2.jpg" class="img" :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">
        <div class="text">
            <p>balabalabalabalabalabalabalabala</p>
            <p>balabalabalabala</p>
            <p>balabalabalabala</p>
            <p>balabalabalabala</p>
            <p>balabalabalabalabalabalabalabalabalabalabalabala</p>
           
        </div>
    </div>
</template>
<script >
export default {
    name: 'componentTwo',
    data() {
        return {
            flag: true
        }
    },
    computed: {
    },
    methods: {
        addAnimation() {
            if (this.$store.state.hasAnimated.name == 'touch1' && this.$store.state.hasAnimated.hasAnimats) {
                this.flag = true
                return true
            } else {
                this.flag = false
                return false
            }
        }
    },
    mounted: function () {
        let self = this;
        this.$on('test', function () {
            console.log(self.flag);
            self.flag = 0;
            console.log(self.flag);
        })


    },
}
</script>
<style lang="scss" scoped>
.container {
    background: url(/static/images/bg_1.png) no-repeat;
    background-size: cover;
    text-align: center;
    .img {
        height: 5.7rem;
        margin: 0.6rem 0;
        // width:100%;
    }
    .text {
        line-height: 0.4rem;
        font-size: 0.24rem;
    }
}
</style>
