<template>
    <div class="sect_left">
        <p style="color: #3B9BFF" v-for="u in datas.lei"><span></span>{{u}}</p>
    </div>
</template>

<script>
    export default {
        name: "sectionLeft",
        props:["datas"]
    }
</script>

<style scoped>
    .sect_left{
        display: flex;
        flex-direction: column;
        width: .81rem;
    }
    .sect_left p{
        font-size: .14rem;
        text-align: center;
        line-height: .48rem;
        color: #757C8E;
        position: relative;
    }
    .sect_left p span{
        display: inline-block;
        width: .02rem;
        height: .16rem;
        background: #3B9BFF;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin:auto 0;
    }
</style>