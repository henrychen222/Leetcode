/*
 * 01/12/22 morning
 * https://leetcode.com/problems/kth-ancestor-of-a-tree-node/
 */

const pr = console.log;

const N = 16;
const BinaryLift = (n, p) => {
    let ancestor = [...Array(n)].map(() => Array(N).fill(0));
    for (let i = 0; i < n; i++) ancestor[i][0] = p[i];
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < n; j++) {
            if (ancestor[j][i - 1] == -1) {
                ancestor[j][i] = -1;
            } else {
                ancestor[j][i] = ancestor[ancestor[j][i - 1]][i - 1];
            }
        }
    }
    return ancestor;
};

// Accepted --- 497ms 77.78%
// reference: https://leetcode.com/contest/weekly-contest-193/ranking xiaowuc1 uwi kmjp
function TreeAncestor(n, p) {
    let anc = BinaryLift(n, p);
    return { getKthAncestor }
    function getKthAncestor(node, k) {
        for (let i = N; i >= 0; i--) {
            if (k & (1 << i)) {
                if (!anc[node]) return -1;
                node = anc[node][i];
            }
        }
        return node;
    }
}

// Accepted --- 8316ms --- 44.44%
function TreeAncestor1(n, p) {
    return { getKthAncestor }
    function getKthAncestor(node, k) {
        while (k--) {
            if (node == undefined || node == -1) {
                return -1;
            } else {
                node = p[node];
            }
        }
        return node;
    }
}

const main = () => {
    let tree = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
    pr(tree.getKthAncestor(3, 1)); // 1
    pr(tree.getKthAncestor(5, 2)); // 0
    pr(tree.getKthAncestor(6, 3)); // -1


    pr(" ")
    let debug1 = new TreeAncestor(5, [-1, 0, 0, 0, 3]);
    pr(debug1.getKthAncestor(1, 5)); // -1
    pr(debug1.getKthAncestor(3, 2)); // -1
    pr(debug1.getKthAncestor(0, 1)); // -1
    pr(debug1.getKthAncestor(3, 1)); // 0
    pr(debug1.getKthAncestor(3, 5)); // -1

    pr(" ")
    let debug2 = new TreeAncestor(5, [-1, 0, 0, 1, 2]);
    pr(debug2.getKthAncestor(3, 5)); // -1
    pr(debug2.getKthAncestor(3, 2)); // 0
    pr(debug2.getKthAncestor(2, 2)); // -1
    pr(debug2.getKthAncestor(0, 2)); // -1
    pr(debug2.getKthAncestor(2, 1)); // 0
};

main()