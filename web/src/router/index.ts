import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '../views/LoginView.vue'
import SignUpViewVue from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'acceso',
      component: LoginViewVue
    },
    {
      path: '/inscribir',
      name: 'inscribir',
      component: SignUpViewVue
    }
  ]
})

export default router
