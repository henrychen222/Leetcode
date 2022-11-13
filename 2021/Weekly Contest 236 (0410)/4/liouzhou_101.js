// issue

function Node() {
    this.son = Array(2);
    this.pre;
    this.val = 0;
    this.sum = 0;
    this.size = 0;
}

function SplayTree() {
    let nil = new Node();
    nil.son[0] = nil.son[1] = nil.pre = nil;
    let root = nil;
    pr(root);
    return { update, rotate, splay, insert, last_node, next_node, get_last, get_next, erase, eraseV, getKth }
    function update(x) {
        x.size = x.son[0].size + x.son[1].size + 1;
        x.sum = x.son[0].sum + x.son[1].sum + x.val;
    }

    function rotate(x, p) {
        let y = x.pre;
        if (x.son[p] != nil) x.son[p].pre = y;
        y.son[p ^ 1] = x.son[p];
        x.son[p] = y;
        if (y == y.pre.son[0]) {
            y.pre.son[0] = x;
        } else if (y == y.pre.son[1]) {
            y.pre.son[1] = x;
        }
        x.pre = y.pre;
        y.pre = x;
        update(y);
        update(x);
    }

    function splay(x, p = nil) {
        while (x.pre != p) {
            let y = x.pre;
            if (y.pre == p) {
                x == y.son[0] ? rotate(x, 1) : rotate(x, 0);
            } else {
                if (y == y.pre.son[0]) {
                    if (x == y.son[0]) {
                        rotate(y, 1);
                        rotate(x, 1);
                    } else {
                        rotate(x, 0);
                        rotate(x, 1);
                    }
                } else {
                    if (x == y.son[0]) {
                        rotate(x, 1);
                        rotate(x, 0);
                    }
                    else {
                        rotate(y, 0);
                        rotate(x, 0);
                    }
                }
            }
        }
        if (p == nil) root = x;
    }

    function insert(v) {
        if (root == nil) {
            root = new Node();
            root.val = v;
            root.sum = v;
            root.size = 1;
            return root;
        }
        let x = root;
        while (1) {
            if (x.val > v) {
                if (x.son[0] == nil) {
                    x.son[0] = new node;
                    x.son[0].pre = x;
                    x = x.son[0];
                    x.val = v;
                    x.sum = v;
                    x.size = 1;
                    break;
                }
                x = x.son[0];
            } else {
                pr(11111, x.son[1])
                if (x.son[1] == nil) {
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
        splay(x);
        return x;
    }

    function last_node(x) {
        let p = x.son[0];
        while (p.son[1] != nil) p = p.son[1];
        return p;
    }

    function next_node(x) {
        let p = x.son[1];
        while (p.son[0] != nil) p = p.son[0];
        return p;
    }

    function get_last(x) {
        splay(x);
        let p = last_node(x);
        if (p != nil) splay(p);
        return p;
    }

    function get_next(x) {
        splay(x);
        let p = next_node(x);
        if (p != nil) splay(p);
        return p;
    }

    function erase(x) {
        splay(x);
        let L = last_node(x);
        let R = next_node(x);
        if (L == nil && R == nil) {
            root = nil;
        } else if (L == nil) {
            splay(R);
            R.son[0] = nil;
            update(R);
        } else if (R == nil) {
            splay(L);
            L.son[1] = nil;
            update(L);
        } else {
            splay(L);
            splay(R, L);
            R.son[0] = nil;
            update(R);
            update(L);
        }
    }

    function eraseV(val) {
        let it = root;
        while (it != nil) {
            if (it.val == val) return erase(it);
            it.val > val ? it = it.son[0] : it = it.son[1];
        }
    }

    function getKth(k) {
        let it = root;
        while (it != nil) {
            if (it.son[0].size + 1 == k) break;
            if (it.son[0].size >= k) {
                it = it.son[0];
            } else {
                k -= it.son[0].size + 1;
                it = it.son[1];
            }
        }
        splay(it);
        return it;
    }
}

function MKAverage(m, k) {
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