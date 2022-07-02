const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  menu.classList.toggle("menu-open");
});

const didAnimationEnd = document.querySelector(".neon span");
const animatedItems = document.querySelectorAll(".neon span");

function equalizeDelay() {
  animatedItems.forEach((item) => {
    item.setAttribute("id", "animation-phase-2");
  });
}
didAnimationEnd.addEventListener("animationend", equalizeDelay);

const ctaBtn = document.querySelectorAll(".cta");
const closeBtn = document.querySelector(".close");
const popupModal = document.querySelector(".modal");
const submitted = document.querySelector(".form-submitted");
const preorderForm = document.querySelector(".preorder-form");

ctaBtn.forEach((button) => {
  button.addEventListener("click", () => {
    popupModal.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  popupModal.classList.remove("active");
  submitted.classList.remove("active");
});

preorderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitted.classList.add("active");
});
