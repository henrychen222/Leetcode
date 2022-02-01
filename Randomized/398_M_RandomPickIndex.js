/**
 * 01/31/22 evening
 * https://leetcode.com/problems/random-pick-index/
 */

const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

// Accepted --- 246ms 35.92%
function Solution(a) {
    let m = counter_value_in_indexA_in(a);
    return { pick }
    function pick(t) {
       let a = m.get(t), n = a.length, i = randN(n);
       // pr(a, i);
       return a[i - 1];
    }
    function randN(n) {
      return parseInt(Math.random() * n) + 1;
    }
}

const pr = console.log;
const main = () => {
    let solution = new Solution([1, 2, 3, 3, 3]);
    pr(solution.pick(3)); // 2 3 4
    pr(solution.pick(1));  // 0
    pr(solution.pick(3)); // 2 3 4
};

main()