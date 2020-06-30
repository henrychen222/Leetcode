/**
 * 6.29 night
 * https://leetcode.com/problems/increasing-order-search-tree/
 * reference: https://www.cnblogs.com/grandyang/p/9881420.html
 */

function Node(val, children) {
    this.val = val;
    this.children = children;
};

// Accepted --- 128ms 40MB 13.45%  recursion
const postorder = (root) => {
    let res = [];
    helper(root, res);
    return res;
};

const helper = (node, res) => {
    if (node != null) {
        for (const child of node.children) {
            helper(child, res);
        }
        res.push(node.val);
    }
};

// Accepted --- 120ms 39.7MB 18.44% iteration
const postorder2 = (root) => {
    let res = [];
    let stack = [root];
    if (root != null) {
        while (stack.length != 0) {
            let tmp = stack[stack.length - 1];
            stack.pop();
            res.unshift(tmp.val);
            for (let i = 0; i < tmp.children.length; i++) {
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
    console.log(postorder(root));
    console.log(postorder2(root));

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
    console.log(postorder(root2));
    console.log(postorder2(root2));
};

main()