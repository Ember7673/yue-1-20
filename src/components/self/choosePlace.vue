<template>
  <div>
      <div class="chooseHeader">
        <span>选择地址</span>
        <em class="cancel">取消</em>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.chooseHeader{
    height: 40px;
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;
    span{
        font-size: 16px;
        line-height: 40px;
        padding-left: 15px;
    }
    em{
        font-size: 12px;
        color: red;
        border: 1px solid red;
        font-style: normal;
        
    }
}

</style>
