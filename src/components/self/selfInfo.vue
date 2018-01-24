<template>
    <div class="selfInfoContainer">
        <ul>
            <li class="avatar">
                <input type="file">
                <label for="">头像</label>
                <div>
                    <img class="avatarImg" src="../../../img/touxiang.jpg" alt="">
                    <img class="right" src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/right_arrow.png" alt="">
                </div>
            </li>
            <li>
                <list v-for="(item,i) in userInfos" :key="i" 
                :msg="userInfos[i].nickName" 
                :self-info="userInfos[i].selfInfos"
                :url="userInfos[i].url"></list>
            </li>
        </ul>
    </div>
</template>

<script>
import store from '@/vuex/store.js'
import list from '../../components/subComponets/list.vue'
export default {
name: 'selfInfo',
data() {
    return {
        userInfos: [
            {
                nickName: '昵称',
                selfInfos: this.$store.state.selfInfo.nickName,
                url: '/selfContent/selfNickname',
            },
            {
                nickName: '邮箱',
                selfInfos: this.$store.state.selfInfo.email,
                url: '/selfContent/selfEmail',
            },
            {
                nickName: '绑定手机',
                selfInfos: this.$store.state.selfInfo.telephone,
                url: '/selfContent/selfTel',
            },
            {
                nickName: '收货地址',
                selfInfos: '',
                url: '/selfContent/selfAddress',
            },
        ]
    }
},
created() {
    
},
methods: {
   
},
components: {
    list
}
}
</script>

<style lang="scss" scoped>
.selfInfoContainer {
    background-color: #fff;
        .avatar {
            width: 100%;
            height: 100px;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            input {
                position: absolute;
                opacity: 0;
                width: 100%;
                height: 100px;
            }
            label {
                width: 100px;
                line-height: 70px;
            }
             div {
                .avatarImg{
                    width: 67px;
                    height: 67px;
                    margin-right: 35px;
                }
                img {
                    vertical-align: middle;
                }
            }
                .avatarImg{
                    width: 67px;
                    height: 67px;
                    margin-right: 35px;
                }
            }
 

    a{
        color: #000;
    }
    .right{
        width: 6px;
        height: auto;
    }

}


</style>
