/**
 * 11/13/21 evening
 * https://leetcode.com/contest/weekly-contest-267/problems/reverse-nodes-in-even-length-groups/
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

// Accepted
const reverseEvenLengthGroups = (head) => {
    let a = getAllData(head);
    let group = 1, i = 0, n = a.length;
    let d = [];
    while (i + group < n) {
        let tmp = a.slice(i, i + group);
        // pr(i, group, tmp);
        i += group;
        group++;
        d.push(tmp);
    }
    let last = a.slice(i);
    d.push(last);
    // pr("d", d);
    let res = [];
    for (let i = 0; i < d.length; i++) {
        let judge = d[i].length;
        res.push(judge % 2 == 0 ? d[i].reverse() : d[i]);
    }
    // pr("res", res);
    let ans = [];
    for (const e of res) ans = ans.concat(e);
    // pr("ans", ans);
    return createL(ans);
};

const pr = console.log;
const main = () => {
    let head = [5, 2, 6, 3, 9, 1, 7, 3, 8, 4];
    let head2 = [1, 1, 0, 6];
    let head3 = [2, 1];
    let head4 = [8];
    let debug1 = [0,4,2,1,3];
    printLArray(reverseEvenLengthGroups(createL(head)));
    printLArray(reverseEvenLengthGroups(createL(head2)));
    printLArray(reverseEvenLengthGroups(createL(head3)));
    printLArray(reverseEvenLengthGroups(createL(head4)));
    printLArray(reverseEvenLengthGroups(createL(debug1))); // [0,2,4,3,1]
};

main()