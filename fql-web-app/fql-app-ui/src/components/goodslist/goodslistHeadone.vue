<template>
    <div class="headone">
        <a href="##" class="headone_limg"><img src="../../../static/img/g_hl.png"/></a>
        <div class="headone_content">
            <span class="iconfont fangdj">&#xe6e4;</span>
            <input type="text">
            <span class="headone_cuo">×</span>
        </div>
        <a href="##" class="headone_rimg"><img src="../../../static/img/g_hr.png"/></a>
    </div>
</template>

<script>
    export default {
        name: "goodslistHeadone"
    }
</script>

<style scoped>
    .headone{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .42rem;
        padding-top: .05rem;
        border-bottom: 1px solid #e8eaee;
        background: white;
    }
    .headone a{
        display: flex;
    }
    .headone_content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .32rem;
        background: #f2f2f2;
        width: 3.06rem;
        border-radius: .04rem;
    }
    .fangdj{
        font-size: .18rem;
        margin: 0 .06rem 0 .11rem;
    }
    .headone_content input{
        outline: none;
        background: #f2f2f2;
        border: 0;
        font-size: .14rem;
        color: #25324e;
        flex: 1;
    }
    .headone_cuo{
        width: .14rem;
        line-height: .13rem;
        text-align: center;
        color: #f2f2f2;
        font-size: .14rem;
        background: #b9bdc5;
        border-radius: 50%;
        margin-right: .08rem;
        padding-bottom: .01rem
    }
    .headone_limg{
        margin: 0 .1rem 0 .13rem;
    }
    .headone_rimg{
        margin: 0 .1rem;
    }
    .headone_limg img{
        width: .09rem;
        height: .16rem;
    }
    .headone_rimg img{
        width: .18rem;
        height: .18rem;
    }
</style>