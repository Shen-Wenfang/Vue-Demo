export default {
    getNav:(state)=>{return state.bNav;},
    getFoot:(state)=>{return state.bFoot;},
    getLoading:(state)=>{return state.bLoading;},

    getCollect:(state)=>{return state.collect;},

    showName:(state)=>{
      // console.log(state.bName);
      return state.bName;}
  }