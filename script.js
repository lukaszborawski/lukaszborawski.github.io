const burger = document.querySelector(".menu_button");
const menu = document.querySelector(".menu_list")
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("fas--show");
    iconX.classList.toggle("fas--show");
    menu.classList.toggle("menu_list--show");
})