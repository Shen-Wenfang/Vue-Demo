<template>
 <div>
     <slider></slider>
        <div id="main">
        <ul class="active" v-for="(item,index) in homelist" :key="item.id">
            <li class="atitle">
                <router-link :to="'/homedetail/'+item.id">
                <a href="javascript:;" style="margin-right:10px;">{{item.title}}</a>                
                </router-link>
                <span class="state green">{{item.stateday}}</span>
            </li>
            <li>地点：{{item.address}}</li>
            <li>时间：{{item.time}}</li>
            <li>费用：{{item.cost}}</li>
            <li>主办方：{{item.sponsor}}</li>
            <li class="peoplenum">
                <span class=" circle red"></span>{{item.number}}</li>
        </ul>
        
        <div id="more" class="mt10">
            <a class="more fl font14 c64" href="javascript:;" @click="more()">更&nbsp;多</a>
            <p class="clear"></p>
        </div>

  </div>
 </div>
</template>
<style>
@import '../assets/css/active.css'
</style>
<script>
import slider from './slider' //引入slider
export default {
  data(){
      return{
          homelist:[]
      }
  },
  components:{
      slider //注册子组件
  },
    created(){
         // console.log(this.$http);
        this.$http({
            // url:'/data/home.data'
            url:'http://localhost:3000/home', //获取后台数据
            methods:'get',
            params:{
                page:4
            }
        }).then((res)=>{
            // console.log(res.data)
            this.homelist=res.data;
            // console.log(this.homelist)
        }).catch((res)=>{
            console.log('home.data error')
        })
    },
    methods:{
        more(n){
            this.$http({
            // url:'/data/home.data'
            url:'http://localhost:3000/home', //获取后台数据
            methods:'get',
            params:{
                page:n
            }
            }).then((res)=>{
                // console.log(res.data)
                this.homelist.push(res.data)
                // console.log(this.homelist)
            }).catch((res)=>{
                console.log('home.data error')
            })
        }
    }
}
</script>

