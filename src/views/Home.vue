<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <cart-list></cart-list>
      </div>
      <div class="column">
        <product-list></product-list>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CartList from '@/components/cart/CartList.vue'
import ProductList from '@/components/product/ProductList.vue'

export default {
  name: 'Home',
  components: {
    CartList,
    ProductList
  }
}
</script>
