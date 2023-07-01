<script setup>
import { toRefs } from 'vue'
import CustomSubtitle from '../components/CustomSubtitle.vue'
import CustomTitle from '../components/CustomTitle.vue'

const props = defineProps(['title', 'subtitle'])
const { title, subtitle } = toRefs(props)
</script>

<template>
  <div class="layout">
    <CustomTitle :title="title" />
    <CustomSubtitle :subtitle="subtitle" />
    <slot name="form" />
  </div>
</template>

<style>
.layout {
  background-image: url('../assets/background-desktop.svg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 16px;
  width: 100%;
}

@media (max-width: 768px) {
  .layout {
    background-image: url('../assets/background-mobile.svg');
  }
}
</style>
