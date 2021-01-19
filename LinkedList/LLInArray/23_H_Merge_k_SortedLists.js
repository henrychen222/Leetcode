/**
 * 1.18 afternoon
 * https://leetcode.com/problems/merge-k-sorted-lists/
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

// Accepted --- 124ms 59.29%
const mergeKLists1 = (lists) => {
    let res = [];
    for (const l of lists) {
        let a = getAllData(l);
        for (const item of a) {
            res.push(item);
        }
    }
    res.sort((a, b) => a - b);
    // console.log(res);
    return createL(res);
};

// Accepted --- 104ms 91.53%
let res;
const getAllData2 = (list) => {
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
};

const mergeKLists = (lists) => {
    res = [];
    for (const l of lists) getAllData2(l);
    res.sort((a, b) => a - b);
    return createL(res);
};

const main = () => {
    let lists = [
        [1, 4, 5],
        [1, 3, 4],
        [2, 6]
    ];
    let lists2 = [];
    let lists3 = [
        []
    ];
    printLArray(mergeKLists(lists.map(x => createL(x))));
    printLArray(mergeKLists(lists2.map(x => createL(x))));
    printLArray(mergeKLists(lists3.map(x => createL(x))));
};

main()