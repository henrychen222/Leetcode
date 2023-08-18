/*
 * 02/04/23 afternoon
 * https://leetcode.com/contest/biweekly-contest-97/problems/maximum-number-of-integers-to-choose-from-a-range-i/
 */

const pr = console.log;

// Accepted
const maxCount = (banned, n, maxSum) => {
    let ban = new Set(banned), a = [], pick = new Set(), cur = 0;
    for (let i = 1; i <= n; i++) {
        if (!ban.has(i)) a.push(i);
    }
    for (const x of a) {
        if (cur + x <= maxSum) {
            cur += x;
            pick.add(x);
        } else {
            break;
        }
    }
    return pick.size;
};

const main = () => {
    let banned = [1, 6, 5], n = 5, maxSum = 6;
    let banned2 = [1, 2, 3, 4, 5, 6, 7], n2 = 8, maxSum2 = 1
    let banned3 = [11], n3 = 7, maxSum3 = 50;
    let banned_debug1 = [176, 36, 104, 125, 188, 152, 101, 47, 51, 65, 39, 174, 29, 55, 13, 138, 79, 81, 175, 178, 42, 108, 24, 80, 183, 190, 123, 20, 139, 22, 140, 62, 58, 137, 68, 148, 172, 76, 173, 189, 151, 186, 153, 57, 142, 105, 133, 114, 165, 118, 56, 59, 124, 82, 49, 94, 8, 146, 109, 14, 85, 44, 60, 181, 95, 23, 150, 97, 28, 182, 157, 46, 160, 155, 12, 67, 135, 117, 2, 25, 74, 91, 71, 98, 127, 120, 130, 107, 168, 18, 69, 110, 61, 147, 145, 38],
        n_debug1 = 3016, maxSum_debug1 = 240
    pr(maxCount(banned, n, maxSum))
    pr(maxCount(banned2, n2, maxSum2))
    pr(maxCount(banned3, n3, maxSum3))
    pr(maxCount(banned_debug1, n_debug1, maxSum_debug1)) // 17
};

main()