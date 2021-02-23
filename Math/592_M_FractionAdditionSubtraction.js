/**
 * 02/21/21 afternoon
 * https://leetcode.com/problems/fraction-addition-and-subtraction/
 */

const pr = console.log;

// Accepted --- 80ms 88.57%
const fractionAddition = (s) => {
    let a = [];
    let n = s.length;
    let start = 0;
    for (let i = 0; i < n; i++) {
        if (i == 0) continue;
        if (s[i] == '+' || s[i] == '-') {
            a.push(s.slice(start, i))
            start = i;
        }
    }
    a.push(s.slice(start));
    // pr(a);
    while (a.length > 1) {
        let first = a.shift();
        let second = a.shift();
        a.unshift(cal(first, second));
    }
    /* Accepted --- 84ms 74.29%
    while (a.length > 1) {
        let first = a.pop();
        let second = a.pop();
        a.push(cal(first, second));
    } */
    // pr(a);
    let res = a[0];
    let idx = res.indexOf('-');
    if (idx == -1) return res;
    return `-${res.slice(0, idx)}${res.slice(idx + 1)}`;
};

const cal = (x, y) => {
    let tmpx = findTopDown(x),
        tmpy = findTopDown(y);
    let topx = tmpx[0],
        downx = tmpx[1],
        topy = tmpy[0],
        downy = tmpy[1];
    let LCM = lcm(downx, downy);
    let sum = topx * (LCM / downx) + topy * (LCM / downy);
    let GCD = gcd(sum, LCM)
    return '' + sum / GCD + '/' + LCM / GCD;
};

const findTopDown = (s) => {
    let a = s.split('/');
    let top = Number(a[0]);
    let down = Number(a[1]);
    // pr(a[0], a[1], top, down)
    return [top, down];
};

const lcm = (a, b) => (a / gcd(a, b)) * b;
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

const main = () => {
    let s = "-1/2+1/2";
    let s2 = "-1/2+1/2+1/3";
    let s3 = "1/3-1/2";
    let s4 = "5/3+1/3";
    let s_debug1 = "4/5";
    pr(fractionAddition(s));
    pr(fractionAddition(s2));
    pr(fractionAddition(s3));
    pr(fractionAddition(s4));
    pr(fractionAddition(s_debug1));
};

main()

// pr(findTopDown('+52/30'), Number('+52'), Number('-52'));

// pr(lcm(4, 6), lcm(2, 6), lcm(3, 5), lcm(6, 8))

// pr(cal('+5/3', '+1/3'), cal('5/3', '+1/3'), cal('+5/3', '1/3'), cal('5/3', '1/3'))
// pr(cal('+1/3', '+1/4'), cal('-1/3', '+1/4'), cal('+1/3', '-1/4'))