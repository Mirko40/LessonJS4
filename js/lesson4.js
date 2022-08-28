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
    if (!a) {
        a = "00";
    }
    if (!b) {
        b = "00";
    }
    if (!c) {
        c = "00";
    }
    return a + ":" + b + ":" + c;
}

function getSecond(a = 0, b = 0, c = 0) {

    return a * 3600 + b * 60 + c;
}
function showTime(a) {
    let h = Math.trunc(a / 3600);
    let m = Math.trunc((a - h * 3600) / 60);
    let s = a - h * 3600 - m * 60;
    return h + ":" + m + ":" + s;
}

function getDifferentDate(a, b, c, d, e, f) {
    let res1 = getSecond(a, b, c)
    let res2 = getSecond(d, e, f)
    return showTime(res2 - res1)

}

let a = getDifferentDate()
console.log(a)