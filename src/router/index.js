import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Crypto from '../views/Crypto.vue'

const routes = [
  {
    path : '/',
    name : 'crypto',
    component : Crypto
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
