<template>
  <div class="cart-container">
    <div class="cart-section cart-products">
      <CartProduct
        v-for="(cartProduct, index) in cart"
        :key="index"
        :data="cartProduct"
      />
    </div>
    <div class="cart-section cart-content">
      <div class="cart-title">Cart</div>
      <div class="cart-subtitle">Total Balance</div>
      <div class="cart-paragraph">{{ totalBalance }} GEL</div>
    </div>
  </div>
</template>

<script>
import CartProduct from '../components/CartProduct'

export default {
  name: 'CartPage',
  components: { CartProduct },

  computed: {
    cart() {
      return this.$store.getters.getProducts
    },
    totalBalance() {
      return this.$store.getters.getTotalPrice
    },
  },
}
</script>

<style scoped>
.cart-container {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
}

.cart-section {
  text-align: left;
}

.cart-products {
  margin-right: 135px;
  padding-right: 15px;
  width: 40%;
  overflow-y: auto;
  scroll-behavior: smooth;
  max-height: 550px;
}
.cart-title {
  font-size: 80px;
  font-weight: 600;
  padding-bottom: 20px;
}

.cart-subtitle {
  font-size: 60px;
  font-weight: 600;
}

.cart-paragraph {
  font-size: 22px;
  font-weight: 600;
}
</style>
