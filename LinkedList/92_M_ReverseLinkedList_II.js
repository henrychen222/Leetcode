/**
 * 12.31 evening
 * https://leetcode.com/problems/reverse-linked-list-ii/
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

// Accepted --- 88ms 10.60%
const reverseBetween = (head, m, n) => {
    let a = getAllData(head);
    let res = [];
    let left = a.slice(0, m - 1);
    let middle = a.slice(m - 1, n).reverse();
    let right = a.slice(n);
    // console.log(left, middle, right);
    return createL(left.concat(middle).concat(right));
};

const main = () => {
    let head = [1, 2, 3, 4, 5, null],
        m = 2,
        n = 4;
    printLArray(reverseBetween(createL(head), m, n));
};

main()