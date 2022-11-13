/**
 * 12.12 morning
 * https://leetcode.com/contest/biweekly-contest-41/problems/count-the-number-of-consistent-strings/
 */

const countConsistentStrings = (allowed, words) => {
    let cnt = 0;
    for (const w of words) {
        if (ok(allowed, w)) cnt++;
    }
    return cnt;
};

const ok = (allow, s) => {
    for (const c of s) {
        if (allow.indexOf(c) == -1) {
            return false;
        }
    }
    return true;
};

const main = () => {
    let allowed = "ab", words = ["ad", "bd", "aaab", "baa", "badab"];
    let allowed2 = "abc", words2 = ["a", "b", "c", "ab", "ac", "bc", "abc"];
    let allowed3 = "cad", words3 = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
    console.log(countConsistentStrings(allowed, words));
    console.log(countConsistentStrings(allowed2, words2));
    console.log(countConsistentStrings(allowed3, words3));
};

main()