<script setup>
import { RouterLink } from 'vue-router'
import Logo from '../assets/logo.svg'
import CustomTitle from '../components/CustomTitle.vue'
import { useUserStore } from '../stores/user'
const { removeUser } = useUserStore()
</script>

<template>
  <header class="header">
    <RouterLink class="flex-row logo" to="/cuenta">
      <img :src="Logo" alt="Logo" />
      <div class="flex-row">
        <CustomTitle title="Mi" textColor="#f8eaaf" /><CustomTitle title="Cripto" />
      </div>
    </RouterLink>
    <div class="flex-row actions-buttons">
      <v-btn icon="mdi-account-circle-outline" size="large" variant="text" />
      <v-btn @click="removeUser" icon="mdi-logout-variant" size="large" variant="text" />
    </div>
  </header>
</template>

<style>
.header {
  background: var(--primary-color);
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 120px;
  padding: 20px 32px;
  position: sticky;
  top: 0;
  z-index: 2;
}

.logo {
  text-decoration: none;
  color: var(--vt-c-white);
}

.actions-buttons i {
  cursor: pointer;
  font-size: 36px;
}

@media screen and (max-width: 768px) {
  .header {
    flex-direction: column;
    padding: 8px;
  }
}
</style>
