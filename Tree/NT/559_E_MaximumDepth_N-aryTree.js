/**
 * 6.29 night
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 * reference: https://www.cnblogs.com/grandyang/p/9873496.html
 */

function Node(val, children) {
    this.val = val;
    this.children = children;
};

// Accepted --- 108ms 39.4MB 14.36% recursion
const maxDepth = (root) => {
    if (!root) return 0;
    let res = 1;
    for (const child of root.children) {
        res = Math.max(res, maxDepth(child) + 1);
    }
    return res;
};

// Accepted --- 140ms 39.4MB 6.13% iteration using queue
const maxDepth2 = (root) => {
    if (!root) return 0;
    let res = 0;
    let queue = [root];
    while (queue.length != 0) {
        for (let i = queue.length - 1; i >= 0; i--) {
            let temp = queue[0];
            queue.shift();
            for (const child of temp.children) {
                queue.push(child);
            }
        }
        res++;
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
    console.log(maxDepth(root));
    console.log(maxDepth2(root));

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
    console.log(maxDepth(root2));
    console.log(maxDepth2(root2));
};

main()