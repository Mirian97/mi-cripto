<script setup>
import { debounce } from 'lodash'
import { onMounted, ref, watchEffect } from 'vue'
import Spinner from '../assets/spinner.svg'
import CryptoCard from '../components/CryptoCard.vue'
import CryptoModal from '../components/CryptoModal.vue'
import Header from '../components/Header.vue'
import { listCrypto } from '../services/crypto'
import { useUserStore } from '../stores/user'
import { messageError } from '../utils/toast'

const { token } = useUserStore()
const cryptos = ref([])
const search = ref('')
const loading = ref(true)
const clearSearch = () => (search.value = '')

const handleListCryptos = async () => {
  try {
    const result = await listCrypto(token, search.value)
    cryptos.value = result
  } catch (error) {
    messageError(error.response.data.message)
  } finally {
    loading.value = false
  }
}
watchEffect(() => {
  search.value ? debounce(handleListCryptos, 500)() : handleListCryptos()
})
onMounted(() => handleListCryptos())
</script>

<template>
  <Header />
  <v-sheet max-width="400" class="mx-auto mt-8 px-5">
    <v-text-field
      label="Buscar una criptomoneda..."
      variant="solo-inverted"
      maxLength="50"
      v-model="search"
      prepend-inner-icon="mdi-magnify"
      append-inner-icon="mdi-currency-usd"
      clear-icon="mdi-close-circle"
      clearable
      @click:clear="clearSearch"
    />
  </v-sheet>
  <div class="card-container">
    <img v-if="loading" :src="Spinner" alt="Cargando..." class="loading" />
    <p class="text-h6 text-center font-weight-bold" v-if="!cryptos.length && !loading">
      No hay criptomonedas para el término buscado...
    </p>
    <CryptoCard
      v-if="cryptos.length && !loading"
      v-for="crypto in cryptos"
      :key="crypto.uuid"
      :crypto="crypto"
    />
  </div>
  <CryptoModal />
</template>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px 20px 40px;
  max-width: 1440px;
  margin: auto;
}

.loading {
  margin-top: 100px;
}

.mdi-close {
  cursor: pointer;
}
</style>
