<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['helperText', 'linkText', 'to'])
const { helperText, linkText, to } = toRefs(props)
</script>

<template>
  <p class="text-link">
    {{ helperText }}
    <RouterLink :to="to" class="button-link">{{ linkText }}</RouterLink>
  </p>
</template>

<style>
.text-link {
  color: var(--vt-c-white);
  font-size: 16px;
  margin: 16px auto;
  text-align: center;
}

.button-link {
  color: var(--primary-color);
}
</style>
