<template>
    <div class="container">
        <img src="/statci/picture1.jpg" class="img" :class="{animated:addAnimation, fadeIn:flag, slower :flag}">
        <div class="">
            <p class="delay-1s" :class="{animated:flag, fadeIn:flag, slower :flag}">balabalabalabala</p>
            <p class="delay-2s" :class="{animated:flag, fadeIn:flag, slower :flag}">balabalabalabala</p>
            <p class="delay-3s" :class="{animated:flag, fadeIn:flag, slower :flag}">balabalabalabala</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'example',
    data() {
        return {
            flag: true,
        }
    },
    computed: {
        addAnimation() {
        }
    },
    updated() {
        // console.log(1);
    }
}
</script>
<style lang="scss" scoped>
.container {
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
