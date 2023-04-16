/**
 * 04/17/21 morning
 * https://leetcode.com/contest/biweekly-contest-50/problems/maximum-xor-for-each-query/
 */

const pr = console.log;

// TLE  66/86
const getMaximumXor1 = (a, mb) => {
    let max = 2 ** mb;
    let res = [];
    let pre = [a[0]];
    let x = a[0];
    for (let i = 1; i < a.length; i++) {
        x ^= a[i];
        pre.push(x);
    }
    // pr(pre);
    while (a.length) {
        // pr(a);
        let x = pre[a.length - 1];
        let xmax = Number.MIN_SAFE_INTEGER;
        let kres;
        let record = [];
        for (let k = 0; k < max; k++) {
            let tmp = x ^ k;
            record.push(tmp);
            if (tmp > xmax) {
                xmax = tmp;
            }
        }
        a.pop();
        // pr("record", record);
        for (let i = 0; i <= record.length; i++) {
            if (record[i] == xmax) {
                kres = i;
                break;
            }
        }
        res.push(kres);
    }
    pr(max)
    return res;
};

// reference: uwi
// Accepted --- 264ms
const getMaximumXor = (a, mb) => {
    let max = 2 ** mb;
    let res = [];
    let pre = [a[0]];
    let x = a[0];
    for (let i = 1; i < a.length; i++) {
        x ^= a[i];
        pre.push(x);
    }
    // pr(pre);
    while (a.length) {
        // pr(a);
        let x = pre[a.length - 1];
        let f = max - 1;
        let kres = f ^ (x & f); // this step didn't know
        a.pop();
        res.push(kres);
    }
    return res;
};

const main = () => {
    let nums = [0, 1, 1, 3], maximumBit = 2;
    let nums2 = [2, 3, 4, 7], maximumBit2 = 3;
    let nums3 = [0, 1, 2, 2, 5, 7], maximumBit3 = 3;
    let nums4 = [0, 1, 2, 2, 5, 7], maximumBit4 = 20;
    let nums5 = Array(10 ** 3).fill(2), maximumBit5 = 20;
    pr(getMaximumXor(nums, maximumBit));
    pr(getMaximumXor(nums2, maximumBit2));
    pr(getMaximumXor(nums3, maximumBit3));
    pr(getMaximumXor(nums4, maximumBit4));
    // pr(getMaximumXor(nums5, maximumBit5));

};

main()


// pr(2, 2 ^ 3, 2 ^ 3 ^ 4, 2 ^ 3 ^ 4 ^ 7)
// pr(2 ** 20 , 10 ** 5)