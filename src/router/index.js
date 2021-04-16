import Vue from 'vue'
import VueRouter from 'vue-router'
import Characteristic from '@/views/Characteristic'
import Maintenance from '@/views/Maintenance'


Vue.use(VueRouter)

const routes = [
  {
    path: '/characteristic',
    name: 'Characteristic',
    component: Characteristic,
    alias: '/'
  },
  {
    path: '/maintain',
    name: 'Maintenance',
    component: Maintenance
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
