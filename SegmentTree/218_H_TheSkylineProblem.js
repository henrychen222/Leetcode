/**
 * 09/21/21 evening
 * https://leetcode.com/problems/the-skyline-problem/
 * 
 * reference: https://www.cnblogs.com/grandyang/p/4534586.html
 */

function TreeMap() {
    let root = null;
    let keyType = void 0;
    let length = 0;
    return { forEach, set, get, getTree, size, maxKey, minKey, remove };
    function checkKey(key, checkKeyType) {
        let localKeyType = typeof key;
        if (localKeyType !== "number" && localKeyType !== "string" && localKeyType !== "boolean") throw new Error("'key' must be a number, a string or a boolean");
        if (checkKeyType === true && localKeyType !== keyType) throw new Error("All keys must be of the same type");
        return localKeyType;
    }
    function call(callback) {
        let args = Array.prototype.slice.call(arguments, 1);
        if (typeof callback === "function") callback.apply(void 0, args);
    }
    function getTree() {
        return root;
    }
    function size() {
        return length;
    }
    function forEach(callback) {
        internalEach(root, callback);
    }
    function internalEach(node, callback, internalCallback) {
        if (node === null) return call(internalCallback);
        internalEach(node.left, callback, () => {
            call(callback, node.value, node.key);
            internalEach(node.right, callback, () => {
                call(internalCallback);
            });
        });
    }
    function get(key) {
        checkKey(key);
        return internalGet(key, root);
    }
    function internalGet(key, node) {
        if (node === null) return void 0;
        if (key < node.key) {
            return internalGet(key, node.left);
        } else if (key > node.key) {
            return internalGet(key, node.right);
        } else {
            return node.value;
        }
    }
    function set(key, value) {
        root == null ? keyType = checkKey(key) : checkKey(key, true);
        root = internalSet(key, value, root);
    }
    function internalSet(key, value, node) {
        if (node === null) {
            length++;
            return { key: key, value: value, left: null, right: null };
        }
        if (key < node.key) {
            node.left = internalSet(key, value, node.left);
        } else if (key > node.key) {
            node.right = internalSet(key, value, node.right);
        } else {
            node.value = value;
        }
        return node;
    }
    function maxKey() {
        let maxNode = getMaxNode(root);
        if (maxNode !== null) return maxNode.key;
        return maxNode;
    }
    function minKey() {
        let minNode = getMinNode(root);
        if (minNode !== null) return minNode.key;
        return minNode;
    }
    function getMaxNode(node) {
        while (node !== null && node.right !== null) node = node.right;
        return node;
    }
    function getMinNode(node) {
        while (node !== null && node.left !== null) node = node.left;
        return node;
    }
    function remove(key) {
        checkKey(key);
        root = internalRemove(key, root);
    }
    function internalRemove(key, node) {
        if (node === null) return null;
        if (key < node.key) {
            node.left = internalRemove(key, node.left);
        } else if (key > node.key) {
            node.right = internalRemove(key, node.right);
        } else {
            if (node.left !== null && node.right !== null) {
                let maxNode = getMaxNode(node.left);
                let maxNodeKey = maxNode.key;
                let maxNodeValue = maxNode.value;
                maxNode.key = node.key;
                maxNode.value = node.value;
                node.key = maxNodeKey;
                node.value = maxNodeValue;
                node.left = internalRemove(key, node.left);
            } else if (node.left !== null) {
                length--;
                return node.left;
            } else if (node.right !== null) {
                length--;
                return node.right;
            } else {
                length--;
                return null;
            }
        }
        return node;
    }
}

function MultiSet() {
    let tm = new TreeMap();
    return { insert, eraseOne, erase, contains, first, last, show }
    function insert(x) {
        tm.set(x, tm.get(x) + 1 || 1);
    }
    function eraseOne(x) {
        let occ = tm.get(x);
        occ > 1 ? tm.set(x, occ - 1) : tm.remove(x);
    }
    function erase(x) {
        tm.remove(x);
    }
    function contains(x) {
        return tm.get(x) ? 1 : 0;
    }
    function first() {
        return tm.minKey();
    }
    function last() {
        return tm.maxKey();
    }
    function show() {
        let res = [];
        tm.forEach((v, k) => {
            res.push(k + " => " + v);
        })
        console.log(res);
    };
}

////////////////////////////////////////////////////////////////////////////////////
// Accepted --- 2408ms 6.73%
function MultiSet2() {
    let tm = {}; // works for key >= 0
    return { insert, eraseOne, erase, contains, first, last, show }
    function insert(x) {
        tm[x] ? tm[x]++ : tm[x] = 1;
    }
    function eraseOne(x) {
        let occ = tm[x];
        occ > 1 ? tm[x]-- : delete tm[x];
    }
    function erase(x) {
        delete tm[x];
    }
    function contains(x) {
        return tm[x] ? 1 : 0;
    }
    function first() {
        let a = Object.keys(tm);
        return a[0] - '0';
    }
    function last() {
        let a = Object.keys(tm);
        return a[a.length - 1] - '0';
    }
    function show() {
        console.log(tm);
    };
}

////////////////////////////// new MultiSet 01/13/23 evening ///////////////////////////////////////////////////////////
function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

// Accepted --- 188ms 80.87% (old version)
// Accepted --- 180ms 81.74%
function MultiSet(elements) {
    let a = [], m = new Map(), bi = new Bisect();
    initialize();
    return { insert, first, last, get, search, poll, pollLast, lower_bound, upper_bound, findKth, eraseByIndex, eraseOne, eraseAll, contains, size, clear, show };
    function initialize() {
        if (elements) {
            for (const x of elements) {
                bi.insort_right(a, x);
                m.set(x, m.get(x) + 1 || 1);
            }
        }
    }
    function insert(x) {
        bi.insort_right(a, x);
        m.set(x, m.get(x) + 1 || 1);
    }
    function first() {
        return a[0];
    }
    function last() {
        return a[a.length - 1];
    }
    function get(i) {
        return a[i];
    }
    function poll() {
        let res = a[0];
        a.splice(0, 1);
        removeOneOrManyMap(m, res);
        return res;
    }
    function pollLast() {
        let res = a.pop();
        removeOneOrManyMap(m, res);
        return res;
    }
    function lower_bound(x) {
        return bi.bisect_left(a, x);
    }
    function upper_bound(x) {
        return bi.bisect_right(a, x);
    }
    function findKth(k) {
        return a[k - 1];
    }
    function search(x) {
        return lower_bound(x);
    }
    function eraseByIndex(idx) {
        removeOneOrManyMap(m, a[idx]);
        a.splice(idx, 1);
    }
    function eraseOne(x) {
        let idx = lower_bound(x);
        if (a[idx] == x) a.splice(idx, 1);
        removeOneOrManyMap(m, x);
    }
    function eraseAll(x) {
        if (contains(x)) {
            let idx = search(x), occ = m.get(x);
            while (occ--) a.splice(idx, 1);
            m.delete(x);
        }
    }
    function removeOneOrManyMap(m, x, cnt = 1) {
        let occ = m.get(x);
        occ > cnt ? m.set(x, occ - cnt) : m.delete(x);
    }
    function contains(x) {
        return m.has(x);
    }
    function size() {
        return a.length;
    }
    function clear() {
        a = [];
        m.clear();
    }
    function show() {
        return a;
    }
}


/////////////////////////////////////////////////////////////////////////////////
// Accepted --- 2300ms 7.69%
// Accepted --- 2308ms 7.69%
const getSkyline = (buildings) => {
    let d = [];
    for (const [left, right, height] of buildings) {
        d.push([left, -height]);
        d.push([right, height]);
    }
    d.sort((x, y) => x[0] == y[0] ? x[1] - y[1] : x[0] - y[0]);
    let m = new MultiSet();
    m.insert(0);
    let pre = cur = 0;
    let res = [];
    for (const [location, height] of d) {
        height < 0 ? m.insert(-height) : m.eraseOne(height);
        cur = m.last();
        if (cur != pre) {
            res.push([location, cur]);
            pre = cur;
        }
        // m.show();
    }
    return res;
};

const pr = console.log;
const main = () => {
    let buildings = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]];
    let buildings2 = [[0, 2, 3], [2, 5, 3]];
    pr(getSkyline(buildings))
    pr(getSkyline(buildings2))
};

main()