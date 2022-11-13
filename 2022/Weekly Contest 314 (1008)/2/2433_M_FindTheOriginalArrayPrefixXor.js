/*
 * 10/08/22 evening
 * https://leetcode.com/contest/weekly-contest-314/problems/find-the-original-array-of-prefix-xor/
 */

const pr = console.log;

// Accepted
const findArray = (a) => {
    let n = a.length, res = Array(n).fill(0), cur = 0;
    for (let i = 0; i < n; i++) {
        let v = a[i] ^ cur;
        // pr(cur, v, res);
        res[i] = v;
        cur ^= res[i];
    }
    return res;
};

const main = () => {
    let a = [5, 2, 0, 3, 1];
    let a2 = [13]
    pr(findArray(a))
    pr(findArray(a2))
};

main()


pr(2 ^ 5)
pr(0 ^ 5 ^ 7)