<template>
  <div>
      <div class="main">
		<div class="search">
			<p class="instructions pl15 pb15 pt15 ">
				<router-link to="/recruit">
				<a class="c56 font12" href="javascript:;">招聘</a>
				<img src="/src/assets/images/shouwei/jobs/right.gif">
				<a class="c56 font12" href="javascript:;">职位列表</a>
				<img src="/src/assets/images/shouwei/jobs/right.gif">
				<a class="c56 font12" href="javascript:;">企业简介</a>
				</router-link>
			</p>
		</div>
		<div class="cinfo">
		<div class="company_bg pl15 clearfix">
	<div class="job_com_info fr">
	<p>
		<a class="company c56">上上品</a>
	</p>
	<p class="company_name c56">武汉上上品商贸有限公司</p>
	</div>
	<p class="com_img"><img src="src/assets/images/shouwei/company.jpg" onerror="this.onerror=null;this.src='http://static.epaidai.com/uploadpath/company_logo/def_logo.gif';" width="50"></p>
   	</div>	
	    <div class="com_walf_bg pl15">
			<p class="company_acticle"><span class="company_nature">其他</span>|<span class="company_num">100-499人</span>|<span class="industry">互联网/电子商务</span></p>
			<p class="com_welfare">
				<em>带薪年假</em>                                                    
				<em>五险</em>                                                    
				<em>岗位晋升</em>                                                    
				<em>绩效奖金</em>                                                    
			</p>
	    </div>
	    <div class="com_info_bg pl15">
	    <p class="info_title font16">公司简介</p>
	    <p class="company_info">我公司专业从事箱包行业的推广与发展,销售平台有淘宝,拍拍,阿里巴巴等,公司代理七大品牌，现正处于高速发展期,期待有能力的您的加入&#33; 
我们的目标是成为网上最大的服饰箱包类卖家，现需求大批的高级管理人才，销售人才，技术人才，如果你和我们一样也有梦想，那么我们邀请您加入我们的团队一起共创辉煌。 
公司秉承“员工，是公司存亡的根本，发展的动力”为宗旨，为员工提供良好的薪资福利和发展空间。</p><a class="switch" href="###" style=" display:inline-block;margin-left: 45%; margin-top: 10px;"><img src='/src/assets/images/shouwei/zhaopin/down.jpg'/></a>
	    <p class="company_address company_address2">公司地址：湖北荆州湖北省荆州市沙市区0176-8103337</p>
	     </div>
	    <div class="company_job_bg pl15">
	    	    <p class="job_title font16">招聘职位</p>
	    <div class="company_job">
	        	        <dl class="com_job_list">
	        	<dt><span class="cjob_name"><a href="javascript:;" class="c56 font16">淘宝分销专员</a></span></dt>
	        	<dd class="job_acticle mt3">
	        		<span class="job_wage ">面议 |</span>
	        		<span class="">湖北 荆州 |</span>
	        		<span>不限 |</span>
	        		<span>不限 |</span>
	        		<span>2014-12-20</span>
	        	</dd>
	        </dl>
	        	        <dl class="com_job_list">
	        	<dt><span class="cjob_name"><a href="javascript:;" class="c56 font16">网店营运总监</a></span></dt>
	        	<dd class="job_acticle mt3">
	        		<span class="job_wage ">8K-10K |</span>
	        		<span class="">湖北 |</span>
	        		<span>不限 |</span>
	        		<span>不限 |</span>
	        		<span>2014-12-20</span>
	        	</dd>
	        </dl>
	        <dl class="com_job_list">
	        	<dt><span class="cjob_name"><a href="javascript:;" class="c56 font16">营销专员/CRM专员</a></span></dt>
	        	<dd class="job_acticle mt3">
	        		<span class="job_wage ">面议 |</span>
	        		<span class="">湖北 荆州 |</span>
	        		<span>不限 |</span>
	        		<span>不限 |</span>
	        		<span>2014-12-20</span>
	        		</dd>
	        	</dl>
	        	<dl class="com_job_list">
	        	<dt><span class="cjob_name"><a href="javascript:;" class="c56 font16">数据专员/淘宝助理</a></span></dt>
	        	<dd class="job_acticle mt3">
	        		<span class="job_wage ">面议 |</span>
	        		<span class="">湖北 荆州 |</span>
	        		<span>不限 |</span>
	        		<span>不限 |</span>
	        		<span>2014-12-20</span>
	        	</dd>
	        </dl>
	        	        <dl class="com_job_list">
	        	<dt><span class="cjob_name"><a href="javascript:;" class="c56 font16">淘宝店铺运营</a></span></dt>
	        	<dd class="job_acticle mt3">
	        		<span class="job_wage ">3K-10K |</span>
	        		<span class="">湖北 |</span>
	        		<span>不限 |</span>
	        		<span>不限 |</span>
	        		<span>2014-12-20</span>
	        	</dd>
	        </dl>
	    </div>
	 </div>
    </div>
	</div>
	<div class="map_bg" style="width: 96% ;height: 250px; position: fixed; top: 22%; left: 2%; z-index: 1001; display: none; border: 1px solid #E0DFDF;">
		<a class="close_map"><img src="/src/assets/images/shouwei/jobs/close_map.gif?v=1" style="position: absolute; top: 0; right: 0; z-index: 100;"/></a>
		<div class="map" id="allmap" style="width: 100% ;height: 250px; ">
		</div>
	</div>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import "../assets/css/recruit-new.css";
</style>

