/**
 * 12.19 evening  12.21 evening
 * https://leetcode.com/contest/weekly-contest-220/problems/jump-game-vi/
 * 
 * read:
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1696-jump-game-vi/
 */


// Accepted --- 108ms 87.50%   Bottom up DP + Monoqueue
/**
 * reference:
 * https://leetcode.com/contest/weekly-contest-220/ranking/2/  cuiaoxiang
 * https://leetcode.com/problems/jump-game-vi/discuss/978544/C%2B%2B-DP-%2B-Pruning-vs.-Monodeq
 */
const maxResult = (nums, k) => {
    let n = nums.length;
    let dp = Array(n).fill(0);
    dp[n - 1] = nums[n - 1];
    let deque = [];
    deque.push(n - 1);
    for (let i = n - 2; ~i; i--) {
        // console.log(deque);  // check monoqueue is decreasing
        while (deque.length && deque[0] - i > k) {
            deque.shift();
        }
        dp[i] = nums[i] + dp[deque[0]];
        while (deque.length && dp[deque[deque.length - 1]] <= dp[i]) {
            deque.pop();
        }
        deque.push(i);
    }
    // console.log(dp);
    return dp[0];
};


//////////////////////////////////////////////////////////////
const highestOneBit = (i) => {
    i |= (i >> 1);
    i |= (i >> 2);
    i |= (i >> 4);
    i |= (i >> 8);
    i |= (i >> 16);
    return i - (i >>> 1);
};

class SegmentTreeRMQ {
    constructor(n) {
        this.N = n;
        this.M = highestOneBit(Math.max(this.N - 1, 1)) << 2;
        this.H = this.M >>> 1;
        this.st = Array(this.M).fill(0).map((x, i) => {
            if (i >= 0 && i <= this.M) x = Number.MAX_VALUE;
        });
    }

    update(pos, x) {
        this.st[this.H + pos] = x;
        for (let i = (this.H + pos) >>> 1; i >= 1; i >>>= 1) this.propagate(i);
    }

    propagate(i) {
        this.st[i] = Math.min(this.st[2 * i], this.st[2 * i + 1]);
    }

    minx(low, high) {
        let min = Number.MAX_VALUE;
        if (low >= high) return min;
        while (low != 0) {
            let f = low & -low;
            if (low + f > high) break;
            let v = this.st[parseInt((this.H + low) / f)];
            if (v < min) min = v;
            low += f;
        }
        while (low < high) {
            let f = high & -high;
            let v = this.st[parseInt((this.H + high) / f) - 1];
            if (v < min) min = v;
            high -= f;
        }
        return min;
    }
};

// Accepted --- 312ms 37.5%
/**
 * reference: 
 * https://leetcode.com/contest/weekly-contest-220/ranking/3/  uwi
 * https://leetcode.com/contest/weekly-contest-220/ranking 	kirika-comp
 */
const maxResult2 = (nums, k) => {
    let n = nums.length;
    let strmq = new SegmentTreeRMQ(n + 1);
    let dp = Array(n).fill(0);
    dp[0] = nums[0];
    strmq.update(0, -nums[0]);
    for (let i = 1; i < n; i++) {
        dp[i] = -strmq.minx(Math.max(0, i - k), i) + nums[i];
        strmq.update(i, -dp[i]);
    }
    // console.log(dp);
    return dp[n - 1];
};

// WA 7/58
// const maxResult1 = (nums, k) => {
//     let n = nums.length;
//     let res = nums[0];
//     for (let i = 0; i < n - 1;) {
//         let tmp = nums.slice(i + 1, Math.min(n, i + k + 1));
//         let max = Math.max.apply(Math, tmp);
//         // console.log(nums[i], tmp);
//         res += max;
//         let move = tmp.indexOf(max) + 1;
//         i += move;
//     }
//     return res;
// };

const main = () => {
    let nums = [1, -1, -2, 4, -7, 3],
        k = 2;
    let nums2 = [10, -5, -2, 4, 0, 3],
        k2 = 3;
    let nums3 = [1, -5, -20, 4, -1, 3, -6, -3],
        k3 = 2;
    console.log(maxResult(nums, k));
    console.log(maxResult(nums2, k2));
    console.log(maxResult(nums3, k3));
};

main()