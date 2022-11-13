/**
 * 1.9 evening
 * https://leetcode.com/contest/weekly-contest-223/problems/swapping-nodes-in-a-linked-list/
 */

// Accepted
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

const swapNodes = (head, k) => {
    let a = getAllData(head);
    let n = a.length;
    let i = 0;
    let j = n - 1;
    while (i < k - 1) {
        i++;
        j--;
    }
    [a[i], a[j]] = [a[j], a[i]];
    return createL(a);
};

const main = () => {
    let head = [1, 2, 3, 4, 5], k = 2;
    let head2 = [7, 9, 6, 6, 7, 8, 3, 0, 9, 5], k2 = 5;
    let head3 = [1], k3 = 1;
    let head4 = [1, 2], k4 = 1;
    let head5 = [1, 2, 3], k5 = 2;
    printLArray(swapNodes(createL(head), k));
    printLArray(swapNodes(createL(head2), k2));
    printLArray(swapNodes(createL(head3), k3));
    printLArray(swapNodes(createL(head4), k4));
    printLArray(swapNodes(createL(head5), k5));
};

main()