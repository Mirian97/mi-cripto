const toggleScroll = (showModal) => {
  const html = document.querySelector('html')
  html.style.overflow = showModal ? 'hidden' : 'auto'
}

export default toggleScroll
