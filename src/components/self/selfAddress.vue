<template>
  <div>
      <div class="noData">
          <p>暂无数据</p>
      </div>
      <mt-button @click="addAddress" type="primary" size="large">添加新地址</mt-button>
  </div>
</template>

<script>
export default {
name: 'selfAddress',
data() {
    return {

    }
},
methods: {
    addAddress() {
        this.$router.push('/selfContent/addAddress')
    }
}
}
</script>

<style lang="scss" scoped>
.noData{
    height: 40px;
    background-color: #fff;
    p{
        color: #000;
        line-height: 40px;
        text-align: center;
    }
}

</style>
