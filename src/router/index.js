import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Listing',
    name: 'Listing',
    component: () => import('../views/Listing.vue')
  },
  {
    path: '/Favorie',
    name: 'Favorie',
    component: () => import('../views/Favorie.vue')
  },
  {
    path: '/Article',
    name: 'Article',
    component: () => import('../views/Article.vue'),
    props: true,
  }
]

const router = new VueRouter({
  routes
})

export default router
