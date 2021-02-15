/**
 * 02/14/21 evening
 * https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 3792ms 6.25%
const longestZigZag = (root) => {
    let p = getAllPathNew(root);
    // console.log(p);
    let res = 0;
    for (const a of p) {
        let n = a.length;
        let data = [];
        let start = 0;
        for (let i = 0; i + 1 < n; i++) {
            if (a[i] == a[i + 1]) {
                data.push(i - start + 1);
                // data.push(a.slice(start, i + 1));
                start = i + 1;
            }
        }
        // data.push(a.slice(start));
        data.push(n - start);
        // console.log(data);
        res = Math.max(res, Math.max.apply(Math, data));
    }
    return res;
};

// const longestZigZag2 = (root) => {
//     let p = getAllPathNew(root).map(x => x.join(""));
//     console.log(p);
//     let res = 0;
//     for (const e of p) {
//         let s1 = construct('R', e.length)
//         let s2 = construct('L', e.length)
//         console.log(s1, s2);
//     }
//     return res;
// };

// const construct = (s, n) => {
//     while (n - 1) {
//         let last = s[s.length - 1];
//         last == 'L' ? s += 'R' : s += 'L';
//         n--;
//     }
//     return s;
// };

// TLE 51/58
const longestZigZag1 = (root) => {
    let p = getAllPathNew(root)
    console.log(p);
    let res = 0;
    for (const a of p) {
        let n = a.length;
        let max = 0;
        for (let i = 0; i < n; i++) {
            // let tmp = a[i];
            let len = 1;
            let last = a[i];
            for (let j = i + 1; j < n; j++) {
                // let last = tmp[tmp.length - 1];
                if (a[j] != last) {
                    // tmp += a[j];
                    len++;
                    last = a[j];
                } else {
                    break;
                }
            }
            // console.log(tmp)
            // max = Math.max(max, tmp.length);
            max = Math.max(max, len);
        }
        res = Math.max(res, max);
    }
    return res;
};

const getAllPathNew = (root) => {
    let res = [];
    let path = [];
    dfs(root, path, res, false, true);
    return res;
};

const dfs = (node, path, res, isLeft, isRoot) => {
    if (!node) return;
    if (!isRoot) {
        if (isLeft) {
            path.push('L');
        } else {
            path.push('R');
        }
    }
    if (!node.left && !node.right) res.push([...path].join(""));
    dfs(node.left, path, res, true, false);
    dfs(node.right, path, res, false, false);
    path.pop();
};


const main = () => {
    let root = new TreeNode(1);
    root.right = new TreeNode(1);
    root.right.left = new TreeNode(1);
    root.right.right = new TreeNode(1);
    root.right.right.left = new TreeNode(1);
    root.right.right.right = new TreeNode(1);
    root.right.right.left.right = new TreeNode(1);
    root.right.right.left.right.right = new TreeNode(1);
    console.log(longestZigZag(root))
};

main()