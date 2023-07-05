import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCryptoStore = defineStore('crypto', () => {
  const activeCrypto = ref({})
  const showModal = ref(false)
  const setActiveCrypto = (crypto) => {
    activeCrypto.value = crypto
    showModal.value = true
  }
  const removeActiveCrypto = () => {
    activeCrypto.value = {}
    showModal.value = false
  }
  return {
    activeCrypto,
    showModal,
    setActiveCrypto,
    removeActiveCrypto
  }
})
