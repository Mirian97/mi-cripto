import axios from 'axios'
import router from '../router'
import { useUserStore } from '../stores/user'
import { sessionExpired } from '../utils/messages'
import { messageError } from '../utils/toast'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      messageError(sessionExpired)
      setTimeout(() => {
        const userStore = useUserStore()
        userStore.removeUser()
        router.push('/')
      }, 2000)
    } else {
      return Promise.reject(error)
    }
  }
)

export default api
