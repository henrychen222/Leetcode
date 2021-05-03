

/**
 * 04/10/21 evening
 * https://leetcode.com/contest/weekly-contest-236/problems/find-the-winner-of-the-circular-game/
 */

const pr = console.log;

// Accepted
const findTheWinner = (n, k) => {
    let a = [];
    for (let i = 0; i < n; i++) a.push(i + 1);
    let remove = 0;
    for (let i = 0; i < n - 1; i++) {
        remove = (remove + k - 1) % (n - i);
        a.splice(remove, 1);
        pr(a);
    } 
    return a; // should return a[0]
};

const main = () => {
    let n = 5, k = 2;
    let n2 = 6, k2 = 5;
    pr(findTheWinner(n, k))
    pr(findTheWinner(n2, k2))
};

main()