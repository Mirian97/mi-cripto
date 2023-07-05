<script setup>
import { toRefs } from 'vue'

const props = defineProps(['content'])
const { content } = toRefs(props)
</script>

<template>
  <li class="text-subtitle-1">{{ content }}</li>
</template>

<style>
li::marker {
  font-size: 20px;
}
</style>
