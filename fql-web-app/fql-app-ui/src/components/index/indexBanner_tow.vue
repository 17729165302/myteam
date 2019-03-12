<template>
    <div class="banner_tow">
        <ul>
            <li v-for="u in datas">
                <img :src="u"/>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "indexBanner_tow",
        props:["datas"],
    }
</script>

<style scoped>
    .banner_tow ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: .12rem .16rem .04rem;
    }
    .banner_tow img{
        width: 1.67rem;
        height: .7rem;
        margin-bottom: .08rem;
        display: block;
    }
</style>