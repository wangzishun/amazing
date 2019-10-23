<template>
    <div class="container">
        <div class="main">
            <ul class="list">
                <li class="item" v-for="(item,index) in newList" :key="index">
                    <img :src= item.url  class="scale-img">  
                    <div class="right">
                        <p class="title">{{item.title}}</p>
                        <p class="desc">{{item.desc}}</p>
                    </div> 
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'componentFour',
    data() {
        return {
            index: 0,
            newList: [
                {
                    url: '@/assets/images/picture3.jpg',
                    title: 'balabalabalabala',
                    desc: 'balabalabalabalabalabalabalabalabalabalabalabala'
                },
                {
                    url: '@/assets/images/picture3.jpg',
                    title: 'balabalabalabala',
                    desc: 'balabalabalabalabalabalabalabalabalabalabalabala'
                },
                {
                    url: '@/assets/images/picture3.jpg',
                    title: 'balabalabalabala',
                    desc: 'balabalabalabalabalabalabalabalabalabalabalabala'
                },
                {
                    url: '@/assets/images/picture3.jpg',
                    title: 'balabalabalabala',
                    desc: 'balabalabalabalabalabalabalabalabalabalabalabala'
                },
                {
                    url: '@/assets/images/picture3.jpg',
                    title: 'balabalabalabala',
                    desc: 'balabalabalabalabalabalabalabalabalabalabalabala'
                },
            ]
        }
    },
    methods: {

    },
    mounted() {
        
        var list = document.getElementsByClassName('list')[0];
        $('.list').animate({ "scrollTop": ".2rem" }, 100);
        var timer = null;
        var canScroll = false;
        var currentTop = $('.main').position().top;
        $('.list').scroll(function () {
            clearTimeout(timer);
            timer = null;
            timer = setTimeout(function () {
                var scrollTop = $('.list').position().top;
                var timerTop = null, timerBottom = null;

                if (list.scrollTop === 0 && canScroll == false && currentTop == scrollTop) {
                    clearTimeout(timer)
                    timer = null;
                    canScroll = true;
                    timerTop = setTimeout(function () {
                        $("#markList").animate({ "scrollTop": 5 }, 100);
                        canScroll = false;
                        clearTimeout(timerTop)
                        timerTop = null;
                        clearTimeout(timer)
                        timer = null;
                    }, 100);
                } else if ((list.scrollHeight - list.clientHeight) == list.scrollTop) {
                    canScroll = true;
                    clearTimeout(timerBottom);
                    timerBottom = null;
                    timerBottom = setTimeout(function () {
                        let num = $('.list').height() * 0.9;
                        $('.list').animate({ scrollTop: num }, 100);
                        canScroll = false;
                        clearTimeout(timerBottom);
                        timerBottom = null;
                        clearTimeout(timer)
                        timer = null;
                    }, 100)
                } else {
                    clearTimeout(timer);
                    timer = null;
                }
            }, 100)
        })
    }
}
</script>
<style lang="scss" scoped>
.container {
    color: #fff;
    padding: 0.8rem 0;
    .main {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
    }
    .main:after {
        content: "";
        height: calc(3rem+1px);
    }
    .list {
        box-sizing: border-box;
        height: calc(3rem + 1px);
        overflow: auto;
    }
    .item {
        display: flex;
        background: rgba(0, 0, 0, 0.3);
        margin: 0.1rem 0;
        .title {
            font-size: 0.26rem;
            line-height: 0.6rem;
        }
        .desc {
            font-size: 0.2rem;
            line-height: 0.4rem;
            width: 3.4rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
.scale-img {
    height: 1rem;
    margin: 0.1rem;
}
</style>
