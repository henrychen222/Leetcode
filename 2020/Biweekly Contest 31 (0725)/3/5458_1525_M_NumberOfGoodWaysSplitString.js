/**
 * 7.25 morning
 * https://leetcode.com/contest/biweekly-contest-31/problems/number-of-good-ways-to-split-a-string/
 * https://leetcode.com/problems/number-of-good-ways-to-split-a-string/discuss/755488/javascript-solution 
 */

// Time Limit 56/61
const numSplits = (s) => {
    let n = s.length;
    let cnt = 0;
    let left = new Set();
    for (let i = 0; i < n; i++) {
        left.add(s[i]);
        let right = new Set();
        for (let j = i + 1; j < n; j++) {
            // if (!left.has(s[j])) break;
            right.add(s[j]);
        }
        if (left.size == right.size) cnt++;
    }
    return cnt;
};

// Time Limit 54/61
const numSplits2 = (s) => {
    let n = s.length;
    let cnt = 0;
    let left = "";
    for (let i = 0; i < n; i++) {
        left += s[i];
        let right = "";
        // right += s[n - i - 1];
        for (let j = i + 1; j < n; j++) {
            right += s[j];
        }
        // console.log(left, right);
        if ([...new Set(left.split(""))].length == [...new Set(right.split(""))].length) cnt++;
    }
    return cnt;
};


// Time Limit 54/61
const numSplits1 = (s) => {
    let cnt = 0;
    for (let i = 1; i < s.length; i++) {
        let l = new Set();
        let r = new Set();
        // let l = [];
        // let r = [];
        for (let j = 0; j < i; j++) {
            // l.push(s[j]);
            l.add(s[j]);
        }
        for (let j = i; j < s.length; j++) {
            // r.push(s[j]);
            r.add(s[j]);
        }
        // console.log(l, r);
        if (l.size == r.size) cnt++;
    }
    return cnt;
};

const main = () => {
    let s = "aacaba";
    let s2 = "abcd";
    let s3 = "aaaaa";
    let s4 = "acbadbaada";
    console.log(numSplits(s)); // 2
    console.log(numSplits(s2)); // 1
    console.log(numSplits(s3)); // 4
    console.log(numSplits(s4)); // 2
};

main()