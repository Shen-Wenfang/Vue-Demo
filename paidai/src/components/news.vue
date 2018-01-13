<template>
    <div id="main" style="padding-top:6px;" v-cloak>
        <div class="bbsdata_list">
            <!--列表开始-->
            <dl v-for="(item,index) in newslist" :key="item.id">
                <dt>
                    <font class="rpy two_num fl">{{item.font}}</font>
                    <router-link :to="'/newsdetail/'+item.id">
                        <a href="javascript:;">{{item.title}}</a>&nbsp;&nbsp;                    
                    </router-link>
                    <p class="clear"></p>
                </dt>
                <dd class="bbsdata_info">
                    <a href="javascript:;" target="_blank">{{item.name}}</a>&nbsp;&nbsp;
                    <font>{{item.time|date}}</font>
                    <span class="read_num">{{item.read}}</span>
                </dd>
            </dl>           
        </div>
        <div id="more" class="mt10">
            <a class="more fl font14 c64" href="bbs.html?page=2">更&nbsp;多</a>
            <p class="clear"></p>
        </div>
    </div>
</template>
<style>
@import '../assets/css/bbslist.css'
</style>
<script>
 export default {
  data(){
      return{
          newslist:[]
      }
  },
  created(){
      this.$http({
            // url:'/data/news.data'
            url:'http://localhost:3000/news',
        }).then((res)=>{
            this.newslist=res.data;
            // console.log(this.newslist)
        }).catch((res)=>{
            console.log('newslist.data error')
        })
  }
}
</script>

