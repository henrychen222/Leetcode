/*
 * 12/05/22 night
 * https://leetcode.com/problems/maximum-students-taking-exam/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };

// 08/03/23 night
// Accepted --- 65ms
function HungarianBipartiteGraph(g) {
    let vis = new Set(), n = g.length, match = Array(n).fill(-1);
    return { maxMatch }
    function maxMatch() {
        let res = 0;
        for (let i = 0; i < n; i++) {
            vis.clear();
            res += dfs(i);
        }
        return res;
    }
    function dfs(cur) {
        for (const child of g[cur]) {
            if (vis.has(child)) continue;
            vis.add(child);
            if (match[child] < 0 || dfs(match[child])) {
                match[child] = cur;
                return true;
            }
        }
        return false;
    }
}

const maxStudents2 = (seats) => {
    let n = seats.length, m = seats[0].length, cnt = 0, g = initializeGraph(n * m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (seats[i][j] == '.') {
                cnt++;
                let x = i * m + j, y;
                for (let k = -1; k <= 1; k++) {
                    if (i + k >= 0 && i + k < n && j - 1 >= 0 && seats[i + k][j - 1] == '.') {
                        y = (i + k) * m + (j - 1);
                        g[x].push(y);
                    }
                    if (i + k >= 0 && i + k < n && j + 1 < m && seats[i + k][j + 1] == '.') {
                        y = (i + k) * m + (j + 1);
                        g[x].push(y);
                    }
                }
            }
        }
    }
    let hun = HungarianBipartiteGraph(g), conflict = hun.maxMatch();
    // pr(cnt, conflict)
    return cnt - conflict / 2;
}

///////////////////////////////////////////////////////////////////////////
// Accepted --- 105ms
/*
reference:
https://leetcode.com/contest/weekly-contest-175/ranking/2/ cuiaoxiang

https://leetcode.com/problems/maximum-students-taking-exam/solutions/503790/Python-Hungarian-Time-O(m2*n2)-Space-O(m*n)-beat-100/
https://leetcode.com/problems/maximum-students-taking-exam/solutions/606656/python-hungarian-solution/
https://leetcode.com/problems/maximum-students-taking-exam/solutions/764477/python-a-good-practice-of-hungarian/
*/
const maxStudents = (seats) => {
    let n = seats.length, m = seats[0].length, cnt = 0;
    g = initializeGraph(n * m + 5);
    d = Array(n * m + 5);
    vis = Array(n * m + 5).fill(false);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (seats[i][j] == '.') {
                cnt++;
                let x = i * m + j, y;
                for (let k = -1; k <= 1; k++) {
                    if (i + k >= 0 && i + k < n && j - 1 >= 0 && seats[i + k][j - 1] == '.') {
                        y = (i + k) * m + (j - 1);
                        g[x].push(y);
                    }
                    if (i + k >= 0 && i + k < n && j + 1 < m && seats[i + k][j + 1] == '.') {
                        y = (i + k) * m + (j + 1);
                        g[x].push(y);
                    }
                }
            }
        }
    }
    let conflict = hungary(n * m, n * m);
    // pr(cnt, conflict)
    return cnt - conflict / 2;
}

let g, vis, d;
const hungary = (n, m) => {
    let res = 0;
    d.fill(-1);
    for (let i = 0; i < n; i++) {
        vis.fill(false);
        res += dfs(i);
    }
    return res;
};

const dfs = (cur) => {
    for (const child of g[cur]) {
        if (vis[child]) continue;
        vis[child] = true;
        if (d[child] < 0 || dfs(d[child])) {
            d[child] = cur;
            return true;
        }
    }
    return false;
};

const main = () => {
    let seats = [["#", ".", "#", "#", ".", "#"], [".", "#", "#", "#", "#", "."], ["#", ".", "#", "#", ".", "#"]];
    let seats2 = [[".", "#"], ["#", "#"], ["#", "."], ["#", "#"], [".", "#"]];
    let seats3 = [["#", ".", ".", ".", "#"], [".", "#", ".", "#", "."], [".", ".", "#", ".", "."], [".", "#", ".", "#", "."], ["#", ".", ".", ".", "#"]]
    let debug1 = [["#", ".", ".", ".", "#"], [".", "#", ".", ".", "#"], [".", "#", "#", ".", "."], [".", ".", "#", "#", "#"]];
    pr(maxStudents(seats))
    pr(maxStudents(seats2))
    pr(maxStudents(seats3))
    pr(maxStudents(debug1)) // 6
};

main()