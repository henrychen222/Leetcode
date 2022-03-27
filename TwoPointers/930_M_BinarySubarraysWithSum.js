/**
 * 02/19/21 night
 * https://leetcode.com/problems/binary-subarrays-with-sum/
 */


// Accepted --- 99ms 63.64%   03/24/22 night prefix sum
const numSubarraysWithSum = (a, k) => subarraySumEqualKCnt(a, k);

const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const subarraySumEqualKCnt = (a, k) => {
     let m = new Map([[0, 1]]), sum = 0, res = 0;
     for (const x of a) {
         sum += x;
         let lsum = sum - k;
         if (m.has(lsum)) res += m.get(lsum);
         addOneOrManyMap(m, sum);
     }
     return res;
};

///////////////////////////////////////////////////////////////////////
// Accepted --- 92ms 53.13%
const numSubarraysWithSum = (A, S) => {
    let res = sum = 0;
    let m = new Map([
        [0, 1]
    ]);
    for (const e of A) {
        sum += e;
        if (sum >= S) res += m.get(sum - S) || 0;
        m.set(sum, m.get(sum) + 1 || 1);
    }
    return res;
};

// Accepted --- 92ms 53.13%
const numSubarraysWithSum2 = (A, S) => {
    let n = A.length;
    let res = sum = 0;
    let cnt = Array(n + 1).fill(0);
    cnt[0] = 1;
    for (const e of A) {
        sum += e;
        if (sum >= S) res += cnt[sum - S];
        cnt[sum]++;
    }
    return res;
};


// Accepted --- 3256ms 12.50%
const numSubarraysWithSum1 = (A, S) => {
    let n = A.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            if (A[j] == 1) {
                sum++;
            }
            if (sum == S) {
                res++;
            } else if (sum > S) {
                break;
            }
        }
    }
    return res;
};

const main = () => {
    let A = [1, 0, 1, 0, 1],
        S = 2;
    let A_debug1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        S_debug1 = 0;
    console.log(numSubarraysWithSum(A, S));
    console.log(numSubarraysWithSum(A_debug1, S_debug1));
};

main()