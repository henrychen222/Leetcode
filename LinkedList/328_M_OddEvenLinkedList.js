/**
 * 1.1 night
 * https://leetcode.com/problems/odd-even-linked-list/
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

// Accepted --- 100ms 12.05%
const oddEvenList = (head) => {
    let a = getAllData(head);
    let odd = a.filter((x, i) => i % 2);
    let even = a.filter((x, i) => i % 2 == 0);
    return createL(even.concat(odd));
};

// Accepted --- 100ms 12.05%
const oddEvenList_modify = (head) => {
    let a = getAllData(head);
    let n = a.length;
    let odd = [];
    let even = [];
    for (let i = 0; i < n; i++) i % 2 ? odd.push(a[i]) : even.push(a[i]);
    return createL(even.concat(odd));
};

const main = () => {
    let head = [1, 2, 3, 4, 5, null];
    let head2 = [2, 1, 3, 5, 6, 4, 7, null];
    printLArray(oddEvenList(createL(head)));
    printLArray(oddEvenList(createL(head2)));
};

main()