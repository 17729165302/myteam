<template>
    <header>
        <div class="head_content">
            <span class="iconfont fangdj">&#xe6e4;</span>
            <span>{{head}}</span>
        </div>
        <span class="iconfont gouwc">&#xe635;</span>
    </header>
</template>

<script>
    export default {
        name: 'indexHeader',
        props:["head"]

    }
</script>

<style scoped>
    header {
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;
        height: .45rem;
        padding: 0 .12rem 0 .15rem;
        background: #fff;
    }

    .head_content {
        width: 3.17rem;
        height: .32rem;
        display: -webkit-flex;
        background: rgba(0, 0, 0, .05);
        border-radius: 4px;
    }

    .head_content span {
        line-height: .32rem;
        color: #b9bdc6;
        font-size: .13rem;
    }

    .head_content .fangdj {
        font-size: .2rem;
        margin: 0 .06rem 0 .1rem;
    }

    .gouwc {
        color: #979dab;
        font-size: .2rem;
    }
</style>
