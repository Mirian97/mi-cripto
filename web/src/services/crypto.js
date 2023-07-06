import api from './api'
import { getHeaders } from './user'

export const listCrypto = async (token, nameFilter) => {
  const { data } = await api.get(`/crypto?name=${nameFilter}`, { ...getHeaders(token) })
  return data
}
