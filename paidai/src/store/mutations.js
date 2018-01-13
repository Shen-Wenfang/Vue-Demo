import * as types from './types';
export default {
  [types.SHOW_NAV]:(state)=>{state.bNav=true;},
  [types.HIDE_NAV]:(state)=>{state.bNav=false;},
  [types.SHOW_FOOT]:(state)=>{state.bFoot=true;},
  [types.HIDE_FOOT]:(state)=>{state.bFoot=false;},
  [types.SHOW_LOADING]:(state)=>{state.bLoading=true;},
  [types.HIDE_LOADING]:(state)=>{state.bLoading=false;},
  
  [types.ADD_ITEM]:(state,payload)=>{
    state.collect=payload;
  },
  [types.REMOVE_ITEM]:(state,payload)=>{
    state.collect=payload;
  },
  [types.CLEAR_COLLECT]:(state)=>{
    state.collect=[];
  },

  [types.GET_NAME]:(state,payload)=>{
    state.bName=payload;
    // console.log(state.bName);
  },
  //赞
  // [types.HIDE_LOADING]:(state)=>{state.bLoading=false;},
}