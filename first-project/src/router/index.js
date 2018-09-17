import Router from "vue-router";
import Vue from "vue";
import Nprogress from "nprogress"
import 'nprogress/nprogress.css'


import home from "../components/home"

Vue.use(Router)
const router = new Router({
    // mode: 'history', // 模式，去掉#号
    routes: [
        {
            path: '/main',
            name: 'main',
            component: ()=>import("../views/Layout"),
            meta: { title: '主页' },
            redirect: '/main/home',
            
            // 嵌套路由
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: home,
                    meta: { title: '首页' }
                },
                {
                    path: 'about/:id',
                    name: 'about',
                    // 异步加载
                    component: ()=>import("../components/about"),
                    meta: { title: '详情页' }
                },
                {
                    path: 'login',
                    name: 'login',
                    component: ()=>import("../components/login"),
                    meta: { title: '登录' }
                }
            ]
        }
    ] // routes:路线们  route:路线
})

router.beforeEach((to,from,next)=>{
    Nprogress.start()
    if(to.meta && to.meta.title){
        document.title = to.meta.title
    }
    next()
})

router.afterEach((to,from)=>{
    Nprogress.done()
})

export default router