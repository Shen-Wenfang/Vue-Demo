<template>
  <div>
    <div class="error">
      <img src="http://pic2.ooopic.com/12/71/19/56bOOOPIC6c_1024.jpg" alt="" class="imgerr">
    </div>
    <ul>
        <!-- <li class="l-btn">返回</li> -->
        <router-link tag="li" to="/home">
       <input type="button" class="goback" value="返回"/>> 
        </router-link>
    </ul>
  </div>
</template>
<style>
.imgerr {
  position: absolute;
  padding: 0;margin: 0;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.goback{
  position: absolute;
  left: 80%;
  top:10%;
  font:16px/40px "";
  cursor: pointer;
  border-radius: 5px;
  text-align: center;  
  padding:0 30px;
  display: inline-block;
  transform: translate(-50%, -50%);
}
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$store);
    // this.$store.dispatch('hideNav');
    // this.$store.commit('HIDE_FOOT');
  }
};
</script>

