/**
 * 12.15 afternoon
 * https://leetcode.com/problems/count-submatrices-with-all-ones/
 */

// Accepted --- 92ms 86.00%  Stack
// reference: https://leetcode.com/problems/count-submatrices-with-all-ones/discuss/720280/Java-histogram-count
const numSubmat = (mat) => {
    let m = mat.length;
    let n = mat[0].length;
    let res = 0;
    let height = Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        let st = [];
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 1) {
                height[j]++;
            } else {
                height[j] = 0;
            }
            let sum = 0;
            while (st.length != 0) {
                if (height[st[st.length - 1][0]] < height[j]) break;
                st.pop();
            }
            if (st.length != 0) {
                sum += height[j] * (j - st[st.length - 1][0]) + st[st.length - 1][1];
            } else {
                sum += height[j] * (j + 1);
            }
            st.push([j, sum]);
            res += sum;
        }
    }
    return res;
};

// Accepted --- 92ms 86.00%
// reference: https://leetcode.com/problems/count-submatrices-with-all-ones/discuss/720280/Java-histogram-count
const numSubmat3 = (mat) => {
    let m = mat.length;
    let n = mat[0].length;
    let res = 0;
    let height = Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 1) {
                height[j]++;
            } else {
                height[j] = 0;
            }
            let min = height[j];
            for (let k = j; ~k; k--) {
                if (min <= 0) break;
                min = Math.min(min, height[k]);
                res += min;
            }
        }
    }
    return res;
};

/////////////////////////////////// Brute Force  //////////////////////////////////////
// Accepted --- 104ms 54.00%
// reference: https://leetcode.com/problems/count-submatrices-with-all-ones/discuss/720265/Java-Detailed-Explanation-From-O(MNM)-to-O(MN)-by-using-Stack
const numSubmat2 = (mat) => {
    let m = mat.length;
    let n = mat[0].length;
    let res = 0;
    for (let i = 0; i < m; i++) {
        let height = Array(n).fill(1);
        for (let j = i; j < m; j++) {
            for (let k = 0; k < n; k++) {
                height[k] &= mat[j][k];
            }
            res += countOneRow(height);
        }
    }
    return res;
};

const countOneRow = (a) => {
    let n = a.length;
    let res = len = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] == 1) {
            len++;
        } else {
            len = 0;
        }
        res += len;
    }
    return res;
};

// Accepted --- 104ms 54.00%
/**
 * https://leetcode.com/problems/count-submatrices-with-all-ones/discuss/721266/C%2B%2B-Understand-the-brute-force-solution-first!
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1504-count-submatrices-with-all-ones/
 */
const numSubmat1 = (mat) => {
    let m = mat.length;
    let n = mat[0].length;
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res += countOnePointAsTopLeft(mat, i, j);
        }
    }
    return res;
};

const countOnePointAsTopLeft = (mat, a, b) => {
    let m = mat.length;
    let n = mat[0].length;
    let cnt = 0;
    let maxCol = n;
    for (let i = a; i < m; i++) {
        for (let j = b; j < maxCol; j++) {
            if (mat[i][j] == 1) {
                cnt++;
            } else {
                maxCol = j;
            }
        }
    }
    return cnt;
};

const main = () => {
    let mat = [
        [1, 0, 1],
        [1, 1, 0],
        [1, 1, 0]
    ];
    let mat2 = [
        [0, 1, 1, 0],
        [0, 1, 1, 1],
        [1, 1, 1, 0]
    ];
    console.log(numSubmat(mat));
    console.log(numSubmat(mat2));
};

main()