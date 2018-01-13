<template>
    <div id="main">
        <div>
            <div class="mb15 father">
                <label>
                    <span class="font14 c96">用户名：</span>
                </label>
                <input id="user_name" name="username" v-model="username" placeholder="请输入手机号码" type="text" class="font14"/>
                <span class="check" v-show="(/^1[3|4|5|8]\d{9}$/.test(this.username))||false">√</span>
                <span class="check" v-show="!((/^1[3|4|5|8]\d{9}$/.test(this.username))||false)">×</span>
            </div>
             <div class="mb15 father">
                <label>
                    <span class="font14 c96">昵称：</span>
                </label>
                <input id="user_name" name="name" v-model="name" placeholder="请输入昵称" type="text" class="font14"/>
            </div> 
            <div class="mb15">
                <label>
                    <span class="font14 c96">邮&nbsp;箱：</span>
                </label>
                <input id="password" name="email" v-model="useremail" placeholder="请输入邮箱" type="text" checked="checked" class="font14" />
                 <span class="check2" v-show="(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.useremail))||false">√</span>
                <span class="check2" v-show="!((/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.useremail))||false)">×</span>
            </div>
            <div>
                <label>
                    <span class="font14 c96">密&nbsp;码：</span>
                </label>
                <input id="password" name="password" v-model="password" type="password" checked="checked" placeholder="请输入由6-12字符的密码" class="font14" />
                <span class="check3" v-show="(/^\w{6,12}$/.test(this.password))||false">√</span>
                <span class="check3" v-show="!((/^\w{6,12}$/.test(this.password))||false)">×</span>                
            </div>
            <p>
                <!-- <router-link to="/login"> -->
                    <input type="submit" value="立即注册" @click="register" class="login_btn" />
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
        

    </div>
</template>
<style>
@import "../assets/css/login.css";
</style>
<script>
export default {
  data() {
    return {
      username: "",
      name: "",
      password: "",
      useremail: "",
      num: 0,
      msgerror:"",
    };
  },
  methods: {
    /* aa(){
         if(!/^1[3|4|5|8]\d{9}$/.test(this.username)){
                alert("lieleishisb")
         }
      }, */
    register() {
      let namereg = /^1[3|4|5|8]\d{9}$/;
      let wordreg = /^\w{6,12}$/;
      let emailreg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      if (namereg.test(this.username) &&wordreg.test(this.password) &&emailreg.test(this.useremail)){
        this.$http({
          url: "http://localhost:3000/user",
          params: {
            userName: this.username,
            name: this.name,
            userEmail: this.useremail,
            passWord: this.password,
            num:0
          }
          // withCredentials:true
        }).then(res => {
            console.log(res.data);
            if (res.data == "reg seccess") {
              this.username = "";
              this.password = "";
              this.useremail = "";
              this.$router.push({ path: "/login"}); //路由跳转
            } else {
              this.msgerror = res.data;
            }
          })
      }else if(!namereg.test(this.username)){
          this.msgerror="用户名不正确";
      }else if(!wordreg.test(this.password)){
            this.msgerror="密码不正确";
      }else if(!emailreg.test(this.useremail)){
            this.msgerror="邮箱格式不正确";
      }
    },
    sure(){
        this.msgerror='';
    }
  }
};
</script>
<style>
.msg{width:100%;height:50px;border:1px solid rgba(255,0,0,.7);margin-top: 20px;padding: 10px 0 40px;border-radius: 5px;}
.msgerror{color: rgb(243, 71, 71);font:1.2rem/30px "";text-align: center;}
.btn{width: 60px;margin-top:10px;font:1rem/30px "";text-align: center;box-shadow:0 0 3px rgb(255,0,0);background: none;border-radius: 10px;border:none;}

.father{posiiton:relative;}
.check{position:absolute;right:30px;top:148px;font:18px/30px "";color:#f00}
.check2{position:absolute;right:30px;top:314px;font:18px/30px "";color:#f00}
.check3{position:absolute;right:30px;top:399px;font:18px/30px "";color:#f00}

</style>


