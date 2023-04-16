/*
 * 01/07/22 morning
 * https://leetcode.com/contest/biweekly-contest-95/problems/find-consecutive-integers-from-a-data-stream/
 */

const pr = console.log;

// Accepted
function DataStream(v, k) {
    let a = [];
    return { consec }
    function consec(x) {
        a.push(x);
        if (a.length < k) return false;
        for (let i = a.length - 1, cnt = 0; cnt < k && i >= 0; cnt++, i--) {
            if (a[i] != v) return false;
        }
        return true;
    }
}

const main = () => {
    let dataStream = new DataStream(4, 3);
    pr(dataStream.consec(4)); // false
    pr(dataStream.consec(4)); // false
    pr(dataStream.consec(4)); // true
    pr(dataStream.consec(3)); // false
};

main()