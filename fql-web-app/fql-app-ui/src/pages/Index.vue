<template>
    <div class="bigbox">
        <index-header v-if="indexData.headers" :head="indexData.headers.contents"></index-header>
        <div class="shengbei">
            <index-nav :navs="indexData.na"></index-nav>
            <index-banner v-if="indexData.banner" :datas="indexData.banner"></index-banner>
            <index-swiper v-if="indexData.indexswiper" :datas="indexData.indexswiper"></index-swiper>
            <index-banner_tow v-if="indexData.banner" :datas="indexData.banner.bannerThree"></index-banner_tow>
        </div>
        <index-footer></index-footer>
    </div>
</template>

<!--<script src="../../bower_components/vue/dist/vue.js"></script>-->
<script>
import indexHeader from "../components/index/indexHeader";
import indexNav from "../components/index/indexNav";
import indexFooter from "../components/index/indexFooter";
import indexBanner from "../components/index/indexBanner";
import indexBanner_tow from "../components/index/indexBanner_tow";
import indexSwiper from "../components/index/indexSwiper";

import indexapi from "../../apis/indexapi"


    export default {
        data () {
            return {
                indexData :{ }
            };
        },
        // mounted(){
        //         setTimeout(function () {
        //             myswiperthis=this.indexData.indexswiper
        //         },2000)
        //
        // },
        methods:{
            _Indata(){
                indexapi.getdata(data=>{
                    console.log(data)
                    this.indexData=data
                });
            }
        },
        created(){
            this._Indata()
        },

        name: 'Index',
        components:{
            indexSwiper,
            indexBanner_tow,
            indexBanner,
            indexHeader,
            indexNav,
            indexFooter,
        }
    }
</script>
<style>
.bigbox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.shengbei{
    flex: 1;
    overflow-y:auto;
    overflow-x:hidden;
    background: #fff;
}
</style>
