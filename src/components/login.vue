<template>
  <div class="login-container">
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
		</form>

        <mt-button class="btn" type="primary" size="large" plain  @click="login">登录</mt-button>
        <mt-button class="btn" type="primary" size="large" plain  @click="handleResgit">注册</mt-button>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
name: 'login',
data() {
    return {
        username: '',
        password: ''
    }
},
created() {
},
methods: {
    login() {
       if (this.username.trim().length <= 0) return Toast("请输入用户名！");
       if (this.password.trim().length <= 0)  return Toast("请输入密码！");
       var passwordReg = /^\d{6}$/
       if(!passwordReg.test(this.password)) return Toast("至少输入6位密码！");
    },
    handleResgit() {
        this.$router.push('/register')
    }
}
}
</script>

<style lang="scss" scoped>
.login-container{
    padding-top: 10px;
    .btn{
        background-color: #fff;
        margin-top: 20px;
    }
}

</style>
