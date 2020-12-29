/**
 * 12.26 noon
 * https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/
 */


// Accepted --- 132ms
const minMoves = (nums, k) => {
    let N = nums.length;
    let one = [];
    for (let i = 0; i < N; i++) {
        if (nums[i] == 1) one.push(i);
    }
    let n = one.length;
    let pre = [0];
    let res = Infinity;
    for (let i = 0; i < n; i++) {
        pre.push(pre[i] + one[i]);
    }
    // console.log(pre, one);
    for (let i = 0; i < n - k + 1; i++) {
        res = Math.min(res, pre[i + k] - pre[(k >> 1) + i] - pre[(k + 1 >> 1) + i] + pre[i]);
    }
    res -= (k >> 1) * (k + 1 >> 1);
    return res;
};

// 132ms
const minMoves_modify4 = (nums, k) => {
    let N = nums.length;
    let one = [];
    for (let i = 0; i < N; i++) {
        if (nums[i] == 1) one.push(i);
    }
    let n = one.length;
    let pre = preSum4(one, n);
    let res = Infinity;
    // console.log(pre, one);
    for (let i = 0; i < n - k + 1; i++) {
        res = Math.min(res, pre[i + k] - pre[(k >> 1) + i] - pre[(k + 1 >> 1) + i] + pre[i]);
    }
    res -= (k >> 1) * (k + 1 >> 1);
    return res;
};

// Accepted --- 132ms
const minMoves_modify3 = (nums, k) => {
    let N = nums.length;
    let one = [];
    for (let i = 0; i < N; i++) {
        if (nums[i] == 1) one.push(i);
    }
    let n = one.length;
    let pre = preSum3(one, n);
    let res = Infinity;
    // console.log(pre, one);
    for (let i = 0; i < n - k + 1; i++) {
        res = Math.min(res, pre[i + k] - pre[(k >> 1) + i] - pre[(k + 1 >> 1) + i] + pre[i]);
    }
    res -= (k >> 1) * (k + 1 >> 1);
    return res;
};

// Accepted --- 128ms
const minMoves_modify2 = (nums, k) => {
    let N = nums.length;
    let one = [];
    for (let i = 0; i < N; i++) {
        if (nums[i] == 1) one.push(i);
    }
    let n = one.length;
    let pre = preSum2(one, n);
    let res = Infinity;
    // console.log(pre, one);
    for (let i = 0; i < n - k + 1; i++) {
        res = Math.min(res, pre[i + k] - pre[(k >> 1) + i] - pre[(k + 1 >> 1) + i] + pre[i]);
    }
    res -= (k >> 1) * (k + 1 >> 1);
    return res;
};

// Accepted --- 124ms
const minMoves_modify = (nums, k) => {
    let N = nums.length;
    let one = [];
    for (let i = 0; i < N; i++) {
        if (nums[i] == 1) one.push(i);
    }
    let n = one.length;
    let pre = preSum(one, n);
    let res = Infinity;
    // console.log(pre, one);
    for (let i = 0; i < n - k + 1; i++) {
        res = Math.min(res, pre[i + k] - pre[(k >> 1) + i] - pre[(k + 1 >> 1) + i] + pre[i]);
    }
    res -= (k >> 1) * (k + 1 >> 1);
    return res;
};

const preSum = (a, n) => {
    let pre = [0];
    for (let i = 0; i < n; i++) {
        pre.push(pre[i] + a[i]);
    }
    return pre;
};

const preSum2 = (a, n) => {
    let pre = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        pre[i + 1] = pre[i] + a[i];
    }
    return pre;
};

const preSum3 = (a, n) => {
    let pre = [a[0]];
    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] + a[i];
    }
    pre.unshift(0);
    return pre;
};

const preSum4 = (a, n) => {
    let pre = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        pre[i] = pre[i - 1] + a[i - 1];
    }
    return pre;
};

const main = () => {
    let nums = [1, 0, 0, 1, 0, 1],
        k = 2;
    let nums2 = [1, 0, 0, 0, 0, 0, 1, 1],
        k2 = 3;
    let nums3 = [1, 1, 0, 1],
        k3 = 2;
    console.log(minMoves(nums, k));
    console.log(minMoves(nums2, k2));
    console.log(minMoves(nums3, k3));
};

main()