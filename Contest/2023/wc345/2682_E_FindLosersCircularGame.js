/*
 * 05/13/23 evening
 * https://leetcode.com/contest/weekly-contest-345/problems/find-the-losers-of-the-circular-game/
 */

const pr = console.log;

// Accepted
const circularGameLosers = (n, k) => {
    let a = Array(n + 1).fill(0), cur = 1, res = [];
    a[1] = 1;
    for (let i = 1; ; i++) {
        let step = i * k;
        step %= n;
        while (step--) cur + 1 <= n ? cur++ : cur = 1;
        // pr(a[cur])
        a[cur]++;
        if (a[cur] == 2) break;
    }
    // pr(a)
    for (let i = 1; i <= n; i++) {
        if (a[i] == 0) res.push(i);
    }
    return res;
};

const main = () => {
    let n = 5, k = 2;
    let n2 = 4, k2 = 4;
    let n_debug1 = 2, k_debug1 = 1;
    let n_debug2 = 5, k_debug2 = 3;
    pr(circularGameLosers(n, k))
    pr(circularGameLosers(n2, k2))
    pr(circularGameLosers(n_debug1, k_debug1)) // []
    pr(circularGameLosers(n_debug2, k_debug2)) // [2,3]
};

main()


/*
[1,0] [0, 0]


1 2 3 4 5

1 -> 1 + 3 = 4
4 -> 4 + 6 = 10 -> 
*/