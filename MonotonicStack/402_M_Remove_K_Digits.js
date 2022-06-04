/**
 * 06/02/22 night
 * https://leetcode.com/problems/remove-k-digits/
 */

const pr = console.log;

// Accepted --- 91ms 65.63%
const removeKdigits = (s, k) => MonotonicStack(s, k);

const MonotonicStack = (s, k) => {
    if (k == s.length) return '0';
    let st = [];
    for (const c of s) {
        while (k && c < st[st.length - 1]) {
            st.pop();
            k--;
        }
        st.push(c);
    }
    // pr(st, k)
    while (k--) st.pop();
    // pr(st, k)
    if (new Set(st).size == 1 && st[0] == '0') return '0';
    let p = 0;
    while (st[p] == '0') p++;
    return st.slice(p).join("");
};

const main = () => {
    let s = "1432219", k = 3;
    let s2 = "10200", k2 = 1;
    let s3 = "10", k3 = 2;
    let s_debug1 = "9", k_debug1 = 1;
    let s_debug2 = "112", k_debug2 = 1;
    let s_debug3 = "10", k_debug3 = 1;
    pr(removeKdigits(s, k))
    pr(removeKdigits(s2, k2))
    pr(removeKdigits(s3, k3))
    pr(removeKdigits(s_debug1, k_debug1)) // "0"
    pr(removeKdigits(s_debug2, k_debug2)) // "11"
    pr(removeKdigits(s_debug3, k_debug3)) // "0"
};

main()