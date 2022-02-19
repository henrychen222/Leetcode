/**
 * 02/17/22 evening
 * https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/
 */

const pr = console.log;

// Accepted --- 56ms
const maxDiff = (x) => {
    let a = (x + '').split(''), b = [...a], swapA, swapB;
    for (const c of a) {
        if (c != '9') {
            swapA = c;
            break;
        }
    }
    replaceXY(a, swapA, '9');
    if (b[0] == '1') {
        for (let i = 1; i < b.length; i++) {
            if (b[i] != '0' && b[i] != '1') {
                swapB = b[i];
                break;
            }
        }
        replaceXY(b, swapB, '0');
    } else {
        swapB = b[0];
        replaceXY(b, swapB, '1');
    }
    let max = a.join(""), min = b.join("");
    // pr(max, min);
    return max - min;
};

const replaceXY = (a, x, y) => {
    let n = a.length;
    for (let i = 0; i < n; i++) {
        if (a[i] == x) a[i] = y;
    }
};

const main = () => {
    let num = 555;
    let num2 = 9;
    let debug1 = 123459;
    let debug2 = 111;
    pr(maxDiff(num))
    pr(maxDiff(num2))
    pr(maxDiff(debug1)) // 820000;
    pr(maxDiff(debug2)) // 888
};

main()