/**
 * 12.8 afternoon
 * https://leetcode.com/problems/airplane-seat-assignment-probability/
 */

// Accepted --- 80ms 39.02%
const nthPersonGetsNthSeat = (n) => {
    return n == 1 ? 1 : 0.5;
};

const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 3;
    console.log(nthPersonGetsNthSeat(n));
    console.log(nthPersonGetsNthSeat(n2));
    console.log(nthPersonGetsNthSeat(n3));
};

main()