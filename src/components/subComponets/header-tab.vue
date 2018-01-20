<template>
    <div>
        <!-- 头部 -->
        <div class="app-header">
            <input type="text" placeholder="搜索目的地">
            <span class="mui-icon mui-icon-search searchIcon"></span>
            <span class="mui-icon mui-icon-home shopcarIcon"></span>
        </div>

        <!-- tabbar区域 -->
        <nav class="mui-bar mui-bar-tab">
                <router-link class="my-tab-item1" to="/home">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="my-tab-item1" to="/member">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">会员</span>
                </router-link>
                <router-link class="my-tab-item1" to="/search">
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">搜索</span>
                </router-link>
            </nav>


    </div>
</template>

<script>
export default {

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


.mui-bar-tab .my-tab-item1.mui-active {
  color: #007aff;
}

.mui-bar-tab .my-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .my-tab-item1 .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .my-tab-item1 .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
