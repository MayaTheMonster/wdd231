const menuButton = document.querySelector("#nav-button");
const navigate = document.querySelector(".navygate");

menuButton.addEventListener("click", function(){
    navigate.classList.toggle("show");
    menuButton.classList.toggle("show");
});