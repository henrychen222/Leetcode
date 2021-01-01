/**
 * 12.30 afternoon
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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

const getRecord2 = (arr) => {
    let map = new Map();
    for (const i of arr) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    return map;
};

// Accepted --- 88ms 66.13%
const deleteDuplicates = (head) => {
    let a = getAllData(head);
    let freq = getRecord2(a);
    let res = [];
    for (const item of a) {
        if (freq.get(item) == 1) {
            res.push(item);
        }
    }
    return createL(res);
};

// Accepted --- 92ms 44.09%
const deleteDuplicates_modify = (head) => {
    let a = getAllData(head);
    let freq = getRecord2(a);
    let element = [...new Set(a)];
    let res = [];
    for (const item of element) {
        if (freq.get(item) == 1) {
            res.push(item);
        }
    }
    return createL(res);
};

const main = () => {
    let head = [1, 2, 3, 3, 4, 4, 5];
    let head2 = [1, 1, 1, 2, 3];
    printLArray(deleteDuplicates(createL(head)));
    printLArray(deleteDuplicates(createL(head2)));
};

main()