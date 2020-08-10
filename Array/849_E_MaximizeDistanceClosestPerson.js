/**
 * 8.9 night
 * https://leetcode.com/problems/maximize-distance-to-closest-person/
 */

// Accepted --- 84ms 39.5MB 57.14%
const maxDistToClosest = (seats) => {
    let min = Number.MAX_VALUE;
    let res = [];
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] == 0) {
            let a, b;
            for (let r = i + 1; r < seats.length; r++) {
                if (seats[r] == 1) {
                    a = r - i;
                    break;
                }
            }
            for (let l = i - 1; l >= 0; l--) {
                if (seats[l] == 1) {
                    b = i - l;
                    break;
                }
            }
            // console.log(a, b);
            if (a == undefined) {
                res.push(b);
            } else if (b == undefined) {
                res.push(a);
            } else {
                res.push(Math.min(a, b));
            }
        }
    }
    res.sort((a, b) => b - a);
    return res[0];
};

const main = () => {
    let seats = [1, 0, 0, 0, 1, 0, 1];
    let seats2 = [1, 0, 0, 0];
    console.log(maxDistToClosest(seats));
    console.log(maxDistToClosest(seats2));
};

main()