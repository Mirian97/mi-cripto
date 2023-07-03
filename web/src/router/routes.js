import { useUserStore } from '../stores/user'

export const validateAuthRoutes = (to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth) {
    userStore.isAuthenticated ? next() : next('/')
  } else {
    next()
  }
}
