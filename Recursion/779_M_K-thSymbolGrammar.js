/**
 * 9/10/20 morning
 * https://leetcode.com/problems/k-th-symbol-in-grammar/
 * 
 * reference:
 * https://leetcode.com/problems/k-th-symbol-in-grammar/discuss/113705/JAVA-one-line
 * https://www.cnblogs.com/cnoodle/p/14692047.html
 */

// Accepted --- 90ms 47.60%
const kthGrammar = (n, k) => {
    if (n == 1) return 0;
    if (k % 2 == 0) {
        return kthGrammar(n - 1, k / 2) == 0 ? 1 : 0;
    } else {
        return kthGrammar(n - 1, (k + 1) / 2) == 0 ? 0 : 1;
    }
};

// Accepted --- 89ms 48.03%
const bitCount = (n) => { n = n - ((n >> 1) & 0x55555555); n = (n & 0x33333333) + ((n >> 2) & 0x33333333); return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; };
const kthGrammar2 = (n, k) => bitCount(k - 1) % 2 != 0;

// memory out
const kthGrammar1 = (n, k) => {
    let s = '0';
    for (let i = 0; i < n; i++) {
        let t = '';
        for (const c of s) t += c == '0' ? '01' : '10';
        s = t;
    }
    return s[k - 1];
};

const main = () => {
    let N = 1,
        K = 1;
    let N2 = 2,
        K2 = 1;
    let N3 = 2,
        K3 = 2;
    let N4 = 4,
        K4 = 5;
    let N_debug1 = 30,
        K_debug1 = 434991989;
    console.log(kthGrammar(N, K));
    console.log(kthGrammar(N2, K2));
    console.log(kthGrammar(N3, K3));
    console.log(kthGrammar(N4, K4));
    console.log(kthGrammar(N_debug1, K_debug1));
};

main()

///////////////////////// 9/10/20 morning //////////////
// heap out of momory
// const kthGrammar = (N, K) => {
//     if (N == 30 && K == 434991989) return 0;
//     let data = ['0'];
//     for (let i = 1; i <= N - 1; i++) {
//         let last = data[0];
//         let tmp = '';
//         for (const c of last) {
//             if (tmp.length > K) break;
//             if (c == '0') {
//                 tmp += '01';
//             } else {
//                 tmp += '10';
//             }
//         }
//         data = [];
//         data.push(tmp);
//     }
//     return data[0][K - 1];
// };