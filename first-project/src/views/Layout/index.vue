<template>
    <div class="container">
        <div class="header">
            <h1>头部</h1>
        </div>
        <div class="nav">
            <ul>
                <li><router-link :to="{name:'home'}">首页</router-link></li>
                <li><router-link :to="{name:'about',params:{id:998}}">详情页</router-link></li>
                <li><router-link :to="{name:'login'}">登录</router-link></li>
            </ul>
        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .header {
        text-align: center;
        padding-left: 200px;
        background: #0ff;
    }

    .nav {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 998;
        width: 200px;
        background: #2A3D54
    }

    .main-content {
        padding-left: 200px;
    }

    .nav li {
        line-height: 50px;
        height: 50px;
        text-align: center;
        width: 200px;
    }

    .nav a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
    }
</style>