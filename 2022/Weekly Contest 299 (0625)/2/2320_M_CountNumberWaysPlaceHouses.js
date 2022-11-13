/**
 * 06/25/22 evening
 * https://leetcode.com/contest/weekly-contest-299/problems/count-number-of-ways-to-place-houses/
 */

const pr = console.log;

// Accepted
// reference: https://www.geeksforgeeks.org/count-possible-ways-to-construct-buildings/
const ll = BigInt, mod = ll(1e9 + 7);
const countHousePlacements = (n) => {
    n += 2;
    let fib = Array(n).fill(0n);
    fib[0] = fib[1] = 1n;
    for (let i = 2; i < n; i++) fib[i] = fib[i - 1] + fib[i - 2];
    let res = fib[n - 1];
    return res * res % mod;
};

const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 3;
    let debug1 = 1000;
    pr(countHousePlacements(n))
    pr(countHousePlacements(n2))
    pr(countHousePlacements(n3)) // 25
    pr(countHousePlacements(debug1)) // 500478595
};

main()

/*
n = 1
(0, 0)  1  [[none],[none]]
(0, 1)  1 [[none],[1]]

(1, 0)  1  [[1],[none]]
(1, 1)  1 [[1],[1]]

ans: 4

n = 2
(0, 0)  1  [[none],[none]]
(0, 1)  2  [[none],[1]]   [[none],[2]]
(0, 2)  -----

(1, 0)  2  [[1],[none]]  [[2],[none]]
(1, 1)  4  [[1],[1]]  [[1],[2]] [[2],[1]] [[2],[2]]
(1, 2)  ----

(2, 0)  ---
(2, 1)  ---
(2, 2)  ---

ans: 1 + 2 + 2 + 4 = 9


n = 3
(0, 0)  1  [[none],[none]]
(0, 1)  3  [[none],[1]]   [[none],[2]]  [[none],[3]] 
(0, 2)  2  [[none],[1, 3]]  [[none],[3, 1]]
(0, 3)  -----

(1, 0)  3  [[1],[none]]  [[2],[none]]  [[3],[none]]
(1, 1)  9  [[1],[1]]  [[1],[2]] [[1],[3]]  [[2],[1]]  [[2],[2]]  [[2],[3]]  [[3],[1]]  [[3],[2]] [[3],[3]]
(1, 2)  2  [[1],[1, 3]]  [[1],[3, 1]]
(1, 3)  ---
(2, 0)  1  [[1,3],[none]]
(2, 1)  3  [[1,3],[1]]  [[1,3],[2]]  [[1,3],[3]]
(2, 2)  2  [[1,3],[1, 3]]
(2, 3)  ----
       
ans: 1 + 3 + 2 + 3 + 9 + 2 + 1 + 3 + 2 = 26

*/