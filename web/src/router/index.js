import { createRouter, createWebHistory } from 'vue-router'
import AccountView from '../views/AccountView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/inscribir',
      name: 'inscribir',
      component: SignUpView
    },
    { path: '/cuenta', name: 'cuenta', component: AccountView }
  ]
})

export default router
