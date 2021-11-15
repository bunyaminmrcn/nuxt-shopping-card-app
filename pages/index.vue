<template>
  <div class="container">
    <h3 class="text-center mt-3">Nuxt.js | Express.js | Session</h3>
    <div class="d-flex pt-3 justify-content-center" style="height: 100%">
      <Products :products="products" />
      <Card :card="card" />
    </div>
  </div>
</template>
<script>
  import Products from "@/components/product/Products";
  import Card from "@/components/card/Card";
  export default {
    components: {Card, Products},
    computed : {
      products(){
        return this.$store.getters.getProducts
      },
      card(){
        return this.$store.getters.getCard
      }
    }
  }
</script>
<style>
  .product-container, .cart-container {
    padding: 1em;
    flex: 1 !important;
  }
  .container {
    height: 90vh;
  }
  body {
    background-color: #dff4fa;
  }
  .price-container{
    background-color: #53bed1 !important;
    font-size: 12px;
  }
  .total-price-container{
    color: #53bed1 !important;
    font-size: 20px;
  }
  .custom-alert {
    background-color: #dff4fa !important;
    font-size: 12px;
  }
  .bg-custom-color {
    background-color: #dff4fa !important;
  }
</style>
