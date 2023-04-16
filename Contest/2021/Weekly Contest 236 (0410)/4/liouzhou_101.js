// issue

// function Node() {
//     this.son = Array(2);
//     this.pre;
//     this.val = 0;
//     this.sum = 0;
//     this.size = 0;
// }

// function SplayTree() {
//     let nil = new Node();
//     nil.son[0] = nil.son[1] = nil.pre = nil;
//     let root = nil;
//     pr(root);
//     return { update, rotate, splay, insert, last_node, next_node, get_last, get_next, erase, eraseV, getKth }
//     function update(x) {
//         x.size = x.son[0].size + x.son[1].size + 1;
//         x.sum = x.son[0].sum + x.son[1].sum + x.val;
//     }

//     function rotate(x, p) {
//         let y = x.pre;
//         if (x.son[p] != nil) x.son[p].pre = y;
//         y.son[p ^ 1] = x.son[p];
//         x.son[p] = y;
//         if (y == y.pre.son[0]) {
//             y.pre.son[0] = x;
//         } else if (y == y.pre.son[1]) {
//             y.pre.son[1] = x;
//         }
//         x.pre = y.pre;
//         y.pre = x;
//         update(y);
//         update(x);
//     }

//     function splay(x, p = nil) {
//         while (x.pre != p) {
//             let y = x.pre;
//             if (y.pre == p) {
//                 x == y.son[0] ? rotate(x, 1) : rotate(x, 0);
//             } else {
//                 if (y == y.pre.son[0]) {
//                     if (x == y.son[0]) {
//                         rotate(y, 1);
//                         rotate(x, 1);
//                     } else {
//                         rotate(x, 0);
//                         rotate(x, 1);
//                     }
//                 } else {
//                     if (x == y.son[0]) {
//                         rotate(x, 1);
//                         rotate(x, 0);
//                     }
//                     else {
//                         rotate(y, 0);
//                         rotate(x, 0);
//                     }
//                 }
//             }
//         }
//         if (p == nil) root = x;
//     }

//     function insert(v) {
//         if (root == nil) {
//             root = new Node();
//             root.val = v;
//             root.sum = v;
//             root.size = 1;
//             return root;
//         }
//         let x = root;
//         while (1) {
//             if (x.val > v) {
//                 if (x.son[0] == nil) {
//                     x.son[0] = new node;
//                     x.son[0].pre = x;
//                     x = x.son[0];
//                     x.val = v;
//                     x.sum = v;
//                     x.size = 1;
//                     break;
//                 }
//                 x = x.son[0];
//             } else {
//                 pr(11111, x.son[1])
//                 if (x.son[1] == nil) {
//                     x.son[1] = new Node();
//                     x.son[1].pre = x;
//                     x = x.son[1];
//                     x.val = v;
//                     x.sum = v;
//                     x.size = 1;
//                     break;
//                 }
//                 x = x.son[1];
//             }
//         }
//         splay(x);
//         return x;
//     }

//     function last_node(x) {
//         let p = x.son[0];
//         while (p.son[1] != nil) p = p.son[1];
//         return p;
//     }

//     function next_node(x) {
//         let p = x.son[1];
//         while (p.son[0] != nil) p = p.son[0];
//         return p;
//     }

//     function get_last(x) {
//         splay(x);
//         let p = last_node(x);
//         if (p != nil) splay(p);
//         return p;
//     }

//     function get_next(x) {
//         splay(x);
//         let p = next_node(x);
//         if (p != nil) splay(p);
//         return p;
//     }

//     function erase(x) {
//         splay(x);
//         let L = last_node(x);
//         let R = next_node(x);
//         if (L == nil && R == nil) {
//             root = nil;
//         } else if (L == nil) {
//             splay(R);
//             R.son[0] = nil;
//             update(R);
//         } else if (R == nil) {
//             splay(L);
//             L.son[1] = nil;
//             update(L);
//         } else {
//             splay(L);
//             splay(R, L);
//             R.son[0] = nil;
//             update(R);
//             update(L);
//         }
//     }

//     function eraseV(val) {
//         let it = root;
//         while (it != nil) {
//             if (it.val == val) return erase(it);
//             it.val > val ? it = it.son[0] : it = it.son[1];
//         }
//     }

//     function getKth(k) {
//         let it = root;
//         while (it != nil) {
//             if (it.son[0].size + 1 == k) break;
//             if (it.son[0].size >= k) {
//                 it = it.son[0];
//             } else {
//                 k -= it.son[0].size + 1;
//                 it = it.son[1];
//             }
//         }
//         splay(it);
//         return it;
//     }
// }

/////////////////////////////////// 01/13/23 night still issue give up use new Splay Tree ///////////////////////////////////////////////

class Node {
    constructor() {
        this.son = [null, null];
        this.pre = null;
        this.val = 0;
        this.sum = 0;
        this.size = 0;
    }
}

class SplayTree1 {
    constructor() {
        this.root = null;
    }
    update(x) {
        x.size = x.son[0].size + x.son[1].size + 1;
        x.sum = x.son[0].sum + x.son[1].sum + x.val;
    }
    rotate(x, p) {
        let y = x.pre;
        if (x.son[p] != null) x.son[p].pre = y;
        y.son[p ^ 1] = x.son[p];
        x.son[p] = y;
        if (y == y.pre.son[0]) {
            y.pre.son[0] = x;
        } else if (y == y.pre.son[1]) {
            y.pre.son[1] = x;
        }
        x.pre = y.pre;
        y.pre = x;
        this.update(y);
        this.update(x);
    }
    splay(x, p) {
        while (x.pre != p) {
            let y = x.pre;
            if (y.pre == p) {
                x == y.son[0] ? this.rotate(x, 1) : this.rotate(x, 0);
            } else {
                if (y == y.pre.son[0]) {
                    if (x == y.son[0]) {
                        this.rotate(y, 1);
                        this.rotate(x, 1);
                    } else {
                        this.rotate(x, 0);
                        this.rotate(x, 1);
                    }
                } else {
                    if (x == y.son[0]) {
                        this.rotate(x, 1);
                        this.rotate(x, 0);
                    }
                    else {
                        this.rotate(y, 0);
                        this.rotate(x, 0);
                    }
                }
            }
        }
        if (p == null) this.root = x;
    }
    insert(v) {
        if (this.root == null) {
            this.root = new Node();
            this.root.val = v;
            this.root.sum = v;
            this.root.size = 1;
            // return this.root;
        }
        let x = this.root;
        while (1) {
            if (x.val > v) {
                if (x.son[0] == null) {
                    x.son[0] = new Node();
                    x.son[0].pre = x;
                    x = x.son[0];
                    x.val = v;
                    x.sum = v;
                    x.size = 1;
                    break;
                }
                x = x.son[0];
            } else {
                if (x.son[1] == null) {
                    x.son[1] = new Node();
                    x.son[1].pre = x;
                    x = x.son[1];
                    x.val = v;
                    x.sum = v;
                    x.size = 1;
                    break;
                }
                x = x.son[1];
            }
        }
        this.splay(x);
        return x;
    }
    last_node(x) {
        let p = x.son[0];
        while (p.son[1] != null) p = p.son[1];
        return p;
    }
    next_node(x) {
        let p = x.son[1];
        while (p.son[0] != null) p = p.son[0];
        return p;
    }
    erase(val) {
        let it = this.root;
        while (it != null) {
            if (it.val == val) return this.eraseUtil(it);
            it.val > val ? it = it.son[0] : it = it.son[1];
        }
    }
    eraseUtil(x) {
        this.splay(x);
        let L = this.last_node(x), R = this.next_node(x);
        if (L == null && R == null) {
            this.root = null;
        } else if (L == null) {
            this.splay(R);
            R.son[0] = null;
            this.update(R);
        } else if (R == null) {
            this.splay(L);
            L.son[1] = null;
            this.update(L);
        } else {
            this.splay(L);
            this.splay(R, L);
            R.son[0] = null;
            this.update(R);
            this.update(L);
        }
    }
    get_last(x) {
        this.splay(x);
        let p = this.last_node(x);
        if (p != null) this.splay(p);
        return p;
    }
    get_next(x) {
        this.splay(x);
        let p = this.next_node(x);
        if (p != null) this.splay(p);
        return p;
    }
    getKth(k) {
        let it = this.root;
        while (it != null) {
            if (it.son[0].size + 1 == k) break;
            if (it.son[0].size >= k) {
                it = it.son[0];
            } else {
                k -= it.son[0].size + 1;
                it = it.son[1];
            }
        }
        this.splay(it);
        return it;
    }
}

function MKAverage1(m, k) {
    let v = [];
    let T = new SplayTree();
    return { addElement, calculateMKAverage }
    function addElement(x) {
        v.push(x);
        T.insert(x);
        if (v.length > m) T.eraseV(v[v.length - m - 1]);
    }

    function calculateMKAverage() {
        if (v.length < m) return -1;
        let res = T.root.sum;
        {
            let it = T.getKth(k + 1);
            res -= it.son[0].sum;
        }
        {
            let it = T.getKth(m - k);
            res -= it.son[1].sum;
        }
        return res / (m - 2 * k) >> 0;
    }
}

//////////////////////////////////////////////////////// 01/13/23 Add Sum in new Splay Tree Accepted /////////////////////////////////////////
class SplayNode {
    constructor(value) {
        this.parent = null;
        this.left = null;
        this.right = null;
        this.val = value;
        this.sum = value;
        this.sz = 1;
    }
    Update() {
        this.sz = (this.left != null ? this.left.sz : 0) + (this.right != null ? this.right.sz : 0) + 1;
        this.sum = (this.left != null ? this.left.sum : 0) + (this.right != null ? this.right.sum : 0) + this.val;
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
    // Insert an element into the container O(log(n))
    Insert(value) {
        // pr("insert begin111")
        if (this.root == null) {
            this.root = this.NewNode(value);
            return this.root;
        }
        // pr("insert begin222")
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
        // pr("insert end, prepare splay", node)
        this.Splay(node);
        // pr("splay end")
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

// Accepted --- 894ms
function MKAverage(m, k) {
    let a = [], tree = new SplayTree();
    return { addElement, calculateMKAverage }
    function addElement(x) {
        a.push(x);
        tree.Insert(x);
        if (a.length > m) tree.Delete(a[a.length - m - 1]);
    }
    function calculateMKAverage() {
        // pr("\nstart")
        if (a.length < m) return -1;
        let res = tree.root.sum;
        // pr("res", res)
        // pr(tree.show(), k+1, m - k)
        let node = tree.FindKth(k);
        // pr("res", res, node.left==null, node.right==null)
        if (node.left) {
            // pr("val", node.val, "left sum", node.left.sum)
            res -= node.left.sum;
        }
        node = tree.FindKth(m - k - 1);
        if (node.right) {
            // pr("val", node.val,"right sum", node.right.sum)
            res -= node.right.sum;
        }
        return (res / (m - 2 * k)) >> 0;
    }
}

const pr = console.log;
const main = () => {
    let obj = new MKAverage(3, 1);
    obj.addElement(3);
    obj.addElement(1);
    pr(obj.calculateMKAverage());
    obj.addElement(10);
    pr(obj.calculateMKAverage());
    obj.addElement(5);
    obj.addElement(5);
    obj.addElement(5);
    pr(obj.calculateMKAverage());
};

main()