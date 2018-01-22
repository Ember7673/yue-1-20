<template>
    <transition> 
        <div>
                <div class="chooseHeader">
                    <span>选择地址</span>
                    <mt-button type="danger" size="small" @click="cancle">取消</mt-button>
                </div>
                <div class="chooseBody">
                    <input type="text" name="" id="" placeholder="选择省份">
                    <input type="number" name="" id="" placeholder="选择城市">
                    <input type="number" name="" id="" placeholder="选择区域">
                </div>
                <mt-button type="primary" size="large">确认并选择</mt-button>
        </div>
    </transition>
</template>

<script>
export default {
name: 'choosePlace',
data() {
    return {
       
    }
},
methods: {
    cancle() {
        this.$router.push('/selfContent/addAddress')
    }
}
}
</script>

<style lang="scss" scoped>
.chooseHeader{
    height: 40px;
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;
    span{
        font-size: 16px;
        line-height: 40px;
        padding-left: 15px;
    }
    .mint-button{
        margin-top: 3px;
        margin-right: 10px;
    }
}

.v-enter {
  opacity: 0;
  transform: translateY(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

</style>
