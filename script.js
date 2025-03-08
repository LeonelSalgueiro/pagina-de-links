function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

   if (html.classList.contains('light')) {
     img.setAtribute('src', './assets/avatar.bg.light.jpg')
   } else {
     img.setAtribute('src', './assets/avatar.bg.png')
   }
}