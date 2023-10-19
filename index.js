
const countDownDate = new Date("2023-11-21T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countDownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.querySelector(".timer").innerHTML = "EXPIRED";
    }
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
