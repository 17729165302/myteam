<template>
    <div class="swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../static/img/le_ban1.png"/></div>
                <div class="swiper-slide"><img src="../../../static/img/le_ban2.png"/></div>
                <div class="swiper-slide"><img src="../../../static/img/le_ban3.png"/></div>
            </div>
            <!-- 分页器 -->
            <!--<div class="swiper-pagination"></div>-->
        </div>
        <p class="swip_posi">登录/注册</p>
    </div>
</template>

<script>
    import Swiper2 from "../../../static/js/swiper.min.js";

    export default {
        name: "lekaSwiper"
    }

    window.onload=function () {
        new Swiper2 ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            //分页器
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable :true,
            // },
            //自动播放
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            //轮播图更换速度
            speed:1000,
        })
    }
</script>

<style scoped>
    @import url(../../../static/css/swiper.min.css);

    .swiper{
        height: 3.88rem;
        position: relative;
    }
    .swip_posi{
        width: 3.27rem;
        line-height: .48rem;
        text-align: center;
        background: rgb(68, 160, 255);
        font-size: .16rem;
        border-radius: .04rem;
        color: white;
        position: absolute;
        bottom: .4rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: 1;
    }
    .swiper-slide img{
        height: 3.88rem;
    }
    /*.swiper-container .swiper-pagination-bullet-active{*/
        /*background: black !important;*/
    /*}*/
    /*.swiper-container swiper-container-horizontal swiper-container-ios{*/
        /*height: 3.88rem !important;*/
    /*}*/
    /*.swiper-pagination-bullet{*/
        /*background: gray !important;*/
    /*}*/
    /*.swiper-pagination-bullet{*/
        /*opacity: .7 !important;*/
        /*width: .05rem !important;*/
        /*height: .05rem !important;*/
    /*}*/
</style>