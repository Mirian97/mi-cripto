<script setup>
import Button from '../components/Button.vue'
import CustomLink from '../components/CustomLink.vue'
import MainLayout from '../layouts/MainLayout.vue'
import { registerUser } from '../services/user'
import { passwords, togglePassword } from '../utils/password'
import { messageError, messageSuccess } from '../utils/toast'
import {
  validateEmail,
  validateFieldRequired,
  validateMatchingPasswords,
  validatePasswordMinLength
} from '../utils/validations'
</script>

<script>
export default {
  computed: {
    repeatPasswordRules() {
      return [validateFieldRequired, (value) => validateMatchingPasswords(value, this.password)]
    }
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    nameRules: [validateFieldRequired],
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
      const submitValues = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      try {
        await registerUser(submitValues)
        messageSuccess('Usuario registrado')
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
  <MainLayout title="Inscribir" subtitle="Crea tu cuenta personal para disfrutar de MiCripto">
    <template #form>
      <v-form class="main-form" ref="form" @submit.prevent="validate">
        <v-text-field
          label="Nombre *"
          variant="solo-inverted"
          required
          maxLength="50"
          v-model.trim="name"
          :rules="nameRules"
        />
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
        <v-text-field
          label="Repita la contraseña *"
          variant="solo-inverted"
          required
          @click:append-inner="togglePassword('showRepeatPassword')"
          :type="passwords.showRepeatPassword ? 'text' : 'password'"
          :append-inner-icon="passwords.showRepeatPassword ? 'mdi-eye' : 'mdi-eye-off'"
          maxLength="50"
          v-model.trim="repeatPassword"
          :rules="repeatPasswordRules"
        />
        <Button type="submit"><template #button-text>Crear</template></Button>
        <CustomLink helperText="¿Ya tienes una cuenta?" linkText="Clic aquí." to="/" />
      </v-form>
    </template>
  </MainLayout>
</template>
