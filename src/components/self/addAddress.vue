<template>
  <div>
        <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <span>姓名</span> 
                  <input type="text">
                </li>
                <li class="mui-table-view-cell">
                    <span>手机</span>
                    <input type="number">
                </li>
                <li class="mui-table-view-cell">
                    <span>地区</span>
                    <input @click="choosePlace" type="text" placeholder="请选择">
                </li>
                <li class="mui-table-view-cell detail">
                    <span>详细地址</span>
                    <input type="text">
                </li>
        </ul>
      <mt-button type="primary" size="large">绑定</mt-button>
  </div>
</template>

<script>
export default {
name: 'addAddress',
data() {
    return {

    }
},
methods: {
    choosePlace() {
        this.$router.push('/selfContent/choosePlace')
    }
}
}
</script>

<style lang="scss" scoped>
input {
        border: none;
        margin-bottom: 0;
        padding-left: 50px;
        
    }
.detail {
    input{
        padding-left: 90px;
    }
            
}

    ul{
        li{
            span{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }


</style>
