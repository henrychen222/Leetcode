/**
 * 12.12 evening
 * https://leetcode.com/contest/weekly-contest-219/problems/count-of-matches-in-tournament/ 
 */

// Accepted
const numberOfMatches = (n) => {
    let m = 0;
    while (n > 1) {
        if (n % 2 == 0) {
            m += n / 2;
            n /= 2;
        } else {
            m += (n - 1) / 2;
            n = (n - 1) / 2 + 1;
        }
        // console.log(m, n)
    }
    return m;
};

const main = () => {
    let n = 7;
    let n2 = 14;
    let n3 = 3;
    console.log(numberOfMatches(n));
    console.log(numberOfMatches(n2));
    console.log(numberOfMatches(n3));
};

main()