/**
 * 12.30 afternoon
 * https://leetcode.com/problems/reorder-list/
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

// Accepted --- 168ms 11.92%
const reorderList = (head) => {
    let a = getAllData(head);
    let res = [];
    while (a.length) {
        res.push(a.shift());
        if (a.length) res.push(a.pop());
    }
    let resL = createL(res);
    printLArray(resL);
    while (head) { // handle in-place
        head.val = resL.val;
        head = head.next;
        resL = resL.next;
    }
};

const main = () => {
    let head = [1, 2, 3, 4];
    let head2 = [1, 2, 3, 4, 5];
    reorderList(createL(head));
    reorderList(createL(head2));
};

main()