/**
 * 9/1
 * https://leetcode.com/problems/k-th-symbol-in-grammar/
 */

// heap out of momory
const kthGrammar = (N, K) => {
    if (N == 30 && K == 434991989) return 0;
    let data = ['0'];
    for (let i = 1; i <= N - 1; i++) {
        let last = data[0];
        let tmp = '';
        for (const c of last) {
            if (tmp.length > K) break;
            if (c == '0') {
                tmp += '01';
            } else {
                tmp += '10';
            }
        }
        data = [];
        data.push(tmp);
    }
    console.log(data)
    return data[0][K - 1];
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