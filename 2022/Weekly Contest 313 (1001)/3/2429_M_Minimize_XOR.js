/*
 * 10/01/22 evning
 * https://leetcode.com/contest/weekly-contest-313/problems/minimize-xor/
 */

const pr = console.log;

// Accepted
const minimizeXor = (a, b) => {
    let sa = a.toString(2), sb = b.toString(2), one = 0, min = 0, n = Math.max(sa.length, sb.length), used = new Set();
    if (sa.length < n) sa = '0'.repeat(n - sa.length) + sa;
    if (sb.length < n) sb = '0'.repeat(n - sb.length) + sb;
    sa = sa.split("");
    for (const c of sb) {
        if (c == '1') one++;
    }
    // pr(sa, sb, one);
    for (let i = 0; i < sa.length && one > 0; i++) {
        if (sa[i] == '1') { // 1 ^ 1
            one--;
            sa[i] = '0';
            used.add(i);
        }
    }
    // pr(sa, one);
    if (one > 0) {
        for (let i = sa.length - 1; ~i && one > 0; i--) { // 0 ^ 1
            if (sa[i] == '0' && !used.has(i)) {
                sa[i] = '1';
                one--;
            }
        }
    }
    // pr(sa, one)
    for (let i = sa.length - 1; ~i; i--) {
        if (sa[i] == '1') min += 1 << sa.length - i - 1;
    }
    // pr("min", min)
    return min ^ a;
};


const main = () => {
    let a = 3, b = 5;
    let a2 = 1, b2 = 12;
    pr(minimizeXor(a, b))
    pr(minimizeXor(a2, b2))
};

main()


// 0001
// ****
// 1100
