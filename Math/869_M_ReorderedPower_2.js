/**
 * 03/01/21 evening
 * https://leetcode.com/problems/reordered-power-of-2/
 */

const pr = console.log;

// Accepted --- 76ms 100.00%
const ce = Math.ceil;
const fl = Math.floor;
const lg2 = Math.log2;
const reorderedPowerOf2 = (N) => {
    let s = N + '';
    let a = s.split("");
    let nmap = getRecord2(s);
    let max = Number([...a].sort((x, y) => y - x).join(""));
    let min = [...a].sort((x, y) => x - y).join("");
    if (min[0] == '0') {
        let idx;
        for (let i = 0; i < min.length; i++) {
            // if (i != '0') { // this should be wrong not sure why Accepted --- 80ms 100%
            if (min[i] != '0') {
                idx = i;
                break;
            }
        }
        let newMin = min[idx] + min.slice(0, idx) + min.slice(idx + 1);
        min = newMin;
    }
    min = Number(min);
    let sqmin = fl(lg2(min));
    let sqmax = ce(lg2(max));
    // pr(min, sqmin, max, sqmax);
    for (let i = sqmin; i <= sqmax; i++) {
        let t = 2 ** i;
        if (canMake(t, nmap)) {
            // pr(t);
            return true;
        }
    }
    return false;
};

const canMake = (target, nmap) => {
    let s = target + '';
    let m = getRecord2(s);
    if (nmap.size != m.size) return false;
    // for (const [k, v] of m) {
    //     if (k == '0') {
    //         if (nmap.get(k) < v) return false;
    //     } else {
    //         if (nmap.get(k) != v) return false;
    //     }
    // }
    for (const [k, v] of m) {
        if (nmap.get(k) != v) return false;
    }
    return true;
};

const getRecord2 = (s) => {
    let map = new Map();
    for (const i of s) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    return map;
};

const main = () => {
    let n = 1;
    let n2 = 10;
    let n3 = 16;
    let n4 = 24;
    let n5 = 46;
    let n6 = 406;
    let debug1 = 31928;
    pr(reorderedPowerOf2(n));
    pr(reorderedPowerOf2(n2));
    pr(reorderedPowerOf2(n3));
    pr(reorderedPowerOf2(n4));
    pr(reorderedPowerOf2(n5));
    pr(reorderedPowerOf2(n6)); // false
    pr(reorderedPowerOf2(debug1)); // false
};

main()