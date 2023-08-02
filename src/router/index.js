import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blogs',
    component: () => import('../views/BlogsView.vue')
  },
  {
    path: '/myinfo',
    component: () => import('../views/MyInfoView.vue')
  },
  {
    path: '/community',
    component: () => import('../views/CommunityView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
