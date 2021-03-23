<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{ cartItem.title }}</p>
      <div>
        <span class="cart-item--price has-text-primary has-text-weight-bold"
          >${{ cartItem.price }} x {{ cartItem.quantity }}</span
        >
      </div>
    </div>
    <div class="cart-item__image">
      <img :src="require('../../assets/' + cartItem.image_tag)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: ["cartItem"],
};
</script>

<style scoped>
.box {
  height: 90px;
  padding: 10px;
  display: flex;
}

.cart-item__details {
  width: 250px;
  padding: 10px;
}

.cart-item__image img {
  height: 70px;
}

.cart-item__modify {
  cursor: pointer;
  margin: 0 1px;
}
</style>