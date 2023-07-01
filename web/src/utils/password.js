import { ref } from 'vue'

export const passwords = ref({
  password: false,
  repeatPassword: false
})

export const togglePassword = (current) => (passwords.value[current] = !passwords.value[current])
