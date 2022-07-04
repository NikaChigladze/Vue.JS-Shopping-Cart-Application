import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home'
import Inner from './pages/Inner'
import Cart from './pages/Cart'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/inner',
    name: 'Inner',
    component: Inner,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
