/**
 * 12/04/21 evening
 * https://leetcode.com/contest/weekly-contest-270/problems/delete-the-middle-node-of-a-linked-list/
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
const deleteMiddle = (head) => {
    let a = getAllData(head), n = a.length;
    let mid = n >> 1;
    a.splice(mid, 1);
    return createL(a);
};

const main = () => {
    let head = [1,3,4,7,1,2,6]
    let head2 = [1,2,3,4];
    let head3 = [2,1];
    printLArray(deleteMiddle(createL(head)))
    printLArray(deleteMiddle(createL(head2)))
    printLArray(deleteMiddle(createL(head3)))
};

main()