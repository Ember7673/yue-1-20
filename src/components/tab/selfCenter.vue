<template>
  <div class="self-container">
    <div class="self-head">
      <div class="id-avatar">
        <router-link to="/selfContent/selfInfo"><img src="../../../img/touxiang.jpg"></router-link>
      </div>
      <div class="login-info">
        <p>1232382942</p>
        <p>1232382942</p>
      </div>

      <div class="order-list">
        <div class="my-order">
          <span>我的订单</span>
          <img class="right" src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/right_arrow_active.png.png" alt="">
        </div>
        <div class="my-orderList">
          <ul>
            <li>
              <img src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/unpayment.png" alt="">
              <p>代付款</p>
            </li>
            <li>
              <img src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/untrip.png" alt="">
              <p>未出行</p>
            </li>
            <li>
              <img src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/end.png" alt="">
              <p>已结束</p>
            </li>
          </ul>
        </div>
      </div>
    </div>


      <div class="self-list">
        <ul>
          <li>
            <div>
              <img src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/mine_points.png" alt="">
              <span>我的积分</span>
            </div>
            <img class="right" src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/right_arrow.png" alt="">
          </li>
          <li>
            <div>
              <img src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/mine_enshrine.png" alt="">
              <span>我的收藏</span>
            </div>
           <img class="right" src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/right_arrow.png" alt="">
          </li>
          <li>
            <div>
              <img src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/mine_msg.png" alt="">
              <span>我的消息</span>
            </div>
            <img class="right" src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/right_arrow.png" alt="">
          </li>
          <li>
            <div>
              <img src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/mine_help.png" alt="">
              <span>帮助中心</span>
            </div>
            <img class="right" src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/right_arrow.png" alt="">
          </li>
        </ul>
      </div>

      <!-- <mt-button type="danger" size="large" @click="exit">退出</mt-button> -->
      <button class="danger" @click="exit">退出</button>


    <tabContent></tabContent>


      
  </div>
</template>

<script>
import tabContent from　"../subComponets/tab.vue"
export default {
  name: 'selfCenter',
  data() {
    return {

    }
  },
  methods: {
    exit() {
      this.$router.push('/login')
    }
  },
  components: {
    tabContent,
  }

}
</script>

<style lang="scss" scoped>
.self-container{
  .self-head{
    width: auto;
    min-height: 248px;
    background: url('../../../img/selfCenter.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    margin-bottom: 10px;
    .id-avatar{
      justify-content:center;//子元素水平居中
      align-items: center;
      display:flex;
      padding-top: 15px;
      img{
        width: 65px;
        height: 65px;
        border-radius: 50%;

      }
    }
    .login-info{
      p{
        line-height: 16px;
        justify-content:center;//子元素水平居中
        align-items: center;
        display:flex;
        margin-bottom: 0;
        color: #fff;
        font-size: 12px;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
      }
    }
    .order-list{
      background-color: #000;
      opacity: 0.65;
      width: 100%;
      font-size: 14px;
      color: #fff;
      letter-spacing: 0.07px;
      margin-top: 20px;
      .my-order{
        padding: 5px 20px 5px 15px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddd;
        img{
          width: 6px;
          height: auto;
          display: inline-block;
        }
      }
      .my-orderList{
        padding: 15px 15px 8px 15px;
        ul{
          li{
            width: 32%;
            display: inline-block;
            img{
              width: 21px;
              height: 21px;
              display: block;
              margin: 0 auto;
            }
            p{
              text-align: center;
              font-size: 12px;
              padding-top: 10px;
              color: #fff;
            }
          }
        }
        
      }
    }
  
  }
  .self-list{
    background-color: #fff;
    margin-top: 15px;
    ul{
      list-style: none;
        -webkit-padding-start: 0px;
        margin: 0;
      li{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #eee;
        padding: 15px 20px 20px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
            display: inline-block;
            img{
            width: 20px;
            height: 20px;
            margin-right: 20px;
          }
          span{
            font-size: 14px;
            vertical-align: top;
          }
        }
        .right{
          width: 6px;
          height: auto;
        }
      }
    }
    }
  .danger{
    background-color: #ea2121;
    color: #fff;
    width: 100%;
    height: 50px;
    border: none;
  }
    
}

</style>
