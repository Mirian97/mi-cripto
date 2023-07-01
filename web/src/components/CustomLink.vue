<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['auxialiaryText, linkText', 'to'])
const { auxialiaryText, linkText, to } = toRefs(props)
</script>

<template>
  <p class="text-link">
    {{ auxialiaryText }}
    <RouterLink :to="to" class="button-link">{{ linkText }}</RouterLink>
  </p>
</template>

<style scoped>
.text-link {
  font-size: 16px;
  text-align: center;
  margin: 16px auto;
}

.button-link {
  color: var(--primary-color);
}
</style>
