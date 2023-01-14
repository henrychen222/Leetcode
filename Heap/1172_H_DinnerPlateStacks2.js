/*
 * 01/09/23 evening  01/13/22 evening rewrite in class way
 * https://leetcode.com/problems/dinner-plate-stacks/
 */


///////////////////////////////////////////////////////////////////////////
// function AVLTreeNode(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//     this.height = 1;
//     this.cnt = 1;
// }

// function getHeight(node) {
//     return node != null ? node.height : 0;
// }
// function getBalance(node) {
//     return node != null ? getHeight(node.left) - getHeight(node.right) : 0;
// }
// function LR(z) {
//     let y = z.right;
//     let T2 = y.left;
//     y.left = z;
//     z.right = T2;
//     z.height = 1 + Math.max(getHeight(z.left), getHeight(z.right));
//     y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
//     return y;
// }
// function RR(z) {
//     let y = z.left;
//     let T3 = y.right;
//     y.right = z
//     z.left = T3
//     z.height = 1 + Math.max(getHeight(z.left), getHeight(z.right));
//     y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
//     return y;
// }
// function insert(node, v) {
//     if (node == null) {
//         return new AVLTreeNode(v);
//     } else if (v < node.val) {
//         node.left = insert(node.left, v);
//     } else if (v > node.val) {
//         node.right = insert(node.right, v);
//     } else {
//         node.cnt++;
//         return node;
//     }
//     node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
//     let bal = getBalance(node);
//     if (bal > 1 && v < node.left.val) return RR(node);
//     if (bal > 1 && v > node.left.val) {
//         node.left = LR(node.left);
//         return RR(node);
//     }
//     if (bal < -1 && v > node.right.val) return LR(node);
//     if (bal < -1 && v < node.right.val) {
//         node.right = RR(node.right);
//         return LR(node);
//     }
//     return node;
// }
// function remove(node, v) {
//     if (node == null) {
//         return node;
//     } else if (v < node.val) {
//         node.left = remove(node.left, v);
//     } else if (v > node.val) {
//         node.right = remove(node.right, v);
//     } else {
//         if (node.cnt > 1) {
//             node.cnt--;
//             return node;
//         }
//         if (node.left == null) {
//             let tmp = node.right;
//             node = null;
//             return tmp;
//         } else if (node.right == null) {
//             let tmp = node.left;
//             node = null;
//             return tmp;
//         }
//         let tmp = minx(node.right);
//         node.val = tmp.val;
//         node.right = remove(node.right, tmp.val);
//     }
//     if (node == null) return node;
//     node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
//     let bal = getBalance(node);
//     if (bal > 1 && getBalance(node.left) >= 0) return RR(node);
//     if (bal < -1 && getBalance(node.right) <= 0) return LR(node);
//     if (bal > 1 && getBalance(node.left) < 0) {
//         node.left = LR(node.left);
//         return RR(node);
//     }
//     if (bal < -1 && getBalance(node.right) > 0) {
//         node.right = RR(node.right);
//         return LR(node);
//     }
//     return node;
// }
// function minx(node) {
//     return node == null || node.left == null ? node : minx(node.left);
// }
// function maxx(node) {
//     return node == null || node.right == null ? node : maxx(node.right);
// }

// function TreeSet() {
//     let root = null, se = new Set();
//     return { add, first, last, rem, size, show}
//     function add(v) {
//         if (!se.has(v)) {
//             root = insert(root, v);
//             se.add(v);
//         }
//     }
//     function first() {
//         let res = minx(root);
//         return res ? res.val : null;
//     }
//     function last() {
//         let res = maxx(root);
//         return res ? res.val : null;
//     }
//     function rem(v) {
//         root = remove(root, v);
//         se.delete(v);
//     }
//     function size() {
//         return se.size;
//     }
//     function show() {
//         return [...se].sort((x, y) => x - y);
//     }
// }

/////////////////////////////////////////////////////////////////
class AVLNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.cnt = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }
    getHeight(node) {
        return node != null ? node.height : 0;
    }
    getBalance(node) {
        return node != null ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
    LR(z) {
        let y = z.right;
        let T2 = y.left;
        y.left = z;
        z.right = T2;
        z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
        return y;
    }
    RR(z) {
        let y = z.left;
        let T3 = y.right;
        y.right = z
        z.left = T3
        z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
        return y;
    }
    insert(v) {
        this.root = this.insertUtil(this.root, v);
    }
    insertUtil(node, v) {
        if (node == null) {
            return new AVLNode(v);
        } else if (v < node.val) {
            node.left = this.insertUtil(node.left, v);
        } else if (v > node.val) {
            node.right = this.insertUtil(node.right, v);
        } else {
            node.cnt++;
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        let bal = this.getBalance(node);
        if (bal > 1 && v < node.left.val) return this.RR(node);
        if (bal > 1 && v > node.left.val) {
            node.left = this.LR(node.left);
            return this.RR(node);
        }
        if (bal < -1 && v > node.right.val) return this.LR(node);
        if (bal < -1 && v < node.right.val) {
            node.right = this.RR(node.right);
            return this.LR(node);
        }
        return node;
    }
    remove(v) {
        this.root = this.removeUtil(this.root, v);
    }
    removeUtil(node, v) {
        if (node == null) {
            return node;
        } else if (v < node.val) {
            node.left = this.removeUtil(node.left, v);
        } else if (v > node.val) {
            node.right = this.removeUtil(node.right, v);
        } else {
            if (node.cnt > 1) {
                node.cnt--;
                return node;
            }
            if (node.left == null) {
                let tmp = node.right;
                node = null;
                return tmp;
            } else if (node.right == null) {
                let tmp = node.left;
                node = null;
                return tmp;
            }
            let tmp = this.findMin(node.right);
            node.val = tmp.val;
            node.right = this.removeUtil(node.right, tmp.val);
        }
        if (node == null) return node;
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        let bal = this.getBalance(node);
        if (bal > 1 && this.getBalance(node.left) >= 0) return this.RR(node);
        if (bal < -1 && this.getBalance(node.right) <= 0) return this.LR(node);
        if (bal > 1 && this.getBalance(node.left) < 0) {
            node.left = this.LR(node.left);
            return this.RR(node);
        }
        if (bal < -1 && this.getBalance(node.right) > 0) {
            node.right = this.RR(node.right);
            return this.LR(node);
        }
        return node;
    }
    maxx() {
        let node = this.findMax(this.root);
        return node == null ? null : node.val;
    }
    minx() {
        let node = this.findMin(this.root);
        return node == null ? null : node.val;
    }
    findMin(node) {
        return node == null || node.left == null ? node : this.findMin(node.left);
    }
    findMax(node) {
        return node == null || node.right == null ? node : this.findMax(node.right);
    }
}

function TreeSet1() {
    let tree = new AVLTree(), se = new Set();
    return { add, first, last, rem, size, show}
    function add(v) {
        if (!se.has(v)) { // insert duplicates will cause issue
            tree.insert(v);
            se.add(v);
        }
    }
    function first() {
        return tree.minx();
    }
    function last() {
        return tree.maxx();
    }
    function rem(v) {
        tree.remove(v);
        se.delete(v);
    }
    function size() {
        return se.size;
    }
    function show() {
        return [...se].sort((x, y) => x - y);
    }
}

/////////////////////////////////////////////////////////////////////////////
class SplayNode {
    constructor(value) {
        this.parent = null;
        this.left = null;
        this.right = null;
        this.val = value;
        this.sz = 1;
    }
    Update() {
        this.sz = (this.left != null ? this.left.sz : 0) + (this.right != null ? this.right.sz : 0) + 1;
    }
    IsLeft() {
        return this.parent != null && this.parent.left == this;
    }
    IsRight() {
        return this.parent != null && this.parent.right == this;
    }
    IsRoot(guard = null) {
        return this.parent == guard;
    }
}

class SplayTree {
    constructor() {
        this.root = null;
        this.cmp = (x, y) => x >= y ? 0 : 1;
    }
    Zig(x) { // right rotation
        let y = x.parent;
        if (x.right != null) x.right.parent = y;
        y.left = x.right;
        x.right = y;
        if (y.IsLeft()) {
            y.parent.left = x;
        } else if (y.IsRight()) { // Special attention here for Link-Cut Trees.
            y.parent.right = x;
        }
        x.parent = y.parent;
        y.parent = x;
        y.Update();
        x.Update();
    }

    // Zag:
    //   y                x
    //  / \              / \
    // A   x    --.    y   C
    //    / \          / \
    //   B   C        A   B        
    Zag(x) { // left rotation
        let y = x.parent;
        if (x.left != null) x.left.parent = y;
        y.right = x.left;
        x.left = y;
        if (y.IsLeft()) {
            y.parent.left = x;
        } else if (y.IsRight()) { // Special attention here for Link-Cut Trees.
            y.parent.right = x;
        }
        x.parent = y.parent;
        y.parent = x;
        y.Update();
        x.Update();
    }
    ZigZig(x) { // RR
        this.Zig(x.parent);
        this.Zig(x);
    }
    ZigZag(x) { // RL
        this.Zig(x);
        this.Zag(x);
    }
    ZagZag(x) { // LL
        this.Zag(x.parent);
        this.Zag(x);
    }
    ZagZig(x) { // LR
        this.Zag(x);
        this.Zig(x);
    }

    // Splay a "node" just under a "guard", which is default to splay to the "root".
    Splay(node, guard = null) {
        while (!node.IsRoot(guard)) {
            if (node.parent.IsRoot(guard)) {
                if (node.IsLeft()) {
                    this.Zig(node);
                } else {
                    this.Zag(node);
                }
            } else {
                if (node.parent.IsLeft()) {
                    if (node.IsLeft()) {
                        this.ZigZig(node);
                    } else {
                        this.ZagZig(node);
                    }
                } else {
                    if (node.IsRight()) {
                        this.ZagZag(node);
                    } else {
                        this.ZigZag(node);
                    }
                }
            }
        }
        if (guard == null) this.root = node; // reset "root" to "node".
    }
    LastNode(x) {
        this.Splay(x);
        let node = x.left;
        if (node == null) return null;
        while (node.right != null) node = node.right;
        this.Splay(node);
        return node;
    }
    NextNode(x) {
        this.Splay(x);
        let node = x.right;
        if (node == null) return null;
        while (node.left != null) node = node.left;
        this.Splay(node);
        return node;
    }
    Find(value) {
        return this.FindFirstOf(value);
    }
    FindFirstOf(value) {
        let node = this.root, res = null, last_visited = null;
        while (node != null) {
            last_visited = node;
            if (this.cmp(value, node.val)) {
                node = node.left;
            } else if (this.cmp(node.val, value)) {
                node = node.right;
            } else {
                res = node;
                node = node.left;
            }
        }
        if (last_visited != null) this.Splay(last_visited);
        return res;
    }
    FindLastOf(value) {
        let node = this.root, res = null, last_visited = null;
        while (node != null) {
            last_visited = node;
            if (this.cmp(value, node.val)) {
                node = node.left;
            } else if (this.cmp(node.val, value)) {
                node = node.right;
            } else {
                res = node;
                node = node.right;
            }
        }
        if (last_visited != null) this.Splay(last_visited);
        return res;
    }
    FindRankOf(node) {
        this.Splay(node);
        return node.left == null ? 0 : node.left.sz;
    }
    FindSuccessorOf(value) {
        let node = this.root, res = null, last_visited = null;
        while (node != null) {
            last_visited = node;
            if (this.cmp(value, node.val)) {
                res = node;
                node = node.left;
            } else {
                node = node.right;
            }
        }
        if (last_visited != null) this.Splay(last_visited);
        return res;
    }
    FindPrecursorOf(value) {
        let node = this.root, res = null, last_visited = null;
        while (node != null) {
            last_visited = node;
            // pr(node.val, value, "compare: ", this.cmp(node.val, value))
            if (this.cmp(node.val, value)) {
                res = node;
                node = node.right;
            } else {
                node = node.left;
            }
        }
        if (last_visited != null) this.Splay(last_visited);
        return res;
    }
    FindKth(rank) {
        if (rank < 0 || rank >= this.Size()) return null;
        let node = this.root;
        while (node != null) {
            let leftsize = node.left == null ? 0 : node.left.sz;
            if (leftsize == rank) break;
            if (leftsize > rank) {
                node = node.left;
            } else {
                rank -= leftsize + 1;
                node = node.right;
            }
        }
        this.Splay(node);
        return node;
    }
    NewNode(value) {
        return new SplayNode(value);
    }
    DeleteNode(node) {
        node = null;
    }

    // -------------------------------- Public Usage --------------------------------------
    Size() {
        return this.root == null ? 0 : this.root.sz;
    }
    IsEmpty() {
        return this.root == null;
    }

    // Insert an element into the container O(log(n))
    Insert(value) {
        if (this.root == null) {
            this.root = this.NewNode(value);
            return this.root;
        }
        let node = this.root;
        while (node != null) {
            if (this.cmp(value, node.val)) {
                if (node.left == null) {
                    node.left = this.NewNode(value);
                    node.left.parent = node;
                    node = node.left;
                    break;
                }
                node = node.left;
            } else {
                if (node.right == null) {
                    node.right = this.NewNode(value);
                    node.right.parent = node;
                    node = node.right;
                    break;
                }
                node = node.right;
            }
        }
        this.Splay(node);
        return node;
    }

    // Delete an element from the container if it exists O(log n)
    Delete(value) {
        let node = this.Find(value);
        if (node == null) return false;
        this.Splay(node);
        if (node.left == null) {
            this.root = node.right;
            if (node.right != null) node.right.parent = null;
            this.DeleteNode(node);
            return true;
        }
        if (node.right == null) {
            this.root = node.left;
            if (node.left != null) node.left.parent = null;
            this.DeleteNode(node);
            return true;
        }
        let last_node = this.LastNode(node);
        let next_node = this.NextNode(node);
        this.Splay(last_node);
        this.Splay(next_node, last_node);
        // After the above operations, the tree becomes:
        //      last_node
        //     /         \
        //    A       next_node
        //           /         \
        //         node         B
        // Then "next_node.left" is "node".
        this.DeleteNode(next_node.left);
        next_node.left = null;
        next_node.Update();
        last_node.Update();
        return true;
    }

    // Whether the splay tree contains value O(log n).
    Contains(value) {
        return this.CountOf(value) > 0;
    }

    // The number of ocurrences of value O(log n)
    CountOf(value) {
        let x = this.FindFirstOf(value);
        if (x == null) return 0;
        let rank_x = this.FindRankOf(x);
        let y = this.FindLastOf(value);
        let rank_y = this.FindRankOf(y);
        return rank_y - rank_x + 1;
    }

    // The number of elements strictly less than value O(log n)
    RankOf(value) {
        let x = this.FindPrecursorOf(value);
        return x == null ? 0 : this.FindRankOf(x) + 1;
    }

    // Get the k-th element (0-indexed) O(log n).
    Kth(rank) {
        let x = this.FindKth(rank);
        return x == null ? null : (x.val);
    }

    // Find the smallest element that is strictly greater than value > , if it exists O(log n).
    SuccessorOf(value) {
        let node = this.FindSuccessorOf(value);
        return node == null ? null : (node.val);
    }

    // Find the largest element that is strictly less than value < , if it exists O(log n).
    PrecursorOf(value) {
        let node = this.FindPrecursorOf(value);
        return node == null ? null : (node.val);
    }

    // Get sorted values in the splay tree O(n).
    show() {
        let res = [];
        const dfs = (x) => {
            if (x == null) return;
            dfs(x.left);
            res.push(x.val);
            dfs(x.right);
        };
        dfs(this.root);
        return res;
    }
}

function TreeSet() {
    let tree = new SplayTree(), se = new Set();
    return { add, first, last, rem, contains, size, show }
    function add(v) {
        if(!se.has(v)) { // insert duplicates will cause issue
            tree.Insert(v);
            se.add(v);
        }
    }
    function first() {
        return tree.Kth(0);
    }
    function last() {
        return tree.Kth(size() - 1);
    }
    function contains(x) {
        return se.contains(x);
    }
    function rem(v) {
        tree.Delete(v);
        se.delete(v);
    }
    function size() {
        return se.size;
    }
    function show() {
        return [...se].sort((x, y) => x - y);
    }
}

// Accepted --- 2474ms 25% AVL TreeSet function way
// Accepted --- 2678ms 31.25% AVL TreeSet class way
// Accepted --- 2245ms 50% Splay TreeSet
function DinnerPlates(cap) {
    let n = 1e5, used = new TreeSet(), notfull = new TreeSet(), g = [];
    for (let i = 0; i < n; i++) {
        g.push([]);
        notfull.add(i);
    }
    return { push, pop, popAtStack }
    function push(v) {
        let idx = notfull.first() || 0;
        // pr("push", idx)
        g[idx].push(v);
        used.add(idx);
        if (g[idx].length == cap) notfull.rem(idx);
    }
    function pop() {
        // pr(used.size(), "last", used.last())
        return used.size() == 0 ? -1 : popAtStack(used.last());
    }
    function popAtStack(idx) {
        // pr("g", idx, g[idx])
        if (g[idx].length == 0) return -1;
        let res = g[idx].pop();
        notfull.add(idx);
        if (g[idx].length == 0) used.rem(idx);
        return res;
    }
}

const printTree = (root) => { // level order bfs with null
    let q = [root], a = [];
    while (q.length) {
        let cur = q.shift();
        a.push(cur != null ? cur.val : null);
        if (cur != null) {
            q.push(cur.left);
            q.push(cur.right);
        }
    }
    while (a[a.length - 1] == null) a.pop();
    console.log(JSON.stringify(a));
};

const pr = console.log;

const main = () => {
    let D = DinnerPlates(2);
    D.push(1);
    D.push(2);
    D.push(3);
    D.push(4);
    D.push(5);
    pr(D.popAtStack(0)); // 2
    D.push(20);
    D.push(21);
    pr(D.popAtStack(0)); // 20
    pr(D.popAtStack(2));   // 21
    pr(D.pop()) // 5
    pr(D.pop()) // 4
    pr(D.pop()) // 3
    pr(D.pop()) // 1
    pr(D.pop()) // -1

    pr("")
    let debug1 = DinnerPlates(1);
    debug1.push(1);
    debug1.push(2);
    debug1.push(3);
    pr(debug1.popAtStack(1)); // 2
    pr(debug1.pop()); // 3
    pr(debug1.pop()); // 1

    pr("");
    let debug2 = DinnerPlates(2);
    debug2.push(471);
    debug2.push(177);
    debug2.push(1);
    debug2.push(29);
    debug2.push(333);
    debug2.push(154);
    debug2.push(130);
    debug2.push(333);

    pr(debug2.popAtStack(1)); // 29
    pr(debug2.popAtStack(0)); // 177
    pr(debug2.popAtStack(2)); // 154
    pr(debug2.popAtStack(0)); // 471
    debug2.push(165);
    debug2.push(383);
    debug2.push(267);
    debug2.push(367);
    debug2.push(53);
    debug2.push(373);
    debug2.push(388);
    debug2.push(249);
    pr(debug2.pop());  // 249
    pr(debug2.pop());  // 388
    pr(debug2.pop());  // 373
    pr(debug2.pop());  // 53
};

main()