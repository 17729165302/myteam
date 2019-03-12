<template>
    <div class="bigbox">
        <leka-header></leka-header>
        <div class="shengbei">
            <leka-swiper></leka-swiper>
            <leka-xinren></leka-xinren>
            <leka-fuwu></leka-fuwu>
            <leka-tequan></leka-tequan>
            <leka-jiekuan></leka-jiekuan>
            <leka-fenqi></leka-fenqi>
        </div>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import lekaHeader from "../components/leka/lekaHeader";
    import indexFooter from "../components/index/indexFooter";
    import lekaSwiper from "../components/leka/lekaSwiper";
    import LekaXinren from "../components/leka/lekaXinren";
    import LekaFuwu from "../components/leka/lekaFuwu";
    import LekaTequan from "../components/leka/lekaTequan";
    import LekaJiekuan from "../components/leka/lekaJiekuan";
    import LekaFenqi from "../components/leka/lekaFenqi";
    export default {
        name: "Leka",
        components:{
            LekaFenqi,
            LekaJiekuan,
            LekaTequan,
            LekaFuwu,
            LekaXinren,
            lekaHeader,
            indexFooter,
            lekaSwiper
        }
    }
</script>

<style scoped>
    .bigbox{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    /*body{*/
        /*background:#f5f7f6;*/
    /*}*/
    .shengbei{
        flex: 1;
        overflow-y:auto;
        overflow-x:hidden;
    }
    .bigbox{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>