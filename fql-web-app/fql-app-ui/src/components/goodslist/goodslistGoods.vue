<template>
<div>
    <div class="biglist" v-for="u in datas">
        <div class="goodslist" v-for="i in u.banben">
            <div class="gl_left">
                <img :src="u.indeximg"/><img :src="u.topimg" class="gl_left_img"/>
            </div>
            <div class="gl_right">
                <div class="gl_right_top">
                    <h4>{{u.title}}</h4>
                    <div class="xinghao"><span>{{i.color}}</span><span>{{i.neicun}}</span></div>
                </div>
                <h5><p>¥{{i.price}}</p><span v-if="i.before_price">¥{{i.before_price}}</span></h5>
                <div class="fenqi">
                    <h6>¥{{i.fenqi_pirce}}</h6><p>x36期</p>
                </div>
                <div class="gl_right_bott">
                    <p>自营</p><p>免息</p><p>券</p><span>{{u.pingjia.length}}条评论</span><span>{{u.haoping}}好评</span>
                </div>
            </div>
        </div>
    </div>
    <!--<p class="ssss">{{sasas}}</p>-->
</div>
</template>

<script>
    export default {
        name: "goodslistGoods",
        props:["datas"],

        // computed: {
        //     sasas() {
        //         return this.datas
        //     }
        // }

    }


</script>

<style scoped>
/*.ssss{*/
    /*font-size: .01rem;*/
/*}*/
    .goodslist{
        display: flex;
        justify-content: space-between;
        padding: .16rem .2rem .16rem 0;
        margin-left: .12rem;
        border-bottom: 1px solid #e8eaee;
        background: white;
    }
    .gl_left{
        width: 1.06rem;
        height: 1.06rem;
        position: relative;
    }
    .gl_left img{
        width: 1.06rem;
        height: 1.06rem;
    }
    .gl_left_img{
        position: absolute;
        top: 0;
        left: 0;
    }

    .gl_right{
        width: 2.25rem;
    }
    .gl_right h4{
        font-size: .13rem;
        color: #394050;
        font-weight: 100;
        width: 2.25rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .gl_right span{
        font-size: .1rem;
        line-height: .12rem;
        color: #979DAB;
        display: inline-block;
    }
    .xinghao{
        display: flex;
        margin-top: .04rem;
    }
    .gl_right span:first-child{
        margin-right: .05rem;
    }
    .gl_right h5{
        font-size: .12rem;
        line-height: .12rem;
        color: #979DAB;
        margin-top: .09rem;
        font-weight: 100;
        margin-bottom: .03rem;
        display:flex;
    }
    .gl_right h5 span{
        text-decoration: line-through;
        margin-left: .05rem;
    }
    .fenqi{
        display: flex;
    }
    .fenqi h6{
        font-size: .14rem;
        line-height: .16rem;
        padding-right: .03rem;
        color: #FE4674;
        font-weight: 100;
    }
    .fenqi p{
        font-size: .12rem;
        line-height: .14rem;
        color: #25324E;
        margin-top: .02rem;
    }
    .gl_right_top{
        min-height: .49rem;
    }

    .gl_right_bott{
        display: flex;
        margin-top: .02rem;
    }
    .gl_right_bott p{
        color: #ed5f86;
        border:1px solid #ed5f86;
        font-size: .11rem;
        padding:0 .01rem;
        line-height: .12rem;
        border-radius: .02rem;
        margin-right: .03rem;
    }
    .gl_right_bott p:first-child{
        color: white;
        background:#ed5f86;
    }
    .gl_right_bott span{
        margin-top: .03rem;
    }
    .gl_right_bott span:first-of-type{
        margin-left: .03rem;
        margin-right: .02rem;
    }
</style>