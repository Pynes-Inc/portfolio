// hamburger menu and nav
const overlay = document.querySelector(".nav-ul");

function myOverlay() {
  document.querySelector(".hamburger").onclick = () =>
    overlay.classList.toggle("hidden");
}
let links = document.querySelectorAll(".nav-ul-li-link");

function myOverlay() {
  myOverlay(this);
}

links.forEach((link) => link.addEventListener("click", myOverlay));
