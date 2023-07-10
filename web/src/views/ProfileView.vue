<script setup>
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import Button from '../components/Button.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import { updateUser } from '../services/user'
import { useUserStore } from '../stores/user'
import { deleteEmptyProperties } from '../utils/functions'
import { passwords, togglePassword } from '../utils/password'
import { descriptionRules, emailRules, nameRules, passwordRules } from '../utils/rules'
import { messageError, messageSuccess } from '../utils/toast'
import { validateFieldRequired, validateMatchingPasswords } from '../utils/validations'

const { setUser } = useUserStore()
const { user, token } = storeToRefs(useUserStore())
const form = ref(null)
const avatarImage = ref('')
const profileForm = ref({
  name: '',
  email: '',
  avatar: '',
  description: '',
  password: '',
  repeatPassword: ''
})
const repeatPasswordRules = computed(() => {
  return [
    validateFieldRequired,
    (value) => validateMatchingPasswords(value, profileForm.value.password)
  ]
})

const onChangeAvatar = (event) => {
  const file = event.target.files[0]
  if (!file) return
  profileForm.value.avatar = file
  avatarImage.value = URL.createObjectURL(file)
}

const validate = async () => {
  const { valid } = await form.value.validate()
  if (!valid) return
  await onSubmit()
}

const onSubmit = async () => {
  try {
    const { repeatPassword, ...restProfileForm } = profileForm.value
    const submitValues = deleteEmptyProperties(restProfileForm)
    const result = await updateUser(token.value, submitValues)
    setUser(result)
    messageSuccess('Usuario editado')
  } catch (error) {
    messageError(error.response?.data?.message)
  }
}

onMounted(() => {
  if (user.value) {
    profileForm.value.name = user.value.name
    profileForm.value.email = user.value.email
    profileForm.value.description = user.value.description || ''
    avatarImage.value = user.value.avatar_url || ''
  }
})
</script>

<template>
  <AuthLayout>
    <template #content>
      <div class="d-flex align-center mt-6 mb-2">
        <v-tooltip text="Retornar" location="top">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-arrow-left-circle-outline"
              variant="text"
              size="large"
              class="return-button"
              @click="$router.back()"
            />
          </template>
        </v-tooltip>
        <h4 class="text-h5 font-weight-bold text-left ml-2">Edite su perfil</h4>
      </div>
      <v-form class="profile-form" ref="form" @submit.prevent="validate">
        <div class="content-form">
          <div class="column-form">
            <label class="file-input mb-3">
              <input type="file" v-on:change="onChangeAvatar" accept="image/*" />
              <v-avatar v-if="avatarImage" :image="avatarImage" size="112" class="form-avatar" />
              <v-icon v-else icon="mdi-account-circle" />
            </label>
            <v-textarea
              label="Descripción"
              variant="solo-inverted"
              class="flex-grow-1 flex-shrink-0"
              v-model.trim="profileForm.description"
              :rules="descriptionRules"
            />
          </div>
          <div class="column-form">
            <v-text-field
              label="Nombre *"
              variant="solo-inverted"
              required
              maxLength="50"
              v-model.trim="profileForm.name"
              :rules="nameRules"
            />
            <v-text-field
              label="E-mail *"
              variant="solo-inverted"
              required
              maxLength="50"
              v-model.trim="profileForm.email"
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
              v-model.trim="profileForm.password"
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
              v-model.trim="profileForm.repeatPassword"
              :rules="repeatPasswordRules"
            />
          </div>
        </div>
        <div class="form-button">
          <Button type="submit"><template #button-text>Editar</template></Button>
        </div>
      </v-form>
    </template>
  </AuthLayout>
</template>

<style>
.mdi-arrow-left-circle-outline {
  font-size: 36px;
}

.mdi-account-circle {
  font-size: 130px;
}

.profile-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.content-form {
  display: flex;
  gap: 20px;
}

.column-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.file-input {
  max-width: 120px;
}

.file-input .v-icon,
.file-input .v-avatar {
  cursor: pointer;
}

.file-input input {
  display: none;
}

.form-avatar {
  border: 6px solid var(--vt-c-white);
}

.form-button {
  margin: 4px auto 0;
  width: 400px;
}

@media screen and (max-width: 768px) {
  .content-form {
    flex-direction: column;
    gap: 0;
  }

  .form-button {
    width: 100%;
  }
}
</style>
