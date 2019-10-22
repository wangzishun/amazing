

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
                    {{ val }}
                </li>
            </ul>
        </div>
        <div class="nav-bar">
            <img src="../assets/images/logo.png" alt="" />
            <i
                class="nav-btn"
                :class="[navActionFlag ? 'nav-active' : 'nav-default']"
                @click="navAction"
            ></i>
        </div>
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

<style lang="scss" scoped>
.page-navigation {
    .nav-container {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 888;
        background: rgba(0, 3, 36, 0.9);
        ul {
            margin-top: 2.22rem;
            li {
                text-align: center;
                font-size: 0.3rem;
                margin-bottom: 0.82rem;
            }
        }
    }
    .nav-bar {
        position: absolute;
        height: 1rem;
        width: 100%;
        z-index: 999;
        background: rgba(0, 3, 36, 1);

        & > img {
            position: absolute;
            width: 1.6rem;
            height: 0.5rem;
            top: 0.25rem;
            left: 0.4rem;
        }
        .nav-btn {
            position: absolute;
            width: 0.5rem;
            height: 0.5rem;
            top: 0.25rem;
            right: 0.4rem;
        }
        .nav-active {
            background: url(../assets/images/nav_btn_active.png) no-repeat;
            background-size: contain;
        }
        .nav-default {
            background: url(../assets/images/nav_btn_default.png) no-repeat;
            background-size: contain;
        }
    }
}
</style>