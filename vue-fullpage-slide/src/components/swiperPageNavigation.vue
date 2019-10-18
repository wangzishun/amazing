

<template>
    <div class="page-navigation">
        <div
            class="nav-container animated"
            :class="{
                slideInDown: navActionFlag,
                fast: navActionFlag,
                slideOutUp: !navActionFlag,
                faster: !navActionFlag
            }"
        >
            <ul>
                <li
                    v-for="(val, index) in navList"
                    :key="index"
                    @click="switchTo(index)"
                >
                    <p>{{ val }}</p>
                </li>
            </ul>
        </div>
        <i class="nav-btn" @click="navAction"></i>
    </div>
</template>

<script>

export default {
    name: 'pageNavigation',
    data() {
        return {
            navActionFlag: false,
            // navSlideDown: 'animated slideInDown',
            // navSlideUp: 'animated slideInDown'
            navList: ['首页', '品牌优势', '全景效果', '专属服务', '行业应用', '全景拍摄', '拍摄流程', '合作伙伴'],
        }
    },
    methods: {
        navAction(e) { // 导航收起或者展开
            e.preventDefault();
            this.navActionFlag = !this.navActionFlag;
        },
        switchTo(pageIndex) { // 更改页面索引
            this.navActionFlag = !this.navActionFlag;
            this.$store.commit('switchPageIndex', { swiperPageIndex: pageIndex })
        }
    }
}
</script>

<style >
.nav-container {
    position: absolute;
    background-color: brown;
    height: 100%;
    width: 100%;
    z-index: 10;
}
li {
    text-align: center;
}
p {
    font-size: 0.8rem;
}
.nav-btn {
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    z-index: 999;
    background: url(../assets/images/nav_btn.png) no-repeat;
    background-size: contain;
    /* background: rebeccapurple; */
}
</style>