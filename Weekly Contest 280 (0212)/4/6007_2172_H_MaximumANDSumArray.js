/**
 * 02/12/22 evening
 * https://leetcode.com/contest/weekly-contest-280/problems/maximum-and-sum-of-array/
 */

const pr = console.log;

// reference: balakrishnan_v
// Accepted --- 1096ms
let a, memo, n;
const maximumANDSum = (nums, m) => {
    a = nums;
    memo = new Map();
    n = a.length;
    let cap = Array(m).fill(2);
    return dfs(0, cap);
};

const dfs = (pos, cap) => {
    if (pos == n) return 0;
    let ke = pos + ' ' + JSON.stringify(cap);
    // pr(ke)
    if (memo.has(ke)) return memo.get(ke);
    let len = cap.length, res = 0;
    // pr(cap);
    for (let i = 0; i < len; i++) {
        if (cap[i] > 0) {
            cap[i]--;
            res = Math.max(res, (a[pos] & (i + 1)) + dfs(pos + 1, cap));
            cap[i]++;
        }
    }
    // pr(pos, res);
    memo.set(ke, res);
    return res;
};


/////////////////////////////////////////////////////////////////
const maximumANDSum1 = (a, slot) => {
    let n = a.length;
    outer:
    for (let i = 0; i < 1 << n; i++) {
        let sub = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                sub.push(a[j]);
                if (sub.length > 2) continue outer;
            }
        }
        pr(sub);
    }
};

const main = () => {
    let nums = [1, 2, 3, 4, 5, 6], numSlots = 3;
    let nums2 = [1, 3, 10, 4, 7, 1], numSlots2 = 9;
    let nums_debug1 = [14, 7, 9, 8, 2, 4, 11, 1, 9], numSlots_debug1 = 8;
    pr(maximumANDSum(nums, numSlots))
    pr(maximumANDSum(nums2, numSlots2))
    pr(maximumANDSum(nums_debug1, numSlots_debug1)) // 40
};

main()