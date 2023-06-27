const { getCryptos } = require('../services/crypto')
const { internalServerError } = require('../utils/requestMessages')

const listCryptos = async (req, res) => {
  const { name } = req.query
  try {
    const cryptos = await getCryptos()
    if (name) {
      const filteredCryptos = cryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(name.toLowerCase())
      )
      return res.status(200).json(filteredCryptos)
    }
    return res.status(200).json(cryptos)
  } catch (error) {
    return res.status(500).json({ message: internalServerError })
  }
}

module.exports = {
  listCryptos
}
