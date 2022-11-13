// 07/30/22 evening
// https://www.geeksforgeeks.org/detect-cycle-in-a-graph/
let n, g;
const solve = (edges) => {
};

const detectCycleDG = () => {
    let visited = Array(n).fill(false), recStack = Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (dfs(i, visited, recStack)) {
            return true;
        }
    }
    return false;
};


const dfs = (i, visited, recStack) => {
    if (recStack[i]) return true;
    if (visited[i]) return false;
    visited[i] = true;
    recStack[i] = true;
    let children = g[i];
    for (let c = 0; c < children.length; c++) {
        if (dfs(children, visited, recStack)) return true;
    }
    recStack[i] = false;
    return false;
};