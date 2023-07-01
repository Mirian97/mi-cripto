<script setup>
import { toRefs } from 'vue'

const props = defineProps(['title', 'textColor'])
const { title, textColor } = toRefs(props)
</script>

<template>
  <h1 class="title" :style="{ color: textColor }">{{ title }}</h1>
</template>

<style scoped>
.title {
  font-size: 40px;
  font-family: 'Belanosima', sans-serif;
}
</style>
