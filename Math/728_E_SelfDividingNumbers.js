/**
 * 6.15 night
 * https://leetcode.com/problems/self-dividing-numbers/
 */

// Accepted --- 284ms 39.3MB 5.06%
const selfDividingNumbers = (left, right) => {
    let oppoRes = [];
    let res = [];
    for (let i = left; i <= right; i++) {
        let numStr = i.toString();
        for (const j of numStr) {
            if (i % Number(j) != 0) {
                oppoRes.push(i);
            }
        }
    }
    for (let i = left; i <= right; i++) {
        if (!oppoRes.includes(i)) {
            res.push(i);
        }
    }
    return res;
};

const main = () => {
    let left = 1,
        right = 22;
    console.log(selfDividingNumbers(left, right));
};

main()