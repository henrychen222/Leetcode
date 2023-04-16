/**
 * 01/08/21 morning
 * https://leetcode.com/contest/biweekly-contest-69/problems/maximum-twin-sum-of-a-linked-list/
 */

const pr = console.log;

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

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
const pairSum = (head) => {
    let a = getAllData(head), n = a.length, res = Number.MIN_SAFE_INTEGER;
    for (let i = 0, j = n - 1; i < n >> 1; i++, j--) res = Math.max(res, a[i] + a[j]);
    return res;
};

const main = () => {
    let head = [5, 4, 2, 1]
    let head2 = [4, 2, 2, 3];
    let head3 = [1, 100000]
    pr(pairSum(createL(head)));
    pr(pairSum(createL(head2)));
    pr(pairSum(createL(head3)));
};

main()