const axios = require('axios')

const api = axios.create({
  baseURL: process.env.COINRANKING_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': process.env.COINRANKING_API_KEY,
    'X-RapidAPI-Host': process.env.COINRANKING_API_HOST
  }
})

const getCryptos = async () => {
  const params = {
    referenceCurrencyUuid: process.env.COINRANKING_REF_CURRENCY,
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '10',
    offset: '0'
  }
  const { data } = await api.get('/coins', { params })
  return data.data.coins
}

module.exports = {
  api,
  getCryptos
}
