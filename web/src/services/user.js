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

export const getFormDataHeaders = (token) => {
  const headers = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  }
  return headers
}

export const updateUser = async (token, body) => {
  const { data } = await api.put('/user', { ...body }, { ...getFormDataHeaders(token) })
  return data
}
