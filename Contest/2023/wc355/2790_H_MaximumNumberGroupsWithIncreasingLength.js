/*
 * 07/22/23 evening
 * https://leetcode.com/contest/weekly-contest-355/problems/maximum-number-of-groups-with-increasing-length/
 */

const pr = console.log;

const sumOfRange = (l, r) => (l + r) * (r - l + 1) / 2;

// WA
const maxIncreasingGroups1 = (a) => {
    a.sort((x, y) => x - y);
    let cur = 1, i;
    for (i = 0; i < a.length; i++) {
        if (a[i] < cur++) {
            break;
        }
    }
    return i;
};

const maxIncreasingGroups2 = (a) => {
    a.sort((x, y) => y - x);
    let i;
    pr(a)
    for (i = 1; i < a.length; i++) {
        if (a[i - 1] - a[i] <= 0) {
            break;
        }
    }
    // pr("i", i)
    return i;
};


const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

const maxIncreasingGroups3 = (a) => {
    let pq = new MinPriorityQueue({ compare: (x, y) => x - y }), max = 1, res = 0;
    a.sort((x, y) => y - x);
    let i;
    for (i = 0; i < a.length; i++) {
        let x = a[i];
        pr("front", pq.front(), "x", a[i])
        if (pq.isEmpty() || pq.front() >= max++) {
            pq.enqueue(x - 1);
            res++;
        } else {
            break;
        }
    }
    // pr("i", i)
    return res;
};

/////////////////////////////////////////////////////
// WA
const maxIncreasingGroups4 = (a) => {
    a.sort((x, y) => y - x);
    pr(a)
    let n = a.length;
    for (let group = 1; ; group++) {
        pr('group', group)
        for (let i = 0; i < n; i++) {
            let cut = group - i, rest = a[i] - cut;
            pr(a[i], "cut", cut, rest)
            if (rest <= 0) return Math.min(n, group);
        }
    }
};

// Accepted --- https://leetcode.cn/circle/discuss/1AqXeK/ 
const maxIncreasingGroups = (a) => {
    a.sort((x, y) => x - y);
    let cur = 0, res = 0;
    for (const x of a) {
        cur += x;
        if (cur >= res + 1) {
            res++;
            cur -= res;
        }
    }
    return res;
};


const main = () => {
    let a = [1, 2, 5];
    let a2 = [2, 1, 2];
    let a3 = [1, 1];
    let a_debug1 = [1, 1, 5];
    let a_debug2 = [2, 3];
    let a_debug3 = [2, 2, 2];
    pr(maxIncreasingGroups(a))
    pr(maxIncreasingGroups(a2))
    pr(maxIncreasingGroups(a3))
    pr(maxIncreasingGroups(a_debug1)) // 2
    pr(maxIncreasingGroups(a_debug2)) // 2
    pr(maxIncreasingGroups(a_debug3)) // 3
};

main()

/*
            group  min
[5, 2, 1]    1
[4, 2, 1]    2
[3, 1, 1]    3
[2, 0, 0]


[2, 2, 1]   1
[1, 2, 1]   2
[0, 1, 1]

[1, 1]     1
[0, 1]

[5, 1, 1]  1
[4, 1, 1]  2
[3, 0, 1]

[3, 2]    1
[2, 2]    2
[1, 1]    


[2, 2, 2]  1
[1, 2, 2]  2
[0, 1, 2]  
*/