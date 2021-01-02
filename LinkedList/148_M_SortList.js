/**
 * 12.31 night
 * https://leetcode.com/problems/sort-list/
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
        if (!node) {
            node = new ListNode(arr[i]);
        } else {
            tmp = new ListNode(arr[i]);
            tmp.next = node;
            node = tmp;
        }
    }
    return node;
};

// Accepted --- 156ms 39.54%
const sortList = (head) => {
    let a = getAllData(head);
    a.sort((a, b) => a - b);
    return createL(a);
};

const main = () => {
    let head = [4, 2, 1, 3];
    let head2 = [-1, 5, 3, 4, 0];
    let head3 = [];
    printLArray(sortList(createL(head)));
    printLArray(sortList(createL(head2)));
    printLArray(sortList(createL(head3)));
};

main()