<template>
  <div>
    <Stock v-for="stock in stocks" :stock="stock"></Stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
  export default {
    data() {
      return {
        stocks: [
          {id: 1, name:'BMW', price: 110},
          {id: 1, name:'Google', price: 170},
          {id: 1, name:'Twitter', price: 90},
          {id: 1, name:'Uber', price: 250},
        ]
      }
    },
    components: {
      Stock
    }
  }
</script>