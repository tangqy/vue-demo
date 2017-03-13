
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router/index'

import App from './App'
import store from './store'
// import { Button, Select } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import normalize from 'normalize.css'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes
});

router.beforeEach(({path}, from, next) => {
    // var { auth = true } = meta
    var isLogin = Boolean(store.state.user.username) //true用户已登录， false用户未登录
    if (!isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})

/* eslint-disable no-new */
// 实例化我们的Vue

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});

