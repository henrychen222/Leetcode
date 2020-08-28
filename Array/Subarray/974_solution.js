/**
 * reference:
 * https://leetcode.com/contest/weekly-contest-119/problems/subarray-sums-divisible-by-k/
 * https://www.geeksforgeeks.org/count-sub-arrays-sum-divisible-k/
 * https://blog.csdn.net/fuxuemingzhu/article/details/86438244
 * https://leetcode.com/problems/subarray-sums-divisible-by-k/discuss/217979/Pictured-Explanation-Python-O(n)-Clean-Solution-8-Lines!
 * https://www.cnblogs.com/seyjs/p/10317990.html
 */


// Accepted --- 92ms 86.07%
// https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-974-subarray-sums-divisible-by-k/
const subarraysDivByK_huahua = (A, K) => {
    let c = new Array(K).fill(0);
    c[0] = 1;
    let res = 0;
    let sum = 0; // prefix sum
    for (const a of A) {
        sum = (sum + a % K + K) % K;
        res += c[sum]++;
    }
    return res;
};

// Accepted --- 96ms 80.33%
const subarraysDivByK_fuxuemingzhu = (A, K) => {
    let map = {};
    let sum = 0; // prefixSum
    let res = 0;
    map[0] = 1;
    for (const a of A) {
        sum = (sum + a) % K;
        if (sum < 0) sum += K;
        if (map.hasOwnProperty(sum)) {
            res += map[sum]++;
        } else {
            map[sum] = 1;
        }
        // console.log(sum, map[sum]);
    }
    // console.log(map)
    return res;
};

const main = () => {
    let A = [4, 5, 0, -2, -3, 1],
        K = 5;
    console.log(subarraysDivByK_huahua(A, K));
    console.log(subarraysDivByK_fuxuemingzhu(A, K));
};

main()