/*
* 09/24/22 evening
* https://leetcode.com/contest/weekly-contest-312/problems/longest-subarray-with-maximum-bitwise-and/
*/

const pr = console.log;

const cutMaxConsecutive = (as) => { let d = [], l = 0, n = as.length; for (let i = 0; i + 1 < n; i++) { if (as[i + 1] != as[i]) { d.push(as.slice(l, i + 1)); l = i + 1; } } d.push(as.slice(l)); return d; };

// Accepted
const longestSubarray = (a) => {
    let max = Math.max(...a), d = cutMaxConsecutive(a), res = 1;
    for (const e of d) {
        if (e[0] == max) res = Math.max(res, e.length);
    }
    return res;
};

const test = (a) => {
    let n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = a.slice(i, j + 1), v = cal(sub);
            pr(sub, v)
        }
    }
};

const cal = (a) => {
    let res = a[0]
    for (let i = 1; i < a.length; i++) res &= a[i];
    return res;
};

const main = () => {
    let a = [1, 2, 3, 3, 2, 2];
    let a2 = [1, 2, 3, 4];
    pr(longestSubarray(a))
    pr(longestSubarray(a2))
};

main()

// pr(3 & 2, 4 & 3)

// let x = 3
// pr(x.toString(2))


// 100
// 11

