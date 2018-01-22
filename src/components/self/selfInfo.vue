<template>
  <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell avatar">
                <a class="mui-navigate-right">
                    <input type="file" name="avatar" id="avatar">
                    <span>头像</span>
                    <img class="avatarImg" src="../../../img/touxiang.jpg" alt="">
                </a>
            </li>
            <li class="mui-table-view-cell">
                <router-link to="/selfContent/selfNickname" class="mui-navigate-right">
                    昵称
                    <span class="rightInfo">13012345678</span>
                </router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link to="/selfContent/selfEmail" class="mui-navigate-right">
                    邮箱
                    <span class="rightInfo">未设置</span>
                </router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link to="/selfContent/selfTel" class="mui-navigate-right">
                    绑定手机
                    <span class="rightInfo">13012345678</span>
                </router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link to="/selfContent/selfAddress" class="mui-navigate-right">
                    收获地址
                </router-link>
            </li>
      </ul>
  </div>
</template>

<script>
export default {
name: 'selfInfo',
data() {
    return {
    
    }
},
methods: {
   
}
}
</script>

<style lang="scss" scoped>
.rightInfo{
    font-size: 14px;
    color:#ccc;
    position: absolute;
    top: 10px;
    right: 39px;
}

.avatar{
    // display: flex;
    // justify-content: space-between;
    width: 100%;
    // height: 67px;
    input{
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    span{
        line-height: 67px;
    }
    .avatarImg{
        width: 67px;
        height: 67px;
        float: right;
        margin-right: 35px;
    }
}


</style>
