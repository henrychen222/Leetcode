/**
 * 8.4 night
 * https://leetcode.com/problems/flipping-an-image/
 */

// Accepted --- 116ms 39MB 13.72%
const flipAndInvertImage1 = (A) => {
    A.map(x => x.reverse());
    let res = [];
    for (const a of A) {
        let tmp = [];
        for (const num of a) {
            if (num == 0) {
                tmp.push(1);
            } else {
                tmp.push(0);
            }
        }
        res.push(tmp);
    }
    return res;
};

const main = () => {
    let A = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0]
    ];
    let A2 = [
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 1, 0]
    ];
    console.log(flipAndInvertImage(A));
    console.log(flipAndInvertImage(A2));
};

main()