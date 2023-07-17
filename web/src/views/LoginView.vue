<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue'
import CustomLink from '../components/CustomLink.vue'
import MainLayout from '../layouts/MainLayout.vue'
import router from '../router'
import { login } from '../services/user'
import { useUserStore } from '../stores/user'
import { passwords, togglePassword } from '../utils/password'
import { emailRules, passwordRules } from '../utils/rules'
import { messageError } from '../utils/toast'

const { setUser, setToken } = useUserStore()
const form = ref(null)
const loginForm = ref({
  email: '',
  password: ''
})
const validate = async () => {
  const { valid } = await form.value.validate()
  if (!valid) return
  await onSubmit()
}
const onSubmit = async () => {
  try {
    const data = await login(loginForm.value)
    const { token, ...restData } = data
    setUser(restData)
    setToken(token)
    router.push('/cuenta')
    form.value.reset()
  } catch (error) {
    messageError(error.response?.data?.message)
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
          v-model.trim="loginForm.email"
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
          v-model.trim="loginForm.password"
          :rules="passwordRules"
        />
        <Button type="submit"><template #button-text>Ingresar</template></Button>
        <CustomLink helperText="¿Aún no tienes cuenta?" linkText="Clic aquí." to="/inscribir" />
      </v-form>
    </template>
  </MainLayout>
</template>
