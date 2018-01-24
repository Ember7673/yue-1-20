<template>
  <div class="addAddress-container">
        <ul>
                <li>
                    <span>姓名</span> 
                    <input type="text" 
                    @input="addName"
                    v-model="name" :placeholder="this.name">
                </li>
                <li>
                    <span>手机</span>
                    <input type="number"
                    @input="addTelephone"
                    v-model="telephone"
                    >
                </li>
                <li>
                    <span>地区</span>
                    <input @click="choosePlace" type="text" placeholder="请选择" v-model="place">
                </li>
                <li>
                    <span>详细地址</span>
                    <input type="text" 
                    @input="addAddress"
                    v-model="address">
                </li>
        </ul>
      <button @click="bind">保存</button>
  </div>
</template>

<script>
export default {
name: 'addAddress',
data() {
    return {
        name: '',
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
        // if (this.place.trim().length <= 0) return Toast("请输入地区！");
        if (this.address.trim().length <= 0) return Toast("请输入详细地址！");
    },
    addName() {
        this.$store.state.selfInfo.nickName = this.name
        localStorage.setItem(name,this.name)
    },
    addTelephone() {
        this.$store.state.selfInfo.telephone = this.telephone
    },
    addAddress() {
        this.$store.state.selfInfo.address = this.address
    }
}
}
</script>

<style lang="scss" scoped>
.addAddress-container{
    ul{
        border: none;
        background-color: #fff;
        li{
            width: 100%;
            height: 46px;
            line-height: 46px;
            border-bottom: 2px solid #eee;
            padding: 0px 15px 5px 15px;
            input{
                height: 28px;
                line-height: 28px;
                padding-left: 10px;
            }
        }
    }
    button{
        display: inline-block;
        margin-left: 50%;
        transform: translateX(-50%);
        background-color: #00AAEF;
        width: 92%;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        color: #fff;
        border: none;
        margin-top: 15px;
    }
}

// input {
//         border: none;
//         margin-bottom: 0;
//         padding-left: 50px;
        
//     }
// .detail {
//     input{
//         padding-left: 90px;
//     }
            
// }

//     ul{
//         li{
//             span{
//                 position: absolute;
//                 top: 50%;
//                 transform: translateY(-50%);
//             }
//         }
//     }




</style>
