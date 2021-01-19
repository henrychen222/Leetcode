/**
 * 1.18 afternoon
 * https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
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

// Accepted --- 124ms 9.09%
const removeZeroSumSublists = (head) => {
    let a = getAllData(head);
    let n = a.length;
    let l = [n];
    while (true) {
        outer: for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = i; j < n; j++) {
                sum += a[j];
                if (sum == 0) {
                    a.splice(i, j - i + 1);
                    break outer;
                }
            }
        }
        if (a.length == l[0]) break;
        l.unshift(a.length);
    }
    // console.log(a);
    return createL(a);
};

const main = () => {
    let head = [1, 2, -3, 3, 1];
    let head2 = [1, 2, 3, -3, 4];
    let head3 = [1, 2, 3, -3, -2];
    printLArray(removeZeroSumSublists(createL(head)));
    printLArray(removeZeroSumSublists(createL(head2)));
    printLArray(removeZeroSumSublists(createL(head3)));
};

main()