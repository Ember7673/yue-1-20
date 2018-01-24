<template>
  <div>
      <h3>{{$store.state.nickName}}</h3>
  </div>
</template>

<script>
import store from '@/vuex/store.js'
export default {
  name: 'test',
  data() {
    return{
      msg: 'hello world',
      nickName: ''
    }
  },
  methods: {
    updateNickName() {
      this.$store.state.nickName = this.nickName
    }
  }
}

</script>

<style>

</style>
