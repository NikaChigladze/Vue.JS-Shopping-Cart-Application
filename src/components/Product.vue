<template>
  <div class="product">
    <div class="product-image">
      <img :src="data.url" alt="" />
    </div>
    <div class="product-title">{{ data.title }}</div>
    <div class="product-body">
      {{ data.body }}
    </div>
    <div class="product-price">{{ data.price }} GEL</div>
    <div class="product-button" @click="viewProduct"><button>View</button></div>
  </div>
</template>

<script>
export default {
  name: 'ProductVue',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    viewProduct() {
      this.$router.push(`/inner?id=${this.data.id}`)
    },
  },
}
</script>

<style scoped>
.product {
  width: 80%;
  height: 93%;
  border: 2px solid #2c3e50;
  border-radius: 5px;
}

.product-image {
  background: radial-gradient(
    circle,
    rgba(153, 153, 153, 1) 50%,
    rgba(102, 102, 102, 1) 100%
  );
  line-height: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.product-image img {
  width: 250px;
  object-fit: cover;
}

.product-title {
  font-size: 25px;
  padding-bottom: 15px;
}

.product-body {
  text-align: left;
  color: #222;
  padding-bottom: 15px;
}

.product-price {
  text-align: left;
  font-weight: bolder;
  font-size: 20px;
  color: #222;
  padding-bottom: 15px;
}

.product-button button {
  background-color: #16a085;
  border: none;
  outline: none;
  padding: 12px 35px;
  color: #fff;
  border-radius: 50px;
  font-weight: 600;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>
