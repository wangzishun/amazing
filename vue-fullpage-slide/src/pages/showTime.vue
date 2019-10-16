<template>
    <div class="show-time">
        <!-- <div
            class="test h-center"
            style="background-color:brown;height:100px;width:100px;z-index:10;"
        ></div> -->
        <pageNavigation></pageNavigation>
        <pageMain></pageMain>
    </div>
</template>

<script>
import pageMain from "@/components/swiperPageMain.vue";
import pageNavigation from "@/components/swiperPageNavigation.vue";

export default {
    name: 'showTime',
    components: {
        pageMain,
        pageNavigation,
    }
}
</script>

<style>
</style>