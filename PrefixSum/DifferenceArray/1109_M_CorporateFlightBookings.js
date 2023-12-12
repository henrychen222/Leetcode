/*
 * 07/15/23 night
 * https://leetcode.com/problems/corporate-flight-bookings/
 */

const pr = console.log;

function DiffArray(n) {
    let d = Array(n).fill(0);
    return { addRange, recover }
    function addRange(l, r, v) {
        d[l] += v;
        if (r + 1 < n) d[r + 1] -= v;
    }
    function recover() {
        let res = Array(n).fill(0);
        res[0] = d[0];
        for (let i = 1; i < n; i++) res[i] = res[i - 1] + d[i];
        return res;
    }
}

// Accepted --- 165ms
const corpFlightBookings = (bookings, n) => {
    let da = new DiffArray(n + 1);
    for (const [l, r, v] of bookings) {
        da.addRange(l, r, v);
    }
    let res = da.recover();
    // pr(res);
    return res.slice(1);
};

const main = () => {
    let bookings = [[1, 2, 10], [2, 3, 20], [2, 5, 25]], n = 5;
    let bookings2 = [[1, 2, 10], [2, 2, 15]], n2 = 2
    pr(corpFlightBookings(bookings, n))
    pr(corpFlightBookings(bookings2, n2))
};

main()