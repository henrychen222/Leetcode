/**
 * 12/25/21 evening
 * https://leetcode.com/contest/weekly-contest-273/problems/intervals-between-identical-elements/
 */

const pr = console.log;

const counter_value_in_indexA_in = (a_or_s) => { let m = new m(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

// TLE
// https://www.geeksforgeeks.org/sum-of-absolute-differences-of-indices-of-occurrences-of-each-array-element/
const getDistances1 = (a) => {
    let n = a.length, m = counter_value_in_indexA_in(a), res = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (const e of m.get(a[i])) {
            sum += Math.abs(e - i);
        }
        res[i] = sum;
    }
    return res;
};


function pair(count, prevIndex) {
    this.count = count;
    this.prevIndex = prevIndex;
}

// Accepted
// reference: https://www.geeksforgeeks.org/sum-of-absolute-differences-of-indices-of-occurrences-of-each-array-element-set-2/
const getDistances2 = (a) => {
    let n = a.length, m = new Map();
    let left = Array(n).fill(0);
    let right = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (!m.has(a[i])) {
            left[i] = 0;
            m.set(a[i], new pair(1, i));
        } else {
            let tmp = m.get(a[i]);
            left[i] = (tmp.count) * (i - tmp.prevIndex) + left[tmp.prevIndex];
            m.set(a[i], new pair(tmp.count + 1, i));
        }
    }
    m.clear();
    for (let i = n - 1; i >= 0; i--) {
        if (!m.has(a[i])) {
            right[i] = 0;
            m.set(a[i], new pair(1, i));
        }
        else {
            let tmp = m.get(a[i]);
            right[i] = (tmp.count) * (Math.abs(i - tmp.prevIndex)) + right[tmp.prevIndex];
            m.set(a[i], new pair(tmp.count + 1, i));
        }
    }
    // pr(left, right);
    let res = [];
    for (let i = 0; i < n; i++) res.push(left[i] + right[i]);
    return res;
};

////////////////////////////////////// After Contest //////////////////////////////////
// Accepted --- 516ms clean code
const getDistances = (a) => {
    let n = a.length, m = new Map();
    let left = Array(n).fill(0);
    let right = Array(n).fill(0);
    for (let i = 0; i < n; i++) operate(i, a[i], m, left);
    m.clear();
    for (let i = n - 1; i >= 0; i--) operate(i, a[i], m, right);
    let res = [];
    for (let i = 0; i < n; i++) res.push(left[i] + right[i]);
    return res;
};

const operate = (i, x, m, cnt) => {
    if (!m.has(x)) {
        cnt[i] = 0;
        m.set(x, [1, i]); // [count, previous index]
    } else {
        let a = m.get(x);
        cnt[i] = a[0] * (Math.abs(i - a[1])) + cnt[a[1]];
        m.set(x, [a[0] + 1, i]);
    }
};

const main = () => {
    let a = [2, 1, 3, 1, 2, 3, 3];
    let a2 = [10, 5, 10, 10];
    pr(getDistances(a))
    pr(getDistances(a2))
};

main()

/*

  2 + 5 + 6 = 13

  5 - 2 + 6 - 2 = 11 - 4 = 7;

  5 - 2 + 6 - 5 = -2 + 6 = 4

  6 - 2 + 6 - 5 = 12

  = 5 * (len - 1) - (2 + 6)
                = 5 * (len - 1) - (sum - 5)
                = 5 * (3 - 1) - (13 - 5)


 */