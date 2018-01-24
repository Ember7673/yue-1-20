<template>
  <div>
      <div class="email">
            <input type="email" name="email" id="" 
            :placeholder="$store.state.selfInfo.email" 
            @input="updateEmail"
            v-model="email">
      </div>
      <mt-button type="primary" size="large" @click="preserve">保存</mt-button>
  </div>
</template>

<script>
import store from '@/vuex/store.js'
export default {
    name: 'selfEmail',
    data() {
        return {
            email: ''
        }
    },
    methods: {
        updateEmail() {
            this.$store.state.selfInfo.email = this.email
            },
        preserve() {
        this.$router.push('/selfContent/selfInfo')
        }
        }
        
    }

</script>

<style lang="scss" scoped>
.email{
    background-color: #fff;
    input{
        padding: 15px;
    }
}

</style>
