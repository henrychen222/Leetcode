/**
 * 12.21 evening
 * https://leetcode.com/problems/lexicographical-numbers/
 * https://leetcode.com/contest/warm-up-contest
 */

// Accepted --- 152ms 9.46%
const lexicalOrder = (n) => {
    let res = [];
    for (let i = 1; i <= n; i++) {
        res.push(i);
    }
    return res.map(x => x + '').sort((a, b) => a.localeCompare(b)).map(x => Number(x));
};

/////////////////////////////////////////////////////////////////////
// Accepted --- 148ms 9.46%
const lexicalOrder3 = (n) => {
    let res = Array(n).fill(0);
    let mid = n % 2 ? (n >> 1) + 1 : n >> 1;
    res[mid - 1] = mid;
    for (let i = 1; i <= mid - 1; i++) {
        res[mid - 1 + i] = mid + i;
        res[mid - 1 - i] = mid - i;
    }
    if (n % 2 == 0) res[n - 1] = n;
    return res.map(x => x + '').sort((a, b) => a.localeCompare(b)).map(x => Number(x));
};

// Accepted --- 152ms 9.46%
const lexicalOrder2 = (n) => {
    let res = Array(n).fill(0);
    let mid = n & 1 ? (n >> 1) + 1 : n >> 1;
    res[mid - 1] = mid;
    for (let i = 1; i <= mid - 1; i++) {
        res[mid - 1 + i] = mid + i;
        res[mid - 1 - i] = mid - i;
    }
    if (!(n & 1)) res[n - 1] = n;
    return res.map(x => x + '').sort((a, b) => a.localeCompare(b)).map(x => Number(x));
};

// Accepted --- 160ms 8.11%
const lexicalOrder1 = (n) => {
    let res = Array(n).fill(0);
    let mid = n & 1 ? (n >> 1) + 1 : n >> 1;
    res[mid - 1] = mid;
    // console.log(res, mid);
    for (let i = 1; i <= mid - 1; i++) {
        res[mid - 1 + i] = mid + i;
        res[mid - 1 - i] = mid - i;
    }
    if (!(n & 1)) res[n - 1] = n;
    // console.log(res);
    res = res.map(x => x + '');
    res.sort((a, b) => a.localeCompare(b));
    return res.map(x => Number(x));
};

const main = () => {
    let n = 13;
    let n2 = 14;
    let n3 = 5000000;
    console.log(lexicalOrder(n));
    console.log(lexicalOrder(n2));
    console.log(lexicalOrder(n3));
};

main()