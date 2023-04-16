/*
 * 11/26/22 evening
 * https://leetcode.com/contest/weekly-contest-321/problems/remove-nodes-from-linked-list/
 */

const pr = console.log;

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
const removeNodes = (head) => {
    let a = getAllData(head), n = a.length, res = [], max = Array(n).fill(0);
    // pr(a);
    max[n - 1] = a[n - 1];
    for (let i = n - 2; i >= 0; i--) max[i] = Math.max(max[i + 1], a[i]);
    // pr(max);
    for (let i = 0; i < n; i++) {
        if (max[i] <= a[i]) res.push(a[i]);
    }
    // pr(res);
    return createL(res);
};

const main = () => {
    let head = [5, 2, 13, 3, 8];
    let head2 = [1, 1, 1, 1]
    printLArray(removeNodes(createL(head)));
    printLArray(removeNodes(createL(head2)));
};

main()