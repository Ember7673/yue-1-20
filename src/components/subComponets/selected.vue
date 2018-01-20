<template>
    <div>
        <span v-for="(gameName,i) in list" 
            :key="i" @click="selected(i)" 
            :class="{ active: selectedIndex == i}">
            {{gameName}}
        </span>
    </div>
</template>

<script>
export default {
name: 'selected',
data() {
     return {
        selectedIndex:''
     }
},
methods: {
    selected: function(i) {
      this.selectedIndex = i
    }
  },
  props:['list']
}
</script>

<style lang="scss" scoped>
span{
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 2px 5px;
    margin: 5px;
}
.active{
    color: #fff;
    background-color: blue;
}
</style>
