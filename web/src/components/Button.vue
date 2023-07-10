<script setup>
import { toRefs } from 'vue'

const props = defineProps(['type'])
const { type } = toRefs(props)
</script>

<template>
  <v-btn color="primary" rounded size="x-large" :type="type" width="100%">
    <slot name="button-text" />
  </v-btn>
</template>
