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

// const menuNav = document.querySelector(".menu");
// const menuLink = document.querySelector(".menu_link");

// document.addEventListener("scroll", function () {
//     if (window.scrollY > 0) {
//         menuNav.classList.add("menuScroll");
//         menuLink.classList.add("menuScroll");
//     } else {
//         menuNav.classList.remove("menuScroll");
//         menuLink.classList.remove("menuScroll");
//     }
// })