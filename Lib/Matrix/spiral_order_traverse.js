// 06/26/ 21 night
// example: https://leetcode.com/problems/cyclically-rotating-a-grid/
///////////////////////// counter clockwise (逆时针) ////////////////////////////////
// Question 54 code (https://leetcode.com/problems/spiral-matrix/discuss/1224381/javascript-76ms) modification to counter_clockwise 
const spiralOrder_counter_clockwise = (g) => {
    let n = g.length;
    let m = g[0].length;
    let tot = n * m;
    let res = [];
    let i = j = 0;
    let move = 'd';
    let visit = initialize2DArrayNew(n, m);
    while (tot--) {
        if (move == 'd') {
            // i == j ? res.push([g[i][j], 'layer']) : res.push(g[i][j]); // each layer mark in starting point (topLeft)
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (i + 1 < n && visit[i + 1][j] == 0) {
                i++;
            } else {
                move = 'r';
                j++;
            }
        } else if (move == 'r') {
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (j + 1 < m && visit[i][j + 1] == 0) {
                j++;
            } else {
                move = 'u';
                i--;
            }
        } else if (move == 'u') {
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (i - 1 >= 0 && visit[i - 1][j] == 0) {
                i--;
            } else {
                move = 'l';
                j--;
            }
        } else if (move == 'l') {
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (j - 1 >= 0 && visit[i][j - 1] == 0) {
                j--;
            } else {
                move = 'd';
                i++;
            }
        }
    }
    return res;
};

const generateMatrix_counter_clockwise = (resource, n, m) => { // resource is 1D array  n: row, m: col
    let g = initialize2DArrayNew(n, m);
    let i = j = 0;
    let move = 'd';
    let tot = n * m;
    while (tot--) {
        let x = resource.shift();
        if (move == 'd') {
            g[i][j] = x;
            if (i + 1 < n && g[i + 1][j] == 0) {
                i++;
            } else {
                move = 'r';
                j++;
            }
        } else if (move == 'r') {
            g[i][j] = x;
            if (j + 1 < m && g[i][j + 1] == 0) {
                j++;
            } else {
                move = 'u';
                i--;
            }
        } else if (move == 'u') {
            g[i][j] = x;
            if (i - 1 >= 0 && g[i - 1][j] == 0) {
                i--;
            } else {
                move = 'l';
                j--;
            }
        } else if (move == 'l') {
            g[i][j] = x;
            if (j - 1 >= 0 && g[i][j - 1] == 0) {
                j--;
            } else {
                move = 'd';
                i++;
            }
        }
    }
    return g;
};


////////////////////////////// clockwise (顺时针) //////////////////////////////
// Example: https://leetcode.com/problems/spiral-matrix/
const spiralOrder_clockwise = (g) => {
    let n = g.length;
    let m = g[0].length;
    let tot = n * m;
    let res = [];
    let i = j = 0;
    let move = 'r';
    let visit = initialize2DArrayNew(n, m);
    while (tot--) {
        if (move == 'r') {
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (j + 1 < m && visit[i][j + 1] == 0) { // move right still valid
                j++;
            } else { // not valid chage direction to down
                move = 'd';
                i++;
            }
        } else if (move == 'l') {
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (j - 1 >= 0 && visit[i][j - 1] == 0) { // move left still valid
                j--;
            } else { // not valid chage direction to up
                move = 'u';
                i--;
            }
        } else if (move == 'd') {
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (i + 1 < n && visit[i + 1][j] == 0) { // move down still valid
                i++;
            } else { // not valid chage direction to left
                move = 'l';
                j--;
            }
        } else if (move == 'u') {
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (i - 1 >= 0 && visit[i - 1][j] == 0) { // move up still valid
                i--;
            } else {  // not valid chage direction to right
                move = 'r';
                j++;
            }
        }
    }
    return res;
};

// Example: https://leetcode.com/problems/spiral-matrix-ii/discuss/1224414/javascript-76ms-79.88
const generateMatrix_clockwise = (n) => {
    let g = initialize2DArrayNew(n, n);
    let i = j = 0;
    let move = 'r';
    for (let x = 1; x <= n * n; x++) {
        if (move == 'r') {
            g[i][j] = x;
            if (j + 1 < n && g[i][j + 1] == 0) {
                j++;
            } else {
                move = 'd';
                i++;
            }
        } else if (move == 'l') {
            g[i][j] = x;
            if (j - 1 >= 0 && g[i][j - 1] == 0) {
                j--;
            } else {
                move = 'u';
                i--;
            }
        } else if (move == 'd') {
            g[i][j] = x;
            if (i + 1 < n && g[i + 1][j] == 0) {
                i++;
            } else {
                move = 'l';
                j--;
            }
        } else if (move == 'u') {
            g[i][j] = x;
            if (i - 1 >= 0 && g[i - 1][j] == 0) {
                i--;
            } else {
                move = 'r';
                j++;
            }
        }
    }
    return g;
};