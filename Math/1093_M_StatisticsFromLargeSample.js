/**
 * 03/02/21 afternoon
 * https://leetcode.com/problems/statistics-from-a-large-sample/
 * 
 * read: https://leetcode.com/problems/statistics-from-a-large-sample/discuss/317573/Confused!
 */

const pr = console.log;

// Accepted --- 84ms 40.00%
let n;
const sampleStats2 = (c) => {
    let mode = c.indexOf(Math.max.apply(Math, c));
    let min, max;
    n = c.length;
    for (let i = 0; i < n; i++) {
        if (c[i] != 0) {
            min = i;
            break;
        }
    }
    for (let i = n - 1; ~i; i--) {
        if (c[i] != 0) {
            max = i;
            break;
        }
    }
    let sum = na = 0;
    for (let i = 0; i < n; i++) {
        if (c[i] == 0) continue;
        sum += i * c[i];
        na += c[i];
    }
    // pr(sum, na, recover(c).reduce((x, y) => x + y), recover(c).length)
    let mean = sum / na;
    // pr(na, recover(c))
    let median;
    if (na & 1) {
        median = getKthElement(c, (na >> 1) + 1);
    } else {
        let left = getKthElement(c, na / 2);
        // pr("------")
        let right = getKthElement(c, na / 2 + 1);
        // pr(left, right)
        median = (left + right) / 2;
    }
    return [min, max, mean, median, mode];
};

// Accepted --- 88ms 30.00%
const sampleStats = (c) => {
    let min, max;
    n = c.length;
    for (let i = 0; i < n; i++) {
        if (c[i] != 0) {
            min = i;
            break;
        }
    }
    for (let i = n - 1; ~i; i--) {
        if (c[i] != 0) {
            max = i;
            break;
        }
    }
    let sum = na = maxForMode = 0;
    for (let i = 0; i < n; i++) {
        if (c[i] == 0) continue;
        sum += i * c[i];
        na += c[i];
        maxForMode = Math.max(maxForMode, c[i]); // diff
    }
    let mode = c.indexOf(maxForMode); // diff
    let mean = sum / na;
    let median;
    if (na & 1) {
        median = getKthElement(c, (na >> 1) + 1);
    } else {
        let left = getKthElement(c, na / 2);
        let right = getKthElement(c, na / 2 + 1);
        median = (left + right) / 2;
    }
    return [min, max, mean, median, mode];
};

const getKthElement = (c, k) => {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (c[i] == 0) continue;
        cnt += c[i];
        // pr(cnt);
        if (cnt == k) {
            // pr("==")
            return i;
        } else if (cnt > k) {
            // pr(">")
            let diff = cnt - k;
            if (diff <= c[i]) {
                return i;
            } else {
                return i - 1;
            }
        }
    }
};

// TLE 29/46
const sampleStats1 = (count) => {
    let a = recover(count);
    pr(a);
    a.sort((x, y) => x - y);
    let n = a.length;
    let min = Math.min.apply(Math, a);
    let max = Math.max.apply(Math, a);
    let mean = sum(a) / n;
    let mode = CounterSortByValue(a).keys().next().value;
    return [min, max, mean, median(a, n), mode];
};

const recover = (c) => {
    let a = [];
    let n = c.length;
    for (let k = 0; k < n; k++) {
        if (c[k] == 0) continue;
        let tmp = Array(c[k]).fill(k);
        a = a.concat(tmp);
        // a = [...a, ...tmp];
    }
    return a;
};

const sum = (a) => a.reduce((x, y) => x + y);

const median = (a, n) => {
    let m = n >> 1;
    return n & 1 ? a[m] : (a[m - 1] + a[m]) / 2;
};

const CounterSortByValue = (arr) => {
    let map = new Map();
    for (const i of arr) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    map = new Map([...map].sort((a, b) => b[1] - a[1]));
    return map;
};

const main = () => {
    let count = [0, 1, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let count2 = [0, 4, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let debug1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 249, 832, 1376, 1974, 2432, 2984, 3696, 4088, 4727, 5235, 5836, 6410, 6957, 7400, 8287, 8712, 9334, 9696, 10234, 10742, 11520, 11976, 12587, 12991, 13517, 13941, 14638, 15154, 15814, 16354, 16759, 17544, 17963, 18455, 19201, 19888, 20180, 20754, 21454, 21935, 21955, 21495, 21218, 20799, 20370, 19828, 19402, 18705, 18353, 17986, 17553, 17266, 16648, 16380, 15765, 15346, 15115, 14490, 13927, 13544, 13073, 12803, 12264, 11570, 11219, 11131, 10340, 9974, 9520, 9239, 8711, 8247, 7704, 7300, 6890, 6412, 6032, 5468, 5142, 4605, 4269, 3827, 3374, 2801, 2497, 2029, 1588, 1064, 697, 239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    pr(sampleStats(count));
    pr(sampleStats(count2));
    pr(sampleStats(debug1));
};

main()