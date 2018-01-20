<template>
  <div>
        <div class="identifyCode">
            <input type="number" name="" id="">
            <span>获取验证码</span>
        </div>
      
      <input type="number" name="" id="" placeholder="请输入验证码">
      <mt-button type="primary" size="large">绑定</mt-button>
  </div>
</template>

<script>
export default {
name: 'selfTel'
}
</script>

<style lang="scss" scoped>
 input {
        height: 58px;
    }
.identifyCode{
    position: relative;
    height: 58px;
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

</style>
