<template>
  <div class="search-box">
    <input
      type="search"
      name=""
      id=""
      placeholder="Search..."
      v-model="searchWord"
    />
  </div>
  <div class="product-container">
    <Product v-for="(product, index) in getData" :key="index" :data="product" />
  </div>
</template>

<script>
import Product from '../components/Product'
import prodData from '../products.json'

export default {
  name: 'HomePage',
  components: { Product },
  data() {
    return {
      prodData: prodData,
      searchWord: '',
      errMsg: false,
    }
  },
  computed: {
    getData() {
      return this.prodData.filter((product) =>
        product.title.toLowerCase().includes(this.searchWord)
      )
    },
  },
  watch: {
    getData: {
      handler: function () {
        this.getData.length > 0 ? (this.errMsg = false) : (this.errMsg = true)
      },
    },
  },
}
</script>

<style scoped>
.product-container {
  display: grid;
  padding: 0 20px;
  grid-template-columns: repeat(4, 25%);
  justify-content: center;
  align-items: center;
}

.product-container .product {
  margin: 0 10px;
  margin-bottom: 20px;
  align-self: center;
  justify-self: center;
  padding: 10px 10px;
}

.search-box input {
  width: 400px;
  height: 50px;
  border: none;
  outline: none;
  padding-left: 15px;
  border-radius: 10px;
  border: 2px solid #16a085b3;
}

.search-box {
  justify-content: center;
  display: flex;
  margin-bottom: 20px;
}

.err-msg {
  font-size: 25px;
  margin-bottom: 25px;
  color: red;
}
</style>
