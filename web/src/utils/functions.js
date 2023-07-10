export function deleteEmptyProperties(obj) {
  for (let prop in obj) {
    if (obj[prop] === '' || obj[prop] === null) {
      delete obj[prop]
    }
  }
  return obj
}
