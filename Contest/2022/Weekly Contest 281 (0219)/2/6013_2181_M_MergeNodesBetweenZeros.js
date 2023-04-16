/**
 * 02/19/22 evening
 * https://leetcode.com/contest/weekly-contest-281/problems/merge-nodes-in-between-zeros/
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

// Accepted
const mergeNodes = (head) => {
    let a = getAllData(head), res = [], sum = 0;
    for (const x of a) {
        if (x == 0) {
            if (sum != 0) res.push(sum);
            sum = 0;
        } else {
            sum += x;
        }
    }
    return createL(res);
};

const pr = console.log;
const main = () => {
    let head = [0, 3, 1, 0, 4, 5, 2, 0];
    let head2 = [0, 1, 0, 3, 0, 2, 2, 0];
    let debug1 = [0, 24, 14, 0];
    printLArray(mergeNodes(createL(head)));
    printLArray(mergeNodes(createL(head2)));
    printLArray(mergeNodes(createL(debug1))); // [38]
};

main()