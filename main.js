var timerJust = setTimeout(timer, 1000, 1000);

const daysInput = document.getElementsByClassName("days");
const hoursInput = document.getElementsByClassName("hours");
const minutesInput = document.getElementsByClassName("minutes");
const secondsInput = document.getElementsByClassName("seconds");

function timer() {
    const currentTime = new Date();
    const obj = JSON.parse(window.localStorage.getItem('user'))
    if (obj !== null) {
        const futureDate = new Date(obj.Day);
        const times = obj.Time.split(':');
        futureDate.setHours(times[0], times[1], 0, 0);

        const futureTimeIndex = futureDate.getTime();
        const currentTimeIndex = currentTime.getTime();

        const diffrentTime = futureTimeIndex - currentTimeIndex;

        if (diffrentTime <= 0) {
            document.getElementById("aikaa").innerText = obj.Message;
            document.getElementsByClassName("time-display")[0].style.display = "none";
            window.localStorage.clear();
            clearTimeout(timerJust);
        } else {
            getCountdown(diffrentTime);
            timerJust = setTimeout(timer, 1000, 1000);
        }
    } else {
        window.location = "config.html";
    }
}


function getCountdown(secondsLeft){
    const currentTime = new Date();

    secondsLeft = secondsLeft / 1000;

    const days = pad( parseInt(secondsLeft / 86400) );
    secondsLeft = secondsLeft % 86400;

    const hours = pad( parseInt(secondsLeft / 3600) );
    secondsLeft = secondsLeft % 3600;

    const minutes = pad( parseInt(secondsLeft / 60) );
    const seconds = pad( parseInt( secondsLeft % 60 ) );

    daysInput[0].childNodes[1].innerText = days;
    hoursInput[0].childNodes[1].innerText = hours;
    minutesInput[0].childNodes[1].innerText = minutes;
    secondsInput[0].childNodes[1].innerText = seconds;
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}