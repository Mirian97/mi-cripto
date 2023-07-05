<script setup>
import { toRefs } from 'vue'
import ArrowDown from '../assets/arrow-down.svg'
import ArrowUp from '../assets/arrow-up.svg'
import { useCryptoStore } from '../stores/crypto'
import { formatMoney } from '../utils/formatters'

const { setActiveCrypto } = useCryptoStore()
const props = defineProps(['crypto'])
const { iconUrl, name, price, symbol, change } = toRefs(props.crypto)
</script>

<template>
  <div class="card" @click="setActiveCrypto(props.crypto)">
    <img :src="iconUrl" class="crypto-image" />
    <div class="d-flex justify-space-between align-center">
      <h4 class="text-h6 font-weight-bold">{{ name }}</h4>
      <h4 class="text-h5 font-weight-bold">{{ formatMoney(price) }}</h4>
    </div>
    <div class="d-flex justify-space-between align-center">
      <h4 class="text-subtitle-1 crypto-symbol">{{ symbol }}</h4>
      <div class="d-flex align-center">
        <h4 class="text-h6 mr-2">{{ change }}%</h4>
        <v-img
          :src="change > 0 ? ArrowUp : ArrowDown"
          max-width="24"
          alt="Icono de gráfico"
          class="graph-icon"
        />
      </div>
    </div>
  </div>
</template>

<style>
.card {
  background-color: #233241;
  border-radius: 20px;
  cursor: pointer;
  padding: 36px 24px 20px;
  position: relative;
  transition: all 0.4s ease-in-out;
  width: 47%;
}

.card:hover {
  box-shadow: 0px 0px 12px 8px #546374;
}

.crypto-image {
  position: absolute;
  top: -20px;
  width: 44px;
}

.crypto-symbol {
  color: var(--vt-c-text-dark-2);
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}
</style>
