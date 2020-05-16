/**
 * 5.15 night
 * https://leetcode.com/problems/check-if-a-string-can-break-another-string/
 */

/**
 * https://www.acwing.com/file_system/file/content/whole/index/content/513389/
 * Accepted --- 940ms 61.4MB 6.62%
 */
const checkIfCanBreak_acwing = (s1, s2) => {
    s1 = csort(s1);
    s2 = csort(s2);
    // console.log(s1);
    // console.log(s2);

    let flag1 = true;
    let flag2 = true;
    let n = s1.length;
    for (let i = 0; i < n; i++) {
        if (s1[i] < s2[i]) {
            flag1 = false;
        } else if (s1[i] > s2[i]) {
            flag2 = false;
        }
    }
    return flag1 || flag2;
};

const csort = (s) => {
    return [...s].sort((a, b) => a.localeCompare(b)).join("");
    // return [...s].sort((a, b) => a.localeCompare(b));
};


// wrong, self-write
const checkIfCanBreak = (s1, s2) => {
    s1_permu = allPermutation(s1);
    s2_permu = allPermutation(s2);
    let allMap = [];
    for (let i = 0; i < s1_permu.length; i++) {
        for (let j = 0; j < s2_permu.length; j++) {
            let eachMap = transferToMap(s1_permu[i], s2_permu[j]);
            allMap.push(eachMap);
        }
    }
    // console.log(allMap);
    // console.log(allMap.length);

    let flag = false;
    for (const map of allMap) {
        for (const k of map.keys()) { // problems
            if (k >= map.get(k)) {
                flag = true;
            } else if (map.get(k) >= k) {
                flag = true;
            }
        }
    }
    return flag;
};

const transferToMap = (s1, s2) => {
    let map = new Map();
    let combine = s1.concat(s2);
    for (let i = 0; i < s1.length; i++) {
        map.set(combine[i], combine[i + s1.length]);
    }
    return map;
};

const allPermutation = (s) => {
    if (s.length < 2) return s;
    let permutations = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (s.indexOf(char) != i) continue;
        let remainingString = s.slice(0, i) + s.slice(i + 1, s.length); // substring() work the same
        for (let subPermutation of allPermutation(remainingString)) {
            permutations.push(char + subPermutation)
        }
    }
    return permutations;
};

const main = () => {
    let s1 = "abc",
        s2 = "xya";
    let s1_example2 = "abe",
        s2_example2 = "acd";
    let s1_example3 = "leetcodee",
        s2_example3 = "interview";

    // console.log(allPermutation(s1));
    // console.log(allPermutation(s2));

    console.log(checkIfCanBreak(s1, s2));
    console.log(checkIfCanBreak(s1_example2, s2_example2)); // wrong
    // console.log(checkIfCanBreak(s1_example3, s2_example3));  // too much permutations, out of memory

    /********************************************/
    console.log("");
    console.log(checkIfCanBreak_acwing(s1, s2)); // true
    console.log(checkIfCanBreak_acwing(s1_example2, s2_example2)); // false
    console.log(checkIfCanBreak_acwing(s1_example3, s2_example3)); // true
};

main()