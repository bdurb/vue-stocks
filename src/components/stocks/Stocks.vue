<template>
  <div>
    <Stock v-for="stock in stocks" :stock="stock" :key="stock"></Stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'

  export default {
    components: {
      Stock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks
      }
    }
  }
</script>