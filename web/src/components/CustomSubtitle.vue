<script setup>
import { toRefs } from 'vue'

const props = defineProps(['subtitle', 'textColor'])
const { subtitle, textColor } = toRefs(props)
</script>

<template>
  <h3 class="subtitle" :style="{ color: textColor }">{{ subtitle }}</h3>
</template>

<style scoped>
.subtitle {
  font-size: 18px;
  font-weight: 400;
}
</style>
