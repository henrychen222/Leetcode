/**
 * 2.6 afternoon
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */

function Node(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
};

// Accepted --- 84ms 40.90%
let res, current;
const flatten = (head) => {
    res = [];
    current = head;
    dfs(current);
    return createDLL(res);
};

const dfs = (c) => {
    if (!c) return;
    res.push(c.val);
    if (!c.child) {
        if (!c.next) return;
        dfs(c.next);
    } else {
        if (c.next) {
            dfs(c.child);
            dfs(c.next);
        } else {
            dfs(c.child);
        }
    }
};

const createDLL = (arr) => {
    let tmp, node = null;
    let n = arr.length;
    for (let i = n - 1; ~i; i--) {
        if (!node) {
            node = new Node(arr[i]);
        } else {
            tmp = new Node(arr[i]);
            tmp.next = node;
            node.prev = tmp;
            node = tmp;
        }
    }
    return node;
};