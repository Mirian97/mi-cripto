import api from './api'
import { getHeaders } from './user'

export const listCrypto = async (token) => {
  const { data } = await api.get('/crypto', { ...getHeaders(token) })
  return data
}
