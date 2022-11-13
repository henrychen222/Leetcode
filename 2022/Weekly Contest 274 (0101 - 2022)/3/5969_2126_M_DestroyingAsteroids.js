/**
 * 01/01/22 evening
 * https://leetcode.com/contest/weekly-contest-274/problems/destroying-asteroids/
 */

const pr = console.log;

// Accepted
const asteroidsDestroyed = (mass, a) => {
    a.sort((x, y) => x - y);
    // pr(a);
    let n = a.length, sum = mass;
    for (let i = 0; i < n; i++) {
        // pr(sum, a[i]);
        if (sum >= a[i]) {
            sum += a[i];
        } else {
            return false;
        }
    }
    // pr("total", sum);
    return true;
};

const main = () => {
    let mass = 10, asteroids = [3, 9, 19, 5, 21];
    let mass2 = 5, asteroids2 = [4, 9, 23, 4];
    pr(asteroidsDestroyed(mass, asteroids))
    pr(asteroidsDestroyed(mass2, asteroids2))
};

main()