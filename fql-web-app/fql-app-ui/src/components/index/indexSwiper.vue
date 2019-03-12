<template>
    <div class="swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="u in datas"><img :src="u"/></div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper1 from "../../../static/js/swiper.min.js";

    export default {
        name: "indexSwiper",
        props:["datas"]
    }

    window.onload=function () {
        new Swiper1('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            //分页器
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true,
            // },
            //自动播放
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            //轮播图更换速度
            speed: 1000,
        })
    }
</script>

<style scoped>
    @import url(../../../static/css/swiper.min.css);

    .swiper-wrapper img{
        width: 3.5rem;
        height: 1.46rem;
        display: block;
        margin:  0 auto;
    }
</style>

<!--<style>-->
    <!--.swiper-container .swiper-pagination-bullet-active{-->
        <!--background: white !important;-->
    <!--}-->
    <!--.swiper-wrapper .swiper-pagination-bullet-active{-->
        <!--background: white !important;-->
    <!--}-->

    <!--.swiper-pagination-bullet{-->
        <!--background:gray !important;-->
    <!--}-->
    <!--.swiper-pagination-bullet{-->
        <!--opacity: .7 !important;-->
    <!--}-->
    <!--.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{-->
        <!--/*bottom: -10px !important;*/-->
    <!--}-->
<!--</style>-->