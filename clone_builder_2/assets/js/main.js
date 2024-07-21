//
document.addEventListener("DOMContentLoaded", function () {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        let current = start;
        let inscrease = end > start ? 1 : -1;
        let stepTime = Math.abs(duration / (end - start));
        let startTime = null;

        function updateCounter(timestamp) {
            if (!startTime) {
                startTime = timestamp;
            }

            let steps = Math.floor((timestamp - startTime) / stepTime);

            current = start + steps * inscrease;

            if ((inscrease > 0 && current >= end) || (inscrease < 0 && current <= end)) {
                current = end;
            }

            obj.textContent = current;
            if (current != end) {
                requestAnimationFrame(updateCounter);
            }
        }
        requestAnimationFrame(updateCounter);
    }

    counter("counter1", 0, 8650, 3000);
    counter("counter2", 0, 2500, 2000);
    counter("counter3", 0, 1500, 1000);
    counter("counter4", 0, 9000, 4000);
});
