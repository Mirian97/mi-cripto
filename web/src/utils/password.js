import { ref } from 'vue'

export const passwords = ref({
  showPassword: false,
  showRepeatPassword: false
})

export const togglePassword = (current) => (passwords.value[current] = !passwords.value[current])
