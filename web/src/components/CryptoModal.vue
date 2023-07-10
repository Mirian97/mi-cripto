<script setup>
import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'
import { useCryptoStore } from '../stores/crypto'
import { formatMoney, formatNumber } from '../utils/formatters'
import toggleScroll from '../utils/toggleSroll'
import ModalListItem from './ModalListItem.vue'
import Sparkline from './Sparkline.vue'
const { removeActiveCrypto } = useCryptoStore()
const { showModal, activeCrypto } = storeToRefs(useCryptoStore())
const modalList = computed(() => [
  {
    id: 0,
    content: `Clasificación general: ${activeCrypto.value.rank}º lugar`
  },
  {
    id: 1,
    content: `Volumen de comercio: ${activeCrypto.value.lowVolume ? 'Bajo' : 'Alto'}`
  },
  {
    id: 2,
    content: `Volumen de negociación en las últimas 24 horas: ${formatNumber(
      activeCrypto.value['24hVolume']
    )}`
  },
  {
    id: 3,
    content: `Total de monedas en circulacion: ${formatNumber(activeCrypto.value.marketCap)}`
  }
])
watch(showModal, (showModal) => toggleScroll(showModal))
</script>

<template>
  <div class="backdrop" v-if="showModal">
    <div class="modal">
      <v-btn @click="removeActiveCrypto" variant="text" icon="mdi-close-thick" class="btn-close" />
      <div class="d-flex align-items">
        <v-img :src="activeCrypto.iconUrl" max-width="50" />
        <div class="ml-4">
          <h4 class="text-h5 font-weight-bold">{{ activeCrypto.name }}</h4>
          <h4 class="text-subtitle-2">{{ activeCrypto.symbol }}</h4>
        </div>
      </div>
      <ul class="modal-card">
        <h4 class="text-h6 font-weight-bold text-center ma-2">
          Precio: {{ formatMoney(activeCrypto.price) }}
        </h4>
        <ModalListItem v-for="item in modalList" :key="item.id" :content="item.content" />
      </ul>
      <div class="modal-card py-2 px-4">
        <Sparkline :data="activeCrypto.sparkline" :color="activeCrypto.color" />
      </div>
    </div>
  </div>
</template>

<style>
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
}

.modal {
  background-color: #233241;
  border-radius: 20px;
  border-left: 14px solid var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  padding: 24px;
  position: relative;
}

.modal-card {
  background-color: #546374;
  padding: 8px 14px 8px 30px;
  border-radius: 18px;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
