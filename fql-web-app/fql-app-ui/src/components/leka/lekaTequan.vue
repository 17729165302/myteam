<template>
    <div class="tequan">
        <div class="tequan_top">
            <h4>乐卡特权</h4><p>我的卡券</p>
        </div>
        <div class="tequan_center">
            <img src="../../../static/img/le_fuw.png"/>
        </div>
        <div class="tequan_bottom">
            <a href="##"><img src="../../../static/img/le_te1.png"/><p>高铁贵宾</p></a>
            <a href="##"><img src="../../../static/img/le_te1.png"/><p>高铁贵宾</p></a>
            <a href="##"><img src="../../../static/img/le_te1.png"/><p>高铁贵宾</p></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lekaTequan"
    }
</script>

<style scoped>
    .tequan{
        margin: .08rem 0;
        background: white;
    }
    .tequan_top{
        margin-left: .16rem;
        border-bottom: 1px solid #f5f7f6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .38rem;
        font-size: .13rem;
        color: rgb(117, 124, 142);
    }
    .tequan_top h4{
        font-weight: 100;
    }
    .tequan_top p{
        margin-right: .26rem;
    }
    .tequan_center img{
        width:100%;
        height:1rem;
        display: block;
    }
    .tequan_bottom{
        border-top: 1px solid #f5f7f6;
        display: flex;
    }
    .tequan_bottom a{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 33.3%;
        margin:.2rem 0 .16rem;
    }
    .tequan_bottom img{
        width:.38rem;
        height:.38rem;
    }
    .tequan_bottom p{
        margin-top: .08rem;
        font-size:.13rem;
        color:rgb(57, 64, 80);
    }
</style>