/**
 * 06/21/21 evening
 * https://leetcode.com/problems/my-calendar-ii/
 */

// Accepted --- 3400ms 18.37%  06/22/21 night
// reference: https://leetcode.com/problems/my-calendar-ii/discuss/1183353/Brute-force-and-built-in-sorted-dictionary
// JS object is sorted, treemap, only key > 0
function MyCalendarTwo() {
    let tm = {};
    return { book }
    function book(start, end) {
        tm[start] = (tm[start] || 0) + 1;
        tm[end] = (tm[end] || 0) - 1;
        let cnt = 0;
        for (const k in tm) {
            let occ = tm[k];
            cnt += occ;
            if (cnt == 3) {
                // tm[start]--; // Accepted --- 3396ms 18.37%
                // tm[end]++;
                tm[start] = (tm[start] || 0) - 1;
                tm[end] = (tm[end] || 0) + 1;
                return false;
            }
        }
        return true;
    }
}

//////////////////////////////////////// 06/21/21 evening ////////////////////////////////////////////////////
const show = (m) => {
    let res = [];
    m.forEach((v, k) => {
        res.push(k + " => " + v);
    })
    console.log(res);
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

// WA
// reference: https://www.cnblogs.com/grandyang/p/7968035.html
function MyCalendarTwo2() {
    let tm = new TreeMap(); // issue, treemap
    return {
        book
    }

    function book(start, end) {
        // show(tm);
        tm.set(start, (tm.get(start) || 0) + 1);
        tm.set(end, (tm.get(end) || 0) - 1);
        let cnt = 0;
        let res = true;
        let d = [];
        tm.forEach((occ, k) => {
            d.push([k, occ])
            // pr(occ, k)
            cnt += occ;
            if (cnt == 3) {
                tm.set(start, (tm.get(start) || 0) - 1);
                tm.set(end, (tm.get(end) || 0) + 1);
                res = false;
                return;
            }
        });
        return res;
    }
}

// WA
function MyCalendarTwo1() {
    let d = [];
    return {
        book
    }

    function book(start, end) {
        if (d.length == 0) {
            d.push([start, end, 1]);
            return true;
        }
        for (let i = 0; i < d.length; i++) {
            let [curStart, curEnd, cnt] = d[i];
            if (start >= curEnd || end <= curStart) {
                continue;
            }
            if (cnt == 1) {
                // pr("before", d)
                d[i][0] = Math.max(curStart, start);
                d[i][1] = Math.min(curEnd, end);
                d[i][2] = 2;
                // pr("after", d);
                continue;
            }
            return false;
        }
        d.push([start, end, 1]);
        // pr(d);
        return true;
    }
}

const pr = console.log;
const main = () => {
    let myCalendarTwo = new MyCalendarTwo();
    pr(myCalendarTwo.book(10, 20)); // true
    pr(myCalendarTwo.book(50, 60)); // true
    pr(myCalendarTwo.book(10, 40)); // true 
    pr(myCalendarTwo.book(5, 15)); // false
    pr(myCalendarTwo.book(5, 10)); // true
    pr(myCalendarTwo.book(25, 55)); // true
};

main()


// let test = new Map();
// test.set(1, 2);
// test.set(2, 3);
// test.set(3, 4);
// show(test)
// let res = [];
// test.forEach((v, k) => {
//     if (k == 3) return;
//     res.push([k, v])
// });
// pr(res);