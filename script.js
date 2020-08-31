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

menuTop = document.getElementById('menu');

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset;

    if (scrollTop > lastScrollTop) {
        menuTop.style.top = '-45px';
    } else {
        menuTop.style.top = '0';
    }
    lastScrollTop = scrollTop;
});