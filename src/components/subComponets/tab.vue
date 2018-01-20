<template>
    <div>
    
        <!-- tabbar区域 -->
        <nav class="mui-bar mui-bar-tab">
                <router-link class="my-tab-item1" to="/home">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="my-tab-item1" to="/member">
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">会员</span>
                </router-link>
                <router-link class="my-tab-item1" to="/selfCenter">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">我的</span>
                </router-link>
            </nav>


    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

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
