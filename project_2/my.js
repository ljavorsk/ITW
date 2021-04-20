const hamburger = document.querySelector(".hamburger");
const navigationMenu = document.querySelector(".nav-menu");
const navigationItem = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", mobileMenu);
navigationItem.forEach(i => i.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navigationMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navigationMenu.classList.remove("active");
}