/**
 * 08/06/22 evening
 * https://leetcode.com/contest/weekly-contest-305/problems/number-of-arithmetic-triplets/
 */

const pr = console.log;

// Accepted
const arithmeticTriplets = (a, diff) => {
    let n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (a[j] - a[i] == diff && a[k] - a[j] == diff) res++;
            }
        }
    }
    return res;
};

const main = () => {
    let a = [0, 1, 4, 6, 7, 10], diff = 3;
    let a2 = [4, 5, 6, 7, 8, 9], diff2 = 2;
    pr(arithmeticTriplets(a, diff))
    pr(arithmeticTriplets(a2, diff2))
};

main()