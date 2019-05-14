var timerJust = setTimeout(timer, 1000, 1000);

function timer() {
    const currentTime = new Date();
    const days = currentTime.getDate() < 10 ? `0${currentTime.getDate()}` : currentTime.getDate();
    const hours = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : currentTime.getHours();
    const minutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();
    const seconds = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();

    const daysInput = document.getElementsByClassName("days");
    const hoursInput = document.getElementsByClassName("hours");
    const minutesInput = document.getElementsByClassName("minutes");
    const secondsInput = document.getElementsByClassName("seconds");

    daysInput[0].childNodes[1].innerText = days;
    hoursInput[0].childNodes[1].innerText = hours;
    minutesInput[0].childNodes[1].innerText = minutes;
    secondsInput[0].childNodes[1].innerText = seconds;

    const obj = JSON.parse(window.localStorage.getItem('user'))

    const futureDate = new Date(obj.Day);
    const times = obj.Time.split(':');
    futureDate.setHours(times[0], times[1], 0, 0);

    const futureTimeIndex = futureDate.getTime();
    const currentTimeIndex = currentTime.getTime();

    const diffrentTime = futureTimeIndex - currentTimeIndex;
    if (diffrentTime <= 0) {
        document.getElementById("aikaa").innerText = obj.Message;
        document.getElementsByClassName("time-display")[0].style.display = "none";
        clearTimeout(timerJust);
    } else {
        timerJust = setTimeout(timer, 1000, 1000);
    }
}