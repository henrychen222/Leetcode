/**
 * 12.29 evening
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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

// Accepted --- 92ms 28.68%
const removeNthFromEnd = (head, n) => {
    let a = getAllData(head);
    let na = a.length;
    a = a.filter((x, i) => i != na - n);
    return createL(a);
};

// Accepted --- 92ms 28.68%
const removeNthFromEnd_modify = (head, n) => {
    let a = getAllData(head);
    let na = a.length;
    return createL(a.filter((x, i) => i != na - n));
};

// Accepted --- 72ms 98.78%
const removeNthFromEnd_modify2 = (head, n) => {
    let a = getAllData(head);
    let na = a.length;
    let res = [];
    for (let i = 0; i < na; i++) {
        if (i == na - n) continue;
        res.push(a[i]);
    }
    return createL(res);
};

const main = () => {
    let head = [1, 2, 3, 4, 5],
        n = 2;
    let head2 = [1],
        n2 = 1;
    let head3 = [1, 2],
        n3 = 1;
    printLArray(removeNthFromEnd(createL(head), n));
    printLArray(removeNthFromEnd(createL(head2), n2));
    printLArray(removeNthFromEnd(createL(head3), n3));
};

main()