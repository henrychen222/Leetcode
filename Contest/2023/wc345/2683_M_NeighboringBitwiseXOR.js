/*
 * 05/13/23 evening
 * https://leetcode.com/contest/weekly-contest-345/problems/neighboring-bitwise-xor/
 */

const pr = console.log;

const aeq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// Accepted
const doesValidArrayExist = (a) => {
    let n = a.length;
    let b = Array(n).fill(-1), b2 = Array(n).fill(-1);
    b[0] = 0;
    b2[0] = 1;
    go(a, b)
    // pr(b);
    // pr(test(b))
    if (aeq(test(b), a)) return true;
    go(a, b2);
    // pr(b2)
    if (aeq(test(b2), a)) return true;
    return false;
};

const go = (a, b) => {
    let n = a.length;
    for (let i = 0; i < n; i++) {
        if (i == n - 1) {
            b[i] = a[i] ^ b[0];
        } else {
            // a[i] = b[i] ^ b[i+1]
            b[i + 1] = a[i] ^ b[i];
        }
    }
};

const test = (a) => {
    let n = a.length, res = Array(n).fill(-1);
    for (let i = 0; i + 1 < n; i++) res[i] = a[i] ^ a[i + 1];
    res[n - 1] = a[n - 1] ^ a[0];
    return res;
};

const main = () => {
    let a = [1, 1, 0];
    let a2 = [1, 1];
    let a3 = [1, 0];
    pr(doesValidArrayExist(a))
    pr(doesValidArrayExist(a2))
    pr(doesValidArrayExist(a3))
};

main()


/*
[1,0] [0, 0]

*/