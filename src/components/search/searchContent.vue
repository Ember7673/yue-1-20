<template>
  <div>
      <div class="search-content">
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
</template>

<script>
export default {
name: 'searchContent',
data() {
    return {
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
    }
}
}
</script>

<style lang="scss" scoped>
 .search-content{
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

</style>
