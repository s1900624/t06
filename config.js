'use strict'

// window.localStorage.setItem('testKey', 'testValue');
// window.localStorage.removeItem('testKey');
// alert (window.localStorage.getItem('testKey'))

// const aseta = document.getElementById('aseta');
console.log(window.localStorage);
const title = window.localStorage.getItem('title');
const futuretime = window.localStorage.getItem('futuretime');
const message = window.localStorage.getItem('message');

function setLocalStorage() {
    const futureDate = new Date(document.getElementById('date').value);
    const times = document.getElementById('time').value.split(':');
    futureDate.setHours(times[0], times[1], 0, 0);
    const futureTime = futureDate.getTime();
    const currentTime = Date.now();

    window.localStorage.setItem('title', document.getElementById('title').value);
    window.localStorage.setItem('futuretime', futureTime);
    window.localStorage.setItem('message', document.getElementById('message').value);
    // if (title !== null && futuretime !== null && message !== null) {
        window.location = "index.html";
    // }

    console.log(window.localStorage);
    return false;
}

document.getElementById('config-form').onsubmit = setLocalStorage;