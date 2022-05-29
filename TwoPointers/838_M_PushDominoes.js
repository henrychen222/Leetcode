/**
 * 05/03/22 morning
 * https://leetcode.com/problems/push-dominoes/
 */

const pr = console.log;

// Accepted --- 207ms 31.82%
// Accepted --- 142ms 68.18%
const pushDominoes = (s) => {
    let n = s.length, leftR = Array(n).fill(-1), rightL = Array(n).fill(-1), res = s.split("");
    for (let i = 0; i < n; i++) {
        if (s[i] == '.') { // record each '.' closest leftR and rightL position
            let l, r;
            for (l = i - 1; l >= 0 && s[l] == '.'; l--);
            for (r = i + 1; r < n && s[r] == '.'; r++);
            if (l >= 0 && s[l] == 'R') leftR[i] = l;
            if (r < n && s[r] == 'L') rightL[i] = r;
        }
    }
    // pr(leftR);
    // pr(rightL);
    for (let i = 0; i < n; i++) {
        if (s[i] == '.') { // filling process of not still '.'
            if (leftR[i] == -1) {
                if (rightL[i] == -1) { // no left R and right L, still
                } else {
                    // pr("111", i, leftR[i], rightL[i]);
                    res[i] = 'L';
                }
            } else {
                if (rightL[i] == -1) {
                    // pr("222", i, leftR[i], rightL[i]);
                    res[i] = 'R';
                } else { // has both left R and right L
                    if (i - leftR[i] == rightL[i] - i) { // keep balance, still
                    } else {
                        // pr("333", i, leftR[i], rightL[i]);
                        let disR = Math.abs(i - leftR[i]), disL = Math.abs(i - rightL[i]);
                        res[i] = disL < disR ? 'L' : "R";
                    }
                }
            }
        }
    }
    // pr(res);
    return res.join("");
};

const main = () => {
    let s = "RR.L";
    let s2 = ".L.R...LR..L..";
    pr(pushDominoes(s))
    pr(pushDominoes(s2))
};

main()