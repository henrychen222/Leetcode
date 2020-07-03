/**
 * 6.28 night
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 * 
 * reference:
 * https://www.geeksforgeeks.org/number-children-given-node-n-ary-tree/
 * https://www.geeksforgeeks.org/serialize-deserialize-n-ary-tree/
 * https://www.cnblogs.com/grandyang/p/9881753.html
 */
function Node(val, children) {
    this.val = val;
    this.children = children;
};

// Accepted --- 80ms 40.1MB 73.10%  recursion
const preorder = (root) => {
    let res = [];
    helper(root, res);
    return res;
};

const helper = (node, res) => {
    if (node != null) {
        res.push(node.val);
        for (const child of node.children) {
            helper(child, res);
        }
    }
};

// Accepted --- 92ms 40.1MB 43.07%  iteration
const preorder2 = (root) => {
    let res = [];
    let stack = [root];
    if (root != null) {
        while (stack.length != 0) {
            let tmp = stack[stack.length - 1];
            stack.pop();
            res.push(tmp.val);
            for (let i = tmp.children.length - 1; i >= 0; i--) {
                stack.push(tmp.children[i]);
            }
        }
    }
    return res;
};

const main = () => {
    // [1,null,3,2,4,null,5,6]
    let root = new Node(1, []);
    root.children[0] = new Node(3, []);
    root.children[1] = new Node(2, []);
    root.children[2] = new Node(4, []);
    root.children[0].children[0] = new Node(5, []);
    root.children[0].children[1] = new Node(6, []);
    console.log(preorder(root));
    console.log(preorder2(root));

    // [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
    let root2 = new Node(1, []);
    root2.children[0] = new Node(2, []);
    root2.children[1] = new Node(3, []);
    root2.children[2] = new Node(4, []);
    root2.children[3] = new Node(5, []);
    root2.children[1].children[0] = new Node(6, []);
    root2.children[1].children[1] = new Node(7, []);
    root2.children[1].children[1].children[0] = new Node(11, []);
    root2.children[1].children[1].children[0].children[0] = new Node(14, []);
    root2.children[2].children[0] = new Node(8, []);
    root2.children[2].children[0].children[0] = new Node(12, []);
    root2.children[3].children[0] = new Node(9, []);
    root2.children[3].children[1] = new Node(10, []);
    root2.children[3].children[0].children[0] = new Node(13, []);
    console.log(preorder(root2));
    console.log(preorder2(root2));
};

main()