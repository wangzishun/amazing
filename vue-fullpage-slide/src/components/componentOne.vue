<template>
    <div class="container">
        <img src="../../static/images/picture_one.jpg" class="img" :class="{animated:flag, fadeIn:flag, slower :flag}">
        <div class="">
            <p class="delay-1s" :class="{animated:flag, fadeIn:flag, slower :flag}">balabalabalabala</p>
            <p class="delay-2s" :class="{animated:flag, fadeIn:flag, slower :flag}">balabalabalabala</p>
            <p class="delay-3s" :class="{animated:flag, fadeIn:flag, slower :flag}">balabalabalabala</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'componentOne',
    data() {
        return {
            flag: true
        }
    },
    computed: {
        addAnimation() {
            if (this.$store.state.hasAnimated.name == 'touch0' && (this.$route.query.finished || this.$store.state.hasAnimated.hasAnimats)) {
                this.$store.commit('showAnimation', {
                    hasAnimats: true,
                    name: 'touch0'
                })
                this.flag = true;
            } else {
                this.flag = false;
            }
        }
    },
    updated() {
        console.log(1);
    }
}
</script>
<style lang="scss" scoped>
.container {
    background: url(/static/images/bg_1.png) no-repeat;
    background-size: cover;
    text-align: center;
    .img {
        width: 5.2rem;
        margin: 0.6rem auto;
    }
    p {
        font-size: 0.32rem;
        color: #666;
        text-align: center;
        line-height: 0.48rem;
    }
}
</style>
