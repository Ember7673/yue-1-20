<template>
<div>
    <router-link :to="url">
        <div class="list-container">   
                <label for="">{{msg}}</label>
                <div class="list">
                    <span class="rightInfo">{{selfInfo}}</span>
                    <img class="right" src="http://wap.yueshijue.com/selfCenter/assets/img/mine_page/right_arrow.png" alt="">
                </div>
        </div>
    </router-link>
</div>
 
</template>

<script>
export default {
name: 'list',
data() {
    return {
    }
},
methods: {
   
   
},
props: ['msg','selfInfo','url']
}
</script>

<style lang="scss" scoped>
.list-container{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 2px solid #eee;
    .list{
        span{
            color: #ccc;
            padding-right: 5px;
        }
        img{
            width: 6px;
        }
    }
   
}
a{
    color: #000;
}
</style>
