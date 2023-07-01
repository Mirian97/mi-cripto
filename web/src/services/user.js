import api from './api'

export const registerUser = async (body) =>
  await api.post('/user', {
    ...body
  })
