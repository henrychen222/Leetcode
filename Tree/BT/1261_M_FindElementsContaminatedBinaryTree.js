/**
 * 11/20/21 evening
 * https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/
 */

// Accepted --- 124ms 62.22%
function FindElements (root) {
    let d = new Set(inOrder_DFS(root, 0));
    return {find}
    function find (target) {
       return d.has(target);
    }
}

const inOrder_DFS = (root, x) => {
    if (!root) return [];
    let left = inOrder_DFS(root.left, 2 * x + 1);
    let right = inOrder_DFS(root.right, 2 * x + 2);
    return left.concat([x]).concat(right);
};