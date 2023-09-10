import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PostsView from '../views/PostsView.vue'
import PiniaView from '../views/PiniaView.vue'
import CounterView from '../views/CounterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaView
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('../views/ModalView.vue')
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: () => import('../views/PostDetailView.vue')
    }
  ]
})

export default router
