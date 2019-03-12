<template>
    <div class="headtwo">
        <p>综合</p>
        <p>销量</p>
        <p>价格</p>
        <p>筛选</p>
    </div>
</template>

<script>
    export default {
        name: "goodslistHeadtow"
    }
</script>

<style scoped>
    .headtwo{
        height: .4rem;
        display: flex;
        border-bottom: 1px solid #e8eaee;
        background: white;
    }
    .headtwo p{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #A7AFC2;
        font-size: .14rem;
    }
</style>