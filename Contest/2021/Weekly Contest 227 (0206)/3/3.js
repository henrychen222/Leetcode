/**
 * 2.6 evening
 * https://leetcode.com/contest/weekly-contest-227/problems/largest-merge-of-two-strings/
 */

// don't know: not sure greedy or dfs
const largestMerge = (word1, word2) => {
    let a1 = word1.split("");
    let a2 = word2.split("");
    let res = '';
    while (true) {
        let asc1 = a1[0].charCodeAt();
        let asc2 = a2[0].charCodeAt();
        if (asc1 > asc2) {
            res += a1[0];
            a1.shift();
        } else if (asc1 < asc2) {
            res += a2[0];
            a2.shift();
        } else {
            // let n = Math.max(a1.length, a2.length);
            let idx = n - 1;
            let useOne = false;
            let useTwo = false;
            let c1 = '';
            let c2 = '';
            for (let i = 1; ; i++) {
                let t1 = a1[i].charCodeAt();
                let t2 = a2[i].charCodeAt();
                if (a1[i] != undefined) {
                    if (a2[i] != undefined) {
                        if (a1[i] != a2[i]) {
                            c1 = a1[i];
                            c2 = a2[i];
                            break;
                        }
                    } else {
                        c2 = a2[i - 1];
                        c1 = a1[i];
                        break;
                    }
                } else {
                    if (a2[i] != undefined) {
                        c1 = a1[i - 1];
                        c2 = a2[i];
                        break;
                    } else {
                    }
                }
            }
        }
    }
};


const isLexicographicallyLarger = (la, sm) => {
    let a = [la, sm];
    a.sort((x, y) => y.localeCompare(x));
    return a[0] == la;
};

const main = () => {
    let word1 = "cabaa", word2 = "bcaaa";
    let word1_2 = "abcabc", word2_2 = "abdcaba";
    console.log(largestMerge((word1, word2)));
    console.log(largestMerge((word1_2, word2_2)));
};

// main()

// console.log(isLexicographicallyLarger('abcd', 'abcc')) // true;

// if (t1 > t2) {
//     useOne = true;
//     break;
// } else if (t1 < t2) {
//     useTwo = true;
//     break;
// } else {
//     continue;
// }