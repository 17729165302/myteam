<template>
    <div class="list">
        <goodslist-headone></goodslist-headone>
        <goodslist-headtow></goodslist-headtow>
        <goodslist-goods :datas="goodsData"></goodslist-goods>
        <goodslist-jiazai></goodslist-jiazai>
        <!--<p class="qq">{{goodsData}}</p>-->
    </div>
</template>

<script>
    import goodslistHeadone from "../components/goodslist/goodslistHeadone";
    import goodslistHeadtow from "../components/goodslist/goodslistHeadtow";
    import GoodslistJiazai from "../components/goodslist/goodslistJiazai";
    import GoodslistGoods from "../components/goodslist/goodslistGoods";

    import goodsapi from "../../apis/goodsapi"
    export default {
        name: "Goodslist",
        components: {
            GoodslistGoods,
            GoodslistJiazai,
            goodslistHeadtow,
            goodslistHeadone,

        },
        data () {
            return {
                goodsData :[]
            };
        },
        created(){
            var ss=this.$route.params.id;
            this._Indata(ss)
            console.log("----------"+ss+"----------");
        },
        methods:{
            _Indata(ss){
                goodsapi.getdata(data=>{
                    this.goodsData=data[ss]
                    //this.goodsData.ss=ss
                    console.log(this.goodsData)
                });
            }
        }
    }
</script>

<style scoped>
/*.qq{*/
    /*color:red;*/
    /*font-size: .01rem;*/
/*}*/
.list{
    background: #fff;
}
</style>