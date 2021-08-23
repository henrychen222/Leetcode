/**
 * 08/21/21 morning
 * https://leetcode.com/contest/biweekly-contest-59/problems/number-of-ways-to-arrive-at-destination/
 */

const pr = console.log;

// don't know
const countPaths = (n, road) => {
    let g = road.map(x => [x[0], x[1]]);
    pr(g);
    generate(n, g);
    getAllPathGraph(n, g);
};

// https://www.geeksforgeeks.org/find-paths-given-source-destination/
let adjList;
const generate = (vertices, g) => {
    adjList = [];
    for (let i = 0; i < vertices; i++) adjList.push([]);
    for (const [dep, dest] of g) adjList[dep].push(dest);
    pr("adjList", adjList)
};

const getAllPathGraph = (dep, dest, vertices) => {
    let visited = Array(vertices).fill(false);
    let path = [];
    path.push(dep);
    dfs(dep, dest, visited, path);
};

const dfs = (dep, dest, visited, localPathList) => {
    pr(dep, dest, visited, localPathList)
    if (dep == dest) {
        pr("localPathList", localPathList);
        return localPathList;
    }
    visited[dep] = true;
    pr(adjList[dep])
    for (const i of adjList[dep]) {
        if (!visited[i]) {
            localPathList.push(i);
            dfs(i, dest, visited, localPathList);
            localPathList.splice(i, 1);
        }
    }
    visited[dep] = false;
};

const main = () => {
    let n = 7, roads = [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]];
    let n2 = 2, roads2 = [[1, 0, 10]];
    pr(countPaths(n, roads))
    // pr(countPaths(n2, roads2))
};

main()