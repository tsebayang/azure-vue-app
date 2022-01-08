import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "../views/Login_.vue";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: "/reminder",
    name: "Reminder",
    component: () => import(/* webpackChunkName: "reminder" */ '../views/Reminder.vue')
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
