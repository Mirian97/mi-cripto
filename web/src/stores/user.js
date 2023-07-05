import { defineStore } from 'pinia'
import { computed, ref, watchEffect } from 'vue'
import router from '../router'

export const useUserStore = defineStore('user', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')))
  const token = ref(localStorage.getItem('token'))
  const isAuthenticated = computed(() => user.value && token.value)
  const setUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    user.value = userData
  }
  const setToken = (value) => {
    localStorage.setItem('token', value)
    token.value = value
  }
  const removeUser = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    token.value = null
    user.value = null
    router.push('/')
  }
  watchEffect(() => {
    if (isAuthenticated.value) {
      router.push('/cuenta')
    }
  })
  return { user, token, setUser, setToken, removeUser, isAuthenticated }
})
