/**
 * 09/03/21 night
 * https://leetcode.com/problems/erect-the-fence/
 * 
 * read:
 * https://www.geeksforgeeks.org/convex-hull-set-2-graham-scan/
 * https://cp-algorithms.com/geometry/grahams-scan-convex-hull.html
 * https://commons.wikimedia.org/wiki/File:Animation_depicting_the_Monotone_algorithm.gif
 * https://algorithmist.com/wiki/Monotone_chain_convex_hull
 */

// Accepted --- 127ms 25.00%
const outerTrees = (trees) => {
    trees.sort((x, y) => {
        if (x[0] == y[0]) return x[1] - y[1];
        return x[0] - y[0];
    });
    let lower = [], upper = [];
    for (const tree of trees) {
        // pr(lower)
        // pr(upper)
        while (lower.length >= 2 && cmp(lower[lower.length - 2], lower[lower.length - 1], tree) > 0) lower.pop();
        while (upper.length >= 2 && cmp(upper[upper.length - 2], upper[upper.length - 1], tree) < 0) upper.pop();
        lower.push(tree);
        upper.push(tree);

    }
    return [...new Set(lower.concat(upper))];
};

const cmp = (p1, p2, p3) => {
    let [x1, y1] = p1;
    let [x2, y2] = p2;
    let [x3, y3] = p3;
    return (y3 - y2) * (x2 - x1) - (y2 - y1) * (x3 - x2);
};

const pr = console.log;
const main = () => {
    let points = [
        [1, 1],
        [2, 2],
        [2, 0],
        [2, 4],
        [3, 3],
        [4, 2]
    ];
    let points2 = [
        [1, 2],
        [2, 2],
        [4, 2]
    ];
    let debug1 = [
        [1, 1],
        [2, 2],
        [2, 0],
        [2, 4],
        [3, 3],
        [4, 2]
    ];
    pr(outerTrees(points))
    pr(outerTrees(points2))
    pr(outerTrees(debug1))  // [[1,1],[2,0],[3,3],[2,4],[4,2]]
};

main()