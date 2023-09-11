let lightMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark')

  lightMode = !lightMode
})