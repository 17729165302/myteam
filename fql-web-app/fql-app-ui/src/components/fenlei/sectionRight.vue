<template>
    <div class="sect_right">
        <div class="sect_banner">
            <img :src="datas.banner"/>
        </div>
        <div class="sect_box" v-for="i in datas.shuma">
            <div class="box_top" v-for="s in i">
                <h4>{{s.name}}</h4>
            </div>
            <div class="box_bott">
                <p v-for="a in datas.pinpai"><img :src="a.img"/><span>{{a.p}}</span></p>
            </div>
        </div>
        <!--<div class="sect_box">-->
            <!--<div class="box_top">-->
                <!--<h4>数码畅销榜</h4>-->
            <!--</div>-->
            <!--<div class="box_bott">-->
                <!--<p><img src="../../../static/img/f_pg.png"/><span>苹果</span></p>-->
                <!--<p><img src="../../../static/img/f_pg.png"/><span>苹果</span></p>-->
                <!--<p><img src="../../../static/img/f_pg.png"/><span>苹果</span></p>-->
                <!--<p><img src="../../../static/img/f_pg.png"/><span>苹果</span></p>-->
                <!--<p><img src="../../../static/img/f_pg.png"/><span>苹果</span></p>-->
                <!--<p><img src="../../../static/img/f_pg.png"/><span>苹果</span></p>-->
                <!--<p><img src="../../../static/img/f_pg.png"/><span>苹果</span></p>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "sectionRight",
        props:["datas"]
    }
</script>

<style scoped>
    .sect_right{
        flex: 1;
        padding-top: .16rem;
        display: flex;
        flex-direction: column;
        border-left: 1px solid #d9d9d9;
    }
    .sect_banner img{
        width: 2.62rem;
        height: 1.12rem;
        display: block;
        margin:0 auto;

        /*display:none;          !* -------------------------------*!*/
    }
    .box_top{
        margin:0rem .16rem .16rem;
    }
    .box_top h4{
        font-size: .14rem;
        color: #757c8e;
        padding-top: .24rem;
        border-top: 1px solid #d9d9d9;
        font-weight: 100;

        /*display:none;          !* -------------------------------*!*/
    }
    .sect_right .sect_box:nth-of-type(2) .box_top h4{
        border-top: none;
    }
    .box_bott{
        display: flex;
        flex-wrap: wrap;
    }
    .box_bott p{
        width: 33.3%;
        margin-bottom: .24rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        /*display:none;          !* -------------------------------*!*/
    }
    .box_bott p img{
        width:.52rem;
        height: .52rem;
    }
    .box_bott span{
        font-size:.12rem;
        color:rgba(37,50,78,.8);
        margin-top: .08rem;
    }
</style>