/**
 * 12.26 morning
 * https://leetcode.com/contest/biweekly-contest-42/problems/average-waiting-time/
 */

// Accepted
const averageWaitingTime = (customers) => {
    let n = customers.length;
    let start = customers[0][0];
    let finish = start + customers[0][1];
    let wait = finish - start;
    for (let i = 1; i < n; i++) {
        // console.log(start, finish, wait);
        let c = customers[i];
        if (c[0] <= finish) {
            start = finish;
            finish += c[1];
            wait += finish - c[0];
        } else {
            finish = c[0];
            finish += c[1];
            wait += c[1];
        }
        // console.log(start, finish, wait);
    }
    return wait / n;
};

const main = () => {
    let customers = [[1, 2], [2, 5], [4, 3]];
    let customers2 = [[5, 2], [5, 4], [10, 3], [20, 1]];
    let debug1 = [[2, 3], [6, 3], [7, 5], [11, 3], [15, 2], [18, 1]]; // 4.16667
    console.log(averageWaitingTime(customers));
    console.log(averageWaitingTime(customers2));
    console.log(averageWaitingTime(debug1));
};

main()