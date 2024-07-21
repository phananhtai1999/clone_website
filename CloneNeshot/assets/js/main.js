function navMenu() {
    let navBar = document.querySelector(".navbar-sticky");
    let scrollTopButton = document.querySelector("#scrollUp");

    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 120) {
            navBar.classList.add("navbar-sticky-moved-up");
        } else {
            navBar.classList.remove("navbar-sticky-moved-up");
        }

        // apply transition
        if (scroll >= 250) {
            navBar.classList.add("navbar-sticky-transitioned");
            scrollTopButton.classList.add("scrollActive");
        } else {
            navBar.classList.remove("navbar-sticky-transitioned");
            scrollTopButton.classList.remove("scrollActive");
        }

        // Sticky On
        if (scroll >= 500) {
            navBar.classList.add("navbar-sticky-on");
        } else {
            navBar.classList.remove("navbar-sticky-on");
        }
    };
}
navMenu();

// Counter

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(duration / range);
        let startTime = null;

        function updateCounter(timestamp) {
            if (!startTime) {
                startTime = timestamp;
            }
            let progress = timestamp - startTime;

            let steps = Math.floor(progress / stepTime);
            current = start + steps * increment;

            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
            }

            obj.textContent = current;

            if (current != end) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }

    counter("count1", 0, 10, 3000);
    counter("count2", 0, 20, 2500);
    counter("count3", 0, 30, 3000);
    counter("count4", 0, 10, 3000);
});

//
var swiper = new Swiper(".swiper-container.app-screen", {
    effect: "coverflow",
    loop: true,
    autoplaySpeed: 3000,
    centeredSlides: true,
    slidesPerView: "auto",
    paginationClickable: true,
    autoload: {
        delay: 5000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach((a) => {
    a.addEventListener("click", () => {
        navCollapse.classList.remove("show");
    });
});
