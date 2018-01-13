<template>
  <div>
      <div class="main">
  <ul class="details">
		<li class="dtitle">
    	<a href="#" style="margin-right:10px;">{{homedetailList.title}}</a>
 		<span class="state green">5天</span>
    </li>
    <li>地点：{{homedetailList.address}}</li>  
   	<li>时间：{{homedetailList.time}}</li> 
    <li>联系人：{{homedetailList.phonePerson}}<br />联系电话：{{homedetailList.phoneNum}}<br />联系邮箱：{{homedetailList.email}}</li>
    <li>费用：{{homedetailList.cost}}</li>
    <li>主办方：{{homedetailList.sponsor}}</li>
    <li class="peoplenum"><span class=" circle green"></span>{{homedetailList.number}}</li>
  </ul>
  <div class="active_info">
  	<p class="info_title">活动介绍</p>
	<p v-html="homedetailList.content"></p>
  </div>
    <dl class="people">
    	<dt>
          <a href="javascript:;" onclick="get_member(161)">查看其他5位参会人</a>
        </dt>  
    </dl>
    </div>
        <div class="bdsharebuttonbox" data-tag="share_2" >
        <!--<a href="#" class="bds_more" data-cmd="more"></a>-->
            <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
            <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
            <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
            <a href="#" class="bds_tieba" data-cmd="tieba" title="分享到百度贴吧"></a>
            <a class="bds_count" data-cmd="count"></a>   
        </div>
		<router-link to="/login" tag="li">
            <p class="baoming">
                <a href="login.html">我要报名</a>
            </p>
        </router-link>

  </div>
</template>
<style>
@import "../assets/css/active.css";
</style>
<script>
export default {
  data() {
    return {
      homedetailList: {}
    };
  },
  mounted() {
    let id = this.$route.params.id;
    // console.log(this.$route)
    this.$http({
      url: "/data/homedetail.data"
      // url:'http://localhost:3000/article',
      // params:{uid:id}
    }).then(res => {
      // console.log(res.data);
      this.homedetailList = res.data[id - 1];
    });
  }
};
</script>

