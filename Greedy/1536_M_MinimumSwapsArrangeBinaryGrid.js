/**
 * 10.9 night
 * https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/
 * https://leetcode.com/contest/weekly-contest-200/ranking/
 * 
 * read:
 * https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/discuss/768076/Min-Adjacent-Swaps-to-Sort-the-array-of-INTEGERS-with-Proof
 * https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/discuss/767912/Java-16-lines-bubble-sort-with-line-by-line-explanation-easy-to-understand
 */

// Accepted --- 92ms 61.54%  reference: https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/discuss/768020/C%2B%2B-easy-solution-greedy-%2B-prove-%2B-example
const minSwaps = (grid) => {
    let n = grid.length;
    let a = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][n - 1 - j] != 0) break;
            a[i]++;
        }
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        let k = i;
        while (k < n && a[k] < n - i - 1) {
            k++;
        }
        if (k == n) return -1;
        res += k - i;
        while (k > i) {
            a[k] = a[k - 1];
            k--;
        }
    }
    return res;
};

// Accepted --- 92ms 61.54%  reference: uwi wiji
const minSwaps4 = (grid) => {
    let n = grid.length;
    let a = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][n - 1 - j] != 0) break;
            a[i]++;
        }
    }
    let res = 0;
    top:
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                if (a[j] >= n - i - 1) {
                    for (let k = j - 1; k >= i; k--) {
                        [a[k], a[k + 1]] = [a[k + 1], a[k]];
                        res++;
                    }
                    continue top;
                }
            }
            return -1;
        }
    return res;
};

// Accepted --- 88ms 69.23%  reference: uwi wiji
const minSwaps3 = (grid) => {
    let n = grid.length;
    let a = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][n - 1 - j] != 0) break;
            a[i]++;
        }
    }
    // console.log(a);
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (a[j] >= n - i - 1) {
                for (let k = j - 1; k >= i; k--) {
                    [a[k], a[k + 1]] = [a[k + 1], a[k]];
                    res++;
                }
                break;
            }
        }
        if (a[i] < n - i - 1) return -1;
    }
    return res;
};

// Accepted --- 96ms 53.85%   reference: uwi wiji
const minSwaps2 = (grid) => {
    let n = grid.length;
    let a = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let len = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][n - 1 - j] == 0) {
                len++;
            } else {
                break;
            }
        }
        a[i] = len;
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (a[j] >= n - i - 1) {
                for (let k = j - 1; k >= i; k--) {
                    [a[k], a[k + 1]] = [a[k + 1], a[k]];
                    res++;
                }
                break;
            }
        }
        if (a[i] < n - i - 1) return -1;
    }
    return res;
};

// Accepted --- 92ms 61.54%  reference: uwi
const minSwaps1 = (grid) => {
    let n = grid.length;
    let a = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let len = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][n - 1 - j] == 0) {
                len++;
            } else {
                break;
            }
        }
        a[i] = len;
    }
    // console.log(a);
    let res = 0;
    top:
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                if (a[j] >= n - i - 1) {
                    for (let k = j - 1; k >= i; k--) {
                        [a[k], a[k + 1]] = [a[k + 1], a[k]];
                        res++;
                    }
                    continue top;
                }
            }
            return -1;
        }
    return res;
};

const main = () => {
    let grid = [
        [0, 0, 1],
        [1, 1, 0],
        [1, 0, 0]
    ];
    let grid2 = [
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0]
    ];
    let grid3 = [
        [1, 0, 0],
        [1, 1, 0],
        [1, 1, 1]
    ];
    console.log(minSwaps(grid));
    console.log(minSwaps(grid2));
    console.log(minSwaps(grid3));
};

main()