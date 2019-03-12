<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

    export default {
      name: 'App'
    }
</script>

<style>
    @import url(../static/css/iconfont.css);
    /*@import url(../static/css/swiper.min.css);*/
    body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
        margin:0;
        padding:0;
    }
    html{
        font-size: 26.67vw;
    }
    body{
        font-family: "微软雅黑",Arial;
        background: #f5f7f6;
    }
    a{
        text-decoration: none;
    }
    img{
        border:0;
    }
    ul,li{
        list-style: none;
    }
    #app {
        width:100%;
        height:100%;
    }

    body,html{
        height: 100%;
    }
</style>
