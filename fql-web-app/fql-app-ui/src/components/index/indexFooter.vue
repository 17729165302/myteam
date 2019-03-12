<template>
    <footer>
        <router-link tag="a" to="/">
            <img src="../../../static/img/foot1.png"/><p style="color: #3b9bff">首页</p>
        </router-link>
        <router-link tag="a" to="/Fenlei">
            <img src="../../../static/img/foot2.png"/><p>分类</p>
        </router-link>
        <router-link tag="a" to="/Leka">
            <img src="../../../static/img/foot3.png"/><p>乐卡</p>
        </router-link>
        <router-link tag="a" to="/">
            <img src="../../../static/img/foot4.png"/><p>信用卡</p>
        </router-link>
        <router-link tag="a" to="/">
            <img src="../../../static/img/foot5.png"/><p>我的</p>
        </router-link>
    </footer>
</template>

<script>
    export default {
        name: "indexFooter"
    }
</script>

<style scoped>
    footer{
        display: flex;
        height: .49rem;
        border-top: 1px solid #d9d9d9;
        background: #fafafa;
    }
    footer a{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    footer a img{
        width: .23rem;
        height: .23rem;
    }
    footer a p{
        font-size: .13rem;
        color: #666666;
    }
</style>