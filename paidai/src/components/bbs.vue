<template>
<div>
    <div class="nav_sec">
        <router-link to="/bbs">
        <a class="c96 fl c_green navSec_firList" href="javascript:;" title="帖子">帖子</a>        
        </router-link>
        <router-link to="/error">
		<a class="c96 fl " href="javascript:;" title="关注">关注</a>
        <a class="c96 fl " href="javascript:;" title="干货">干货</a>        
		</router-link>
        <router-link to="/collect">
		<a class="c96 fr navSec_lastList " href="javascript:;">收藏夹</a>			
		</router-link>
        <p class="clear"></p>
    </div>
    <div id="main">
        <div class="bbsdata_list">
            <!--列表开始-->
            <dl v-for="(item,index) in bbslist" :key="item.id">
                <dt>
                    <font class="rpy two_num fl">{{item.font}}</font>
                    <router-link :to="'/bbsdetail/'+item.id">
                    <a href="javascript:;">{{item.title}}</a>&nbsp;&nbsp;                    
                    </router-link>
                    <p class="clear"></p>
                </dt>
                <dd class="bbsdata_info">
                    <a href="user.html?act=usershow&id=270324">{{item.name}}</a>&nbsp;&nbsp;
                    <font>{{item.time|date}}</font>
                    <span class="read_num">{{item.read}}</span>
                    <span class="collect_num" @click="count(index)">{{item.good}}</span>
                </dd>
            </dl> 
            <!--列表结束-->
            <div class="clear"></div>
        </div>
        <div id="more" class="mt10">
            <a class="more fl font14 c64" href="index.html?act=morelist&page=2">更&nbsp;多</a>
            <p class="clear"></p>
        </div>
        <div class="clear"></div>
    </div>
</div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default {
  data(){
      return{
          bbslist:[]
      }
  },
  created(){
      this.$http({
            // url:'/data/bbs.data'
            url:'http://localhost:3000/bbs', //获取后台数据
            methods:'get'
        }).then((res)=>{
            // console.log(res.data)
            this.bbslist=res.data;
            // console.log(this.bbslist)
        }).catch((res)=>{
            console.log('bbs.data error');
        })
  },
  methods:{  //方法
    count(index){
        this.bbslist[index].good++
    }
  }
}
</script>
<style>
@import '../assets/css/bbslist.css'
</style>
