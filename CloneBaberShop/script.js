var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "imgs/close.png";
    } else {
        sideNav.style.right = "-250px";
        menu.src = "imgs/menu.png";
    }
};
