import * as types from './types'
export default {
  showNav:({commit,state})=>{commit(types.SHOW_NAV)},
  hideNav:({commit,state})=>{commit(types.HIDE_NAV)},
  showFoot:({commit,state})=>{commit(types.SHOW_FOOT)},
  hideFoot:({commit,state})=>{commit(types.HIDE_FOOT)},
  showLoading:({commit,state})=>{commit(types.SHOW_LOADING)},
  hideLoading:({commit,state})=>{commit(types.HIDE_LOADING)},

  getName:({commit,state},payload)=>{
    commit(types.GET_NAME,payload);
    // console.log(payload);
  },


  addItem:({commit,state},payload)=>{
    // console.log(payload)
    let find = false;
    state.collect.forEach((item,index)=>{
      if(item.id==payload.id){
        item.number++;//数量递增
        find=true;
      }
    });
    if(!find) {
      payload.number=1;//数量
      state.collect.unshift(payload);
    }
    commit(types.ADD_ITEM,[...state.collect])
  },
  removeItem:({commit,state},payload)=>{
    state.collect.forEach((item,index)=>{
      if(item.id==payload.id){
        state.collect.splice(index,1);
      }
    });
    commit(types.REMOVE_ITEM,[...state.collect]);
  },
  clearCollect:({commit,state})=>{
    commit(types.CLEAR_COLLECT);
  },
}