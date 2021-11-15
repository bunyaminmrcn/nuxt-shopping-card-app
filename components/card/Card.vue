<template>
  <div class="cart-container card shadow">
    <h3 class="text-center ">Basket</h3>
    <Alert v-if="card.length == 0 || !card" />
    <CardItems v-else :card="card" />
    <CardFooter />
  </div>
</template>
<script>
  import Alert from "@/components/card/Alert"
  import CardItems from "@/components/card/CardItems"
  import CardFooter from "@/components/card/CardFooter"

  export default {
    components : {
      Alert,
      CardItems,
      CardFooter
    },
    props : {
      card : {
        type : Array,
        required : false
      }
    }
  }
</script>
