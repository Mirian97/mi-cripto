<script setup>
import Button from '../components/Button.vue'
import CustomLink from '../components/CustomLink.vue'
import MainLayout from '../layouts/MainLayout.vue'
import { login } from '../services/user'
import { useUserStore } from '../stores/user'
import { passwords, togglePassword } from '../utils/password'
import { messageError } from '../utils/toast'
import {
  validateEmail,
  validateFieldRequired,
  validatePasswordMinLength
} from '../utils/validations'
</script>

<script>
export default {
  data: () => ({
    userStore: useUserStore(),
    email: '',
    password: '',
    emailRules: [validateFieldRequired, validateEmail],
    passwordRules: [validateFieldRequired, validatePasswordMinLength]
  }),
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        await this.submit()
      }
    },
    async submit() {
      const submitValues = { email: this.email, password: this.password }
      try {
        const { token, ...restResult } = await login(submitValues)
        this.reset()
        this.userStore.setUser(restResult)
        this.userStore.setToken(token)
      } catch (error) {
        messageError(error.response.data.message)
      }
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>

<template>
  <MainLayout title="Login" subtitle="Ingrese a su cuenta para accesar MiCripto">
    <template #form>
      <v-form class="main-form" ref="form" @submit.prevent="validate">
        <v-text-field
          label="E-mail *"
          variant="solo-inverted"
          required
          maxLength="50"
          v-model.trim="email"
          :rules="emailRules"
        />
        <v-text-field
          label="Contraseña *"
          variant="solo-inverted"
          required
          @click:append-inner="togglePassword('showPassword')"
          :type="passwords.showPassword ? 'text' : 'password'"
          :append-inner-icon="passwords.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          maxLength="50"
          v-model.trim="password"
          :rules="passwordRules"
        />
        <Button type="submit"><template #button-text>Ingresar</template></Button>
        <CustomLink helperText="¿Aún no tienes cuenta?" linkText="Clic aquí." to="/inscribir" />
      </v-form>
    </template>
  </MainLayout>
</template>
