<script setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Logo from '../assets/logo.svg'
import CustomTitle from '../components/CustomTitle.vue'
import router from '../router'
import { useUserStore } from '../stores/user'

const { removeUser } = useUserStore()
const { user } = storeToRefs(useUserStore())
const navigateToProfile = () => router.push('/perfil')
const showProfileButton = computed(() => router.currentRoute.value.path !== '/perfil')
</script>

<template>
  <header class="header">
    <div class="header-content">
      <RouterLink class="d-flex logo" to="/cuenta">
        <img :src="Logo" alt="Logo" />
        <div class="d-flex">
          <CustomTitle title="Mi" textColor="#f8eaaf" /><CustomTitle title="Cripto" />
        </div>
      </RouterLink>
      <div class="d-flex align-center actions-buttons">
        <v-btn @click="navigateToProfile" v-if="showProfileButton" variant rounded>
          <v-avatar v-if="user?.avatar_url" :image="user.avatar_url" size="30" />
          <v-icon v-else icon="mdi-account-circle" size="30" />
        </v-btn>
        <v-btn @click="removeUser" variant="text" rounded>
          <v-icon icon="mdi-logout" size="28" />
        </v-btn>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  background-color: var(--primary-color);
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  position: sticky;
  top: 0;
  z-index: 2;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1410px;
  min-height: 120px;
  margin: auto;
  padding: 20px 32px;
}

.logo {
  text-decoration: none;
  color: var(--vt-c-white);
  gap: 4px;
  display: flex;
  align-items: center;

  img {
    width: 44px;
    max-width: 100%;
  }
}

.actions-buttons {
  button {
    padding: 0 !important;
  }
}

@media screen and (max-width: 768px) {
  .header-content {
    flex-direction: column;
    padding: 8px;
  }
}
</style>
