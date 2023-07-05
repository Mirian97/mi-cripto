<script setup>
import { onMounted, ref } from 'vue'
import Spinner from '../assets/spinner.svg'
import CryptoCard from '../components/CryptoCard.vue'
import CryptoModal from '../components/CryptoModal.vue'
import Header from '../components/Header.vue'
import { listCrypto } from '../services/crypto'
import { useUserStore } from '../stores/user'
import { messageError } from '../utils/toast'
const { token } = useUserStore()
const cryptos = ref([])

const handleListCryptos = async () => {
  try {
    const result = await listCrypto(token)
    cryptos.value = result
  } catch (error) {
    messageError(error.response.data.message)
  }
}
onMounted(() => handleListCryptos())
</script>

<template>
  <Header />
  <div class="card-container">
    <CryptoCard
      v-if="cryptos.length"
      v-for="crypto in cryptos"
      :key="crypto.uuid"
      :crypto="crypto"
    />
    <img v-else :src="Spinner" alt="Cargando..." class="loading" />
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
  padding: 40px 20px;
  max-width: 1440px;
  margin: auto;
}

.loading {
  margin-top: 100px;
}
</style>
