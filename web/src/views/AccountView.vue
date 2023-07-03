<script setup>
import { useUserStore } from '../stores/user'
const { removeUser } = useUserStore()
</script>

<template>
  <h1>Cuenta principal</h1>
  <button @click="removeUser">Logout</button>
</template>
