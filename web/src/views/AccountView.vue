<script setup>
import { onMounted, ref } from 'vue'
import CryptoCard from '../components/CryptoCard.vue'
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
    messageError()
  }
}

onMounted(() => handleListCryptos())
</script>

<template>
  <Header />
  <div class="card-container">
    <CryptoCard v-for="crypto in cryptos" :key="crypto.uuid" :crypto="crypto" />
  </div>
</template>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px 20px;
}
</style>
