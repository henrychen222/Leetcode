/**
 * 9.9 morning
 * https://leetcode.com/problems/interval-list-intersections/
 */

const intervalIntersection = (A, B) => {
    let a = A.length;
    let b = B.length;
    let n;
    if (a <= b) {
        n = a;
    } else {
        n = b;
    } 
    for (let i = 0; i < n; i++) {
        let la = A[i][0];
        let ra = A[i][1];
        let lb = B[i][0];
        let rb = B[i][1];
    }

};

const main = () => {
    let A = [
            [0, 2],
            [5, 10],
            [13, 23],
            [24, 25]
        ],
        B = [
            [1, 5],
            [8, 12],
            [15, 24],
            [25, 26]
        ];
    console.log(intervalIntersection(A, B));
};

main()