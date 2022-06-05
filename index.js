// js for hamburger menu and possible dark mode
// remember to use filter for images, so they get a bit darker and easier to look at.
// #121212 for black
// make a modal 

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  menu.classList.toggle("menu-open");
});