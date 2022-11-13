/**
 * 03/27/21 evening
 * https://leetcode.com/contest/weekly-contest-234/problems/minimum-number-of-operations-to-reinitialize-a-permutation/
 */

const pr = console.log;

// Accepted
const reinitializePermutation = (n) => {
    let perm = [];
    for (let i = 0; i < n; i++) perm.push(i);
    let origin = [...perm];
    // pr("orgin", origin);
    let res = 0;
    // pr(perm);
    while (1) {
        let a = [...perm];
        for (let i = 0; i < n; i++) {
            let idx;
            if (i & 1) {
                idx = (n >> 1) + (i - 1) / 2;
            } else {
                idx = i / 2;
            }
            a[i] = perm[idx];
        }
        perm = a;
        // pr(perm)
        res++;
        if (arrayEquals(origin, perm)) {
            break;
        }
    }
    return res;
};

const arrayEquals = (a, b) => {
    return a.length === b.length && a.every((v, i) => v === b[i]);
};

const main = () => {
    let n = 2;
    let n2 = 4;
    let n3 = 6;
    let n4 = 1000;
    pr(reinitializePermutation(n));
    pr(reinitializePermutation(n2));
    pr(reinitializePermutation(n3));
    pr(reinitializePermutation(n4));
};

main()