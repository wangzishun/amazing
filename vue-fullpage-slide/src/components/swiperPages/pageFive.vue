<template>
    <main>
        <h1>行业应用</h1>
        <ul class="directive-container">
            <li
                v-for="(el, index) in directive"
                :key="index"
                :class="[
                    directiveActive == index ? 'animated active pulse' : ''
                ]"
                @click="swiperMiniChange(index)"
            >
                {{ el }}
            </li>
        </ul>
        <swiper :options="swiperOption" ref="swiperMini" style="">
            <swiper-slide v-for="(content, index) in contentList" :key="index">
                <article>
                    <section v-for="(item, index) in content" :key="index">
                        <img :src="`/static/img/${item.img}.png`" alt="" />
                        <div class="content">
                            <h6 v-html="item.title"></h6>
                            <p v-html="item.detail"></p>
                        </div>
                    </section>
                </article>
            </swiper-slide>
        </swiper>
        <componentBtn
            url="#"
            content="查看线上案例"
            :call="addAnimation"
        ></componentBtn>
    </main>
</template>
<script>
import componentBtn from '@/components/componentButton'

export default {
    name: 'swiperPageFive',
    data() {
        return {
            flag: true,
            directiveActive: 0,
            directive: ['房屋全景', '小区全景', '家装/家居', '商业地产'],
            swiperOption: { // swiper选项
                notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                speed: 500,
                setWrapperSize: true,
                slidesPerView: 1,
                height: '60%',
                resistanceRatio: 0,
                observeParents: true,
                on: {
                    slideChange: () => {
                        this.swiperMiniChange(this.swiper.activeIndex);
                    },
                }
            },
            contentList: [
                [
                    { img: 'pic_fwqj_one', title: '沉浸式空间漫游自由行走&emsp;', detail: '3D户型效果图' },
                    { img: 'pic_fwqj_two', title: '房源标尺空间信息一目了然', detail: '房源面积效果图' },
                    { img: 'pic_fwqj_three', title: '自动AI语音讲房解读更清晰', detail: 'AI语音讲房效果图' }
                ],
                [
                    { img: 'pic_xqqj_one', title: '小区航拍展示周边环境', detail: '小区航拍效果图' },
                    { img: 'pic_xqqj_two', title: '小区地拍展示小区内景', detail: '小区地拍效果' },
                    { img: 'pic_xqqj_three', title: '小区内外全景极致体验', detail: '小区内外全景效果图' }
                ],
                [
                    { img: 'pic_jzjj_one', title: '装修前后对比，要素精准测量', detail: '装修对比效果图' },
                    { img: 'pic_jzjj_two', title: '一键美化，装修家具立体感知', detail: '多种装修风格效果图' },
                    { img: 'pic_jzjj_three', title: '互动体验，空间漫游尽收眼底', detail: '全景空间漫游效果图' }
                ],
                [
                    { img: 'pic_sydc_one', title: '办公环境体验，活动空间预览', detail: '空间预览效果图' },
                    { img: 'pic_sydc_two', title: '线上带看，提升客户成交效率', detail: '线上商铺效果图' },
                    { img: 'pic_sydc_three', title: '互动体验，空间漫游尽收眼底', detail: '全景空间效果图' }
                ],
            ]
        }
    },
    methods: {
        swiperMiniChange(index) {
            console.log('swiper to ' + index);
            this.directiveActive = index;
            this.swiper.slideTo(index);
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperMini.swiper;
        },
        addAnimation() {
            if (this.$store.state.swiperPageIndex == 4) {
                return true;
            }
            return false;
        }
    },
    components: {
        componentBtn,
    }
}
</script>
<style lang="scss" scoped>
.directive-container {
    // position: absolute;
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    li {
        font-size: 0.3rem;
        font-weight: 400;
        width: 1.7rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        transition: 1s;
        &.active {
            border-radius: 0.3rem;
            background-color: rgba(69, 135, 255, 1);
            border-color: rgba(69, 135, 255, 0.8);
            box-shadow: 0rem 0.05rem 0.3rem rgba(69, 135, 255, 0.6);
        }
    }
}
.swiper-container {
    margin-top: 0.6rem;
    article {
        display: flex;
        flex-direction: column;
        section {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0.4rem;
            img {
                width: 3rem;
                height: 2rem;
            }
            .content {
                margin-left: 0.4rem;
                white-space: nowrap;
                width: 47%;
                h6 {
                    font-size: 0.28rem;
                    font-weight: 600;
                    margin-bottom: 0.4rem;
                }
                p {
                    font-size: 0.24rem;
                    font-weight: 400;
                }
            }
        }
    }
}
</style>