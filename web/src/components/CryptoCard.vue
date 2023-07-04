<script setup>
import { toRefs } from 'vue'
import ArrowDown from '../assets/arrow-down.svg'
import ArrowUp from '../assets/arrow-up.svg'
import { formatMoney } from '../utils/formatters'
const props = defineProps(['crypto'])
const { iconUrl, name, price, symbol, change } = toRefs(props.crypto)
</script>

<template>
  <div class="card">
    <img :src="iconUrl" class="crypto-image" />
    <div class="flex-row justify-between align-center">
      <h4 class="text-h6 font-weight-bold">{{ name }}</h4>
      <h4 class="text-h5 font-weight-bold">{{ formatMoney(price) }}</h4>
    </div>
    <div class="flex-row justify-between align-center">
      <h4 class="text-subtitle-1 crypto-symbol">{{ symbol }}</h4>
      <div class="flex-row align-center percentage">
        <h4 class="text-h6">{{ change }}%</h4>
        <img :src="change > 0 ? ArrowUp : ArrowDown" alt="Icono de gráfico" class="graph-icon" />
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
  width: 44px;
  position: absolute;
  top: -20px;
}

.crypto-symbol {
  color: var(--vt-c-text-dark-2);
}

.percentage {
  gap: 8px;
}

.graph-icon {
  width: 24px;
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}
</style>
