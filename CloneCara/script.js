const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener("click", function () {
        navbar.classList.add("active");
    });
}

if (close) {
    close.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
}
