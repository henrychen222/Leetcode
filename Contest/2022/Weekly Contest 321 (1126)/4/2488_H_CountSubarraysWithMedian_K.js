/*
 * 11/26/22 evening
 * https://leetcode.com/contest/weekly-contest-321/problems/count-subarrays-with-median-k/
 */

const pr = console.log;

const countSubarrays = (a, k) => permutationArrayWithMedianK(a, k);

// Accepted
// reference: https://www.geeksforgeeks.org/find-the-number-of-sub-arrays-in-the-permutation-of-first-n-natural-numbers-such-that-their-median-is-m/
// read: https://leetcode.com/problems/count-subarrays-with-median-k/solutions/2851948/javascript-count-left-right-balance/
const permutationArrayWithMedianK = (a, k) => {
    let m = new Map([[0, 1]]), find = false, cnt = 0, res = 0;
    for (const x of a) {
        if (x < k) {
            cnt--; // balance
        } else if (x > k) {
            cnt++;
        } else {
            find = true;
        }
        if (find) {
            res += (m.get(cnt) || 0) + (m.get(cnt - 1) || 0);
        } else {
            m.set(cnt, m.get(cnt) + 1 || 1);
        }
        // pr(m, cnt);
    }
    return res;
};

/////////////////////////////////////////////////////////////////
/*
[4]
[3, 4, 5]

[4, 5]
*/

// WA
const countSubarrays1 = (a, k) => {
    pr("test", test(a, k));
    // a.sort((x, y) => x - y);
    pr(a);
    let n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] == k) {
            res++;
            let makeOdd = Math.min(i, n - i - 1); // left == right
            let makeEven = Math.min(i + 1, n - i - 1); // left + 1 == right
            pr(makeOdd, makeEven)
            res = res + makeOdd + makeEven;
        }
    }
    return res;
};

// TLE
const test = (a, k) => {
    let n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = a.slice(i, j + 1), n = j - i + 1;
            sub.sort((x, y) => x - y);
            let m = n % 2 == 0 ? sub[n / 2 - 1] : sub[n >> 1];
            if (m == k) {
                pr(sub);
                res++;
            }
        }
    }
    return res;
}

const main = () => {
    let a = [3, 2, 1, 4, 5], k = 4;
    let a2 = [2, 3, 1], k2 = 3;
    let a_debug1 = [2, 5, 1, 4, 3, 6], k_debug1 = 1;
    pr(countSubarrays(a, k))
    pr(countSubarrays(a2, k2))
    pr(countSubarrays(a_debug1, k_debug1)) // 3
};

main()

/*
[1]

[1, 4]
*/