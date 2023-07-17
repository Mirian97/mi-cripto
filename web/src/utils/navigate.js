import router from '../router'

export const navigateToLogin = () =>
  setTimeout(() => {
    router.push('/')
  }, 2000)
