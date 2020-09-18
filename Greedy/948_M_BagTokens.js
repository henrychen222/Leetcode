/**
 * 9.17 afternoon
 * https://leetcode.com/problems/bag-of-tokens/
 */

// Accepted --- 88ms 61.54%
const bagOfTokensScore = (tokens, P) => {
    tokens.sort((a, b) => a - b);
    let cnt = 0;
    while (true) {
        if (tokens.length == 0) break;
        if (cnt == 0 && P < tokens[0]) break;
        let f = tokens[0];
        let l = tokens[tokens.length - 1];
        if (P >= f) {
            P -= f;
            cnt++;
            tokens.shift();
        } else {
            if (cnt >= 1) {
                if (tokens.length != 1) {
                    P += l;
                    cnt--;
                    tokens.pop();
                } else {
                    break;
                }
            }
        }
        // console.log(tokens, P, cnt);
    }
    return cnt;
};

const main = () => {
    let tokens = [100],
        P = 50;
    let tokens2 = [100, 200],
        P2 = 150;
    let tokens3 = [100, 200, 300, 400],
        P3 = 200;
    console.log(bagOfTokensScore(tokens, P));
    console.log(bagOfTokensScore(tokens2, P2));
    console.log(bagOfTokensScore(tokens3, P3));
};

main()