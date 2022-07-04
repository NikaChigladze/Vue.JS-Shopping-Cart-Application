<template>
  <div class="inner-product">
    <div class="inner-section">
      <div class="product-image">
        <img :src="product[0].url" alt="" />
      </div>
    </div>
    <div class="inner-section product-content">
      <div class="product-title">{{ product[0].title }}</div>
      <div class="product-body">
        {{ product[0].body }}
      </div>
      <div class="product-price">{{ product[0].price }} GEL</div>
      <div class="product-quantity">
        <button @click="decrease">-</button>
        <input type="text" :value="counter" disabled />
        <button @click="increase">+</button>
      </div>
      <div class="product-button">
        <button @click="addToCart">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import prodData from '../products.json'
// import store from '../store/store'

export default {
  name: 'InnerPage',
  data() {
    return {
      product: [],
      counter: 1,
      total: 0,
      newProduct: [],
    }
  },

  created() {
    this.product = prodData.filter(
      (product) => product.id === this.$route.query.id
    )
  },

  methods: {
    increase() {
      this.total = this.product[0].price
      this.counter++
      this.total *= this.counter
    },
    decrease() {
      this.counter === 1
        ? (this.total = this.product[0].price)
        : (this.total -= this.product[0].price)

      this.counter === 1 ? (this.counter = 1) : this.counter--
    },
    addToCart() {
      let isAdded = false

      for (let i = 0; i < this.$store.getters.getProducts.length; i++) {
        if (this.product[0].id == this.$store.getters.getProducts[i].id) {
          isAdded = true
        }
      }

      if (isAdded) {
        alert('Product is already added')
      } else {
        const totalPrice =
          this.total === 0 ? +this.product[0].price : this.total
        const quantity = this.counter
        this.newProduct[0] = {}
        this.newProduct[0].price = totalPrice
        this.newProduct[0].quantity = quantity
        this.newProduct[0].title = this.product[0].title
        this.newProduct[0].id = this.product[0].id
        this.newProduct[0].body = this.product[0].body
        this.newProduct[0].url = this.product[0].url
        this.$store.commit('addProduct', this.newProduct[0])
        this.$store.commit('setTotalPrice', this.newProduct[0].price)
      }
    },
  },
}
</script>

<style scoped>
.inner-product {
  display: flex;
  padding: 10px;
}

.product-image {
  width: 450px;
  background: radial-gradient(
    circle,
    rgba(153, 153, 153, 1) 50%,
    rgba(102, 102, 102, 1) 100%
  );
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  margin-right: 50px;
}

.product-image img {
  width: 300px;
  object-fit: cover;
}

.product-content {
  text-align: left;
  max-width: 50%;
}

.product-title {
  font-size: 80px;
  font-weight: 600;
  margin-bottom: 30px;
}

.product-body {
  color: #222;
  padding-bottom: 15px;
}

.product-price {
  font-weight: bolder;
  font-size: 20px;
  color: #222;
  padding-bottom: 15px;
}

.product-quantity {
  display: flex;
  padding-bottom: 15px;
}

.product-quantity input {
  width: 40px;
  text-align: center;
  border: none;
  background: none;
  outline: none;
  color: #000;
  opacity: 1;
}

.product-quantity button {
  width: 25px;
  height: 25px;
}

.product-button button {
  background-color: #16a085;
  border: none;
  outline: none;
  padding: 12px 35px;
  color: #fff;
  border-radius: 50px;
  font-weight: 600;
  margin-bottom: 15px;
  cursor: pointer;
}
</style>
