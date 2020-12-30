/**
 * 12.29 night
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
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

// Accepted --- 100ms 49.66%
const reverseKGroup = (head, k) => {
    let a = getAllData(head);
    let n = a.length;
    let res = [];
    for (let i = 0; i < n; i += k) {
        let tmp = a.slice(i, i + k);
        if (tmp.length == k) {
            res = res.concat(tmp.reverse());
        } else {
            res = res.concat(tmp);
        }
    }
    return createL(res);
};

// Accepted --- 92ms 91.38%
const reverseKGroup_refine = (head, k) => {
    if (k == 1) return head;
    let a = getAllData(head);
    let n = a.length;
    let res = [];
    for (let i = 0; i < n; i += k) {
        let tmp = a.slice(i, i + k);
        if (tmp.length == k) {
            res = res.concat(tmp.reverse());
        } else {
            res = res.concat(tmp);
        }
    }
    return createL(res);
};

const main = () => {
    let head = [1, 2, 3, 4, 5],
        k = 2;
    let head2 = [1, 2, 3, 4, 5],
        k2 = 3;
    let head3 = [1, 2, 3, 4, 5],
        k3 = 1;
    let head4 = [1],
        k4 = 1;
    printLArray(reverseKGroup(createL(head), k));
    printLArray(reverseKGroup(createL(head2), k2));
    printLArray(reverseKGroup(createL(head3), k3));
    printLArray(reverseKGroup(createL(head4), k4));
};

main()