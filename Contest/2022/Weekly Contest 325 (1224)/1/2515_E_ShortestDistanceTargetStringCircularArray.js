/*
 * 12/24/22 evening
 * https://leetcode.com/contest/weekly-contest-325/problems/shortest-distance-to-target-string-in-a-circular-array/
 */

const pr = console.log;

const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

// Accepted
const closetTarget = (words, target, startIndex) => {
    let m = counter_value_in_indexA_in(words), res = Number.MAX_SAFE_INTEGER;
    if (!m.has(target)) return -1;
    let a = m.get(target);
    for (const idx of a) {
        let small = Math.min(idx, startIndex), large = Math.max(idx, startIndex);
        // pr(small, large)
        let dis = indexMove(words.length, small, large);
        res = Math.min(res, dis);
    }
    return res;
};

const indexMove = (n, small, large) => {
    let moveRight = large - small, moveLeft = small + n - large;
    // pr(n, "moveRight", moveRight, "moveLeft", moveLeft);
    return Math.min(moveLeft, moveRight);
};

const main = () => {
    let words = ["hello", "i", "am", "leetcode", "hello"], target = "hello", startIndex = 1;
    let words2 = ["a", "b", "leetcode"], target2 = "leetcode", startIndex2 = 0;
    let words3 = ["i", "eat", "leetcode"], target3 = "ate", startIndex3 = 0;
    pr(closetTarget(words, target, startIndex))
    pr(closetTarget(words2, target2, startIndex2))
    pr(closetTarget(words3, target3, startIndex3))
};

main()