<template>
    <div class="container">
        <img src="@/assets/images/picture3.jpg" class="img" :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">
        <div>
           <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-1s">balabalabalabalabalabalabalabalabalabalabalabala</p>
           <p :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}" class="delay-2s">balabalabalabala</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'componentThree',
    computed: {
        addAnimation() {
            if (this.$store.state.hasAnimated.name == 'touch2' && this.$store.state.hasAnimated.hasAnimats) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    background: url(../assets/images/bg_1.png) no-repeat;
    background-size: cover;
    text-align: center;
    .img {
        width: 7rem;
        margin: 0.6rem 0;
    }
    p {
        font-size: 0.32rem;
        line-height: 0.48rem;
        color: #666;
        margin: 1rem;
        text-align: center;
    }
}
</style>
