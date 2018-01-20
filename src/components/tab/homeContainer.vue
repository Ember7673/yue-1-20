<template>
  <div class="homeContainer">

      <!-- header-tab区域 -->
      <!-- <headerTab></headerTab> -->
      <headerContent></headerContent>


      <!-- <swiper :lunbotu="lunbotu" :imgname="'img'" :isfull="true"></swiper> -->
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../../../img/swiper.png">
        </mt-swipe-item>
      </mt-swipe>

      <!-- 热门 -->
      <div class="hot">
        <div class="hotHeader">
        <a href="#">
          <span>HOT</span>
          最热门
        </a>
      </div>
      <div class="hotCity">
          <ul>
            <li v-for="(item,i) in hotCity" :key="i">{{item}}</li>
          </ul>
      </div>
      </div>
      
      
      
      <!-- 精选推荐 -->
      <div class="recommend">
        <div class="recommendHeader">
          <p>精选推荐</p>
        </div>
        <div class="recommendBody">
            <ul class="mui-table-view">
              <li class="mui-table-view-cell mui-media" v-for="(item,i) in recomm" :key="i">
                <a href="javascript:;">
                  <img class="mui-media-object mui-pull-left" src="../../../img/suolue.jpg">
                  <div class="mui-media-body">
                    <p class="pTitle mui-ellipsis-2">{{item.title}}</p>
                    <p class='pBorder mui-ellipsis-2'>{{item.border}}</p>
                    <span class="red">￥{{item.price}}起</span>
                  </div>
                </a>
              </li>
             
            </ul>
        </div>
      </div>
      
      <tabContent></tabContent>

  </div>
</template>

<script>
import axios from "axios"
// import headerTab from "../subComponets/header-tab.vue"
import headerContent from "../subComponets/headerContent.vue"
import tabContent from "../subComponets/tab.vue"
export default {
name: 'homeContainer',
data() {
  return {
     lunbotu:[],
     recomm:[
       {
         "title": "测试巴厘岛旅拍婚纱摄影6天4晚套系（含摄影+旅游）",
         "border": "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
         "price": "13"
       },
       {
         "title": "2222测试巴厘岛旅拍婚纱摄影6天4晚套系（含摄影+旅游）",
         "border": "222能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
         "price": "22"
       },
       {
         "title": "3333测试巴厘岛旅拍婚纱摄影6天4晚套系（含摄影+旅游）",
         "border": "333能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
         "price": "44"
       }
     ],
    hotCity:["北京","上海","厦门","北京","上海","厦门","北京","上海","厦门"]
  }
},
created() {
  // this.getlunbotu()
},
methods: {
  // getlunbotu() {
  //    axios.get('yuemall/img/lunbotu.json').then((res) => {
  //             var result = res.data
  //             console.log(res)
  //           })
  // }
},
components:{
  headerContent,
  tabContent
}
}
</script>

<style lang="scss" scoped>
.homeContainer{
  padding-bottom: 50px;
  background-color: #fff;
  .mint-swipe {
    height: 180px;
    background-color: pink;
    .mint-swipe-item {
      text-align: center;
      img{
         width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
  }
  .hot{
    border-bottom: 10px solid #eee;
    .hotHeader{
      height: 50px;
      border-bottom: 1px solid #ccc;
      a{
        line-height: 50px;
        padding-left: 25px;
        font-size: 14px;
        vertical-align: top;
        span{
          color: red;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
    .hotCity {
      margin-bottom: 10px;
      ul{
        height: 100px;
        list-style: none;
        -webkit-padding-start: 0;
        li{
          font-size: 14px;
          float: left;
          width: 25%;
          text-align: center;
          margin: 8px 0;
          border-right: 4px solid #ccc;
        }
      }
    }
  }
  .recommend{
    .recommendHeader{
      height: 60px;
      border-bottom: 1px solid #ccc;
      p{
        font-size: 16px;
        line-height: 60px;
        padding-left: 25px;
        color: #000;
        font-weight: bold;
      }
    }
    .recommendBody{
      .mui-table-view .mui-media-object{
        max-width: 128px;
        height: 72px;
      }
      .pTitle{
        color: #000
      }
      .pBorder{
        border: 1px solid #eee;
      }
      .red{
        color: red;
        font-weight: bold;
      }
    }
  }
    
  
}
</style>
