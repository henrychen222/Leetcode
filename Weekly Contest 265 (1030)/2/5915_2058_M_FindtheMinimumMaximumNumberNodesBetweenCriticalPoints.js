/**
 * 10/30/21 evening
 * https://leetcode.com/contest/weekly-contest-265/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/
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

const stin = (a) => a.sort((x, y) => x - y);

// Accepted
const nodesBetweenCriticalPoints = (head) => {
    let a = getAllData(head), n = a.length;
    // let minima = [], maxima = [];
    let critical = [];
    for (let i = 1; i + 1 < n; i++) {
        if (a[i] < a[i - 1] && a[i] < a[i + 1]) critical.push(i + 1);
        if (a[i] > a[i - 1] && a[i] > a[i + 1]) critical.push(i + 1);
    }
    let res = [-1, -1];
    stin(critical);
    let cn = critical.length;
    if (cn < 2) return res;
    res[1] = critical[cn - 1] - critical[0];
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < cn; i++) {
        min = Math.min(min, critical[i] - critical[i - 1]);
    }
    res[0] = min;
    // pr(res);
    return res;
};

const main = () => {
    let head = [3, 1];
    let head2 = [5, 3, 1, 2, 5, 1, 2];
    let head3 = [1, 3, 2, 2, 3, 2, 2, 2, 7];
    let head4 = [2, 3, 3, 2];
    pr(nodesBetweenCriticalPoints(createL(head)));
    pr(nodesBetweenCriticalPoints(createL(head2)));
    pr(nodesBetweenCriticalPoints(createL(head3)));
    pr(nodesBetweenCriticalPoints(createL(head4)));
};

main()