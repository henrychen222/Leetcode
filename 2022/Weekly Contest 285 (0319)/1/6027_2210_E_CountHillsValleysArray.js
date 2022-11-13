/**
 * 03/19/22 evening
 * https://leetcode.com/contest/weekly-contest-285/problems/count-hills-and-valleys-in-an-array/
 */

const pr = console.log;


// WA hidden case
const countHillValley1 = (a) => {
    let n = a.length, res = new Set();
    for (let i = 1; i < n - 1; i++) {
        let left, right;
        for (let j = i - 1; j >= 0; j--) {
            if (a[j] != a[i]) {
                left = a[j];
                break;
            }
        }
        for (let j = i + 1; j < n; j++) {
            if (a[j] != a[i]) {
                right = a[j];
                break;
            }
        }
        // pr(left, a[i], right)
        if (left && right) {
            if ((a[i] > left && a[i] > right) || (a[i] < left && a[i] < right)) res.add(left + " " + a[i] + " " + right);
        }
    }
    // pr(res);
    return res.size;
};


const cutMaxConsecutive = (a_or_s) => { let d = [], start = 0, n = a_or_s.length; for (let i = 0; i + 1 < n; i++) { if (a_or_s[i + 1] != a_or_s[i]) { d.push(a_or_s.slice(start, i + 1)); start = i + 1; } } d.push(a_or_s.slice(start)); return d; };

// Accepted
const countHillValley = (a) => {
    let d = cutMaxConsecutive(a), res = 0, n = d.length;
    pr(d);
    for (let i = 1; i < n - 1; i++) {
        let cur = d[i], left = d[i - 1], right = d[i + 1];
        if (cur[0] > left[left.length - 1] && cur[0] > right[0]) res++;
        if (cur[0] < left[left.length - 1] && cur[0] < right[0]) res++;
    }
    return res;
};

const main = () => {
    let nums = [2, 4, 1, 1, 6, 5];
    let nums2 = [6, 6, 5, 5, 4, 1];
    let nums3 = [8, 2, 5, 7, 7, 2, 10, 3, 6, 2];
    pr(countHillValley(nums))
    pr(countHillValley(nums2))
    pr(countHillValley(nums3))
};

main()