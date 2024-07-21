// Active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};

// Nav hide

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    });
});

// Counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id); // Lấy phần tử HTML theo ID
        let current = start; // Khởi tạo giá trị bắt đầu của bộ đếm
        let range = end - start; // Tính toán phạm vi từ giá trị bắt đầu đến giá trị kết thúc
        let increment = end > start ? 1 : -1; // Xác định bước tăng hoặc giảm
        let stepTime = Math.abs(duration / range); // Tính toán thời gian mỗi bước
        let startTime = null; // Biến để lưu trữ thời gian bắt đầu

        function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp; // Gán thời gian bắt đầu nếu chưa có
            let progress = timestamp - startTime; // Tính toán thời gian đã trôi qua

            let steps = Math.floor(progress / stepTime); // Tính số bước dựa trên thời gian đã trôi qua
            current = start + steps * increment; // Tính giá trị hiện tại của bộ đếm
            console.log(current);

            if (
                (increment > 0 && current >= end) ||
                (increment < 0 && current <= end)
            ) {
                current = end; // Đảm bảo giá trị hiện tại không vượt quá giá trị kết thúc
            }

            obj.textContent = current; // Cập nhật giá trị bộ đếm lên phần tử HTML

            if (current !== end) {
                requestAnimationFrame(updateCounter); // Tiếp tục cập nhật nếu chưa đạt giá trị kết thúc
            }
        }

        requestAnimationFrame(updateCounter); // Bắt đầu quá trình cập nhật
    }

    counter("count1", 0, 1287, 3000);
    counter("count2", 0, 5787, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});
