import { useToast } from 'vue-toastification'

const toast = useToast()
export const messageSuccess = (message) => toast.success(message)
export const messageError = (message = 'Error interno') => toast.error(message)
