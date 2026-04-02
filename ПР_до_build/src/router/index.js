import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import ProductOne from '../pages/ProductOne.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/product/:id', component: ProductOne }, // Динамічний параметр :id
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router