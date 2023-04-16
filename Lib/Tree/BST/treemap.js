/**
 * 05/14/22 night
 */
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

function TreeMap(g) {
    let ts = [], m = new Map(), bisect = new Bisect();
    initialize();
    return { put, ceilingKey, higherKey, lowerKey, floorKey, ceilingEntry, higherEntry, lowerEntry, floorEntry, remove, contains, size, clear, show };
    function initialize() {
        if (g) {
            for (const [k, v] of g) {
                if (!m.has(k)) bisect.insort_right(ts, k);
                m.set(k, v);
            }
        }
    }
    function put(k, v) {
        if (!m.has(k)) bisect.insort_right(ts, k); // ts has no duplicates/unique key
        m.set(k, v); // update key with most recent value
    }
    function ceilingKey(e) { // >= lower_bound
        let idx = bisect.bisect_right(ts, e);
        let res = ts[idx - 1] == e ? e : ts[bisect.bisect_right(ts, e)];
        return res == undefined ? null : res;
    }
    function higherKey(e) { // > upper_bound
        let idx = bisect.bisect_right(ts, e);
        let res = ts[idx] > e ? ts[idx] : ts[bisect.bisect_right(ts, e) + 1];
        return res == undefined ? null : res;
    }
    function floorKey(e) { // <= 
        let idx = bisect.bisect_left(ts, e);
        let res = ts[idx] == e ? e : ts[bisect.bisect_left(ts, e) - 1];
        return res == undefined ? null : res;
    }
    function lowerKey(e) { // <
        let idx = bisect.bisect_left(ts, e);
        let res = ts[idx] < e ? ts[idx] : ts[bisect.bisect_left(ts, e) - 1];
        return res == undefined ? null : res;
    }
    function data(k) {
        return k == null ? null : { key: k, value: m.get(k) }
    }
    function ceilingEntry(k) {
        return data(ceilingKey(k));
    }
    function higherEntry(k) {
        return data(higherKey(k));
    }
    function floorEntry(k) {
        return data(floorKey(k));
    }
    function lowerEntry(k) {
        return data(lowerKey(k));
    }
    function remove(e) {
        let idx = bisect.bisect_left(ts, e);
        if (ts[idx] == e) ts.splice(idx, 1);
        m.delete(e);
    }
    function contains(e) {
        return m.has(e);
    }
    function size() {
        return ts.length;
    }
    function clear() {
        ts = [];
        m.clear();
    }
    function show() {
        let res = new Map();
        for (const x of ts) res.set(x, m.get(x));
        return res;
    }
}

const pr = console.log;
const main = () => {
    let ts = new TreeMap([[3, 1], [7, 1], [7, 2], [1, 1], [3, 2]]);
    pr(ts.show());
    pr("\nfloorKey")
    pr(ts.floorKey(0)); // null
    pr(ts.floorKey(2)); // 1
    pr(ts.floorKey(3)); // 3
    pr(ts.floorKey(4)); // 3
    pr(ts.floorKey(100)); // 7

    pr("\nlowerKey")
    pr(ts.lowerKey(0)); // null
    pr(ts.lowerKey(2)); // 1
    pr(ts.lowerKey(3)); // 1
    pr(ts.lowerKey(4)); // 3
    pr(ts.lowerKey(100)); // 7

    pr("\nceilingKey")
    pr(ts.ceilingKey(100)); // null
    pr(ts.ceilingKey(7)); // 7
    pr(ts.ceilingKey(4)); // 7
    pr(ts.ceilingKey(3)); // 3
    pr(ts.ceilingKey(0)); // 1

    pr("\nhigherKey")
    pr(ts.higherKey(100)); // null
    pr(ts.higherKey(7)); // null
    pr(ts.higherKey(4)); // 7
    pr(ts.higherKey(3)); // 7
    pr(ts.higherKey(0)); // 1

    pr("")
    pr(ts.show()); // Map { 1 => 2, 3 => 2, 7 => 2 }
    ts.remove(3);
    pr(ts.show()); // Map { 1 => 2, 7 => 2 }
    ts.put(1, 5);
    pr(ts.show()); // Map { 1 => 5, 7 => 2 }


    pr("\ninitialize")
    pr(new Map([[3, 4], [3, 2], [1, 2]]))
    let ts2 = new TreeMap([[3, 4], [3, 2], [1, 2]])
    pr(ts2.show()); // Map { 1 => 2, 3 => 2 }

    pr("\nput")
    let ts3 = new TreeMap();
    ts3.put(3, 5);
    ts3.put(3, 7);
    ts3.put(1, 9);
    pr(ts3.show()); // Map { 1 => 9, 3 => 7 }
};

main()




/////////////////////// 03/22/21 evening Old Version //////////////////////////////////////
// const show = (m) => {
//     let res = [];
//     m.forEach((v, k) => {
//         res.push(k + " => " + v);
//     })
//     return res;
// };

// function TreeMap() {
//     let root = null;
//     let keyType = void 0;
//     let length = 0;
//     return { forEach, set, get, getTree, size, maxKey, minKey, remove };
//     function checkKey(key, checkKeyType) {
//         let localKeyType = typeof key;
//         if (localKeyType !== "number" && localKeyType !== "string" && localKeyType !== "boolean") throw new Error("'key' must be a number, a string or a boolean");
//         if (checkKeyType === true && localKeyType !== keyType) throw new Error("All keys must be of the same type");
//         return localKeyType;
//     }
//     function call(callback) {
//         let args = Array.prototype.slice.call(arguments, 1);
//         if (typeof callback === "function") callback.apply(void 0, args);
//     }
//     function getTree() {
//         return root;
//     }
//     function size() {
//         return length;
//     }
//     function forEach(callback) {
//         internalEach(root, callback);
//     }
//     function internalEach(node, callback, internalCallback) {
//         if (node === null) return call(internalCallback);
//         internalEach(node.left, callback, () => {
//             call(callback, node.value, node.key);
//             internalEach(node.right, callback, () => {
//                 call(internalCallback);
//             });
//         });
//     }
//     function get(key) {
//         checkKey(key);
//         return internalGet(key, root);
//     }
//     function internalGet(key, node) {
//         if (node === null) return void 0;
//         if (key < node.key) {
//             return internalGet(key, node.left);
//         } else if (key > node.key) {
//             return internalGet(key, node.right);
//         } else {
//             return node.value;
//         }
//     }
//     function set(key, value) {
//         root == null ? keyType = checkKey(key) : checkKey(key, true);
//         root = internalSet(key, value, root);
//     }
//     function internalSet(key, value, node) {
//         if (node === null) {
//             length++;
//             return { key: key, value: value, left: null, right: null };
//         }
//         if (key < node.key) {
//             node.left = internalSet(key, value, node.left);
//         } else if (key > node.key) {
//             node.right = internalSet(key, value, node.right);
//         } else {
//             node.value = value;
//         }
//         return node;
//     }
//     function maxKey() {
//         let maxNode = getMaxNode(root);
//         if (maxNode !== null) return maxNode.key;
//         return maxNode;
//     }
//     function minKey() {
//         let minNode = getMinNode(root);
//         if (minNode !== null) return minNode.key;
//         return minNode;
//     }
//     function getMaxNode(node) {
//         while (node !== null && node.right !== null) node = node.right;
//         return node;
//     }
//     function getMinNode(node) {
//         while (node !== null && node.left !== null) node = node.left;
//         return node;
//     }
//     function remove(key) {
//         checkKey(key);
//         root = internalRemove(key, root);
//     }
//     function internalRemove(key, node) {
//         if (node === null) return null;
//         if (key < node.key) {
//             node.left = internalRemove(key, node.left);
//         } else if (key > node.key) {
//             node.right = internalRemove(key, node.right);
//         } else {
//             if (node.left !== null && node.right !== null) {
//                 let maxNode = getMaxNode(node.left);
//                 let maxNodeKey = maxNode.key;
//                 let maxNodeValue = maxNode.value;
//                 maxNode.key = node.key;
//                 maxNode.value = node.value;
//                 node.key = maxNodeKey;
//                 node.value = maxNodeValue;
//                 node.left = internalRemove(key, node.left);
//             } else if (node.left !== null) {
//                 length--;
//                 return node.left;
//             } else if (node.right !== null) {
//                 length--;
//                 return node.right;
//             } else {
//                 length--;
//                 return null;
//             }
//         }
//         return node;
//     }
// }