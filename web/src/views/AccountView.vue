<script setup>
import { storeToRefs } from 'pinia'
import Spinner from '../assets/spinner.svg'
import CryptoCard from '../components/CryptoCard.vue'
import CryptoModal from '../components/CryptoModal.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import { useCryptoStore } from '../stores/crypto'
const { cryptos, search, loading } = storeToRefs(useCryptoStore())
const { clearSearch } = useCryptoStore()
</script>

<template>
  <AuthLayout>
    <template #content>
      <div class="d-flex flex-column align-center justify-center">
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
          class="search-input"
        />
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
      </div>
    </template>
  </AuthLayout>
</template>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
}

.search-input {
  width: 400px;
  max-width: 100%;
  padding: 32px 0 20px;
}

.loading {
  margin-top: 100px;
}

.mdi-close {
  cursor: pointer;
}
</style>
