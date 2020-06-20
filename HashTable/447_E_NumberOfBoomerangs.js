/**
 * 6.19 evening
 * https://leetcode.com/problems/minimum-index-sum-of-two-lists/
 * 
 */

//Accepted --- 1264ms 36.1MB 29.33%
const numberOfBoomerangs_refine = (points) => {
    let cnt = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let ij = diffSquare(points[i], points[j]);
            for (let k = j + 1; k < points.length; k++) {
                let ik = diffSquare(points[i], points[k]);
                let jk = diffSquare(points[j], points[k]);
                if (ij == ik) {
                    cnt += 2;
                } else if (ij == jk) {
                    cnt += 2;
                } else if (ik == jk) {
                    cnt += 2;
                }
            }
        }
    }
    return cnt;
};

// (i, j, k) (i, k, j) (j, i, k) (j, k, i) (k, i, j) (k, j, i)  
// ij ik      ik ij     ji  jk    jk ji     ki kj    kj ki
// ij ik jk
// Accepted --- 1708ms 36.4MB 26.67%
const numberOfBoomerangs = (points) => {
    // let res = [];
    let cnt = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                let ij = diffSquare(points[i], points[j]);
                let ik = diffSquare(points[i], points[k]);
                let jk = diffSquare(points[j], points[k]);
                if (ij == ik) {
                    // res.push(points[i], points[j], points[k]);
                    // res.push(points[i], points[k], points[j]);
                    cnt += 2;
                } else if (ij == jk) {
                    // res.push(points[j], points[i], points[k]);
                    // res.push(points[j], points[k], points[i]);
                    cnt += 2;
                } else if (ik == jk) {
                    // res.push(points[k], points[i], points[j]);
                    // res.push(points[k], points[j], points[i]);
                    cnt += 2;
                }
            }
        }
    }
    // console.log(res);
    return cnt;
};

const diffSquare = (a, b) => {
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
}

const main = () => {
    let points = [
        [0, 0],
        [1, 0],
        [2, 0]
    ];
    console.log(numberOfBoomerangs(points));
    console.log(numberOfBoomerangs_refine(points));
};

main()