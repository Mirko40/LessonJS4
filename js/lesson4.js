"use strict"

function getСomparison(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else return 0;
};

function getFactorial(n) {
    let i = 0;
    let result = 1;
    if (n >= 0) {
        while (n > i) {
            result = result * (n - i);
            i++;
        };
        return result;
    } else console.log(`Number < 0`);
};









