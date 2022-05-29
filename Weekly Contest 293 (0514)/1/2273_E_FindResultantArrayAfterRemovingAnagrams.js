/**
 * 05/14/22 evening
 * https://leetcode.com/contest/weekly-contest-293/problems/find-resultant-array-after-removing-anagrams/
 */

const pr = console.log;

const isAnagram = (s, t) => s.split("").sort().join("") == t.split("").sort().join("");

// Accepted
const removeAnagrams = (a) => {
    while (1) {
        let find = false;
        for (let i = 1; i < a.length; i++) {
            if (isAnagram(a[i - 1], a[i])) {
                a.splice(i, 1);
                find = true;
                break;
            }
        }
        if (!find) break;
    }
    return a;
};

const main = () => {
    let words = ["abba", "baba", "bbaa", "cd", "cd"];
    let words2 = ["a", "b", "c", "d", "e"];
    pr(removeAnagrams(words))
    pr(removeAnagrams(words2))
};

main()