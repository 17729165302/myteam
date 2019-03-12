<template>
    <div class="banner">
        <img :src="datas.bannerBig" class="big_banner"/>
        <div class="bann_box">
            <img :src="u" v-for="u in datas.bannerSmall"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "indexBanner",
        props:["datas"]
    }
</script>

<style scoped>
    .banner{
        width: 100%;
    }
    .big_banner{
        width: 100%;
        height: 2.6rem;
        display: block;
    }
    .bann_box{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .bann_box img {
        width: 33.33%;
        height: 1.20rem;
    }
</style>