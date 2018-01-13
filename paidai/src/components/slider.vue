<template>
  <swipe class="my-swipe" :speed="100" :showIndicators="true">
    <swipe-item :class="'slide'+val" v-for="val in 3" :key="val">
      <router-link to="/detail/1?a=1&b=2" tag="li">
        <!-- <img src="src/assets/images/img_1.jpg" height="200" alt=""/> -->
        
      </router-link>
    </swipe-item>
  </swipe>
</template>
<script>
//  import $ from 'jquery';
//  import Swipe from 'swipe'; //模块化引入 npm安装后的模块，支持模块化的
//  import Swipe from '../assets/js/swipe'; //引入src(cdn)js，不支持模块化，需要模块化
  import 'vue-swipe/dist/vue-swipe.css';
  import { Swipe, SwipeItem } from 'vue-swipe';
  export default{
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    }/*,
    mounted(){
      console.log('slider.....')
      var mySwipe=new Swipe($('.banner')[0],{
        auto:2000,
        continuous:true,
        stopPropation:true,
        callback:function (index,element){
          $('.banner ol li').removeClass('active');
          $('.banner ol li').eq(index).addClass('active');
        }
      })
    }*/
  }
</script>
<style>
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
 /* .mint-swipe-items-wrap div{
    float: left;
  }*/
  .slide1 {
    height:inherit;
    background-image: url('https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=37cdbd919858d109dbe3aeb0e159ccd0/5366d0160924ab187db23fd83ffae6cd7a890bbd.jpg');
    color: #fff;
  }

  .slide2 {
    height:inherit;
    background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514363269&di=28d01eda1c5f8c365bccde0dadb7b24f&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20150910%2F9%2F2689426341011579545.jpg');
    color: #000;
  }

  .slide3 {
    height:inherit;
    background-image: url('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1783369136,1321600986&fm=27&gp=0.jpg');
    color: #fff;
  }
</style>
