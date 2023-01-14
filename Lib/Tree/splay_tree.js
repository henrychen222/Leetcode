/*
01/12/23 evening
reference:https://leetcode.com/contest/biweekly-contest-88/ranking liouzhou_101

example problem:
https://leetcode.com/problems/number-of-pairs-satisfying-inequality/
https://leetcode.com/problems/sliding-window-maximum/
https://leetcode.com/problems/dinner-plate-stacks/
https://leetcode.com/problems/finding-mk-average/
*/

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
        return se.has(x);
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


/////////////////////////////////////////////////////////////////////////////
const pr = console.log;

const main = () => {
    let ts = new TreeSet();
    let A = [3, 3, 2, 2, -1, 6, 5, 7, -2];
    for (const x of A) ts.add(x);
    pr(ts.size(), ts.contains(3), ts.contains(9))
    A.sort((x, y) => x - y);
    pr(A, A.length, ts.size())
    pr(ts.first(root), ts.last(root))
};

const test = () => {
    let ts = new TreeSet();
    ts.add(2);
    ts.add(1);
    ts.add(5);
    ts.add(1);
    ts.add(6);
    pr(ts.first(), ts.last()) // 1 6
    ts.rem(6);
    pr(ts.first(), ts.last()) // 1 5
    ts.rem(5);
    pr(ts.first(), ts.last()) // 1 2 
    ts.rem(1);
    pr(ts.first(), ts.last()) // 2 2
}

main()

pr("")

test()