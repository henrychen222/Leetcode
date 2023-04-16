
/*
 * 01/18/23 evening + night    01/21/23 night fix   issue is the size() should use total
 * https://leetcode.com/problems/design-movie-rental-system/
 */

class AVLNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.cnt = 1;
        this.SubTreeNodes = 1;
    }
}

class AVLTree {
    constructor(comparator = null) {
        this.root = null;
        this.nodeCount = 0;
        this.tot = 0;
        this.comparator = comparator ? comparator : (x, y) => x - y;
    }
    cmp(x, y) { // compare nodes: x is inserted item
        if (x == null || y == null) return 0;
        if (this.valid(x)) x = new AVLNode(x);
        if (this.valid(y)) y = new AVLNode(y);
        if (Array.isArray(x.val) || Array.isArray(y.val)) {
            if (Array.isArray(x.val) && Array.isArray(y.val)) {
                return this.comparator(x.val, y.val);
            } else {
                return 0;
            }
        } else if (Number.isInteger(x.val) || Number.isInteger(y.val)) {
            if (Number.isInteger(x.val) && Number.isInteger(y.val)) {
                return this.comparator(x.val, y.val);
            } else {
                return 0;
            }
        } else if (this.isObject(x.val) || this.isObject(y.val)) {
            if (this.isObject(x.val) && this.isObject(y.val)) {
                return this.comparator(x.val, y.val);
            } else {
                return 0;
            }
        }
        return 0;
    }
    valid(x) {
        return Array.isArray(x) || Number.isInteger(x) || this.isObject(x);
    }
    isObject(x) {
        return typeof x === 'object' && !Array.isArray(x) && x !== null && !x.hasOwnProperty('SubTreeNodes'); // distinguish object with AVLNode object
    }
    getHeight(node) {
        return node != null ? node.height : 0;
    }
    getBalance(node) {
        return node != null ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
    update(node) {
        let leftHeight = this.getHeight(node.left), rightHeight = this.getHeight(node.right);
        node.height = 1 + Math.max(leftHeight, rightHeight);
        node.SubTreeNodes = 1 + (node.left != null ? node.left.SubTreeNodes : 0) + (node.right != null ? node.right.SubTreeNodes : 0);
    }
    LR(z) {
        let y = z.right;
        let T2 = y.left;
        y.left = z;
        z.right = T2;
        this.update(z);
        this.update(y);
        return y;
    }
    RR(z) {
        let y = z.left;
        let T3 = y.right;
        y.right = z
        z.left = T3
        this.update(z);
        this.update(y);
        return y;
    }
    insert(item) {
        this.root = this.insertUtil(this.root, item);
        this.tot++;
    }
    insertUtil(node, item) {
        if (node == null) { // find place to insert
            this.nodeCount++;
            return new AVLNode(item);
        } else if (this.cmp(item, node) < 0) {
            node.left = this.insertUtil(node.left, item);
        } else if (this.cmp(item, node) > 0) {
            node.right = this.insertUtil(node.right, item);
        } else {
            node.cnt++;
            return node;
        }
        this.update(node);
        return this.rebalanceAfterInsert(node, item);
    }
    remove(item) {
        let node = this.find(item);
        if (node == null) return false;
        this.root = this.removeUtil(this.root, item);
        this.tot--;
        return true;
    }
    removeUtil(node, item) {
        if (node == null) {
            return node;
        } else if (this.cmp(item, node) < 0) {
            node.left = this.removeUtil(node.left, item);
        } else if (this.cmp(item, node) > 0) {
            node.right = this.removeUtil(node.right, item);
        } else { // find node
            if (node.cnt > 1) {
                node.cnt--;
                return node;
            } else {
                this.nodeCount--;
            }
            // delete process
            if (node.left == null) {
                let tmp = node.right;
                node = null;
                return tmp;
            } else if (node.right == null) {
                let tmp = node.left;
                node = null;
                return tmp;
            }
            let tmp = this.findFirst(node.right);
            node.val = tmp.val;
            node.right = this.removeUtil(node.right, tmp.val);
        }
        if (node == null) return node;
        this.update(node);
        return this.rebalanceAfterDeletion(node, item);
    }
    rebalanceAfterInsert(node, item) {
        let bal = this.getBalance(node);
        if (bal > 1 && this.cmp(item, node.left) < 0) return this.RR(node);
        if (bal < -1 && this.cmp(item, node.right) > 0) return this.LR(node);
        if (bal > 1 && this.cmp(item, node.left) > 0) {
            node.left = this.LR(node.left);
            return this.RR(node);
        }
        if (bal < -1 && this.cmp(item, node.right) < 0) {
            node.right = this.RR(node.right);
            return this.LR(node);
        }
        return node;
    }
    rebalanceAfterDeletion(node) {
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
    find(item) {
        return this.findFirstOf(item);
    }
    findFirstOf(item) {
        let node = this.root, res = null;
        while (node != null) {
            if (this.cmp(item, node) < 0) {
                node = node.left;
            } else if (this.cmp(item, node) > 0) {
                node = node.right;
            } else {
                res = node;
                node = node.left;
            }
        }
        return res;
    }
    higher(item) {// > upper_bound
        let node = this.findSuccessorOf(item);
        return node == null ? null : (node.val);
    }
    findSuccessorOf(item) {
        let node = this.root, res = null;
        while (node != null) {
            if (this.cmp(item, node) < 0) {
                res = node;
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return res;
    }
    lower(item) { // < 
        let node = this.findPrecursorOf(item);
        return node == null ? null : (node.val);
    }
    findPrecursorOf(item) {
        let node = this.root, res = null;
        while (node != null) {
            if (this.cmp(item, node) > 0) {
                res = node;
                node = node.right;
            } else {
                node = node.left;
            }
        }
        return res;
    }
    findKth(k) { // (1-indexed)  unique
        let res = this.findKthNode(k);
        return res == null ? null : res.val;
    }
    findKthNode(k) {
        return this.size() < k ? null : this.KthUtil(this.root, k);
    }
    findKthMap(k) {
        let res = this.findKthNodeMap(k);
        return res == null ? null : res.val;
    }
    findKthNodeMap(k) {
        return this.total() < k ? null : this.KthUtil(this.root, k);
    }
    KthUtil(node, k) {
        let leftCount = node.left ? node.left.SubTreeNodes : 0;
        if (leftCount + 1 === k) return node;
        if (leftCount + 1 < k) return this.KthUtil(node.right, k - leftCount - 1);
        return this.KthUtil(node.left, k);
    }
    rankOf(item) { // unique value treeset    total elements in tree with val < item
        let x = this.findPrecursorOf(item);
        return x == null ? 0 : this.findRankOf(x, this.root) + 1;
    }
    findRankOf(item, node) {
        let rank = 0;
        while (node != null) {
            let leftSubtreeNodes = node.left != null ? node.left.SubTreeNodes : 0;
            if (this.cmp(item, node) < 0) {
                node = node.left;
            } else if (this.cmp(item, node) > 0) {
                rank += leftSubtreeNodes + 1;
                node = node.right;
            } else {
                return rank + leftSubtreeNodes;
            }
        }
        return 0;
    }
    has(item) {
        return this.count(item) > 0;
    }
    count(item) {
        let node = this.find(item);
        return node == null ? 0 : node.cnt;
    }
    first() {
        let node = this.findFirst(this.root);
        return node == null ? null : node.val;
    }
    last() {
        let node = this.findLast(this.root);
        return node == null ? null : node.val;
    }
    poll() {
        let res = this.first();
        this.remove(res);
        return res;
    }
    pollLast() {
        let res = this.last();
        this.remove(res);
        return res;
    }
    findFirst(node) {
        return node == null || node.left == null ? node : this.findFirst(node.left);
    }
    findLast(node) {
        return node == null || node.right == null ? node : this.findLast(node.right);
    }
    size() {
        return this.nodeCount;
    }
    total() {
        return this.tot;
    }
    isEmpty() {
        return this.root == null;
    }
    show() { // inorder
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
    showAll() {
        let d = this.show(), res = new Map();
        for (const x of d) res.set(x, this.count(x))
        return res;
    }
}

let EmptyTree = () => new AVLTree((x, y) => {
    if (x[2] != y[2]) return x[2] - y[2];  // price ascending
    if (x[0] != y[0]) return x[0] - y[0]; // smaller shop
    return x[1] - y[1]; // smaller movie
});


// Accepted --- 2265ms 100%
// Accepted --- 2345ms 100%
function MovieRentingSystem(n, entries) {
    let unrentM = new Map(), rentM = new Map(), m = new Map();
    entries.map(x => {
        let [shop, movie, price] = x;
        if (!unrentM.has(movie)) unrentM.set(movie, EmptyTree());
        unrentM.get(movie).insert([shop, movie, price]);
        m.set(shop + ' ' + movie, price);
    });
    return { search, rent, drop, report }
    function search(movie) {
        let res = [], tree = unrentM.get(movie);
        if (!tree) return res;
        for (let i = 0; i < Math.min(5, tree.total()); i++) {
            let node = tree.findKthNodeMap(i + 1);
            res.push(node.val[0]);
        }
        // pr(tree.size(), tree.total(), tree.show(), res);
        return res;
    }
    function rent(shop, movie) {
        op(shop, movie, unrentM, rentM, EmptyTree());
    }
    function drop(shop, movie) {
        op(shop, movie, rentM, unrentM, EmptyTree());
    }
    function op(shop, movie, source, saveTo, emptyTree) {
        let cur, curTree = source.get(movie);
        if (!curTree) return;
        let item = [shop, movie, m.get(shop + ' ' + movie)];
        if (curTree.has(item)) cur = curTree.find(item);
        if (cur != undefined) {
            if (!saveTo.has(movie)) saveTo.set(movie, emptyTree);
            saveTo.get(movie).insert(cur.val);
            curTree.remove(cur.val);
            // curTree.total() == 0 ? source.delete(movie) : source.set(movie, curTree); // Accepted --- 2265ms 100%
            // curTree.size() == 0 ? source.delete(movie) : source.set(movie, curTree); // WA
            curTree.isEmpty() ? source.delete(movie) : source.set(movie, curTree); // Accepted --- 2345ms 100%
        }
    }
    function report() {
        let res = [], d = EmptyTree();
        for (const [, tree] of rentM) {
            for (let i = 0; i < tree.total(); i++) {
                let node = tree.findKthNodeMap(i + 1);
                d.insert(node.val);
            }
        }
        for (let i = 0; i < Math.min(5, d.total()); i++) {
            let node = d.findKthNodeMap(i + 1);
            res.push(node.val);
        }
        return res.map(x => [x[0], x[1]]);
    }
}

const pr = console.log;
const main = () => {
    let movieRentingSystem = new MovieRentingSystem(3, [[0, 1, 5], [0, 2, 6], [0, 3, 7], [1, 1, 4], [1, 2, 7], [2, 1, 5]]);
    pr(movieRentingSystem.search(1));  // [1, 0, 2]
    movieRentingSystem.rent(0, 1);
    movieRentingSystem.rent(1, 2);
    pr(movieRentingSystem.report());   // [[0, 1], [1, 2]]
    movieRentingSystem.drop(1, 2);
    pr(movieRentingSystem.search(2));  // [0, 1]


    pr()
    let debug1 = new MovieRentingSystem(22, [[13, 6406, 5183], [10, 2926, 931], [0, 6424, 7126], [0, 4988, 4028], [6, 8295, 7660], [16, 4729, 3008], [7, 6349, 8844], [1, 6896, 3047], [8, 4693, 3264], [13, 1984, 6267], [14, 4544, 5627], [21, 6347, 1327], [7, 4932, 3085], [16, 5577, 1542], [11, 9549, 2609], [5, 8830, 5502], [19, 3157, 6780], [1, 7953, 5964], [7, 1882, 6571], [18, 9932, 1146], [17, 5985, 2625], [19, 8434, 4176], [19, 1762, 3420],
    [13, 2558, 984], [4, 4693, 6178], [17, 6347, 3059], [17, 5808, 1467], [21, 7778, 1596], [1, 47, 7419], [15, 646, 8719], [10, 1694, 9782], [6, 5577, 5867], [11, 6406, 4180], , [1, 1112, 8378], [8, 6750, 3274], [12, 531, 8300], [8, 7672, 6253], [17, 5551, 6090], [14, 4321, 597], [16, 8872, 2453], [5, 9630, 3367], [7, 8872, 9900], [16, 3238, 5601], [9, 9630, 9659], [12, 431, 2143], [13, 646, 6596],
    [12, 7953, 1106], [17, 1564, 5806], [9, 4988, 2545], [20, 3852, 3190], [16, 7953, 7802], [19, 646, 7631], [21, 9816, 46], [11, 7778, 37]]);
    debug1.rent(1, 7953);
    pr(debug1.report()); // [ [ 1, 7953 ] ]
    debug1.drop(1, 7953);
    debug1.rent(11, 9549);
    pr(debug1.report()); // [ [ 11, 9549 ] ]
    pr(debug1.report()); // [ [ 11, 9549 ] 
    pr(debug1.search(531)); // [ 12 ]
    debug1.rent(17, 6347);
    pr(debug1.search(9998)); // [] 
    debug1.rent(12, 431);
    debug1.drop(11, 9549);
    pr(debug1.report()); // [ [ 12, 431 ], [ 17, 6347 ] ]
    debug1.rent(9, 9630);
    pr(debug1.report()); // [ [ 12, 431 ], [ 17, 6347 ], [ 9, 9630 ] ]
    debug1.rent(12, 6347);
    debug1.rent(14, 4321);
    debug1.drop(9, 9630);
    pr(debug1.report()); // [ [ 14, 4321 ], [ 12, 431 ], [ 17, 6347 ], ,[12,6347]] issue
    debug1.rent(0, 4988);
    debug1.rent(13, 6406);
    debug1.rent(11, 7778);
    pr(debug1.report()); // [ [ 11, 7778 ], [ 14, 4321 ], [ 12, 431 ], [ 17, 6347 ], [ 0, 4988 ] ]
    debug1.rent(8, 4693);
};

main()