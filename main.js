"use strict";

function first() {
    setTimeout(function () {
        console.log('я должна выполниться первой');
    }, 500);
}

function second() {
    console.log('А я второй');
}

// first();
// second();

function learnJS(lang, callback) {
    console.log(`Я учу язык программирования ${lang}`);
    callback()
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JS', done)