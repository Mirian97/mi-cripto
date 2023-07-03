<script setup>
import Button from '../components/Button.vue'
import CustomLink from '../components/CustomLink.vue'
import MainLayout from '../layouts/MainLayout.vue'
import { registerUser } from '../services/user'
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
      const submitValues = { name: this.name, email: this.email }
      try {
        await registerUser(submitValues)
        this.resetValidation()
        this.reset()
      } catch (error) {
        messageError(error.response.data.message)
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
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
