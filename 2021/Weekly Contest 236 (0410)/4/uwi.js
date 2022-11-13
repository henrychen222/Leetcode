// 04/21/21 night  issue

function Node(id, v) {
    let priority = Math.random() * Number.MAX_SAFE_INTEGER >> 0;
    let left, right, parent;
    let count = sum = 0;
    update({
        id: id,
        v: v,
        priority: priority,
        left: left,
        right: right,
        parent: parent,
        count: count,
        sum: sum
    });

    return { summ, insert, insertb, search, index, erase }
    function update(a) {
        // pr(a.id, a.v, a.priority, a.count, a.sum);
        if (a == null) return null;
        a.count = 1;
        if (a.left != null) a.count += a.left.count;
        if (a.right != null) a.count += a.right.count;
        a.sum = a.v;
        if (a.left != null) a.sum += a.left.sum;
        if (a.right != null) a.sum += a.right.sum;
        // pr(a);
        return a;
    }

    function disconnect() {
        if (a == null) return null;
        a.left = a.right = a.parent = null;
        return update(a);
    }

    function root(x) {
        if (x == null) return null;
        while (x.parent != null) x = x.parent;
        return x;
    }

    function calculate(a) {
        return a == null ? 0 : a.count;
    }

    function setParent(a, par) {
        if (a != null) a.parent = par;
    }

    function summ(a, L, R) {
        pr(a, L, R)
        if (a == null || L >= R || L >= calculate(a) || R <= 0) return 0;
        if (L <= 0 && R >= calculate(a)) {
            return a.sum;
        } else {
            let ret = 0;
            ret += summ(a.left, L, R);
            ret += summ(a.right, L - calculate(a.left) - 1, R - calculate(a.left) - 1);
            if (L <= calculate(a.left) && calculate(a.left) < R) ret += a.v;
            return ret;
        }
    }

    function merge(a, b) {
        if (b == null) return a;
        if (a == null) return b;
        if (a.priority > b.priority) {
            setParent(a.right, null);
            setParent(b, null);
            a.right = merge(a.right, b);
            setParent(a.right, a);
            return update(a);
        } else {
            setParent(a, null);
            setParent(b.left, null);
            b.left = merge(a, b.left);
            setParent(b.left, b);
            return update(b);
        }
    }

    function split(a, K) {
        if (a == null) return [null, null]
        if (K <= calculate(a.left)) {
            setParent(a.left, null);
            let s = split(a.left, K);
            a.left = s[1];
            setParent(a.left, a);
            s[1] = update(a);
            return s;
        } else {
            setParent(a.right, null);
            let s = split(a.right, K - calculate(a.left) - 1);
            a.right = s[0];
            setParent(a.right, a);
            s[0] = update(a);
            return s;
        }
    }

    function insert(a, K, b) {
        if (a == null) return b;
        if (b.priority < a.priority) {
            if (K <= calculate(a.left)) {
                a.left = insert(a.left, K, b);
                setParent(a.left, a);
            } else {
                a.right = insert(a.right, K - calculate(a.left) - 1, b);
                setParent(a.right, a);
            }
            return update(a);
        } else {
            let ch = split(a, K);
            b.left = ch[0];
            b.right = ch[1];
            setParent(b.left, b);
            setParent(b.right, b);
            return update(b);
        }
    }

    function insertb(root, x) {
        let ind = search(root, x.id);
        if (ind < 0) {
            ind = -ind - 1;
            return insert(root, ind, x);
        } else {
            return insert(root, ind, x);
        }
    }

    // delete K-th
    function erase(a, K) {
        if (a == null) return null;
        if (K < calculate(a.left)) {
            a.left = erase(a.left, K);
            setParent(a.left, a);
            return update(a);
        } else if (K == calculate(a.left)) {
            setParent(a.left, null);
            setParent(a.right, null);
            let aa = merge(a.left, a.right);
            disconnect(a);
            return aa;
        } else {
            a.right = erase(a.right, K - calculate(a.left) - 1);
            setParent(a.right, a);
            return update(a);
        }
    }

    function get(a, K) {
        while (a != null) {
            if (K < calculate(a.left)) {
                a = a.left;
            } else if (K == calculate(a.left)) {
                break;
            } else {
                K = K - calculate(a.left) - 1;
                a = a.right;
            }
        }
        return a;
    }

    function lowerBound(a, q) {
        let lcount = 0;
        while (a != null) {
            if (a.v >= q) {
                a = a.left;
            } else {
                lcount += calculate(a.left) + 1;
                a = a.right;
            }
        }
        return lcount;
    }

    function search(a, q) {
        let lcount = 0;
        while (a != null) {
            if (a.id == q) {
                lcount += calculate(a.left);
                break;
            }
            if (q < a.id) {
                a = a.left;
            } else {
                lcount += calculate(a.left) + 1;
                a = a.right;
            }
        }
        return a == null ? -(lcount + 1) : lcount;
    }

    function index(a) {
        if (a == null) return -1;
        let ind = calculate(a.left);
        while (a != null) {
            let par = a.parent;
            if (par != null && par.right == a) {
                ind += calculate(par.left) + 1;
            }
            a = par;
        }
        return ind;
    }

    function nodes(a) {
        return dfs(a, [calculate(a)], 0, calculate(a));
    }

    function dfs(a, ns, L, R) {
        if (a == null) return ns;
        dfs(a.left, ns, L, L + calculate(a.left));
        ns[L + calculate(a.left)] = a;
        dfs(a.right, ns, R - calculate(a.right), R);
        return ns;
    }
}

function MKAverage(m, k) {
    let def = [];
    let root = null;
    let x;
    return { addElement, calculateMKAverage }
    function addElement(num) {
        x = new Node(num, num);
        def.push(x);
        root = x.insertb(root, x);
        if (def.length > m) {
            root = x.erase(root, x.index(def.pop()));
        }
    }

    function calculateMKAverage() {
        if (def.length < m) return -1;
        return (x.summ(root, k, m - k) / (m - 2 * k) >> 0);
    }
}


const pr = console.log;
const main = () => {
    let obj = new MKAverage(3, 1);
    obj.addElement(3);
    obj.addElement(1);
    pr(obj.calculateMKAverage()); // -1
    obj.addElement(10);
    pr(obj.calculateMKAverage()); // 3
    // obj.addElement(5);
    // obj.addElement(5);
    // obj.addElement(5);
    // pr(obj.calculateMKAverage()); // 5
};

main()