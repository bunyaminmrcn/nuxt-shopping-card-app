<template>
  <div class="cart-footer mt-auto">
    <div class="total-price d-flex justify-content-end align-items-center rounded-0">
      <strong style="font-size: 18px;">Total Price : </strong>
      <span class="badge total-price-container rounded-0">{{ cardTotalPrice.toFixed(2) }}₺</span>
    </div>
  </div>
</template>
<script>
  export default {
    computed : {
      cardTotalPrice(){
        return this.$store.getters.getTotalPrice
      }
    }
  }
</script>
