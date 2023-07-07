<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'
const { user } = storeToRefs(useUserStore())
</script>

<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" icon="mdi-account-circle" size="large" variant="text" />
    </template>
    <v-card max-width="280">
      <div class="semicircle">
        <v-tooltip text="Editar perfil" location="top">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-circle-edit-outline"
              variant="text"
              size="small"
              class="btn-edit"
            />
          </template>
        </v-tooltip>
      </div>
      <v-avatar v-if="user.avatar_url" :image="user.avatar_url" size="60" />
      <v-icon v-else icon="mdi-account-circle" />
      <div class="text-center pt-2 px-4">
        <h6 class="text-subtitle-2 font-weight-bold">{{ user.name }}</h6>
        <h6 class="text-subtitle-2">{{ user.email }}</h6>
        <div class="mt-3" v-if="user.description">
          <v-divider :thickness="3" class="mb-2" />
          <p class="text-subtitle-2 font-weight-bold mb-1">Descripción:</p>
          <p class="text-subtitle-2">{{ user.description }}</p>
        </div>
      </div>
    </v-card>
  </v-menu>
</template>

<style scoped>
.v-menu .v-overlay__content .v-card {
  background-color: var(--background-color);
  border: 3px solid var(--background-color);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  padding: 0 0 16px;
}

.semicircle {
  background-color: var(--primary-color);
  min-height: 66px;
  width: 100%;
  position: relative;
}

.semicircle::before {
  position: absolute;
  content: '';
  left: 50%;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: inherit;
  transform: translateX(-50%) translateY(50%);
  bottom: 0px;
}

.btn-edit {
  position: absolute;
  bottom: -44px;
  right: 4px;
}

.mdi-account-circle {
  font-size: 60px;
  margin-top: -28px;
}
</style>
