<template>
  <div class="register-container">
     <form class="mui-input-group">
            <div class="mui-input-row">
                <label>
                <span class="mui-icon mui-icon-person-filled"></span>
                </label>
                <input id="username" type="text" placeholder="请输入用户名" v-model="username">
            </div>
            <div class="mui-input-row">
                <label>
                <span class="mui-icon mui-icon-locked"></span>
                </label>
                <input id="password" type="password" class="mui-input-clear" placeholder="请输入密码" v-model="password">
            </div>	
            <div class="mui-input-row">
                <label>
                <span class="mui-icon mui-icon-locked"></span>
                </label>
                <input id="repassword" type="password" class="mui-input-clear" placeholder="再次输入验证码" v-model="repassword">
            </div>	
            <div class="mui-input-row">
                <label>
                <span class="mui-icon mui-icon-locked"></span>
                </label>
                <input id="if(this." type="number" class="mui-input-clear" placeholder="请输入验证码" v-model="identify">
                <span class="identifyNumber">{{msg}}</span>
            </div>	
		</form>

        <mt-button class="btn" type="primary" size="large" plain  @click="reg">注册</mt-button>
        <mt-button class="btn" type="primary" size="large" plain @click="login">去登录</mt-button> 
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
name: 'login',
data() {
    return {
        username: '',
        password: '',
        repassword: '',
        identify: '',
        msg: '',
    }
},
created() {
    this.random();
},
methods: {
    reg() {
        console.log(this.identify)
       if (this.username.trim().length <= 0) return Toast("请输入用户名！");
       if (this.password.trim().length <= 0)  return Toast("请输入密码！");
       var passwordReg = /^\d{6}$/
       if(!passwordReg.test(this.password)) return Toast("至少输入6位密码！");
       if(this.password !== this.repassword) return Toast("两次输入密码不一致！");
       if(parseInt(this.identify) !== this.msg) return Toast("验证码不正确！");
       return Toast("注册成功！");
    },
    login() {
        this.$router.push('/login')
    },
    random() {
        this.msg = parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10);
        // console.log(parseInt(Math.random()*10))
    }
}
}
</script>

<style lang="scss" scoped>
.register-container{
    .identifyNumber{
        position: absolute;
        right: 0;
        top: 0;
        width: 60px;
        height: 40px;
        background-color: #ccc;
        line-height: 40px;
        text-align: center;
    }
    .btn{
        background-color: #fff;
        margin-top: 20px;
    }
}

</style>
