function selectProject() {
} 

function toggleColor() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var headers = document.querySelectorAll(".section-title")
  headers.forEach((header) => {
    header.classList.toggle("section-header")
    header.classList.toggle("dark-section-header")
  })

  var navbarItems = document.querySelectorAll(".navbar-item")
  for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].classList.toggle("light-navbar-item")
    navbarItems[i].classList.toggle("dark-navbar-item")
  }

  var navbar = document.querySelector(".navbar")
  navbar.classList.toggle("light-navbar")
  navbar.classList.toggle("dark-navbar")
}