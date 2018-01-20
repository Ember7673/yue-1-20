<template>
  <div class="app-container">
   
   
    <transition>
      <router-view></router-view>
    </transition>

  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>


<style lang="scss" scoped>
.app-container{
  //  padding-bottom: 50px;
   overflow: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}
.mint-header {
  width: 100%;
  z-index: 99;
  background-color: #eee;
  input{
    width: 100%;
    height: 50px;
  }
}

</style>
