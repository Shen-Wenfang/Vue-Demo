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
    <div id="main" style="background-color:#EEE;">
			<h1 class="font16 c32">{{bbsdetailList.title}}</h1>
			<div class="bbsdata_info border-bottom">
				<a href="javascript:;">{{bbsdetailList.name}}</a>&nbsp;&nbsp;
				<font>{{bbsdetailList.time|date}}</font>
				<span class="read_num">{{bbsdetailList.read}}</span> <span class="collect_num" @click="count()">{{bbsdetailList.good}}</span>
				<!-- <router-link to="/collect"> -->
					<a class="col_art fr" href="javascript:;" @click="addItem(bbsdetailList)">收 藏</a>
				<!-- </router-link> -->
				<p class="clear"></p>
			</div>
			<div class="content font16 c32" v-html="bbsdetailList.content" style="text-indent:16px"></div>
			<!-- <div class="bdsharebuttonbox" data-tag="share_2">
				<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
				<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
				<a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
				<a href="#" class="bds_tieba" data-cmd="tieba" title="分享到百度贴吧"></a>
				<a class="bds_count" data-cmd="count"></a>
			</div> -->
			<p class="clear"></p>
			<dl class="replies" id="link">
				<dt class="reply_title black font13">回复（42）</dt>
					<dd class="reply_con">
					</dd>
				<dd class="reply_con">
					<a class="c64 font12 fl reply_name" href='javascript:;'>{{showName.name}}</a><span class="c96 font12 fl ml5">7:03</span>
					<a class="fr reply_btn c64 font12" href="javascript:;" title="回复">回复</a>
					<p class="clear"></p>
					<p class="reply_text font14 c64">牛人呀</p>
				</dd>
			
			</dl>
			 <dl class="replies" id="link" v-for="(item,index) in list" :key="item.id">
				<dd class="reply_con">
					<a class="c64 font12 fl reply_name" href='javascript:;'>{{showName.name}}</a><span class="c96 font12 fl ml5">7:03</span>
					<a class="fr reply_btn c64 font12" href="javascript:;" title="回复">回复</a>
					<p class="clear"></p>
					<p class="reply_text font14 c64">{{item.replay}}</p>
				</dd>
			
			</dl>
	<div name="reply" class="reply" id="yes">
				<input type="hidden" id="boardid" name="boardid" value="30">
				<input type="hidden" id="parentid" name="parentid" value="328031">
				<input type="hidden" id="title" name="title" value="5年过去了，淘宝依然那么好做，累死累趴下的人知道自己问题在哪吗？">
				<textarea id="message" name="content" cols="" rows="" v-model="replay"></textarea><br />
				<input type="submit" id='submit_mes' value="回复" @click="add" style="font-size: 18px;" />
			</div>
			<!-- 		<div id="page" class="mt10">
				<p class="page_now fl c96 font12">页 1 of 2</p>
				<div class="page_kind fr">
					<a class="fl page_kind_list" href="#link">首页</a>
					<a class="fl c64 page_kind_list" href="javascript:;">上一页</a>
					<a class="fl c64 page_kind_list" href="javascript:;">下一页</a>
					<a class="fl c64 page_kind_list last_page" href="javascript:;">尾页</a>
					<p class="clear"></p>
				</div>
				<div class="clear"></div>
			</div>
			<div class="clear"></div> -->
	</div>
  </div>
</template>
<script>
import { mapActions,mapGetters } from "vuex";
export default {
  data() {
    return {
      bbsdetailList: {},
			replay:'',
			list:[],
    };
  },
  mounted() {
    let id = this.$route.params.id;
    // console.log(this.$route)
    this.$http({
      //  url:'/data/bbsdetail.data'
      url: "http://localhost:3000/bbsdetail"
      // params:{uid:id}
    }).then(res => {
      // console.log(res.data);
      this.bbsdetailList = res.data[id - 1];
    });
  },
  methods: {
    ...mapActions(["addItem"]),
    count() {
      this.bbsdetailList.good++;
    },
		add(){
			this.list.push({
            id: this.list.length + 1,
            replay: this.replay,
          });
          this.replay = '';  
        }
	},
	computed:mapGetters(['showName']) //登录才有用户名s
};
</script>

<style>
@import "../assets/css/bbslist.css";
</style>

