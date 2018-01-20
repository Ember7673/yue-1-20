<template>
  <div>
        <!-- 头部 -->
        <div class="app-header">
            <input type="text" placeholder="搜索目的地" @click="search">
            <span class="mui-icon mui-icon-search searchIcon"></span>
            <span class="mui-icon mui-icon-home shopcarIcon"></span>
        </div>

    </div>
</template>

<script>
export default {
name: 'headerContent',
data() {
    return {

    }
},
methods: {
    search() {
        this.$router.push('/home/search')
    }
}
}
</script>

<style lang="scss" scoped>
 .app-header{
     height: auto;
     background-color: #eee;
     padding: 10px 50px 0px 20px;
     color: #eee;
     input{
        height: 30px;
        border: none;
        border-radius: 20px;
        padding: 0 30px;
        font-size: 12px;
     }
     span{
       position: absolute;
       color: pink;
       top: 12px;
     }
     .searchIcon{
       left: 25px;
     }
     .shopcarIcon{
       right: 15px;
     }
   }

</style>
