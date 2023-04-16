/*
 * 01/17/23 night
 * https://leetcode.com/problems/design-a-food-rating-system/
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
    }
    insertUtil(node, item) {
        if (node == null) { // find place to insert
            this.nodeCount++;
            this.tot++;
            return new AVLNode(item);
        } else if (this.cmp(item, node) < 0) {
            node.left = this.insertUtil(node.left, item);
        } else if (this.cmp(item, node) > 0) {
            node.right = this.insertUtil(node.right, item);
        } else {
            node.cnt++;
            this.tot++;
            return node;
        }
        this.update(node);
        return this.rebalanceAfterInsert(node, item);
    }
    remove(v) {
        this.root = this.removeUtil(this.root, v);
    }
    removeUtil(node, item) {
        if (node == null) {
            return node;
        } else if (this.cmp(item, node) < 0) {
            node.left = this.removeUtil(node.left, item);
        } else if (this.cmp(item, node) > 0) {
            node.right = this.removeUtil(node.right, item);
        } else { // find node
            if (node.cnt > 1) { // current node > 1, remove 1, tree size keep the same
                node.cnt--;
                this.tot--;
                return node;
            } else { // current node == 1, delete, tree size--
                this.nodeCount--;
                this.tot--;
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
        let d = this.show(), res = [];
        for (const x of d) {
            for (let i = 0; i < this.count(x); i++) res.push(x);
        }
        return res;
    }
}

const lexical_smallest_comp = (x, y) => x < y ? -1 : x > y ? 1 : 0;

function Node(rate, name) {
    this.rate = rate;
    this.name = name;
}

// Accepted --- 891ms 68%
function FoodRatings(foods, cuisines, ratings) {
    let n = foods.length, cm = new Map(), fm = new Map(), rm = new Map();
    for (let i = 0; i < n; i++) {
        fm.set(foods[i], cuisines[i]);
        rm.set(foods[i], ratings[i]);
        if (!cm.has(cuisines[i])) {
            let tree = new AVLTree((x, y) => {
                if (x.rate != y.rate) return y.rate - x.rate;
                return lexical_smallest_comp(x.name, y.name);
            });
            cm.set(cuisines[i], tree);
        }
        cm.get(cuisines[i]).insert(new Node(ratings[i], foods[i]));
    }
    return { changeRating, highestRated }
    function changeRating(food, newRating) {
        let cuisine = fm.get(food);
        cm.get(cuisine).remove(new Node(rm.get(food), food));
        rm.set(food, newRating);
        cm.get(cuisine).insert(new Node(rm.get(food), food));
    }
    function highestRated(cuisine) {
        return cm.get(cuisine).first().name;
    }
}

// Accepted --- 761ms 80%
function FoodRatings1(foods, cuisines, ratings) {
    let n = foods.length, cm = new Map(), fm = new Map(), rm = new Map();
    for (let i = 0; i < n; i++) {
        fm.set(foods[i], cuisines[i]);
        rm.set(foods[i], ratings[i]);
        if (!cm.has(cuisines[i])) {
            let tree = new AVLTree((x, y) => {
                if (x[0] != y[0]) return y[0] - x[0];
                return lexical_smallest_comp(x[1], y[1]);
            });
            cm.set(cuisines[i], tree);
        }
        cm.get(cuisines[i]).insert([ratings[i], foods[i]]);
    }
    return { changeRating, highestRated }
    function changeRating(food, newRating) {
        let cuisine = fm.get(food);
        cm.get(cuisine).remove([rm.get(food), food]);
        rm.set(food, newRating);
        cm.get(cuisine).insert([rm.get(food), food]);
    }
    function highestRated(cuisine) {
        return cm.get(cuisine).first()[1];
    }
}

const pr = console.log;

const main = () => {
    let foodRatings = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]);
    pr(foodRatings.highestRated("korean")); // "kimchi"
    pr(foodRatings.highestRated("japanese")); // "ramen"
    foodRatings.changeRating("sushi", 16);
    pr(foodRatings.highestRated("japanese")); // "sushi"
    foodRatings.changeRating("ramen", 16);
    pr(foodRatings.highestRated("japanese")); // ramen
};

main()
