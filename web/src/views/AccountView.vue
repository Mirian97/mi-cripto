<script setup>
import CryptoCard from '../components/CryptoCard.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <Header />
  <div class="card-container">
    <CryptoCard />
    <CryptoCard />
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
