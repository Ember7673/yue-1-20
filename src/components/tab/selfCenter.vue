<template>
  <div>
    <div class="self-head">
      <div class="IDAvatar">
        <router-link to="/selfContent/selfInfo"><img src="../../../img/touxiang.jpg"></router-link>
      </div>
      <div class="login-info">
        <p>1232382942</p>
        <p>1232382942</p>
      </div>

      <div class="orderList">
        <div class="myOrder">
          <p>我的订单</p>
          <span class="mui-icon mui-icon-arrowright arrowone"></span>
        </div>
        <ul>
          <li>
            <span class="mui-icon mui-icon-navigate"></span>
            <p>代付款</p>
          </li>
          <li>
            <span class="mui-icon mui-icon-navigate"></span>
            <p>未出行</p>
          </li>
          <li>
            <span class="mui-icon mui-icon-navigate"></span>
            <p>已结束</p>
          </li>
        </ul>
      </div>
    </div>

    <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
            <span class="mui-icon mui-icon-star-filled"></span>
						我的积分
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
            <span class="mui-icon mui-icon-star-filled"></span>            
						我的收藏
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
             <span class="mui-icon mui-icon-chat"></span>          
						我的消息
					</a>
				</li>
        <li class="mui-table-view-cell">
					<a class="mui-navigate-right">
             <span class="mui-icon mui-icon-help"></span>    
            帮助中心
					</a>
				</li>
			</ul>

      <mt-button type="danger" size="large" @click="exit">退出</mt-button>

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
    tabContent
  }

}
</script>

<style lang="scss" scoped>
.self-head{
  width: auto;
  min-height: 248px;
  background: url('../../../img/selfCenter.png') no-repeat;
  background-size: 100% 248px;
  position: relative;
  margin-bottom: 10px;
  .IDAvatar{
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
       justify-content:center;//子元素水平居中
        align-items: center;
        display:flex;
        margin-bottom: 0;
        color: #fff;
    }
    
  }
  .orderList{
      background-color: rgba(0, 0, 0, .6);
      height: 123px;
      .myOrder{
        width: 100%;
        height: 40px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #fff;
          p{
            font-size: 16px;
            color: #fff;
            height: 40px;
            line-height: 40px;
            padding-left: 15px;
          }
          span{
            margin-top: 5px;
          }
      }
      ul{
        height: 100%;
        list-style: none;
        color: #fff;
        -webkit-padding-start: 0px;
        li{
          float: left;
          width: 33%;
          font-size: 12px;
          p{
            color: #fff;
            text-align: center;
          }
          span{
            margin-left: 50%;
            transform: translateX(-50%);
          }
        }
      }
  }

  .mui-table-view-cell>a{
    font-size: 14px;
  }
}


</style>
