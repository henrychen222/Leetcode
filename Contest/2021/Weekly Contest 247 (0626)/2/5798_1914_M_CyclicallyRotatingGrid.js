/**
 * 06/26/21 evening  06/26/21 night complete
 * https://leetcode.com/contest/weekly-contest-247/problems/cyclically-rotating-a-grid/
 */

const pr = console.log;

// Accepted --- 160ms
// Accepted --- 104ms change to counter_clockwise
const assert = (condition) => { if (!condition) throw new Error("Assertion failed"); }
const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

const rotateGrid = (g, k) => {
    let n = g.length;
    let m = g[0].length;
    let sp = spiralOrder_counter_clockwise(g);
    pr("sp", sp);
    let d = [];
    let prev = 0;
    let i;
    for (i = 1; i < sp.length; i++) {
        if (sp[i].length == 2) {
            let tmp = sp.slice(prev, i);
            d.push(tmp);
            prev = i;
        }
    }
    let last = sp.slice(prev);
    d.push(last);
    pr("data", d);
    let newD = [];
    for (let a of d) {
        // pr("each", a);
        let each = [];
        for (let e of a) {
            if (typeof e !== 'number') {
                each.push(e[0]);
            } else {
                each.push(e);
            }
        }
        newD.push(each);
    }
    d = newD;
    pr("data", d);
    newD = [];
    for (let a of d) {
        let t = k % a.length;
        newD.push(rotateLayer(a, t));
    }
    d = newD;
    pr("rotate done", d);
    let resource = [];
    for (const a of d) {
        for (const e of a) {
            assert(typeof e === 'number');
            resource.push(e);
        }
    }
    pr("resource", resource)
    let res = generateMatrix_counter_clockwise(resource, n, m);
    return res;
};

const generateMatrix_counter_clockwise = (resource, n, m) => {
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
            if (j + 1 < m && g[i][j + 1] == 0) { // fuck here didn't change j + 1 < n
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
            i == j ? res.push([g[i][j], 'layer']) : res.push(g[i][j]);
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

const rotateLayer = (a, k) => {
    let n = a.length;
    let end = a.slice(n - k);
    let rest = a.slice(0, n - k);
    return end.concat(rest);
};

/////////////////////////////////// in contest ////////////////////////////////////
const rotateGrid1 = (g, k) => {
    let n = g.length;
    let m = g[0].length;
    let tot = n * m;
    let d = [];
    let curtot = 0;
    for (let layer = 0; curtot < tot; layer++) {
        let tmp = readLayer(g, layer);
        curtot += tmp.length;
        pr(layer, tmp);
        rotateLayer(tmp);
        pr("rotate", tmp)
    }
};

const readLayer = (g, layer) => {
    let n = g.length - layer * 2;
    let m = g[0].length - layer * 2;
    pr("size", n, m)
    // let topLeft = g[layer][layer];
    let tot = 2 * (n + m) - 4;
    pr(tot)
    let x = y = layer;
    let collect = [];
    let move = 'd';
    while (tot--) {
        collect.push(g[x][y]);
        pr(x, y, g[x][y], move);
        if (move == 'd') {
            if (x + 1 < n) {
                x++;
            } else {
                y++;
                move = 'r';
            }
        } else if (move == 'r') {
            if (y + 1 < m) {
                y++;
            } else {
                x--;
                move = 't';
            }
        } else if (move == 't') {
            if (x - 1 >= layer * 2) {
                x--;
            } else {
                y--;
                move = 'l';
            }
        } else if (move == 'l') {
            if (y - 1 >= layer * 2) {
                y--;
            }
        }
    }
    return collect;
};

const main = () => {
    let grid = [[40, 10], [30, 20]], k = 1;
    let grid2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], k2 = 2;
    let grid_debug1 = [[4, 5, 8, 9, 4, 2, 4, 7, 2, 4], [7, 1, 9, 6, 6, 1, 4, 5, 7, 7], [7, 1, 5, 1, 1, 7, 10, 1, 3, 1],
    [7, 2, 2, 5, 2, 6, 6, 4, 7, 7], [1, 2, 3, 8, 4, 7, 6, 9, 6, 2],
    [5, 10, 3, 4, 7, 2, 7, 5, 3, 10]], k_debug1 = 4;
    // pr(rotateGrid(grid, k))
    // pr(rotateGrid(grid2, k2))
    pr(rotateGrid(grid_debug1, k_debug1))
};

main()

/*
4, 5,  8, 9, 4, 2, 4,  7, 2, 4
7, 1,  9, 6, 6, 1, 4,  5, 7, 7
7, 1,  5, 1, 1, 7, 10, 1, 3, 1
7, 2,  2, 5, 2, 6, 6,  4, 7, 7
1, 2,  3, 8, 4, 7, 6,  9, 6, 2
5, 10, 3, 4, 7, 2, 7,  5, 3, 10


4
9
8
5
4
7  7  7
*/

let test = [4, 7, 7, 7, 1, 5, 10, 3, 4, 7, 2, 7, 5, 3, 10, 2, 7, 1, 7, 4, 2, 7, 4, 2, 4, 9, 8, 5];
// pr(rotateLayer(test, 4))
// pr(test)
// [4, 9, 8, 5, 4, 7, 7, 7, 1, 5, 10, 3, 4, 7, 2, 7, 5, 3, 10, 2, 7, 1, 7, 4, 2, 7,  4, 2]