<template>
    <div id="recuit">
        <div class="main">
            <div class="search pb15">
                <p class="instructions pl15 pb15 pt15 ">
                    <a class="c56 font12" href="javascript:;" style="">招聘</a>
                    <img src="/src/assets/images/shouwei/jobs/right.gif">
                </p>
                <div name="searchForm" class="pl15 clearfix">
                   
                    <div id="sele" class="fl">
                         <select name="职位" id="select" style="height:105%;width:100%;border:1px solid #c8c8c9;border-right:none;">
                        <option value="职位">职位</option>
                        <option value="公司" selected="selected">公司</option>
                        <option value="薪资">薪资</option>
                    </select>
                    </div>
                    <input class="search_text fl" type="text" id='search_word'
                     name='search_word' value='' placeholder="输入职位名称" />
                    <input type="hidden" name="act" value='job_list'>
                    <input type="hidden" id='province' name="province" value='13'>
                    <input type="hidden" id='bprovince' name="bprovince" value='湖北'>
                    <input type="hidden" id='typecj' name="typecj" value='jobs'>
                    <input class="search_button fl" type="submit" name='sub' value="" />
                </div>
            </div>
            <div class="hot_work">
                <p class="hot_title hot_title2 pl15 pb15 pt15">热门职位</p>
                <ul class="clearfix">
                    <li>
                        <a href="javascript:void(0)">淘宝运营</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">运营经理</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">淘宝店长</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">推广</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">客服</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">设计</a>
                    </li>
                </ul>
                <p class="hot_title pl15">最新职位</p>
                <div id="content_list">
                    <dl class="joblist b_none pl15" v-for="(item,index) in reclist" :key="item.id">
                        <dt class=" font16 pt15">
                            <router-link to="/jobs">
                            <a class="c92" href="javascript:;">{{item.job}}</a>
                            </router-link>
                            <router-link to="/company">
                                <a class="company" href="javascript:;">{{item.company}}</a>
                            </router-link>>
                        </dt>
                        <dd class="job_acticle mt3">
                            <span class="job_wage ">{{item.pay}} |</span>
                            <span class="">{{item.address}} |</span>
                            <span>{{item.degree}} |</span>
                            <span>{{item.age}} |</span>
                            <span>{{item.time|datetime}}</span>
                        </dd>
                    </dl>
                </div>
                <div id="new_content_list">
                    <div id="loading" class="loading">
                        <!-- <img src="images/shouwei/jobs/loading.gif" /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default {
  data(){
      return{
          reclist:[]
      }
  },
  created(){
      this.$http({
            // url:'/data/recruit.data'
            url:'http://localhost:3000/recruit', //获取后台数据
            methods:'get'
        }).then((res)=>{
            // console.log(res.data)
            this.reclist=res.data;
        }).catch((res)=>{
            console.log('recruit.data error')
        })
  }
}
</script>
<style>
@import '../assets/css/recruit-new.css'
</style>


