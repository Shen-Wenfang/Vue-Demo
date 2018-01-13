<template>
    <div id="main">
        <div>
            <div class="mb15">
                <label>
                    <span class="font14 c96">用户名：</span>
                </label>
                <input id="user_name" name="username" placeholder="请输入手机号码" v-model="username" type="text" class="font14" />
            </div>
            <div>
                <label>
                    <span class="font14 c96">密&nbsp;码：</span>
                </label>
                <input id="password" name="password" placeholder="请输入密码" v-model="password" type="password" checked="checked" class="font14" />
            </div>
            <div>
                <input id="url" name="url" type="hidden" value="" />
                <input id="boardid" name="boardid" type="hidden" value="">
                <input id="parentid" name="parentid" type="hidden" value="">
                <input id="title" name="title" type="hidden" value="">
                <input id="content" name="content" type="hidden" value="">
            </div>
            <p>
                <!-- <router-link to="/home"> -->
                    <input type="submit" value="立即登录" @click="login" class="login_btn" />                
                <!-- </router-link> -->
            </p>
            <div class="msg" v-show="msgerror">
                <p class="msgerror" v-show="msgerror">{{msgerror}}</p>
                <div class="box">
                    <div class="row">
                        <button class="btn" @click="sure">确定</button>
                    </div>
                </div>
		    </div> 
        </div>
        <p id="find_psd">
            <span class="c96 font14">还没有注册？</span>
            <router-link to="/reg">
                <a class="c369 font14" href="javascript:;" title="注册">现在注册 </a>
                <a class="c369 font14 fr" href="javascript:;" title="忘记密码">忘记密码</a>
            </router-link>
        </p>
        </div>
</template>

<style>
@import '../assets/css/login.css'
</style>
<script>
export default {
  data(){
      return{
          username:"",
          password:"",
          msgerror:"",
      }
  },
  methods:{
      login(){
        this.$http({
          url:'http://localhost:3000/user',
          params:{
            userName:this.username,
            passWord:this.password,
            num:1
          },
          withCredentials:true
        }).then((res)=>{
            if(res.data.msg == "login seccess"){
                // console.log(res.data.data[0])
                this.$store.dispatch('getName',res.data.data[0]);
                this.username='';
                this.passWord='';
                this.$router.push({path:'/home',params:{},query:{}}) //路由跳转
            }else{
                this.msgerror=res.data;
                this.username='';
                this.password='';
            }
        })
      },
    sure(){
        this.msgerror='';
    }

  }
}
</script>
<style>
.msg{width:100%;height:50px;border:1px solid rgba(255,0,0,.7);margin-top: 20px;padding: 10px 0 40px;border-radius: 5px;}
.msgerror{color: rgb(243, 71, 71);font:1.2rem/30px "";text-align: center;}
.btn{width: 60px;margin-top:10px;font:1rem/30px "";text-align: center;box-shadow:0 0 3px rgb(255,0,0);background: none;border-radius: 10px;border:none;}
</style>

