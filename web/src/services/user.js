import api from './api'

export const registerUser = async (body) =>
  await api.post('/user', {
    ...body
  })

export const login = async (body) => {
  const { data } = await api.post('/login', {
    ...body
  })
  return data
}

export const getHeaders = (token) => {
  const Authorization = { headers: { authorization: `Bearer ${token}` } }
  return Authorization
}
