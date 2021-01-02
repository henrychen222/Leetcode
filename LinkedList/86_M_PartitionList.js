/**
 * 12.31 evening
 * https://leetcode.com/problems/partition-list/
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

// Accepted --- 88ms 55.80%
const partition1 = (head, x) => {
    let a = getAllData(head);
    let res1 = a.filter(v => v < x);
    let res2 = a.filter(v => v >= x);
    return createL(res1.concat(res2));
};

// Accepted --- 92ms 33.33%
const partition2 = (head, x) => {
    let a = getAllData(head);
    let res1 = [];
    let res2 = [];
    for (const item of a) item < x ? res1.push(item) : res2.push(item);
    return createL(res1.concat(res2));
};

const main = () => {
    let head = [1, 4, 3, 2, 5, 2],
        x = 3;
    printLArray(partition(createL(head), x));
};

main()