/**
 * 12/04/21 evening
 * https://leetcode.com/contest/weekly-contest-270/problems/finding-3-digit-even-numbers/
 */

const pr = console.log;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const aeq = (a, b) => a.length === b.length && a.every((v, i) => v[0] === b[i][0]);

// Accepted --- 988ms
let start, dest;
const getDirections = (root, startValue, destValue) => {
    start = startValue, dest = destValue;
    let [ps, pd] = getAllPathNew(root);
    ps.sort((x, y) => x.length - y.length);
    pd.sort((x, y) => x.length - y.length);
    // pr("start path", ps)
    // pr("end path", pd)
    let as = ps[0], ad = pd[0];
    pr(as)
    pr(ad)
    let startI = -1, destI = -1;
    for (let i = 0; i < as.length; i++) {
        if (as[i][0] == start) {
            startI = i;
            break;
        }
    }
    for (let i = 0; i < ad.length; i++) {
        if (ad[i][0] == dest) {
            destI = i;
            break;
        }
    }
    pr("startI", startI, "destI", destI);
    if (aeq(as, ad)) {
        if (startI <= destI) {
            return ad.slice(startI + 1, destI + 1).map(x => x[1]).join("");
        } else {
            return 'U'.repeat(startI - destI);
        }
    }
    let lca = -1;
    for (let i = startI; i >= 0; i--) {
        if (i < ad.length && as[i][0] == ad[i][0]) {
            lca = i;
            break;
        }
    }
    pr("lca", lca);
    let left = 'U'.repeat(lca == -1 ? as.length - 1 : startI - lca), right = '';
    let rstart = lca == -1 ? 0 : lca + 1;
    if (rstart <= destI) {
        for (let i = rstart; i <= destI; i++) {
            if (!ad[i][1]) continue;
            right += ad[i][1];
        }
    } else {
        right = "U".repeat(rstart - destI - 1);
    }
    pr("left", left, "right", right);
    return left + right;
};

const getAllPathNew = (root) => {
    let resS = [], resD = [];
    let path = [];
    dfs(root, path, resS, resD);
    return [resS, resD];
};

const dfs = (node, path, resS, resD, dir) => {
    if (!node) return;
    path.push([node.val, dir]);
    if (!node.left && !node.right) {
        let tmp = [...path];
        let se = new Set(tmp.map(x => x[0]));
        // pr(tmp, se)
        if (se.has(start)) resS.push(tmp);
        if (se.has(dest)) resD.push(tmp);
    }
    dfs(node.left, path, resS, resD, 'L');
    dfs(node.right, path, resS, resD, 'R');
    path.pop();
};

const main = () => {
    let root = new TreeNode(5);
    root.left = new TreeNode(1);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(4);
    let startValue = 3, destValue = 6;
    pr(getDirections(root, startValue, destValue))

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    pr(getDirections(root2, 2, 1))
};

main()


/*

[5,1,2,3,null,6,4]
3
6
[2,1]
2
1

"U"
"UURR"
"RR"
"U"
"UU"
"UUUU"
"RR"
"UUURL"
[1,2]
2
1
[1,null,10,12,13,4,6,null,15,null,null,5,11,null,2,14,7,null,8,null,null,null,9,3]
6
15
[7,8,3,1,null,4,5,6,null,null,null,null,null,null,2]
7
5
[5,8,3,1,null,4,7,6,null,null,null,null,null,null,2]
4
3
[3,6,5,null,null,13,8,9,19,11,2,10,17,null,null,null,18,null,14,null,null,null,null,15,null,4,16,null,null,null,null,null,7,null,1,12]
10
13
[1,3,8,7,null,4,5,6,null,null,null,null,null,null,2]
2
1
[2,8,9,7,5,1,6,null,null,null,null,null,4,null,3]
9
3
[2,10,7,6,3,4,11,null,15,8,13,null,null,null,null,9,5,null,null,null,null,12,1,null,null,14]
9
8
[18,5,12,6,19,16,1,null,15,20,4,14,3,7,null,null,null,2,8,17,11,9,10,null,null,null,13]
3
12
[13,33,19,18,null,31,32,22,4,29,39,24,5,27,30,17,8,21,25,41,null,9,null,null,null,12,null,10,38,7,null,null,null,37,35,null,null,15,20,null,null,34,null,11,null,6,null,36,23,null,null,14,16,null,null,3,null,1,null,null,null,null,null,null,28,null,null,26,40,null,2]
20
39
[16,21,38,11,32,12,14,null,null,1,33,2,5,null,null,17,19,null,4,null,24,30,null,34,null,8,26,20,23,29,37,25,22,9,null,null,10,7,null,null,31,3,null,27,13,null,null,null,null,null,null,null,null,15,null,6,28,18,35,null,null,null,36]
8
15
 */




// let n = Math.min(as.length, ad.length);
    // if (startI != 0) {
    //     if (destI != 0) {
    //         let lca = 0;
    //         for (let i = 0; i < n; i++) {
    //             if (as[i][0] != ad[i][0]) {
    //                 lca = i - 1;
    //                 break;
    //             }
    //         }
    //         pr("lca", lca);
    //         let left = 'U'.repeat(Math.abs(startI - lca)), right = '';
    //         pr("left", left)
    //         if (ad[lca][0] != dest) {
    //             for (let i = lca; i < ad.length; i++) {
    //                 let [v, c] = ad[i];
    //                 if (v == dest) {
    //                     if (c) right += c;
    //                     break;
    //                 } else {
    //                     if (c) right += c;
    //                 }
    //             }
    //         }
    //         pr("right", right)
    //         return left + right;
    //     } else {
    //         return 'U'.repeat(startI);
    //     }
    // } else {
    //     let right = '';
    //     for (const [v, c] of ad) {
    //         if (v == dest) {
    //             if (c) right += c;
    //             break;
    //         } else {
    //             if (c) right += c;
    //         }
    //     }
    //     return right;
    // }