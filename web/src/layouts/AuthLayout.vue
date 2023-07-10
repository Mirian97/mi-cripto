<script setup>
import CryptoModal from '../components/CryptoModal.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <Header />
  <div class="layout-content">
    <slot name="content" />
  </div>
  <CryptoModal />
</template>

<style>
.layout-content {
  display: flex;
  flex-direction: column;
  padding: 0 20px 40px;
  max-width: 1380px;
  margin: auto;
}
</style>
