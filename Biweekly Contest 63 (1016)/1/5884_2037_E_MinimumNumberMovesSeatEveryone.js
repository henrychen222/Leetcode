/**
 * 10/16/21 morning
 * https://leetcode.com/contest/biweekly-contest-63/problems/minimum-number-of-moves-to-seat-everyone/
 */

const pr = console.log;


const stin = (a) => a.sort((x, y) => x - y);

// Accepted
const minMovesToSeat = (a, b) => {
    stin(a);
    stin(b);
    // pr(a)
    // pr(b);
    let n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        res += Math.abs(a[i] - b[i]);
    }
    return res;
};

const main = () => {
    let seats = [3, 1, 5], students = [2, 7, 4];
    let seats2 = [4, 1, 5, 9], students2 = [1, 3, 2, 6];
    let seats3 = [2, 2, 6, 6], students3 = [1, 3, 2, 6];
    pr(minMovesToSeat(seats, students))
    pr(minMovesToSeat(seats2, students2))
    pr(minMovesToSeat(seats3, students3))
};

main()