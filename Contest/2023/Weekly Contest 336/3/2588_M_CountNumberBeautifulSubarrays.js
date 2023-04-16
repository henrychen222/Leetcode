/*
 * 03/11/23 evening
 * https://leetcode.com/contest/weekly-contest-336/problems/count-the-number-of-beautiful-subarrays/
 */

const pr = console.log;

// TLE
const test = (a) => {
    let res = 0;
    const n = a.length;
    for (let i = 0; i < n; i++) {
        let mask = 0;
        for (let j = i; j < n; j++) {
            mask ^= a[j];
            if (mask == 0) res++;
        }
    }
    return res;
};

// WA
function beautifulSubarrays1(a) {
    let res = 0, n = a.length, m = new Map([[0, -1]]), xor = 0;
    for (let i = 0; i < n; i++) {
        xor ^= a[i];
        // pr(a[i], "xor", xor, m)
        if (m.has(xor)) {
            let cnt = i - m.get(xor);
            // pr("xor", xor, i, m.get(xor), "cnt", cnt)
            res += Math.max(0, cnt);
        }
        m.set(xor, i);
    }
    // pr("test", test(a))
    return res;
}


const beautifulSubarrays = (a) => {
    let res = 0, n = a.length, m = new Map([[0, 1]]), xor = 0;
    for (let i = 0; i < n; i++) {
        xor ^= a[i];
        res += m.get(xor) || 0;
        m.set(xor, m.get(xor) + 1 || 1);
    }
    return res;
};


// https://www.geeksforgeeks.org/powers-2-required-sum/
const powerOf2Sum = (x) => {
    let v = [], res = [];
    while (x > 0) {
        v.push(x % 2);
        x >>= 1;
    }
    for (let i = 0; i < v.length; i++) {
        if (v[i] == 1) res.push(i);
    }
    return res;
};

const main = () => {
    let a = [4, 3, 1, 2, 4];
    let a2 = [1, 10, 4];
    let a_debug1 = [0]
    let a_debug2 = [0, 0];
    pr(beautifulSubarrays(a))
    pr(beautifulSubarrays(a2))
    pr(beautifulSubarrays(a_debug1))
    pr(beautifulSubarrays(a_debug2)) // 3
};

main()


// pr(powerOf2Sum(6))