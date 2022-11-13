/**
 * 06/11/22 morning
 * https://leetcode.com/contest/biweekly-contest-80/problems/count-subarrays-with-score-less-than-k/
 */

const pr = console.log;

// Accepted
// https://www.geeksforgeeks.org/number-subarrays-sum-less-k/
const countSubarrays = (a, k) => {
    let n = a.length, i = 0, j = 0, res = 0, sum = a[0];
    while (i < n && j < n) {
        let len = j - i + 1;
        if (sum * len < k) {
            j++;
            if (j >= i) {
                res += j - i;
            }
            if (j < n) sum += a[j];
        } else {
            sum -= a[i];
            i++;
        }
    }
    return res;
};


const main = () => {
    let a = [2, 1, 4, 3, 5], k = 10;
    let a2 = [1, 1, 1], k2 = 5;
    pr(countSubarrays(a, k))
    pr(countSubarrays(a2, k2))
};

main()
