import api from './api'

export const registerUser = async (body) =>
  await api.post('/user', {
    ...body
  })

export async function login(body) {
  const { data } = await api.post('/login', {
    ...body
  })
  return data
}
