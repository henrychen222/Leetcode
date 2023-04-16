/**
 * 8.15 night
 * https://leetcode.com/contest/weekly-contest-202/problems/minimum-number-of-days-to-eat-n-oranges/
 * https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/discuss/794353/javascript-dp-memo-with-queue
 */

// Accepted --- 104ms 43MB 100.00%
const minDays_uwi = (n) => {
    let memo = new Map();
    memo.set(n, 0);
    let queue = [];
    queue.push(n);
    while (true) {
        let cur = queue[0];
        queue.shift();
        let day = memo.get(cur);
        if (cur == 0) return day;
        if (!memo.has(cur - 1)) {
            memo.set(cur - 1, day + 1);
            queue.push(cur - 1);
        }
        if (cur % 2 == 0 && !memo.has(cur >> 1)) {
            memo.set(cur >> 1, day + 1);
            queue.push(cur >> 1);
        }
        if (cur % 3 == 0 && !memo.has(cur / 3)) {
            memo.set(cur / 3, day + 1);
            queue.push(cur / 3);
        }
        // console.log(queue);
        // console.log(queue, memo);
    }
};

// ASAPIN
// Accepted --- 76ms 37.9MB 100.00%
let memo = new Map();
const minDays = (n) => {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (memo.has(n)) return memo.get(n);
    let res = Math.min(minDays(n >> 1) + n % 2 + 1, minDays(Math.floor(n / 3)) + n % 3 + 1);
    memo.set(n, res);
    return res;
};

// kmjp
// Accepted --- 72ms 37.7MB 100.00%
let memo1 = new Map();
const minDays1 = (n) => {
    if (n == 0) return 0;
    if (memo1.has(n)) return memo1.get(n);
    let res = n;
    res = Math.min(n, n % 2 + 1 + minDays1(n >> 1), n % 3 + 1 + minDays1(Math.floor(n / 3)));
    memo1.set(n, res);
    return res;
};

const main = () => {
    let n = 10;
    let n2 = 6;
    let n3 = 1;
    let n4 = 56;
    console.log(minDays_uwi(n));
    console.log(minDays_uwi(n2));
    console.log(minDays_uwi(n3));
    console.log(minDays_uwi(n4));

    console.log("")
    console.log(minDays(n));
    console.log(minDays(n2));
    console.log(minDays(n3));
    console.log(minDays(n4));

    console.log("")
    console.log(minDays1(n));
    console.log(minDays1(n2));
    console.log(minDays1(n3));
    console.log(minDays1(n4));
};

main()


// const minDays = (n) => {
//     while (true) {
//         if (n % 2 == 0) {
//             if (n % 3 == 0) {
//             } else {
//             }
//         }else {
//             if (n % 3 == 0) {

//             }
//         }
//     }
// };