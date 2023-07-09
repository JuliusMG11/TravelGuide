import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },


  {
    path: '/dashboard/',
    component: Dashboard,
    children: [
      {
        path: '',
        redirect: '/dashboard/chat'
      },
      {
        path: 'map',
        component: () => import('@/views/tabs/Map.vue')
      },
      {
        path: 'locations',
        component: () => import('@/views/tabs/Locations.vue')
      },
      {
        path: 'places',
        component: () => import('@/views/tabs/Places.vue')
      },
      {
        path: 'chat',
        component: () => import('@/views/tabs/Chat.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/tabs/Profile.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
