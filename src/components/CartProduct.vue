<template>
  <div class="cart-product">
    <div class="product-section">
      <div class="product-image">
        <img :src="data.url" alt="" />
      </div>
    </div>
    <div class="product-section product-content">
      <div class="product-title">{{ data.title }}</div>
      <div class="product-body">
        {{ data.body }}
      </div>
      <div class="product-quantity">{{ data.quantity }} X</div>
      <div class="product-price">{{ data.price }} GEL</div>
      <div class="product-button">
        <button @click="removeProduct">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartProduct',
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  methods: {
    removeProduct() {
      const productToRemove = this.$store.getters.getProducts.filter(
        (product) => product.id === this.data.id
      )
      const removed = this.$store.getters.getProducts.filter(
        (product) => product.id !== productToRemove[0].id
      )
      this.$store.commit('setTotalPrice', -this.data.price)
      this.$store.commit('changeProducts', removed)
    },
  },
}
</script>

<style scoped>
.cart-product {
  display: flex;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.product-image {
  background: radial-gradient(
    circle,
    rgba(153, 153, 153, 1) 50%,
    rgba(102, 102, 102, 1) 100%
  );
  margin-right: 30px;
  height: 100%;
}

.product-image img {
  width: 150px;
  object-fit: cover;
}

.product-title {
  font-size: 22px;
  padding-bottom: 5px;
}

.product-body {
  padding-bottom: 5px;
}

.product-quantity {
  padding-bottom: 5px;
  font-weight: 600;
  color: green;
}

.product-price {
  padding-bottom: 10px;
  font-weight: bolder;
}

.product-button button {
  padding: 8px 25px;
  background-color: red;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
}

.product-content {
  text-align: left;
}
</style>
