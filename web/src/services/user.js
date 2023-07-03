import api from './api'

export const registerUser = async (body) =>
  await api.post('/user', {
    ...body
  })

export async function login(email, password) {
  const { data } = await api.post('/login', { email, password })
  return data
}
