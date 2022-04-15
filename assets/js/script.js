function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time: " + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

onclick = function () {
    var sixtySeconds = 60,
        display = document.querySelector('#timer');
    startTimer(sixtySeconds, display);
};