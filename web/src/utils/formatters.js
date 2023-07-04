export const formatMoney = (value) => {
  const formattedValue = Number(value).toFixed(2)
  return `$ ${formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}
