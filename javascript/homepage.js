// hamburger menu and nav
const overlay = document.querySelector(".nav-ul");

document.querySelector(".hamburger").onclick = () =>
  overlay.classList.toggle("hidden");

function hideLink() {
  console.log(this);
}
let links = document.querySelectorAll(".nav-ul-li-link");
links.forEach((link) => link.addEventListener("click", hideLink));
