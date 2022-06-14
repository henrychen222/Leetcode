/**
 * 06/12/22 morning  06/13/22 morning fixed
 * https://leetcode.com/problems/snakes-and-ladders/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(Number.MAX_SAFE_INTEGER); d.push(t); } return d; };

const snakesAndLadders = (g) => minDis(g);

// Accepted --- 361ms 9.30%
// reference: https://leetcode.com/contest/weekly-contest-103/ranking/1/ natsugiri
const minDis = (g) => {
    let n = g.length, m = g[0].length, q = [[n - 1, 0]], dis = initialize2DArray(n, m), max = n * m, vm = new Map();
    dis[n - 1][0] = 0;
    let v = build(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let ke = i + " " + j;
            vm.set(v[i][j], ke);
        }
    }
    while (q.length) {
        let [x, y] = q.shift(), cur = v[x][y];
        // pr(x, y, cur);
        for (let i = 1; i <= 6 && cur + i <= max; i++) {
            let next = cur + i;
            let [nx, ny] = coordinates(vm, next);
            // pr("nx", nx, "ny", ny)
            if (g[nx][ny] != -1) [nx, ny] = coordinates(vm, g[nx][ny]); // has snakes or Ladders, move to next
            if (dis[nx][ny] > dis[x][y] + 1) {
                dis[nx][ny] = dis[x][y] + 1;
                q.push([nx, ny]);
            }
        }
    }
    let [endX, endY] = coordinates(vm, max);
    return dis[endX][endY] == Number.MAX_SAFE_INTEGER ? -1 : dis[endX][endY];
};

// // WA
const minDis1 = (g) => {
    let n = g.length, m = g[0].length, q = [[n - 1, 0]], dis = initialize2DArray(n, m);
    let vm = new Map(), max = n * m;
    dis[n - 1][0] = 0;
    let v = build(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let ke = i + " " + j;
            vm.set(v[i][j], ke);
        }
    }
    // pr(v);
    let [endX, endY] = coordinates(vm, max);
    while (q.length) {
        let [x, y, pre] = q.shift()
        pr(x, y, dis[endX][endY]);
        if (g[x][y] != -1 && !pre) {
            let next = g[x][y], [nx, ny] = coordinates(vm, next);
            if (dis[nx][ny] > dis[x][y]) {
                // pr("111", [x, y], [nx, ny], dis[x][y])
                dis[nx][ny] = dis[x][y];
                q.push([nx, ny, true]);
            }
        } else {
            let val = v[x][y];
            for (let i = 1; i <= 6 && val + i <= max; i++) {
                let next = val + i, [nx, ny] = coordinates(vm, next);
                if (dis[nx][ny] > dis[x][y] + 1) {
                    // pr("222", [x, y], [nx, ny], dis[x][y])
                    dis[nx][ny] = dis[x][y] + 1;
                    q.push([nx, ny]);
                }
           }
        }
    }
    // pr(dis, [endX, endY])
    return dis[endX][endY] == Number.MAX_SAFE_INTEGER ? -1 : dis[endX][endY];
};

const coordinates = (m, x) => m.get(x).split(" ").map(Number);
const build = (n, m) => {
    let g = [], v = 1;
    for (let i = n - 1, f = 1; ~i; i--) {
        let a = [];
        for (let j = 0; j < m; j++) f ? a.push(v++) : a.unshift(v++);
        g.unshift(a);
        f ^= 1;
    }
    return g;
};

const main = () => {
    let g = [[-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, 35, -1, -1, 13, -1], [-1, -1, -1, -1, -1, -1], [-1, 15, -1, -1, -1, -1]];
    let g2 = [[-1, -1], [-1, 3]];
    let debug1 = [[-1, 4, -1], [6, 2, 6], [-1, 3, -1]];
    let debug2 = [[-1, -1, -1], [-1, 9, 8], [-1, 8, 9]];
    let debug3 = [[-1, -1, 30, 14, 15, -1], [23, 9, -1, -1, -1, 9], [12, 5, 7, 24, -1, 30], [10, -1, -1, -1, 25, 17], [32, -1, 28, -1, -1, 32], [-1, -1, 23, -1, 13, 19]];
    let debug4 = [[1, 1, -1], [1, 1, 1], [-1, 1, 1]];
    let debug5 = [[-1, -1, -1, -1, 48, 5, -1], [12, 29, 13, 9, -1, 2, 32], [-1, -1, 21, 7, -1, 12, 49], [42, 37, 21, 40, -1, 22, 12], [42, -1, 2, -1, -1, -1, 6], [39, -1, 35, -1, -1, 39, -1], [-1, 36, -1, -1, -1, -1, 5]];
    pr(snakesAndLadders(g))
    pr(snakesAndLadders(g2))
    pr(snakesAndLadders(debug1)) // 2
    pr(snakesAndLadders(debug2)) // 1
    pr(snakesAndLadders(debug3)) // 2
    pr(snakesAndLadders(debug4)) // -1
    pr(snakesAndLadders(debug5)) // 3
};

main()

/*

7 8 9    -1 4 -1
6 5 4    6  2  6
1 2 3    -1 3  -1

         1  1  -1
         1  1  1
         -1 1  1


43, 44, 45, 46, 47, 48, 49      -1, -1, -1, -1, 48, 5, -1
42, 41, 40, 39, 38, 37, 36      12, 29, 13, 9, -1, 2, 32
29, 30, 31, 32, 33, 34, 35      -1, -1, 21, 7, -1, 12, 49
28, 27, 26, 25, 24, 23, 22      42, 37, 21, 40, -1, 22, 12
15, 16, 17, 18, 19, 20, 21      42, -1, 2, -1, -1, -1, 6
14, 13, 12, 11, 10,  9,  8      39, -1, 35, -1, -1, 39, -1
1   2   3   4   5    6   7      -1, 36, -1, -1, -1, -1, 5




  -1        36        32        2         -1        -1
[6, 0] -> [6, 1] -> [1, 6] -> [1, 5] -> [0, 0] -> [0, 6] (wrong)
*/