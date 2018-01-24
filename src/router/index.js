import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from "@/components/login"
import register from "@/components/register"
import homeContainer from "@/components/tab/homeContainer"
import selfCenter from "@/components/tab/selfCenter.vue"
import search from "@/components/search.vue"
import selfInfo from "@/components/self/selfInfo.vue"
import selfNickname from "@/components/self/selfNickname.vue"
import selfEmail from "@/components/self/selfEmail.vue"
import selfTel from "@/components/self/selfTel.vue"
import selfAddress from "@/components/self/selfAddress.vue"
import addAddress from "@/components/self/addAddress.vue"
import choosePlace from "@/components/self/choosePlace.vue"
import test from "@/components/test.vue"
import list from "@/components/subComponets/list.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home', name: 'homeContainer', component: homeContainer
    },
    {
      path: '/login', name: 'login', component: login
    },
    {
      path: '/register', name: 'register', component: register
    },
    {
      path: '/selfCenter', name: 'selfCenter', component: selfCenter
    },
    {
      path: '/home/search', name: 'search', component: search
    },
    {
      path: '/selfContent/selfInfo', name: 'selfInfo', component: selfInfo
    },
    {
      path: '/selfContent/selfNickname', name: 'selfNickname', component: selfNickname
    },
    {
      path: '/selfContent/selfEmail', name: 'selfEmail', component:selfEmail
    },
    {
      path: '/selfContent/selfTel', name: 'selfTel', component: selfTel
    },
    {
      path: '/selfContent/selfAddress', name: 'selfAddress', component: selfAddress
    },
    {
      path: '/selfContent/addAddress', name: 'addAddress', component: addAddress
    },
    {
      path: '/selfContent/choosePlace', name: 'choosePlace', component: choosePlace
    },
    {
      path: '/test', name: 'test', component: test
    },
    {
      path: '/list', name: 'list', component: list
    }
  ]
})
