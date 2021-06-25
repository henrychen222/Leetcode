/**
 * 06/24/21 evening
 * https://leetcode.com/problems/my-calendar-iii/
 */

// Accepted --- 1164ms 13.12%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/8005054.html
 * https://leetcode.com/problems/my-calendar-iii/discuss/109556/JavaC%2B%2B-Clean-Code
 */
function MyCalendarThree() {
    let tm = {};
    return { book }
    function book(start, end) {
        // pr(tm);
        tm[start] = (tm[start] || 0) + 1;
        tm[end] = (tm[end] || 0) - 1;
        // tm.hasOwnProperty(start) ? tm[start]++: tm[start] = 1;  // Accepted --- 1152ms
        // tm.hasOwnProperty(end) ? tm[end]--: tm[end] = -1;
        let k = res = 0;
        for (const ke in tm) {
            k += tm[ke];
            // pr(k);
            res = Math.max(res, k);
        }
        return res;
    }
}

// don't know
function MyCalendarThree1() {
    let d = [];
    let k = 1;
    return {
        book
    }

    function book(start, end) {
        if (d.length == 0) {
            d.push([start, end]);
            return k;
        }
        for (const [curStart, curEnd] of d) {
            if (start >= curEnd || end <= curStart) continue;
            k++;
        }
        d.push([start, end]);
        return k;
    }
}

const pr = console.log;
const main = () => {
    let myCalendar = new MyCalendarThree();
    pr(myCalendar.book(10, 20)); // 1
    pr(myCalendar.book(50, 60)); // 1
    pr(myCalendar.book(10, 40)); // 2
    pr(myCalendar.book(5, 15)); // 3
    pr(myCalendar.book(5, 10)); // 3
    pr(myCalendar.book(25, 55)); // 3
};

main()

// let m = {};
// m[100] = 1;
// m[56] = 1;
// m[45] = 1;
// m[0] = 1;
// m[Number.MAX_SAFE_INTEGER] = 1;
// pr(m);