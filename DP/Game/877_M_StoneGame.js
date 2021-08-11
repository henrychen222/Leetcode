/**
 * 10/14/20 evening  08/05/21 night complete
 * https://leetcode.com/problems/stone-game/
 * reference: https://www.cnblogs.com/grandyang/p/10828725.html
 */

// Accepted --- 72ms 73.61%
const stoneGame = (a) => true;

// Accepted --- 88ms 25.36%
const stoneGame1 = (a) => {
    let n = a.length;
    let dp = initialize2DArrayNew(n, n);
    for (let i = 0; i < n; i++) dp[i][i] = a[i];
    for (let len = 1; len < n; len++) {
        for (let i = 0; i < n - len; ++i) {
            let j = i + len;
            dp[i][j] = Math.max(a[i] - dp[i + 1][j], a[j] - dp[i][j - 1]);
        }
    }
    return dp[0][n - 1] > 0;
};

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

const main = () => {
    let piles = [5, 3, 4, 5];
    let debug1 = [3, 2, 10, 4];
    console.log(stoneGame(piles));
    console.log(stoneGame(debug1)); // true
};

main()


/////////////////////////////////// 10/14/20 evening ///////////////////////////////////
// wrong
// const stoneGame = (piles) => {
//     let alex = [];
//     let lee = [];
//     let round = 1;
//     while (piles.length > 0) {
//         let begin = piles[0];
//         let end = piles[piles.length - 1];
//         if (round % 2 == 1) { // greedy wrong
//             if (begin > end) {
//                 alex.push(begin);
//                 piles.shift();
//             } else if (begin < end) {
//                 alex.push(end);
//                 piles.pop();
//             } else {
//                 let i = 1;
//                 let j = piles.length - 1;
//                 while (piles[i] == piles[j]) {
//                     i++;
//                     j--;
//                 }
//                 if (piles[i] > piles[j]) {
//                     alex.push(end);
//                     piles.pop();
//                 } else {
//                     alex.push(begin);
//                     piles.shift();
//                 }
//             }
//             round++;
//         } else {
//             if (begin > end) {
//                 lee.push(begin);
//                 piles.shift();
//             } else if (begin < end) {
//                 lee.push(end);
//                 piles.pop();
//             } else {
//                 let i = 1;
//                 let j = piles.length - 1;
//                 while (piles[i] == piles[j]) {
//                     i++;
//                     j--;
//                 }
//                 if (piles[i] > piles[j]) {
//                     lee.push(end);
//                     piles.pop();
//                 } else {
//                     lee.push(begin);
//                     piles.shift();
//                 }
//             }
//             round++;
//         }
//     }
//     console.log(alex, lee);
//     return sum(alex) > sum(lee) ? true : false;
// };

// const sum = (arr) => {
//     return arr.reduce((acc, cur) => acc + cur);
// };