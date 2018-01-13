<template>
  <div class="collect">
     <div class="nav_sec">
        <router-link to="/bbs">
        <a class="c96 fl c_green navSec_firList" href="javascript:;" title="帖子">帖子</a>        
        </router-link>
        <router-link to="/error">
		<a class="c96 fl " href="javascript:;" title="关注">关注</a>
        <a class="c96 fl " href="javascript:;" title="干货">干货</a>        
		</router-link>
        <!-- <router-link to="/collect"> -->
		<a class="c96 fr navSec_lastList " @click="clearCollect" href="javascript:;">清空收藏夹</a>			
        <!-- </router-link> -->
        <p class="clear"></p>
    </div>
    <p v-show="!getCollect.length" style="color:#f00;font-size:16px;margin-top:20px ">您还没有收藏哟，点击收藏吧！</p>	
    <div id="main" style="background-color:#EEE;" v-for="(item,index) in getCollect" :key="item.id">
			<h1 class="font16 c32">{{item.title}}</h1>
			<p class="bbsdata_info border-bottom">
				<a href="javascript:;">{{item.name}}</a>&nbsp;&nbsp;
				<font>{{item.time|date}}</font>
				<span class="read_num">{{item.read}}</span> <span class="collect_num">{{item.good}}</span>
				<!-- <p class="clear"></p> -->
                <input class="removebtn" type="button" value="取消收藏" @click="removeItem({id:item.id})">
            </p>	
			<div class="clear"></div>
	</div>
  </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default {
  data(){
    return{}
  },
  methods:mapActions([    //方法  只要调用，每次都会执行
      "removeItem","clearCollect"
  ]),
  computed:mapGetters([   //计算属性 元数据改变一次，就执行一次
      "getCollect"
  ])
}
</script>
<style scoped>
.collect{min-height: 400px;z-index: 10}
.removebtn{font:12px/28px "";text-indent: 2em;background:none;border:0;color: #999;}
</style>


