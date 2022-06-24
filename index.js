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
/*
const activeMenu = window.location.pathname;
const menuItems = document.querySelectorAll(".menu__text").forEach((item) => {
  if (item.href.includes(`${activeMenu}`)) {
    item.classList.add("active-menu");
  }
});
*/
const didAnimationEnd = document.querySelector(".neon span");
const animatedItems = document.querySelectorAll(".neon span");

didAnimationEnd.addEventListener("animationend", equalizeDelay); // it works, just needed to convert it into a function, also no need to use equalizeDelay"()" here, as it already executes the function

function equalizeDelay() {
  animatedItems.forEach((item) => {
    item.style.animationDelay = "1s";
    item.style.color = "#fff";
    item.style.textShadow =
      "0 0 10px #43b7ff, 0 0 20px #43b7ff, 0 0 40px #43b7ff, 0 0 50px #43b7ff, 0 0 60px #43b7ff";
    item.style.animation = "pulsating 3s alternate infinite ease-in";
  });
}
