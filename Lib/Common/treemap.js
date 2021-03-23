/**
 * 03/22/21 evening
 * 
 * example question: https://leetcode.com/problems/number-of-orders-in-the-backlog/ 
 */

const print = (m) => {
    let res = [];
    m.forEach((v, k) => {
        res.push(k + " => " + v);
    })
    return res;
};

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
            return {
                key: key,
                value: value,
                left: null,
                right: null
            };
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