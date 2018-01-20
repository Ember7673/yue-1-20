<template>
  <div id="app">
  <div class="collection">
    <a href="#!" class="collection-item"
       v-for="(gameName,i) in gameNames"
       :key="i"
       @click="selected(gameName)"
       :class="{active: activeName == gameName}">{{gameName}}</a>
  </div>
</div>
</template>

<script>
export default {
name: 'HelloWorld',
data() {
     return {
         gameNames: ['魔兽世界', '暗黑破坏神Ⅲ', '星际争霸Ⅱ', '炉石传说', '风暴英雄',
        '守望先锋'
        ],
        activeName:''
     }
},
methods: {
    selected: function(gameName) {
      this.activeName = gameName
    }
  }
}
</script>

<style lang="scss" scoped>
.active{
    color: pink;
}
</style>
