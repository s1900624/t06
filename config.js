'use strict'

// console.log(window.localStorage);

if (window.localStorage.getItem('user') !== null) {
    const obj = JSON.parse(window.localStorage.getItem('user'));
    document.getElementById('title').value = obj.Title;
    document.getElementById('date').value = obj.Day;
    document.getElementById('time').value = obj.Time;
    document.getElementById('message').value = obj.Message;
    console.log(obj);
}

function setLocalStorage() {
    const futureDate = new Date(document.getElementById('date').value);
    const times = document.getElementById('time').value.split(':');
    futureDate.setHours(times[0], times[1], 0, 0);

    const obj = {};
    obj.Title = document.getElementById('title').value;
    obj.Day = document.getElementById('date').value;
    obj.Time = document.getElementById('time').value;
    obj.Message = document.getElementById('message').value;
    window.localStorage.setItem('user', JSON.stringify(obj));
    window.location = "index.html";
    return false;
}

document.getElementById('config-form').onsubmit = setLocalStorage;