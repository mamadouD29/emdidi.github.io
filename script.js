let hamburgerBtn = document.getElementsByClassName("bun")[0];

function displayNav(event) {
    // event.preventDefualt();
    document.getElementsByClassName("nav-bar")[0].classList.toggle("active");
    document.getElementsByClassName("bun-top")[0].classList.toggle("active");
    document.getElementsByClassName("bun-bottom")[0].classList.toggle("active");
}

// to fix the nav bar
const mediaQuery = window.matchMedia("(min-width: 720px)");

function checkMediaQuery() {
    if (mediaQuery.matches) {
        document.getElementsByClassName("nav-bar")[0].classList.remove("active");
        document.getElementsByClassName("bun-top")[0].classList.remove("active");
        document.getElementsByClassName("bun-bottom")[0].classList.remove("active");

    }

}

window.addEventListener("resize", checkMediaQuery);
hamburgerBtn.addEventListener("click", displayNav);
