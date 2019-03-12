<template>
    <section>
        <div class="sect_left">
            <p v-for="(u,key) in datas" @click="tab(key)" :class="{active:index==key}"><span :class="{actp:index==key}"></span>{{u.lei}}</p>
        </div>
        <div class="bigsection">
            <div class="sect_right" v-for="(i,aa) in datas" v-if="aa==index">
                <div class="sect_banner">
                    <img :src="i.banner"/>
                </div>
                <div class="sect_box" v-for="x in i.shuma">
                    <div class="box_top">
                        <h4>{{x.name}}</h4>
                    </div>
                    <div class="box_bott">
                        <p v-for="(a,z) in x.pinpai" :key="z" @click="list(a.p)"><img :src="a.img"/><span>{{a.p}}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "fenleiSection",
        props: ["datas"],
        data() {
            return {
                index: 0
            }
        },
        methods: {
            tab(key) {
                this.index = key;
            },
            list(id){
                this.$router.push('/Goodslist/'+id);
            }
        }
    }
</script>

<style scoped>
    section{
        display: flex;
        border-top: 1px solid #d9d9d9;
    }
    .sect_left{
        width: .81rem;
        display: flex;
        flex-direction: column;
    }
    .sect_left p{
        font-size: .14rem;
        text-align: center;
        line-height: .48rem;
        position: relative;
    }
    .sect_left p span{
        display: inline-block;
        width: .02rem;
        height: .2rem;
        /*background: #3B9BFF;*/
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin:auto 0;
    }
    .bigsection{
        display:flex;
        flex-direction: column;
        flex: 1;
        border-left: 1px solid #d9d9d9;
    }
    .sect_right{
        padding-top: .16rem;
        display: flex;
        flex-direction: column;
        /*display: none;*/
    }
    .sect_banner img{
        width: 2.62rem;
        height: 1.12rem;
        display: block;
        margin:0 auto;
    }
    .box_top{
        margin:0rem .16rem .16rem;
    }
    .box_top h4{
        font-size: .14rem;
        color: #757c8e;
        padding-top: .24rem;
        border-top: 1px solid #d9d9d9;
        font-weight: 100;
    }
    .sect_right .sect_box:nth-of-type(2) .box_top h4{
        border-top: none;
    }
    .box_bott{
        display: flex;
        flex-wrap: wrap;
    }
    .box_bott p{
        width: 33.3%;
        margin-bottom: .24rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .box_bott p img{
        width:.52rem;
        height: .52rem;
    }
    .box_bott span{
        font-size:.12rem;
        color:rgba(37,50,78,.8);
        margin-top: .08rem;
    }

    .active{
        color:#3B9BFF;
    }
    .actp{
        background: #3B9BFF;
    }
</style>