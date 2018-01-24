<template>
    <transition> 
        <div>
                <div class="chooseHeader">
                    <span>选择地址</span>
                    <mt-button type="danger" size="small" @click="cancle">取消</mt-button>
                </div>
                <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
                <mt-button type="primary" size="large">确认并选择</mt-button>
        </div>
    </transition>
</template>

<script>
import area from './area.json'
export default {
name: 'choosePlace',
data() {
    return {
       slots: [
        {
            flex: 1,
            values: Object.keys(area.t.areaList[0]),
            className: 'slot1',
            textAlign: 'center'
            }, {
            divider: true,
            content: '-',
            className: 'slot2'
            }, {
            flex: 1,
            values: Object.values(area.t.areaList[0])[0],
            className: 'slot3',
            textAlign: 'center'
        }
      ]
    }
},
methods: {
    cancle() {
        this.$router.push('/selfContent/addAddress')
    },
    onValuesChange(picker, values) {
    
        console.log(picker.setSlotValue(1))

    console.log(picker)
    console.log(values[0])
    console.log(Object.keys(area))
    console.log(values[1])
    },
},
components: {
    area
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
