/**
 * 07/28/21 night
 * https://leetcode.com/problems/beautiful-array/
 */

// Accepted --- 80ms 100%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/12287146.html
 * https://leetcode.com/problems/beautiful-array/discuss/186679/Odd-%2B-Even-Pattern-O(N)
 * https://leetcode.com/contest/weekly-contest-108/ranking
 */
const beautifulArray = (n) => {
    let res = [1];
    while (res.length < n) {
        let tmp = [];
        for (const x of res) {
            if (x * 2 - 1 <= n) tmp.push(x * 2 - 1);
        }
        for (const x of res) {
            if (x * 2 <= n) tmp.push(x * 2);
        }
        res = tmp;
    }
    pr(test(res));
    return res;
};

// WA
const beautifulArray1 = (n) => {
    let res = [];
    let t = n / 3 >> 0;
    let x, y;
    for (x = 1, y = n; x <= t * 2; x += 2, y--) {
        res.push(x);
        res.push(y);
        res.push(x + 1);
    }
    pr(res, res.length, test(res));
    pr(x, y)
    for (let i = x; i <= y; i++) {
        i & 1 ? res.unshift(i) : res.push(i);
    }
    pr(test(res));
    return res;
};

const test = (a) => {
    let n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = i + 1; k < j; k++) {
                if (a[k] * 2 == a[i] + a[j]) {
                    pr(a[i], a[k], a[j]);
                    return false;
                }
            }
        }
    }
    return true;
};

const pr = console.log;
const main = () => {
    let n = 4;
    let n2 = 5;
    let debug1 = 100;
    pr(beautifulArray(n))
    pr(beautifulArray(n2))
    pr(beautifulArray(debug1))
};

main()