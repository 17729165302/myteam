<template>
    <nav>
        <div class="nav_d" v-for="u in navs" >
            <img :src="u.img"/>
            <p>{{u.title}}</p>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "indexNav",
        props:["navs"],

    }
</script>

<style scoped>
    nav{
        display: flex;
        background: url(../../../static/img/nav_bg.jpg) no-repeat top center;
        background-size: cover;
    }
    .nav_d{
        height: .92rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav_d img{
        width: .48rem;
        height: .48rem;
    }
    .nav_d p{
        font-size: .12rem;
        color:rgb(255, 200, 210);
    }
</style>