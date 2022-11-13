/**
 * 06/12/21 morning
 * https://leetcode.com/contest/biweekly-contest-54/problems/check-if-all-the-integers-in-a-range-are-covered/
 */

const pr = console.log;

// Accepted
const isCovered = (ranges, left, right) => {
    outer:
    for (let x = left; x <= right; x++) {
        for (const [start, end] of ranges) {
            if (x >= start && x <= end) continue outer;
        }
        return false;
    }
    return true;
};

const main = () => {
    let ranges = [[1, 2], [3, 4], [5, 6]], left = 2, right = 5;
    let ranges2 = [[1, 10], [10, 20]], left2 = 21, right2 = 21;
    pr(isCovered(ranges, left, right))
    pr(isCovered(ranges2, left2, right2))
};

main()