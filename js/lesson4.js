"use strict"

function getСomparison(a, b) {
    let numOne = a;
    let numTwo = b;

    if (numOne < numTwo) {
        let result = -1;
        console.log(`${result}`);
    } else if (numOne > numTwo) {
        let result = 1;
        console.log(`${result}`);
    } else if (numOne == numTwo) {
        let result = 0;
        console.log(`${result}`);
    };
};

function getFactorial(n) {
    let i = 0;
    let result = 1;
    let factorN = n;
    if (factorN > 0) {
        while (factorN > i) {

            result = result * (n - i);
            i++;

        };
        console.log(`${result}`);
    }
    else console.log(`Number >= 0`);
};







