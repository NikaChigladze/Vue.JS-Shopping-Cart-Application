<template>
  <nav class="navbar">
    <div class="nav-item">
      <router-link to="/" style="text-decoration: none"
        ><h2>Home</h2></router-link
      >
    </div>
    <router-link to="/cart">
      <div class="nav-item">
        <div class="cart-items">{{ cartLength }}</div>
        <i class="fa fa-shopping-basket"></i>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'HeaderVue',

  computed: {
    cartLength() {
      return this.$store.getters.getProducts.length
    },
  },
}
</script>

<style scoped>
nav {
  background-color: #16a085;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 50px;
}

nav h2 {
  color: #fff;
  font-size: 30px;
}

nav i[class='fa fa-shopping-basket'] {
  font-size: 25px;
  color: #fff;
  cursor: pointer;
}

nav .cart-items {
  line-height: 20px;
  position: absolute;
  text-align: center;
  margin-top: -15px;
  margin-left: 15px;
  background-color: #2c3e50;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
}

nav input {
  width: 400px;
  height: 50px;
  border: none;
  outline: none;
  padding-left: 15px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(52, 73, 94, 0.3);
  color: #fff;
}

nav button {
  height: 50px;
  border: none;
  outline: none;
  background: #fff;
  padding-right: 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(52, 73, 94, 0.3);
  color: #fff;
  cursor: pointer;
}

nav .nav-search {
  display: flex;
}
</style>
