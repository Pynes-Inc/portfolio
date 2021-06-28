// hamburger menu and nav
const overlay = document.querySelector(".nav-ul");

document.querySelector(".hamburger").onclick = () =>
  overlay.classList.toggle("hidden");

function hideLink() {
  overlay.classList.toggle("hidden");
}
let links = document.querySelectorAll(".nav-ul-li-link");
links.forEach((link) => link.addEventListener("click", hideLink));

//under construction alert

function excuseMyMess() {
  alert("Under Construction - Excuse My Mess");
}

let handleExcuseMyMess = document.querySelectorAll(".project");
handleExcuseMyMess.forEach((handleExcuseMyMess) =>
  handleExcuseMyMess.addEventListener("click", excuseMyMess)
);
