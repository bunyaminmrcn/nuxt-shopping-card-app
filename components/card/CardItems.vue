<template>
  <table class="table table-hover table-striped table-bordered">
    <thead>
    <th class="text-center">Name</th>
    <th class="text-center">Quantity</th>
    <th class="text-center">Price</th>
    <th class="text-center">Total Price</th>
    <th class="text-center">Remove</th>
    </thead>
    <tbody>
      <CardItem v-for="item in card" :item="item" :key="item.id" />
    </tbody>
  </table>
</template>
<script>
  import CardItem from "@/components/card/CardItem"
  export default {
    components : {
      CardItem
    },
    props : {
      card : {
        type : Array,
        required : false
      }
    }
  }
</script>

