<template>
    <div class="bg bg-one">
    </div>
</template>
<script>

export default {
    name: 'swiperPageOne',
    data() {
        return {
            flag: true
        }
    },
    computed: {
        getIndex() {
            if (this.$store.state.swiperPageIndex == 0) {
                return true;
            }
            return false;
        },
    },
    components: {
    }
}
</script>
<style scoped>
</style>