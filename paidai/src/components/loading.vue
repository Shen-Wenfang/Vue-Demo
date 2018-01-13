<template>
    <div class="loadfillter">
         <vue-loading class="loading" type="spiningDubbles" color="#87c239" :size="{ width: '70px', height: '70px' }"></vue-loading>
    </div>
 </template>

<script>
import vueLoading from 'vue-loading-template'

 export default {
   components:{
       vueLoading
   }
 }
</script>

<style scoped>
.loadfillter{
    margin-top: 64px;
    width: 500px;
    height: 540px;
    position: absolute;
    z-index: 20;
    background:#eee;
}
.loading{position: absolute;left: 25%;top: 40%;z-index: 100}
</style>


  