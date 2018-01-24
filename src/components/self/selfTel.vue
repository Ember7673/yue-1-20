<template>
  <div class="tel-container">
        <div class="identifyCode">
            <input type="number" name="" id="" :placeholder="$store.state.selfInfo.telephone">
            <span @click="identify">获取验证码</span>
            
        </div>
        <div class="tel">
            <input type="number" name="" id="" placeholder="请输入验证码">
        </div>
      
      <mt-button type="primary" size="large" @click="preserve">绑定</mt-button>
  </div>
</template>

<script>
export default {
name: 'selfTel',
data() {
    return {

    }
},
methods: {
    identify() {
        alert('验证码发送成功')
    },
    preserve() {
        this.$router.push('/selfContent/selfInfo')
    }
}
}
</script>

<style lang="scss" scoped>
.tel-container{
        background-color: #fff;
    .identifyCode{
        position: relative;
        height: 58px;
        padding: 15px;
        span{
            color: blue;
            font-size: 12px;
            border: 1px solid blue;
            border-radius: 11px;
            padding: 3px 7px;
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%)
        }
    }
    .tel{
        padding: 15px;
    }
}


</style>
