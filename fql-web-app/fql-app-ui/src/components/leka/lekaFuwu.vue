<template>
    <div class="fuwu">
        <div class="fuwu_top">
            <h4>乐卡服务</h4>
        </div>
        <div class="fuwu_bottom">
            <a href="##"><img src="../../../static/img/le_fuwu1.png"/><h5>乐花借钱</h5><p>超长账期</p><p>还款灵活</p></a>
            <a href="##"><img src="../../../static/img/le_fuwu1.png"/><h5>乐花借钱</h5><p>超长账期</p><p>还款灵活</p></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lekaFuwu"
    }
</script>

<style scoped>
    .fuwu{
        background: white;
    }
    .fuwu_top{
        margin-left: .16rem;
        border-bottom: 1px solid #f5f7f6;
    }
    .fuwu_top h4{
        line-height: .38rem;
        font-size: .13rem;
        font-weight: 100;
        color: rgb(117, 124, 142);
    }
    .fuwu_bottom{
        display: flex;
    }
    .fuwu_bottom a{
        box-sizing: border-box;
        width: 33.3%;
        height: 1.46rem;
        border-right: 1px solid #f5f7f6;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }
    .fuwu_bottom img{
        width: .31rem;
        height: .31rem;
        display: block;
        margin: 0 auto
    }
    .fuwu_bottom h5{
        margin: .08rem 0 .16rem;
        font-size: .15rem;
        color:rgb(57, 64, 80);
    }
    .fuwu_bottom p{
        font-size: .13rem;
        color:rgb(117, 124, 142);
    }
</style>