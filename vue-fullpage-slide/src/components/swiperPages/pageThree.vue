<template>
    <div class="bg bg-three">
        <div class="title h-center">
            全景效果
        </div>
        <div class="number-container">
            <div class="number number1">
                <img src="" alt="" />
                <p>350%</p>
                <span>房均点击量</span>
            </div>
            <div class="number number2">
                <p>350%</p>
                <span>房均点击量</span>
            </div>
            <div class="number number3">
                <p>350%</p>
                <span>房均点击量</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'swiperPageThree',
    data() {
        return {
            flag: true
        }
    },
    computed: {

    }
}
</script>
<style lang="scss" scoped>
.number-container {
    position: absolute;
    top: 32%;
    width: 7rem;
    .number {
        display: inline-block;
    }
}
</style>