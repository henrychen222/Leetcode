// 02/09/21 evening

//////////////////////////////// BFS /////////////////////////////////////
const levelOrder_BFS = (root) => {
    let data = [];
    getAllLevels(root, 0, data);
    return data;
};

const getAllLevels = (root, level, data) => {
    if (!root) return;
    if (level >= data.length) data.push([]);
    data[level].push(root.val);
    getAllLevels(root.left, level + 1, data);
    getAllLevels(root.right, level + 1, data);
};


//////////////////////////////// DFS /////////////////////////////////////
const inOrder_DFS = (root) => {
    if (!root) return [];
    let left = inOrder_DFS(root.left);
    let right = inOrder_DFS(root.right);
    return left.concat(root.val).concat(right);
};

const preOrder_DFS = (root) => {
    if (!root) return [];
    let left = preOrder_DFS(root.left);
    let right = preOrder_DFS(root.right);
    return [root.val].concat(left).concat(right);
};

const postOrder_DFS = (root) => {
    if (!root) return [];
    let left = postOrder_DFS(root.left);
    let right = postOrder_DFS(root.right);
    return left.concat(right).concat(root.val);
};