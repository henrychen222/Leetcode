/**
 * 12.28 night
 * https://leetcode.com/problems/swap-nodes-in-pairs/
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

const createL2 = (arr) => {
    return arr.reverse().reduce((acc, curr) => {
        if (acc == null) {
            acc = new ListNode(curr);
        } else {
            acc = new ListNode(curr, acc);
        }
        return acc;
    }, null);
};

// Accepted --- 72ms 93.62% fast
const swapPairs = (head) => {
    let a = getAllData(head);
    let n = a.length;
    for (let i = 1; i < n; i += 2) {
        [a[i - 1], a[i]] = [a[i], a[i - 1]];
    }
    return createL(a);
    // return createL2(a);  // Accepted --- 80ms 55.06%
};

const main = () => {
    let head = [1, 2, 3, 4];
    let head2 = [1]
    let head3 = [];
    let head4 = [1, 2, 3, 4, 5];
    printLArray(swapPairs(createL(head)));
    printLArray(swapPairs(createL(head2)))
    printLArray(swapPairs(createL(head3)))
    printLArray(swapPairs(createL(head4)))
};

main()