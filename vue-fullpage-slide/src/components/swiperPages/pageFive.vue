<template>
    <div class="bg bg-five">
        <div class="title">
            行业应用
        </div>
        <ul class="directive-container">
            <li
                v-for="(el, index) in directive"
                :key="index"
                class="animated"
                :class="[directiveActive == index ? 'active pulse' : '']"
                @click="swiperMiniChange(index)"
                :style="{}"
            >
                {{ el }}
            </li>
        </ul>
        <swiper :options="swiperOption" ref="swiperMini" style="">
            <swiper-slide v-for="(content, index) in contentList" :key="index">
                <div class="content-container">
                    <div
                        v-for="(detail, index) in content"
                        :key="index"
                        class="content-wrapper"
                    >
                        <img :src="`/static/img/${detail.img}.png`" alt="" />
                        <div class="detail">
                            <p>{{ detail.p }}</p>
                            <span>{{ detail.span }}</span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <componentBtn url="#" content="查看线上案例"></componentBtn>
    </div>
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
                // direction: 'vertical',
                setWrapperSize: true,
                // autoHeight: true,
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
                    { img: 'pic_fwqj_one', p: '沉浸式空间漫游自由行走', span: '3D户型效果图' },
                    { img: 'pic_fwqj_two', p: '房源标尺空间信息一目了然', span: '房源面积效果图' },
                    { img: 'pic_fwqj_three', p: '自动AI语音讲房解读更清晰', span: 'AI语音讲房效果图' }
                ],
                [
                    { img: 'pic_xqqj_one', p: '小区航拍展示周边环境', span: '小区航拍效果图' },
                    { img: 'pic_xqqj_two', p: '小区地拍展示小区内景', span: '小区地拍效果' },
                    { img: 'pic_xqqj_three', p: '小区内外全景极致体验', span: '小区内外全景效果图' }
                ],
                [
                    { img: 'pic_jzjj_one', p: '装修前后对比，要素精准测量', span: '装修对比效果图' },
                    { img: 'pic_jzjj_two', p: '一键美化，装修家具立体感知', span: '多种装修风格效果图' },
                    { img: 'pic_jzjj_three', p: '互动体验，空间漫游尽收眼底', span: '全景空间漫游效果图' }
                ],
                [
                    { img: 'pic_sydc_one', p: '办公环境体验，活动空间预览', span: '空间预览效果图' },
                    { img: 'pic_sydc_two', p: '线上带看，提升客户成交效率', span: '线上商铺效果图' },
                    { img: 'pic_sydc_three', p: '互动体验，空间漫游尽收眼底', span: '全景空间效果图' }
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
        width: 24.5%;
        text-align: center;
        height: 0.6rem;
        line-height: 0.6rem;
        border-radius: 0.3rem;
        transition: 1s;
        &.active {
            background-color: rgba(69, 135, 255, 1);
            border-color: rgba(69, 135, 255, 0.8);
            box-shadow: 0rem 0.05rem 0.3rem rgba(69, 135, 255, 0.6);
        }
    }
}
.swiper-container {
    .content-container {
        display: flex;
        flex-direction: column;
        .content-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 5%;
            img {
                width: 42%;
                // height: 2rem;
            }
            p {
                font-size: 0.28rem;
                font-weight: 600;
                margin-bottom: 10%;
            }
            span {
                font-size: 0.24rem;
                font-weight: 400;
            }
            .detail {
                margin-left: 5%;
                width: 47%;
            }
        }
    }
}
</style>