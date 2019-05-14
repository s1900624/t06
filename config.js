'use strict'

// window.localStorage.setItem('testKey', 'testValue');
// window.localStorage.removeItem('testKey');
// alert (window.localStorage.getItem('testKey'))

// const aseta = document.getElementById('aseta');

function setLocalStorage() {
    /*window.localStorage.setItem('testKey', 'testValue');
    window.localStorage.setItem('testKey', 'testValue');
    window.localStorage.setItem('testKey', 'testValue');
    window.localStorage.setItem('testKey', 'testValue');*/
    const d = new Date(document.getElementById('date').value );
    alert (document.getElementById('date').value)
    return false;
}

document.getElementById('config-form').onsubmit = setLocalStorage;