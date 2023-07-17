<script setup>
import { computed, ref } from 'vue'
import Button from '../components/Button.vue'
import CustomLink from '../components/CustomLink.vue'
import MainLayout from '../layouts/MainLayout.vue'
import { registerUser } from '../services/user'
import { navigateToLogin } from '../utils/navigate'
import { passwords, togglePassword } from '../utils/password'
import { emailRules, nameRules, passwordRules } from '../utils/rules'
import { messageError, messageSuccess } from '../utils/toast'
import { validateFieldRequired, validateMatchingPasswords } from '../utils/validations'

const form = ref(null)
const signUpForm = ref({
  name: '',
  email: '',
  password: '',
  repeatPassword: ''
})
const repeatPasswordRules = computed(() => {
  return [
    validateFieldRequired,
    (value) => validateMatchingPasswords(value, signUpForm.value.password)
  ]
})
const validate = async () => {
  const { valid } = await form.value.validate()
  if (!valid) return
  await onSubmit()
}
const onSubmit = async () => {
  const { repeatPassword, ...restSignUpForm } = signUpForm.value
  try {
    await registerUser(restSignUpForm)
    messageSuccess('Usuario registrado')
    form.value.reset()
    navigateToLogin()
  } catch (error) {
    messageError(error.response?.data?.message)
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
          v-model.trim="signUpForm.name"
          :rules="nameRules"
        />
        <v-text-field
          label="E-mail *"
          variant="solo-inverted"
          required
          maxLength="50"
          v-model.trim="signUpForm.email"
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
          v-model.trim="signUpForm.password"
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
          v-model.trim="signUpForm.repeatPassword"
          :rules="repeatPasswordRules"
        />
        <Button type="submit"><template #button-text>Crear</template></Button>
        <CustomLink helperText="¿Ya tienes una cuenta?" linkText="Clic aquí." to="/" />
      </v-form>
    </template>
  </MainLayout>
</template>
