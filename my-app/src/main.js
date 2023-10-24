import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router';
import store from './store';
import './api/mock';
import Cookie from 'js-cookie';

Vue.use(ElementUI);
Vue.config.productionTip = false

//添加全局前置导航守卫
router.beforeEach((to,from,next) => {
    //判断token存不存在
  const token =  Cookie.get('token')
  if(!token && to.name !== 'login') {
    next({naem:'login'})
  }else if (token && to.name ==='login') { //token存在，说明用户登录，此时跳转至首页
    next({name:'home'})
  }else{
    next()
  }
}) 

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        store.commit('addMenu',router)
    }
}).$mount('#app')