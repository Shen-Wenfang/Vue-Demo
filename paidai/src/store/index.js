//状态管理
import Vue from 'vue'
import Vuex from 'vuex'; //引入
Vue.use(Vuex);//安装

//状态角色
import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';



//创建store对象 并导出
export default new Vuex.Store({
  // actions:actions角色对象
  actions,mutations,state,getters
});
