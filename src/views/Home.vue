<template>
  <div class="home">
    <CartList />
    <ProductList />
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
