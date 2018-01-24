import Vue from 'vue'
import Vuex from 'vuex'
import action from 'vuex'


Vue.use(Vuex)

const state = {
    count: 1,
    selfInfo: {
        nickName: '光头强',
        email: '11223344@163.com',
        telephone: '13012345678'
    },
    selfAddress: {
        name: '熊大',
        telephone: '12012345678',
        place: '北京市朝阳区',
        address: '四惠金隅大成国际中心'
    }
}

const mutations = {
    // update(state,nickName) {
    //     state.nickName = nickName;
    // },
    reduce(state) {
        state.count -=1;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    action
})