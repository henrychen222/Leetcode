/**
 * 8.4 night
 * https://leetcode.com/problems/shortest-distance-to-a-character/
 */

// Accepted --- 116ms 43.8MB 16.67%
const shortestToChar = (S, C) => {
    let targetIdx = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] == C) targetIdx.push(i);
    }
    // console.log(targetIdx);
    let res = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] == C) {
            res.push(0);
        } else {
            let tmp = targetIdx.concat(i);
            tmp.sort((a, b) => a - b);
            let idx = tmp.indexOf(i);
            // console.log(tmp, idx);
            if (idx == 0) {
                let right = tmp[idx + 1];
                res.push(right - i);
            } else if (idx == tmp.length - 1) {
                let left = tmp[idx - 1];
                res.push(i - left);
            } else {
                let left = tmp[idx - 1];
                let right = tmp[idx + 1];
                // console.log(left, right);
                res.push(Math.min(i - left, right - i));
            }
        }
    }
    return res;
};

const main = () => {
    let S = "loveleetcode",
        C = 'e';
    console.log(shortestToChar(S, C));
};

main()