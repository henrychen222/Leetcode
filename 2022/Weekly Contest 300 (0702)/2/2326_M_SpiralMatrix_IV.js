/**
 * 07/02/22 evening
 * https://leetcode.com/contest/weekly-contest-300/problems/spiral-matrix-iv/
 */

const pr = console.log;


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const createL = (arr) => {
    let tmp, node = null;
    let n = arr.length;
    for (let i = n - 1; ~i; i--) {
        if (!node) {
            node = new ListNode(arr[i]);
        } else {
            tmp = new ListNode(arr[i]);
            tmp.next = node;
            node = tmp;
        }
    }
    return node;
};

const getAllData = (list) => {
    let res = [];
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res;
};

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(-1); d.push(t); } return d; };

const fillSpiralMatrix = (g, a) => {
    let n = g.length, m = g[0].length, i = 0, j = 0, move = 'r';
    for (const x of a) {
        if (move == 'r') {
            g[i][j] = x;
            if (j + 1 < m && g[i][j + 1] == -1) {
                j++;
            } else {
                move = 'd';
                i++;
            }
        } else if (move == 'l') {
            g[i][j] = x;
            if (j - 1 >= 0 && g[i][j - 1] == -1) {
                j--;
            } else {
                move = 'u';
                i--;
            }
        } else if (move == 'd') {
            g[i][j] = x;
            if (i + 1 < n && g[i + 1][j] == -1) {
                i++;
            } else {
                move = 'l';
                j--;
            }
        } else if (move == 'u') {
            g[i][j] = x;
            if (i - 1 >= 0 && g[i - 1][j] == -1) {
                i--;
            } else {
                move = 'r';
                j++;
            }
        }
    }
};

// Accepted
const spiralMatrix = (n, m, head) => {
    let a = getAllData(head), g = initialize2DArray(n, m);
    // pr(a, g);
    fillSpiralMatrix(g,a)
    return g;
};

const main = () => {
    let m = 3, n = 5, head = [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0];
    let m2 = 1, n2 = 4, head2 = [0, 1, 2]
    pr(spiralMatrix(m, n, createL(head)))
    pr(spiralMatrix(m2, n2, createL(head2)))
};

main()