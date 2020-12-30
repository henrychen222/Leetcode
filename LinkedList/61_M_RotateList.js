/**
 * 12.29 evening
 * https://leetcode.com/problems/rotate-list/
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const printLArray = (list) => {
    let res = [];
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    console.log(res);
};

const getAllData = (list) => {
    let res = [];
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res;
};

const createL = (arr) => {
    let tmp, node = null;
    let n = arr.length;
    for (let i = n - 1; ~i; i--) {
        if (!node)
            node = new ListNode(arr[i]);
        else {
            tmp = new ListNode(arr[i]);
            tmp.next = node;
            node = tmp;
        }
    }
    return node;
};

// Accepted --- 88ms 88.21%
const rotateRight = (head, k) => {
    let a = getAllData(head);
    let n = a.length;
    let rest = k % n;
    while (rest-- && n > 0) {
        a.unshift(a.pop());
    }
    return createL(a);
};

// Accepted --- 96ms 48.99%
const rotateRight_modify = (head, k) => {
    let a = getAllData(head);
    let n = a.length;
    let rest = k % n;
    if (rest == 0) return head;
    while (rest-- && n > 0) {
        a.unshift(a.pop());
    }
    return createL(a);
};

// Accepted --- 92ms 70.72%
const rotateRight1 = (head, k) => {
    let a = getAllData(head);
    let n = a.length;
    let rest = k % n;
    let left = a.slice(0, n - rest);
    let right = a.slice(n - rest);
    return createL(right.concat(left));
};

const main = () => {
    let head = [1, 2, 3, 4, 5],
        k = 2;
    let head2 = [0, 1, 2],
        k2 = 4;
    let head_debug1 = [1, 2],
        k_debug1 = 5;
    let head_debug2 = [],
        k_debug2 = 1;
    printLArray(rotateRight(createL(head), k));
    printLArray(rotateRight(createL(head2), k2));
    printLArray(rotateRight(createL(head_debug1), k_debug1)); // [2, 1]
    printLArray(rotateRight(createL(head_debug2), k_debug2)); // []
};

main()