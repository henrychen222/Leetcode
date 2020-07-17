/**
 * 7.16 night
 * https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/
 */

// Accepted --- 92ms 40.7MB 40.91%
/**
 * reference:
 * https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/discuss/714516/golang-Sliding-windows-beats-100
 * https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/discuss/621123/Java-O(n)-Both-100-faster-than-other-Solution.
 */
const numSubarrayBoundedMax_sliding_window = (A, L, R) => {
    let cnt = 0;
    let start = 0;
    let end = 0;
    let windowMax = 0;
    while (end < A.length) {
        if (A[end] >= L && A[end] <= R) {
            windowMax = end - start + 1;
        } else if (A[end] > R) {
            windowMax = 0;
            start = end + 1;
        }
        cnt += windowMax;
        end++;
    }
    return cnt;
};

// Accepted --- 104ms 40.3MB 36.36%
/**
 * reference: 
 * https://www.cnblogs.com/grandyang/p/9237967.html
 *   https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/discuss/117616/C++-O(n)-less10-lines
 * https://zxi.mytechroad.com/blog/algorithms/array/leetcode-795-number-of-subarrays-with-bounded-maximum/
 */
const numSubarrayBoundedMax_sliding_window2 = (A, L, R) => {
    let res = 0;
    let start = -1;
    let end = -1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > R) start = i;
        if (A[i] >= L) end = i;
        res += end - start;
    }
    return res;
};

// Time Limit 32/43
const numSubarrayBoundedMax = (A, L, R) => {
    let cnt = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            let subarr = A.slice(i, j + 1);
            let max = Math.max.apply(Math, subarr);
            if (max >= L && max <= R) {
                cnt++;
            }
        }
    }
    return cnt;
};

const main = () => {
    let A = [2, 1, 4, 3],
        L = 2,
        R = 3;
    let A2 = [2, 9, 2, 5, 6],
        L2 = 2,
        R2 = 8;
    console.log(numSubarrayBoundedMax(A, L, R)); // 3
    console.log(numSubarrayBoundedMax(A2, L2, R2)); // 7

    console.log(numSubarrayBoundedMax_sliding_window(A, L, R));
    console.log(numSubarrayBoundedMax_sliding_window(A2, L2, R2));

    console.log(numSubarrayBoundedMax_sliding_window2(A, L, R));
    console.log(numSubarrayBoundedMax_sliding_window2(A2, L2, R2));
};

main()