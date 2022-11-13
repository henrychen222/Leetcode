/**
 * 08/21/21 evening
 * https://leetcode.com/contest/weekly-contest-255/problems/find-unique-binary-string/
 */

const pr = console.log;

// Accepted
const findDifferentBinaryString = (nums) => {
    let n = nums.length;
    let se = new Set();
    for (const s of nums) {
        let tmp = parseInt(s, 2);
        // pr(tmp);
        se.add(tmp);
    }
    let a = [...se];
    a.sort((x, y) => x - y);
    let min = a[0], max = a[a.length - 1];
    // pr(a, min, max);
    for (let x = min + 1; x < max; x++) {
        let s = x.toString(2);
        if (!se.has(x) && s.length == n) return s;
    }
    let res = (max + 1).toString(2);
    let res2 = (min - 1).toString(2);
    // pr("res1", res, n)
    if (res.length < n) {
        res = '0'.repeat(n - res.length) + res;
        return res;
    } else if (res.length == n) {
        return res;
    } else {
        // pr("res2", res2)
        if (res2.length < n) res2 = '0'.repeat(n - res2.length) + res2;
        return res2;
    }
};

const main = () => {
    let nums = ["01", "10"];
    let nums2 = ["00", "01"];
    let nums3 = ["111", "011", "001"];
    let debug1 = ["00", "00"];
    let debug2 = ["1"];
    let debug3 = ["10", "11"];
    let debug4 = ["1001","1000","0110","1111"];
    pr(findDifferentBinaryString(nums))
    pr(findDifferentBinaryString(nums2))
    pr(findDifferentBinaryString(nums3))
    pr(findDifferentBinaryString(debug1)) // 01
    pr(findDifferentBinaryString(debug2)) // 0
    pr(findDifferentBinaryString(debug3)) // "00" "01"
    pr(findDifferentBinaryString(debug4)) // "0001" "1010"
};

main()