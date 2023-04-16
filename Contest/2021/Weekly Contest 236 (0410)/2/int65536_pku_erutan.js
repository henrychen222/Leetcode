/**
 * 04/10/21 evening
 * https://leetcode.com/contest/weekly-contest-236/problems/find-the-winner-of-the-circular-game/
 */

const pr = console.log;

// Accepted --- 124ms
const findTheWinner = (n, k) => {
    let a = [];
    for (let i = 0; i < n; i++) a.push(i + 1);
    let remove = 0;
    while (a.length > 1) {
        remove = (remove + k - 1) % a.length; // rotate array use  % array.length  shit
        a.splice(remove, 1);
        // pr(remove, a);
    }
    return a;
};

const main = () => {
    let n = 5, k = 2;
    let n2 = 6, k2 = 5;
    pr(findTheWinner(n, k))
    pr(findTheWinner(n2, k2))
};

main()