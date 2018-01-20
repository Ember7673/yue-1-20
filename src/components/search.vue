<template>
  <div class="search-container">  

      <div class="app-header">
            <input type="text" placeholder="搜索目的地">
            <span class="mui-icon mui-icon-search searchIcon"></span>
        </div>

    <div class="select" @click="isSelectTbody">  
      <a href="javascript:;" @click="isProduct()" :class="{ active: product}">产品类型
          <span class="mui-icon mui-icon-arrowdown" v-show="!product"></span>
          <span class="mui-icon mui-icon-arrowup" v-show="product"></span>
      </a>
      <a href="javascript:;" @click="isMore()" :class="{ active: more}">更多筛选
          <span class="mui-icon mui-icon-arrowdown" v-show="!more"></span>
          <span class="mui-icon mui-icon-arrowup" v-show="more"></span>
      </a>
      <a href="javascript:;" @click="isSort()" :class="{ active: sort}">综合排序
          <span class="mui-icon mui-icon-arrowdown" v-show="!sort"></span>
          <span class="mui-icon mui-icon-arrowup" v-show="sort"></span>
      </a>
      
    </div>  
      <!-- 产品类型 -->
    <div class="selectTbody">  
        <div class="select-body" title="select-product" v-show="product">
                <div class="select-product">
                    <span>产品类型</span>
                </div>
                <div class="select-item">
                    <selected :list="productType"></selected>
                </div>
                <div class="select-btn">
                    <mt-button id="btn" size="large" type="primary">确认</mt-button>
                </div>
            </div>

        <!-- 更多筛选 -->
        <div class="select-body" title="select-more" v-show="more">
                
                <div class="select-product">
                    <span>服务日期</span>
                </div>
                <div class="select-item">
                    <selected :list="serviceDays"></selected>
                </div>

                <div class="select-product">
                    <span>服务天数</span>
                </div>
                <div class="select-item">
                   <selected :list="serviceData"></selected>
                </div>

                <div class="select-product">
                    <span>目的地城市</span>
                </div>
                <div class="select-item">
                    <selected :list="destinationCity"></selected>
                </div>

                <div class="select-btn">
                    <mt-button id="btn" size="large" type="primary">确认</mt-button>
                </div>
            </div>  
    
            <!-- cell组件 -->  
        <div class="select-body" title="select-sort" v-show="sort">
                        <div class="select-product">
                            <span>综合排序</span>
                        </div>

                        <form class="mui-input-group">
                            <div class="mui-input-row mui-radio">
                                <label>销量由高到低</label>
                                <input name="style" type="radio" checked value="">
                            </div>
                            <div class="mui-input-row mui-radio">
                                <label>销量由低到高</label>
                                <input name="style" type="radio" value="inverted">
                            </div>
                            <div class="mui-input-row mui-radio">
                                <label>价格由高到低</label>
                                <input name="style" type="radio" value="inverted">
                            </div>
                            <div class="mui-input-row mui-radio">
                                <label>价格由低到高</label>
                                <input name="style" type="radio" value="inverted">
                            </div>
                            <div class="mui-input-row mui-radio">
                                <label>今日新品</label>
                                <input name="style" type="radio" value="inverted">
                            </div>
                        </form>
                    </div>  
               
    </div>  

    <searchContent v-show="selectTbody"></searchContent>

  </div>  
</template>

<script>
import searchContent from "./search/searchContent.vue"
import selected from './subComponets/selected.vue'
export default {
  name: 'search',
  data () {
    return {
        product: false,
        more: false,
        sort: false,
        selectTbody: true,
        isActive: false,
        productType: ['不限', '旅游', '国际摄影', '国内旅游','全球旅拍'],
        activeName:'',
        serviceDays: ['不限','1天','2天','3天','4天','5天'],
        serviceData: ['不限','出行开始时间','出行结束时间'],
        destinationCity: ['不限','北京','布鲁塞尔','布达拉宫','济州岛']
    }
  },
  methods: {
     isProduct(name) {
         this.product = !this.product
         this.more = false
         this.sort = false
         this.selectTbody = false
     },
     isMore() {
         this.more = !this.more
         this.product = false
         this.sort = false
         this.selectTbody = false
     },
     isSort() {
        this.sort = !this.sort      
        this.more = false   
        this.product = false
        this.selectTbody = false
     },
     isSelectTbody() {
        if(this.sort === false && this.more === false && this.product === false){
            this.selectTbody = !this.selectTbody
            // console.log(1111)
        }
     },
     selected(gameName) {
      this.activeName = gameName
    }
  },
  components: {
      searchContent,
      selected
  }
}
</script>

<style lang="scss" scoped>
.search-container{
  background-color: #fff;

   .app-header{
        height: auto;
        background-color: #eee;
        padding: 10px 50px 0px 10px;
        input{
            height: 30px;
            border: none;
            border-radius: 20px;
            padding: 0 30px;
            font-size: 14px;
        }
        span{
        position: absolute;
        color: pink;
        top: 13px;
        }
        .searchIcon{
        left: 17px;
        }
    }

  .select{
    height: 40px;
    border-bottom: 2px solid #eee;
        a{
           display: block;
           float: left;
           width: 33%;
           color: #000;
            padding-left: 20px;
            line-height: 40px;
            font-size: 14px;
            .mui-icon{
                font-size: 17px;
            }
        }
        .active{
            color: blue;
        }
   }
  
}

.select-body{
        .mui-input-group .mui-input-row{
            font-size: 14px;
        }
       .select-product{
           height: 50px;
           border-bottom: 2px solid #eee;
           span{
               line-height: 50px;
                border-left: 4px solid blue;
                padding-left: 10px;
                margin-left: 8px;
                font-size: 14px;
            }
            
       }
       .select-item{
           height: auto;
            display: flex;
            flex-wrap: wrap;
            border-bottom: 2px solid #eee;
            padding: 8px;
       }
       .select-btn{
           height: 50px;
           #btn{
               margin-top: 10px;
           }
       }
   }
</style>
