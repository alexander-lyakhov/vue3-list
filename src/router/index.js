//import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'

console.log(home)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
  ]
});

export default router