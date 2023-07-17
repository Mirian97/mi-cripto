import { debounce } from 'lodash'
import { defineStore } from 'pinia'
import { computed, ref, watchEffect } from 'vue'
import { listCrypto } from '../services/crypto'
import { messageError } from '../utils/toast'
import { useUserStore } from './user'

export const useCryptoStore = defineStore('crypto', () => {
  const { token } = useUserStore()
  const activeCrypto = ref({})
  const showModal = ref(false)
  const cryptos = ref([])
  const search = ref('')
  const loading = ref(false)
  const clearSearch = () => (search.value = '')
  const listCryptosDebounced = computed(() => debounce(handleListCryptos, 500))
  const setActiveCrypto = (crypto) => {
    activeCrypto.value = crypto
    showModal.value = true
  }
  const removeActiveCrypto = () => {
    activeCrypto.value = {}
    showModal.value = false
  }
  const handleListCryptos = async () => {
    loading.value = true
    try {
      cryptos.value = await listCrypto(token, search.value)
    } catch (error) {
      messageError(error.response.data.message)
    } finally {
      loading.value = false
    }
  }
  watchEffect(() => {
    search.value ? listCryptosDebounced.value() : handleListCryptos()
  })
  return {
    activeCrypto,
    showModal,
    setActiveCrypto,
    removeActiveCrypto,
    cryptos,
    search,
    loading,
    clearSearch,
    handleListCryptos
  }
})
