const burger = document.querySelector(".menu_button");
const menu = document.querySelector(".menu_list")
const iconBurger = document.querySelector(".fa-bars");

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("fas--show");
    menu.classList.toggle("menu_list--show");
})

menu.addEventListener("click", function () {
    menu.classList.toggle("menu_list--show");
})