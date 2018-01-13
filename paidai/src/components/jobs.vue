<template>
    <div>
        <div class="main">
        <div class="search">
            <p class="instructions pl15 pb15 pt15 ">
                <router-link to="/recruit">
                    <a class="c56 font12" href="javascript:;">招聘</a>
                    <img src="/src/assets/images/shouwei/jobs/right.gif">
                    <a class="c56 font12" href="jobs.html?act=job_list&bprovince=_25E6_25B9_2596_25E5_258C_2597&province=13">职位列表</a>
                    <img src="/src/assets/images/shouwei/jobs/right.gif">
                    <a class="c56 font12" href="javascript:;">职位详情</a>
                </router-link>
            </p>
        </div>
        <div class="jinfo">
            <div class="jobs_info pl15">
                <p class="c56  font16 mb15 pt15">营销专员/CRM专员</p>
                <p class="clearfix">
                    <span class="job_money">面议</span>
                    <span class="dline"></span>
                    <span class="job_school">不限</span>
                    <span class="dline"></span>
                    <span class="job_experience">不限
                    </span>
                    <span class="dline"></span>
                </p>
                <p class="company_address">地址： 湖北荆州 湖北省荆州市沙市区北京路荣鑫花园
                </p>
            </div>
            <div class="company_bg pl15 clearfix" onClick="location='company.html'">
                <p class="fr" style="margin-top: 20px; margin-right: 7%;">
                    <img src="/src/assets/images/shouwei/zhaopin/right_gray.png">
                </p>
                <div class="job_com_info  job_com_info2 fr">
                    <p>
                        <a href="company.html" class="company c56">上上品</a>
                    </p>
                    <p class="company_people">
                        <span style="margin-left: 0;">其他</span>|
                        <span>20-99人</span>|
                        <span>互联网/电子商务</span>
                    </p>
                </div>
                <p class="com_img">
                    <img src="/src/assets/images/shouwei/company.jpg" onerror="this.onerror=null;this.src='http://static.epaidai.com/uploadpath/company_logo/def_logo.gif';"
                        width="50">
                </p>
            </div>
            <!--
    	<p class="job_acticle mt12">|<span>发布日期：14:16</span></p>
    -->
            <div class="com_wal pl15">
                <p class="c45a font16">职位描述：</p>
                <ul class="company_welfare">
                    <li>任职要求：
                        <br /> 1、有较好数据分析、数据调取能力、对客户评价进行整理及分析，出具相应分析报告；2、催化会员活跃度，提升会员销售额占比，促进老顾客N次消费，提高用户的忠诚度；3、熟悉电商客户关系管理模块,善于总结、分析、挖掘、创新，配合店铺活动策划做CRM营销及每次活动后的数据分析总结工作；
                        <br />
                        <br /> 4、熟悉会员营销，熟悉各种会员营销工具，包括CRM系统、微信、EDM、SMS、TM、DM等等一些运营工具促进顾客二次消费
                        <br />
                        <br /> 5、配合主管及推广人员做好相关工作。
                        <br />
                        <br /> 任职要求：
                        <br />
                        <br /> 1、年龄：35岁以下，电子商务等相关专业，1年以上同岗位工作经验；2、对《数据赢家》系统有一定了解者优先；3、学习能力强，逻辑清晰、思路清晰；4、有责任心，配合他人，团队合作意识，有团队归属感。
                        <br />
                        <br /> 工作时间：08:30-17:30，每周休一天。
                        <br /> 工作日补贴8元餐费 每月休息4天，试用期签订正式合同后办理养老保险（五险）！公司成长空间巨大。
                        <br /> 联系电话：18672110100 0176-8103337</li>
                </ul>
            </div>
            <div class="recruitment font16">
                <router-link to="/login">
                <input id='btt' class="r_send" type="button" value="投递简历">                
                </router-link>
            </div>
        </div>
    </div>
    <div class="map_bg" style="width: 96% ;height: 250px; position: fixed; top: 22%; left: 2%; z-index: 1001; display: none; border:1px solid #E0DFDF;">
        <a class="close_map">
            <img src="/src/assets/images/shouwei/jobs/close_map.gif?v=1" style="position: absolute; top: 0; right: 0; z-index: 100;" />
        </a>
        <div class="map" id="allmap" style="width: 100% ;height: 250px; ">
        </div>
    </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      reclist: []
    };
  },
  created() {
    this.$http({
      url: "/data/recruit.data"
      // url:'http://localhost:3000/recruit', //获取后台数据
      // methods:'get'
    })
      .then(res => {
        // console.log(res.data)
        this.reclist = res.data;
      })
      .catch(res => {
        console.log("recruit.data error");
      });
  }
};
</script>
<style>
@import "../assets/css/recruit-new.css";
</style>
