export const deleteEmptyProperties = (obj) => {
  for (let prop in obj) {
    if (obj[prop] === '' || obj[prop] === null) {
      delete obj[prop]
    }
  }
  return obj
}

export const filterUntrueItems = (array) => (array = array.filter((item) => item !== true))
