const burger = document.querySelector(".menu_button");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
})