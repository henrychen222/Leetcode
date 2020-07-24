/**
 * 7.23 night
 * https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
 */

// Accepted --- 964ms 53MB 8.90%
const minSteps = (s, t) => {
    let sArr = s.split("");
    let tArr = t.split("");
    let sElement = [...new Set(sArr)];
    let tElement = [...new Set(tArr)];
    let common = [];
    for (const se of sElement) {
        if (tElement.indexOf(se) != -1) {
            common.push(se);
        }
    }
    let sum = 0;
    for (const c of common) {
        let freqS = sArr.filter(x => x === c).length;
        let freqT = tArr.filter(x => x === c).length;
        sum += Math.min(freqS, freqT);
    }
    return s.length - sum;
};

// Accepted --- 1068ms 50.3MB 8.90%
const minSteps2 = (s, t) => {
    let sElement = [...new Set(s.split(""))];
    let tElement = [...new Set(t.split(""))];
    let common = [];
    for (const se of sElement) {
        if (tElement.indexOf(se) != -1) {
            common.push(se);
        }
    }
    let sum = 0;
    for (const c of common) {
        sum += Math.min(getFrequencyString(t, c), getFrequencyString(s, c));
    }
    return s.length - sum;
};

// Accepted --- 1064ms 50.6MB 8.90%
const minSteps1 = (s, t) => {
    let sElement = [...new Set(s.split(""))];
    let tElement = [...new Set(t.split(""))];
    let common = [];
    for (const se of sElement) {
        if (tElement.indexOf(se) != -1) {
            common.push(se);
        }
    }
    let data = [];
    for (const c of common) {
        data.push([c, getFrequencyString(t, c), getFrequencyString(s, c)]);
    }
    // console.log(data);
    let noChange = 0;
    for (const d of data) {
        noChange += Math.min(d[1], d[2]);
    }
    return s.length - noChange; // 共有的元素, 出现次数小的不需要更改. 其他都要改
};

const getFrequencyString = (str, item) => {
    return str.split("").filter(x => x === item).length;
};

const main = () => {
    let s = "bab",
        t = "aba";
    let s2 = "leetcode",
        t2 = "practice";
    let s3 = "anagram",
        t3 = "mangaar";
    let s4 = "xxyyzz",
        t4 = "xxyyzz";
    let s5 = "friend",
        t5 = "family";
    console.log(minSteps(s, t));
    console.log(minSteps(s2, t2));
    console.log(minSteps(s3, t3));
    console.log(minSteps(s4, t4));
    console.log(minSteps(s5, t5));
};

main()