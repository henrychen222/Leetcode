/**
 * 1.18 afternoon
 * https://leetcode.com/problems/next-greater-node-in-linked-list/
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

// Accepted --- 384ms 60.45%
const nextLargerNodes = (head) => {
    let a = getAllData(head);
    let n = a.length;
    let res = [];
    for (let i = 0; i < n; i++) {
        let tmp = 0;
        for (let j = i + 1; j < n; j++) {
            if (a[j] > a[i]) {
                tmp = a[j];
                break;
            }
        }
        res.push(tmp);
    }
    return res;
};

const main = () => {
    let head = [2, 1, 5];
    let head2 = [2, 7, 4, 3, 5];
    let head3 = [1, 7, 5, 1, 9, 2, 5, 1];
    console.log(nextLargerNodes(createL(head)));
    console.log(nextLargerNodes(createL(head2)));
    console.log(nextLargerNodes(createL(head3)));
};

main()