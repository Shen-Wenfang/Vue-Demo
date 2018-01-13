import Vue from 'vue'
import App from './App.vue'

import './assets/css/gbolbal.css'

//链接路由插件
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入路由配置
import routes from './router-config';
//创建路由对象
const router = new VueRouter(routes)
//引入交互插件
import axios from 'axios';
Vue.prototype.$http=axios; //在原型上全局注册axios

//配置拦截器
axios.interceptors.request.use(function (config) {
  // 在发出正确请求之前做点事
  store.dispatch('showLoading');
  return config;// 返回现在配置给拦截器,一定要反绘制
}, function (error) {
  // 在发出错误请求之前做点事
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  // 在响应之后做点事
  store.dispatch('hideLoading');
  return response; 
   // 回来的数据对象
}, function (error) {
  return Promise.reject(error);
});


//全局引入filters
import filters from './filters' //默认找index
/* for(var key in filters){
  Vue.filter(key,filters[key]);
} */
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));

//状态管理
import store from './store'

//全局引入loading
// import loading from 'vue-loading-template'
// import apploading from './components/loading.vue'
// Vue.use(apploading)


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
