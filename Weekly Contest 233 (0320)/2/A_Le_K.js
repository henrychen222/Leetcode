// 03/22/21 afternoon

const pr = console.log;

function TreeMap() {
    let root = null;
    let keyType = void 0;
    let length = 0;
    return {
        forEach: forEach,
        set: set,
        get: get,
        getTree: getTree,
        size: size,
        maxKey: maxKey,
        minKey: minKey,
        remove: remove
    };

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
            })
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

const MOD = 1e9 + 7;
const mi = Math.min;

// Accepted --- 340ms
const getNumberOfBacklogOrders = (orders) => {
    let sell = new TreeMap();
    let buy = new TreeMap();
    for (const e of orders) {
        let price = e[0];
        let amount = e[1];
        let type = e[2];
        if (type == 0) {
            while (amount > 0 && sell.size() > 0) {
                let k = sell.minKey();
                let v = sell.get(k);
                if (k <= price) {
                    let take = mi(v, amount);
                    amount -= take;
                    v -= take;
                    sell.set(k, v);
                    if (v == 0) sell.remove(k);
                } else {
                    break;
                }
            }
            if (amount > 0) buy.set(price, buy.get(price) + amount || amount);
        } else {
            while (amount > 0 && buy.size() > 0) {
                let k = buy.maxKey();
                let v = buy.get(k);
                if (k >= price) {
                    let take = mi(v, amount);
                    amount -= take;
                    v -= take;
                    buy.set(k, v);
                    if (v == 0) buy.remove(k);
                } else {
                    break;
                }
            }
            if (amount > 0) sell.set(price, sell.get(price) + amount || amount);
        }
        // pr("buy", print(buy), buy.minKey(), "sell", print(sell), sell.maxKey());
    }
    let res = 0;
    buy.forEach((v, k) => res += v);
    sell.forEach((v, k) => res += v);
    return res % MOD;
};

const print = (m) => {
    let res = [];
    m.forEach((v, k) => {
        res.push(k + " => " + v);
    })
    return res;
};

// Accepted --- 348ms
// const getNumberOfBacklogOrders1 = (orders) => {
//     let sell = new TreeMap();
//     let buy = new TreeMap();
//     for (const e of orders) {
//         let price = e[0];
//         let amount = e[1];
//         let type = e[2];
//         if (type == 0) {
//             pr("buy", price)
//             while (amount > 0 && sell.getLength() > 0) {
//                 let k = sell.getMinKey();
//                 let v = sell.get(k);
//                 pr("kv: ", k, v)
//                 if (k <= price) {
//                     let take = mi(v, amount);
//                     amount -= take;
//                     v -= take;
//                     sell.set(k, v);
//                     if (v == 0) sell.remove(k);
//                 } else {
//                     break;
//                 }
//             }
//             if (amount > 0) buy.set(price, buy.get(price) + amount || amount);
//         } else {
//             pr("sell", price)
//             while (amount > 0 && buy.getLength() > 0) {
//                 let k = buy.getMaxKey();
//                 let v = buy.get(k);
//                 pr("kv: ", k, v)
//                 if (k >= price) {
//                     let take = mi(v, amount);
//                     amount -= take;
//                     v -= take;
//                     buy.set(k, v);
//                     if (v == 0) buy.remove(k);
//                 } else {
//                     break;
//                 }
//             }
//             if (amount > 0) sell.set(price, sell.get(price) + amount || amount);
//         }
//         pr("buy", print(buy), buy.MinKey(), "sell", print(sell), sell.getMaxKey());
//     }
//     let res = 0;
//     buy.each((v, k) => {
//         res += v;
//     });
//     sell.each((v, k) => {
//         res += v;
//     });
//     return res % MOD;
// };

/////////////////////////////////////////////////////////////////////////////
// Correct, but library is hard to trigger out
const SortedMap = require("collections/sorted-map");
const getNumberOfBacklogOrders2 = (orders) => {
    let sell = new SortedMap();
    let buy = new SortedMap();
    for (const e of orders) {
        // pr(buy.toObject(), sell.toObject());
        // pr(buy.keys().next().value, sell.keys().next().value);
        let price = e[0];
        let amount = e[1];
        let type = e[2];
        if (type == 0) {
            // pr("buy", price)
            while (amount > 0 && sell.length > 0) {
                let k = sell.keys().next().value;
                let v = sell.get(k);
                // pr("kv: ", k, v)
                if (k <= price) {
                    let take = mi(v, amount);
                    amount -= take;
                    v -= take;
                    sell.set(k, v);
                    if (v == 0) sell.delete(k);
                } else {
                    break;
                }
            }
            if (amount > 0) buy.set(price, buy.get(price) + amount || amount);
        } else {
            // pr("sell", price)
            while (amount > 0 && buy.length > 0) {
                let k = Array.from(buy.keys()).pop();
                let v = buy.get(k);
                // pr("kv: ", k, v)
                if (k >= price) {
                    let take = mi(v, amount);
                    amount -= take;
                    v -= take;
                    buy.set(k, v);
                    if (v == 0) buy.delete(k);
                } else {
                    break;
                }
            }
            if (amount > 0) sell.set(price, sell.get(price) + amount || amount);
        }
    }
    let res = 0;
    //pr(buy, sell);
    for (const v of buy.values()) {
        res += v;
    }
    for (const v of sell.values()) {
        res += v;
    }
    return res % MOD;
};

const main = () => {
    let orders = [[10, 5, 0], [15, 2, 1], [25, 1, 1], [30, 4, 0]];
    let orders2 = [[7, 1000000000, 1], [15, 3, 0], [5, 999999995, 0], [5, 1, 1]]
    let orders_debug1 = [[1, 29, 1], [22, 7, 1], [24, 1, 0], [25, 15, 1], [18, 8, 1], [8, 22, 0], [25, 15, 1], [30, 1, 1], [27, 30, 0]];
    let orders_debug2 = [[26, 5, 1], [14, 7, 1], [22, 4, 1], [30, 18, 1], [30, 29, 1], [25, 18, 0], [3, 24, 0], [3, 5, 0], [6, 30, 0], [9, 25, 1]];
    pr(getNumberOfBacklogOrders(orders));
    pr(getNumberOfBacklogOrders(orders2));
    pr(getNumberOfBacklogOrders(orders_debug1)); // 22
    pr(getNumberOfBacklogOrders(orders_debug2)); // 129
};

main()
