/*
 * 08/12/23 evening
 * https://leetcode.com/contest/weekly-contest-358/problems/double-a-number-represented-as-a-linked-list/
 */

const pr = console.log;

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const printLArray = (list) => {
    let res = [], cur = list;
    while (cur) {
        res.push(cur.val);
        cur = cur.next;
    }
    console.log(res);
};

const getAllData = (list) => {
    let res = [], cur = list;
    while (cur) {
        res.push(cur.val);
        cur = cur.next;
    }
    return res;
};

const createL = (a) => {
    let tmp, node = null, n = a.length;
    for (let i = n - 1; ~i; i--) {
        if (!node) {
            node = new ListNode(a[i]);
        } else {
            tmp = new ListNode(a[i]);
            tmp.next = node;
            node = tmp;
        }
    }
    return node;
};

// Accepted
const doubleIt = (head) => {
    let a = getAllData(head), b = addStrings(a, a);
    // pr(b);
    return createL(b.split("").map(Number));
};

const addStrings = (x, y) => {
    let res = '', dot = 0, sum;
    let i = x.length - 1, j = y.length - 1;
    while (i >= 0 || j >= 0) {
        sum = (x[i--] | 0) + (y[j--] | 0) + dot;
        res = sum % 10 + res;
        dot = sum > 9 ? 1 : 0;
    }
    return (dot ? 1 : "") + res;
};

const main = () => {
    let head = [1, 8, 9];
    let head2 = [9, 9, 9];
    printLArray(doubleIt(createL(head)));
    printLArray(doubleIt(createL(head2)));
};

main()