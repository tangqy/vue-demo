import Home from '../components/Home'
import TimeEntries from '../components/TimeEntries'
// import Signin from '../components/Signin.vue'
import Login from '../page/login/login'
import ToDoList from '../components/ToDoList.vue'

export default [{
  path: '/',
  component: Home
}, {
  path: '/home',
  name: 'home',
  meta: {auth: false},
  component: Home
}, {
  path: '/time-entries',
  component: TimeEntries,
  children: [{
    path: 'log-time',
    // 懒加载
    component: resolve => require(['../components/LogTime.vue'], resolve),
  }]
}, {
  path: '/login',
  meta: {auth: false},
  component: Login
},
  {
    path:'/todoList',
    component:ToDoList,
  },
  {
    path: '*', //其他页面，强制跳转到登录页面
    redirect: '/login'
  }];
