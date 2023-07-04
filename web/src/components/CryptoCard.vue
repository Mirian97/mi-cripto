<script setup>
import ArrowDown from '../assets/arrow-down.svg'
import ArrowUp from '../assets/arrow-up.svg'
import { formatMoney } from '../utils/formatters'
const bitcoin = {
  uuid: 'Qwsogvtv82FCd',
  symbol: 'BTC',
  name: 'Bitcoin',
  color: '#f7931A',
  iconUrl: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
  marketCap: '603160698576',
  price: '31059.338096158142',
  listedAt: 1330214400,
  tier: 1,
  change: '1.52',
  rank: 1,
  sparkline: [
    '30586.534718092178',
    '30573.058363544045',
    '30697.286488443104',
    '30968.960783957806',
    '31008.15414961739',
    '31047.600142482377',
    '31132.804196783905',
    '31256.399555778637',
    '31209.784908337515',
    '31100.74520713364',
    '31109.80691868616',
    '31123.356276455932',
    '31163.996575029352',
    '31244.31774093671',
    '31272.567022338513',
    '31278.526291636277',
    '31194.788224479697',
    '31080.82677737318',
    '31027.933900965265',
    '30946.363066685783',
    '30982.150274901935',
    '31015.786501376097',
    '31025.19370960441',
    '31028.52374018835'
  ],
  lowVolume: false,
  coinrankingUrl: 'https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc',
  '24hVolume': '14117240075',
  btcPrice: '1'
}
</script>

<template>
  <div class="card">
    <img :src="bitcoin.iconUrl" class="crypto-image" />
    <div class="flex-row justify-between align-center">
      <h4 class="text-h6 font-weight-bold">{{ bitcoin.name }}</h4>
      <h4 class="text-h5 font-weight-bold">{{ formatMoney(bitcoin.price) }}</h4>
    </div>
    <div class="flex-row justify-between align-center">
      <h4 class="text-subtitle-1 crypto-symbol">{{ bitcoin.symbol }}</h4>
      <div class="flex-row align-center percentage">
        <h4 class="text-h6">{{ bitcoin.change }}%</h4>
        <img
          :src="bitcoin.change ? ArrowUp : ArrowDown"
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
