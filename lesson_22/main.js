"use strict";

// let a = 5;
//     b = a;

// b = b + 5;    

//     console.log(a);
//     console.log(b);


const numbers = {
    a: 1,
    b: 2,
    c: {
        x: 3,
        y: 4,
    }
};


function copy(mainObg) {
    let obgCopy = {};
    let key;
    for (key in mainObg) {
        obgCopy[key] = mainObg[key]
    }
    return (obgCopy)
}

const newNumbers = copy(numbers)

newNumbers.b = 5;
newNumbers["c"]["x"] = 10;
console.log(numbers)
console.log(newNumbers)