import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import User from "../views/User.vue"
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    name:'Main',
    redirect: '/home',//重定向
    children: [ 
      // { path: 'home', component: Home },//首页
      // { path: 'user', component: User },//用户管理
      // { path: 'mall', component: Mall },//商品管理
      // { path: 'page1', component: PageOne },//页面1
      // { path: 'page2', component: PageTwo },//页面2
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login

  }

]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router


