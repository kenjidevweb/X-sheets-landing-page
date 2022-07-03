const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  menu.classList.toggle("menu-open");
});

const animatedItems = document.querySelectorAll(".neon span");

function equalizeDelay() {
  animatedItems.forEach((item) => {
    item.setAttribute("id", "animation-phase-2");
  });
}

animatedItems[0].addEventListener("animationend", equalizeDelay);

const pageBody = document.querySelector("body");
const ctaBtn = document.querySelectorAll(".cta");
const closeBtn = document.querySelector(".close");
const popupModal = document.querySelector(".modal");
const submitted = document.querySelector(".form-submitted");
const preorderForm = document.querySelector(".preorder-form");

ctaBtn.forEach((button) => {
  button.addEventListener("click", () => {
    popupModal.classList.add("active");
    pageBody.classList.add("modal-open");
  });
});

closeBtn.addEventListener("click", () => {
  popupModal.classList.remove("active");
  submitted.classList.remove("active");
  pageBody.classList.remove("modal-open");
});

preorderForm.addEventListener("submit", (event) => {
  event.preventDefault(); /* This will stop the form from being submitted, so the user isnt redirected to another page */
  submitted.classList.add("active");
});
