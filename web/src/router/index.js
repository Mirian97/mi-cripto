import { createRouter, createWebHistory } from 'vue-router'
import AccountView from '../views/AccountView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import SignUpView from '../views/SignUpView.vue'
import { validateAuthRoutes } from './routes'

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
    {
      path: '/cuenta',
      name: 'cuenta',
      component: AccountView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: ProfileView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(validateAuthRoutes)

export default router
