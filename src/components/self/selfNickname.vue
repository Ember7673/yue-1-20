<template>
  <div>
      <div class="nickname">
          <input type="text" name="nickName"
          class="title form-control"
          :placeholder="$store.state.selfInfo.nickName"
          @input="updateNickName"
          v-model="nickName">
      </div>
      <mt-button size="large" type="primary" @click="preserve">保存</mt-button>
      
  </div>
</template>

<script>
import store from '@/vuex/store.js'
export default {
name: 'selfNickname',
data() {
  return {
    nickName: ''
  }
},
created() {
  
},
methods: {
  updateNickName() {
      this.$store.state.selfInfo.nickName = this.nickName
    },
    preserve() {
      this.$router.push('/selfContent/selfInfo')
    }
}
}
</script>

<style lang="scss" scoped>
.nickname{
  background-color: #fff;
  input{
    padding: 15px;
  }
}

</style>
