<template>
<div id="navbar">
     <p id="top" class="top1 clearfix">
         <router-link to="/home">
            <a class="logo" href="">
                <img src="/src/assets/images/shouwei/new_logo.gif?v=1" height="33" width="118">
            </a>
         </router-link>
        <router-link to="/login">
            <a href="" title="我的">
                <span class="touxiang">
                    <img src="/src/assets/images/shouwei/jobs/person.gif" />
                </span>
            </a>
        </router-link>
    </p>
    <div id="active_br"></div>
    <div class="nav">
        <!-- <a class=" black bold c96 font14 fl nav_list" href="home.html" title="首页">首页</a>
        <a class=" c96 font14 fl nav_list b25" href="bbs.html" title="论坛">论坛</a>
        <a class=" c96 font14 fl nav_list " href="news.html" title="商道">商道</a>
        <a class=" c96 font14 fl nav_list  last" href="recruit.html" title="招聘">招聘</a> -->
        <router-link 
        to="/home"
        active-class="bold"
        class=" black c96 font14 fl nav_list"
        href="javescript:;"
        >
        首页
        </router-link>
         <router-link
        to="/bbs"
        active-class="bold"
        class=" black c96 font14 fl nav_list"
        href="javescript:;"
        >
        论坛
        </router-link>
         <router-link
        to="/news"
        active-class="bold"
        class=" black c96 font14 fl nav_list"
        href="javescript:;"
        >
        商道
        </router-link>
         <router-link
        to="/recruit"
        active-class="bold"
        class=" black c96 font14 fl nav_list"
        >
        招聘
        </router-link>
        <p class="clear"></p>
    </div>
</div>
</template>
<style>
.nav .bold{ border-bottom: 2px solid #87C23A;}
</style>
