<template>
  <div>
        <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <span>姓名</span> 
                  <input type="text" v-model="username">
                </li>
                <li class="mui-table-view-cell">
                    <span>手机</span>
                    <input type="number" v-model="telephone">
                </li>
                <li class="mui-table-view-cell">
                    <span>地区</span>
                    <input @click="choosePlace" type="text" placeholder="请选择" v-model="place">
                </li>
                <li class="mui-table-view-cell detail">
                    <span>详细地址</span>
                    <input type="text" v-model="address">
                </li>
        </ul>
      <mt-button type="primary" size="large" @click="bind">绑定</mt-button>
  </div>
</template>

<script>
export default {
name: 'addAddress',
data() {
    return {
        username: '',
        telephone: '',
        place: '',
        address: ''
    }
},
methods: {
    choosePlace() {
        this.$router.push('/selfContent/choosePlace')
    },
    bind() {
        if (this.username.trim().length <= 0) return Toast("请输入用户名！");
        if (this.telephone.trim().length <= 0) return Toast("请输入手机号！");
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) return Toast("请输入正确的手机号格式！");
        if (this.place.trim().length <= 0) return Toast("请输入地区！");
        if (this.address.trim().length <= 0) return Toast("请输入详细地址！");
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
