<template>
    <div class="bigbox">
        <div class="shengbei">
            <index-header></index-header>
            <fenlei-section :v-if="fenleiData.fenlei" :datas="fenleiData.fenlei"></fenlei-section>
        </div>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import indexHeader from "../components/index/indexHeader";
    import indexFooter from "../components/index/indexFooter";
    // import sectionLeft from "../components/fenlei/sectionLeft";
    // import sectionRight from "../components/fenlei/sectionRight";
    import FenleiSection from "../components/fenlei/fenleiSection";
    import fenleiapi from "../../apis/fenleiapi"


    export default {
        data () {
            return {
                fenleiData :{ }
            };
        },
        methods:{
            _Indata(){
                fenleiapi.getdata(data=>{
                    this.fenleiData=data
                    console.log(this.fenleiData)
                });
            }
        },
        created(){
            this._Indata()
        },

        name: "Fenlei",
        components: {
            FenleiSection,
            indexHeader,
            indexFooter,
            // sectionLeft,
            // sectionRight,
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
    body,html{
        height: 100%;
    }
    .shengbei{
        flex: 1;
        overflow-y:auto;
        overflow-x:hidden;
        background: #fff;
    }
</style>