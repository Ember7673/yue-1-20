<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{$store.state.count}}</h3>
    <h3>{{$store.state.nickName}}</h3>
    <div>
        <!-- <button @click="$store.commit('add')">+</button> -->
        <button @click="$store.commit('reduce')">-</button>
        <input type="text" name="nickName"
        class="title form-control"
        placeholder="请输入标题"
        @input="updateNickName"
        v-model="nickName">
    </div>
</div>
</template>

<script>
import store from '@/vuex/store.js'
export default {
  name: 'HelloWorld',
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

<style lang="scss" scoped>

</style>
