// hamburger menu and nav
const overlay = document.querySelector(".nav-ul");

document.querySelector(".hamburger").onclick = () =>
  overlay.classList.toggle("hidden");

document.querySelector(".nav-ul-li-link").onclick = () =>
  overlay.classList.toggle("hidden");
