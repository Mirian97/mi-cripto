<script setup>
import { RouterLink } from 'vue-router'
import Logo from '../assets/logo.svg'
import CustomTitle from '../components/CustomTitle.vue'
import { useUserStore } from '../stores/user'
const { removeUser } = useUserStore()
</script>

<template>
  <header class="header">
    <div class="header-content">
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
    </div>
  </header>
</template>

<style>
.header {
  background: var(--primary-color);
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  position: sticky;
  top: 0;
  z-index: 2;
}

.header-content {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1410px;
  min-height: 120px;
  padding: 20px 32px;
}

.logo {
  text-decoration: none;
  color: var(--vt-c-white);
  gap: 4px;
}

.actions-buttons i {
  cursor: pointer;
  font-size: 36px;
}

@media screen and (max-width: 768px) {
  .header-content {
    flex-direction: column;
    padding: 8px;
  }
}
</style>
