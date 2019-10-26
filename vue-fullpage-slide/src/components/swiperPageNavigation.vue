

<template>
    <nav>
        <section
            :class="[
                'animated',
                navActionFlag ? 'slideInDown fast' : 'slideOutUp faster'
            ]"
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
        </section>
        <header>
            <img src="/static/img/logo.png" alt="" />
            <i
                :class="[
                    'animated',
                    navActionFlag
                        ? 'nav-default bounceIn'
                        : 'nav-active flipInY'
                ]"
                @click="navAction"
            ></i>
        </header>
    </nav>
</template>
<script>
export default {
    name: 'pageNavigation',
    data() {
        return {
            navActionFlag: false,
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
nav {
    section {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 999;
        background: rgba(0, 3, 36, 0.9);
        ul {
            margin-top: 1.5rem;
            li {
                text-align: center;
                font-size: 0.3rem;
                margin-bottom: 0.82rem;
            }
        }
    }
    header {
        position: fixed;
        height: 1rem;
        width: 100%;
        z-index: 999;
        background: rgba(0, 3, 36, 1);

        img {
            float: left;
            width: 1.6rem;
            height: 0.5rem;
            margin-left: 0.4rem;
            margin-top: 0.25rem;
        }
        i {
            float: right;
            width: 0.5rem;
            height: 0.5rem;
            margin-top: 0.25rem;
            margin-right: 0.4rem;
        }
        .nav-active {
            background: url(/static/img/nav_btn_active.png) no-repeat;
            background-size: contain;
        }
        .nav-default {
            background: url(/static/img/nav_btn_default.png) no-repeat;
            background-size: contain;
        }
    }
}
</style>