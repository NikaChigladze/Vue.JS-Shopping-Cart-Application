import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      cart: [],
      totalPrice: 0,
    }
  },
  mutations: {
    addProduct(state, value) {
      state.cart.push(value)
    },
    setTotalPrice(state, value) {
      state.totalPrice += value
    },
    changeProducts(state, value) {
      state.cart = value
    },
  },
  getters: {
    getProducts(state) {
      return state.cart
    },
    getTotalPrice(state) {
      return state.totalPrice
    },
  },
})

export default store
