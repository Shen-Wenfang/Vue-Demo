<template>
    <div id="main" style="background-color:#EEE;">
        <h1 class="font16 c32">{{newsdetailList.title}}</h1>
        <div class="bbsdata_info border-bottom">
            <a href=" ../www.techxue.com/techxue-10842-1.html" target="_blank">{{newsdetailList.name}}</a>&nbsp;&nbsp;
            <font>{{newsdetailList.time|date}}</font>
            <span class="read_num">{{newsdetailList.read}}</span>
            <!-- <span class="collect_num">{{newsdetailList.good}}</span> -->
            <router-link to="/collect">
            <a class="col_art fr" href="javascript:;" title="收藏">收&nbsp;藏</a>
            </router-link>
            <p class="clear"></p>
        </div>
        <div class="content font16 c32">
            <p style="text-indent:2em;">
                <span style="font-size:14px;"></span>
            </p>
            <div style="text-align:center">
                <img :src="newsdetailList.imgUrl" title="500.jpg" border="0" hspace="0"
                    vspace="0" />
            </div>
            <p style="text-indent:2em;">
                <span style="font-size:14px;" v-html="newsdetailList.content"></span>
            </p>

        </div>
     <!--  <div class="bdsharebuttonbox" data-tag="share_2">
            <a href="#" class="bds_more" data-cmd="more"></a>
            <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
            <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
            <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
            <a href="#" class="bds_tieba" data-cmd="tieba" title="分享到百度贴吧"></a>
            <a class="bds_count" data-cmd="count"></a>
        </div>  -->
        <!--商道详情页加两个按钮-->
        <!-- <p>
            <a class="page_kind_list fl mb12" href="detail.html?id=15260&flag=p">上一篇</a>
        </p> -->
        <p class="clear"></p>
        <!--按钮结束-->
        <!-- <dl class="replies" id="link">
            <dt class="reply_title black font13">回复（4）</dt>
            <dd class="reply_con">
                <a class="c64 font12 fl" href="fav.html?id=900486" />jetchoi</a>
                <span class="c96 font12 fl ml5">18分钟前</span>

                <a class="fr reply_btn c64 font12" href="replay.html?act=replay_lw&id=132120" title="回复">回复</a>
                <p class="clear"></p>
                <p class="reply_text font14 c64">分析独到</p>
            </dd>
            <dd class="reply_con">
                <a class="c64 font12 fl" href="fav.html?id=207170" />兰大侠</a>
                <span class="c96 font12 fl ml5">17分钟前</span>

                <a class="fr reply_btn c64 font12" href="replay.html?act=replay_lw&id=132121" title="回复">回复</a>
                <p class="clear"></p>
                <p class="reply_text font14 c64">老文章了</p>
            </dd>
            <dd class="reply_con">
                <a class="c64 font12 fl" href="fav.html?id=97459700" />淘宝周小二</a>
                <span class="c96 font12 fl ml5">16分钟前</span>

                <a class="fr reply_btn c64 font12" href="replay.html?act=replay_lw&id=132122" title="回复">回复</a>
                <p class="clear"></p>
                <p class="reply_text font14 c64">很不错 &nbsp;我也刚接入SAP
                    <p>
                        <br>
                    </p>
                </p>
            </dd>
            <dd class="reply_con">
                <a class="c64 font12 fl" href="fav.html?id=769752" />xueren1943</a>
                <span class="c96 font12 fl ml5">2分钟前</span>

                <a class="fr reply_btn c64 font12" href="replay.html?act=replay_lw&id=132124" title="回复">回复</a>
                <p class="clear"></p>
                <p class="reply_text font14 c64">不错，也提醒到了我，学习了</p>
            </dd>
        </dl> -->
       <!--  <form name="reply" class="reply" method="post" id="yes" action="replay.html?act=replay_all">
            <input type="hidden" id="parentid" name="parentid" value="">
            <input type="hidden" id="newsid" name="newsid" value="15261">
            <input type="hidden" id="posterid" name="posterid" value="">
            <input type="hidden" id="title" name="title" value="">
            <textarea id="message" name="content" cols="" rows=""></textarea>
            <br />
            <input type="submit" id='submit_mes' value="回复" style="font-size: 18px;" />
        </form> -->
        <div id="page" class="mt10">
            <div class="clear"></div>
        </div>
    </div>
</template>
<style>
@import "../assets/css/bbslist.css";
</style>
<script>
export default {
  data() {
    return {
      newsdetailList: {}
    };
  },
  mounted() {
    let id = this.$route.params.id;
    // console.log(this.$route)
    this.$http({
      //   url: "/data/newsdetail.data"
      url: "http://localhost:3000/newsdetail"
      // params:{uid:id}
    }).then(res => {
      // console.log(res.data);
      this.newsdetailList = res.data[id - 1];
    });
  }
};
</script>

