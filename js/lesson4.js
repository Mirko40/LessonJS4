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
function getNumber(a, b, c) {
    a = String(a);
    b = String(b);
    c = String(c);
    return Number(a + b + c)
};
function getSquare(a, b) {
    if (b == undefined) {
        return a * a;
    } else return a * b
};
function isPerfect(n) {
    let a = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            a += i;
        }
    }
    if (a === n && a !== 0) {
        return true;
    }
    else {
        return false;
    }
};
function getPerfect(a, b) {
    let res = ""
    while (a <= b) {
        if (isPerfect(a)) {
            res += a + " "
        }
        a++
    }
    return res
};

function getTime(a, b, c) {
    let h = a;
    let m = b;
    let s = c;
    if (a == undefined) {
        h = "00";
    }
    if (b == undefined) {
        m = "00";
    }
    if (c == undefined) {
        s = "00";
    }
    return h + ":" + m + ":" + s;
}

let a = getTime(5, 25)
alert(a)