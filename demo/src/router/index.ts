import { createRouter, createWebHistory } from 'vue-router'
/* import navigation from '../components/Navigation.vue' */
import main from '../views/Main/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: main,
     
    }
  ]
})

export default router
