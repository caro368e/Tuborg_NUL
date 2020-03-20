window.addEventListener("load", navShow);


function navShow() {
    console.log("navShow");
    document.querySelector(".burger").addEventListener("click", burgerClick);


    document.querySelector("#logo").classList.add("fade_in");
    document.querySelector(".nav_links").classList.add("fade_in");
    document.querySelector(".lead").classList.add("fade_in");
    document.querySelector("h1").classList.add("fade_in");
}

function burgerClick() {
    console.log("burgerClick");
    document.querySelector(".nav_links").classList.toggle("nav-active");
    document.querySelector(".nav_links").classList.toggle("drop");
}
