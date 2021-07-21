/**
 * 07/17/21 evening
 * https://leetcode.com/problems/three-equal-parts/
 */

// Accepted --- 100ms 25.00%
// Accepted --- 92ms
// reference: https://leetcode.com/contest/weekly-contest-107/ranking yubowenok
const threeEqualParts = (a) => {
    let n = a.length;
    let pos = [];
    for (let i = 0; i < n; i++) {
        if (a[i]) pos.push(i);
    }
    if (pos.length % 3 != 0) return [-1, -1];
    let t = pos.length / 3;
    if (t == 0) return [0, 2];
    let trailing = n - pos[pos.length - 1] - 1;
    if (pos[t] - 1 - pos[t - 1] < trailing) return [-1, -1];
    if (pos[2 * t] - 1 - pos[2 * t - 1] < trailing) return [-1, -1];
    let cutI = pos[t - 1] + trailing, cutJ = pos[2 * t - 1] + trailing + 1;
    let [x, y, z] = [[],[],[]];
    for (let i = 0; i < cutI + 1; i++) x.push(a[i]);
    for (let i = cutI + 1; i < cutJ; i++) y.push(a[i]);
    for (let i = cutJ; i < n; i++) z.push(a[i]);
    removeZero(x);
    removeZero(y);
    removeZero(z);
    if (aeq(x, y) && aeq(y, z)) return [cutI, cutJ];
    return [-1, -1];
};

const aeq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
const removeZero = (a) => {
    a.reverse();
    while (a.length && a[a.length - 1] == 0) a.pop();
};

const ll = BigInt;
// TLE 108/118
const threeEqualParts2 = (a) => {
    let n = a.length;
    let x = [];
    for (let i = 0; i < n; i++) {
        x.push(a[i]);
        let j = i + 2;
        let y = a.slice(i + 1, j);
        let z = a.slice(j);
        while (z.length) {
            // pr(x, y, z);
            let sx = x.join("")
            let sy = y.join("")
            let sz = z.join("")
            if (ll(sx) == ll(sy) && ll(sy) == ll(sz)) return [i, j];
            y.push(z.shift());
            j++;
        }
    }
    return [-1, -1];
};

// TLE 108/118
const threeEqualParts1 = (a) => {
    let n = a.length;
    let x = [];
    for (let i = 0; i < n; i++) {
        x.push(a[i]);
        for (let j = i + 2; j < n; j++) {
            let y = a.slice(i + 1, j);
            let z = a.slice(j);
            // pr(x, y, z)
            let sx = x.join("")
            let sy = y.join("")
            let sz = z.join("")
            // pr(sx, sy, sz)
            if (ll(sx) == ll(sy) && ll(sy) == ll(sz)) return [i, j];
        }
    }
    return [-1, -1];
};

const pr = console.log;
const main = () => {
    let arr = [1, 0, 1, 0, 1];
    let arr2 = [1, 1, 0, 1, 1];
    let arr3 = [1, 1, 0, 0, 1];
    pr(threeEqualParts(arr));
    pr(threeEqualParts(arr2));
    pr(threeEqualParts(arr3));
};

main()