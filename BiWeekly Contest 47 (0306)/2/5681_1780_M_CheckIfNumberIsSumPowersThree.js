/**
 * 03/06/21 morning
 * https://leetcode.com/contest/biweekly-contest-47/problems/sum-of-beauty-of-all-substrings/
 */

const pr = console.log;

// Accepted --- 64ms
// reference: https://leetcode.com/contest/biweekly-contest-47/ranking/1/  Heltion 
const checkPowersOfThree = (n) => {
    while (n) {
        if (n % 3 == 2) return 0;
        n = n / 3 >> 0;
    }
    return 1;
};

const lg = Math.log10;
const checkPowersOfThree1 = (n) => {
    let pmax = lg(n) / lg(3) >> 0;
    // pr(pmax);
    let cnt = sum = 0;
    for (let i = 0; i <= pmax; i++) {
        if (sum > n) {
            cnt--;
            break;
        } else if (sum == n) {
            break;
        } else {
            sum += 3 ** i;
            cnt++;
        }
    }
    pr(sum, cnt - 1)
    for (let i = 0; i <= cnt; i++) {
        let sum = 0;
        for (let j = 0; j <= i; j++) { //don't know seems dfs
        }
    }
};

const main = () => {
    let n = 12;
    let n2 = 91;
    let n3 = 21;
    pr(checkPowersOfThree(n));
    pr(checkPowersOfThree(n2));
    pr(checkPowersOfThree(n3));
}

main()


// pr(3 ** 0 + 3 ** 1 + 3 ** 2 + 3 ** 3)