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
    item.style.animationDelay = "1s";
    item.style.color = "#fff";
    item.style.textShadow =
      "0 0 10px #43b7ff, 0 0 20px #43b7ff, 0 0 40px #43b7ff, 0 0 50px #43b7ff, 0 0 60px #43b7ff";
    item.style.animation = "pulsating 3s alternate infinite ease-in";
  });
}
didAnimationEnd.addEventListener("animationend", equalizeDelay);

const ctaButton = document.querySelectorAll(".cta");
const closeButton = document.querySelectorAll(".close");
const popupModal = document.querySelectorAll(".modal");

ctaButton.forEach((button) => {
  button.addEventListener("click", () => {
    popupModal.classList.toggle("active");
  });
});
