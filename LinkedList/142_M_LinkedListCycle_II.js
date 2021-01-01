/**
 * 12.30 afternoon
 * https://leetcode.com/problems/linked-list-cycle-ii/
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

// don't know
const detectCycle = (head) => {
    let a = getAllData(head); // out of momory
    let n = a.length;
    let cnt = 0;
    let i = j = 0;
    let pos;
    while (true) {
        if (cnt > n) break;
        i == n - 1 ? i = 0 : i++;
        if (j == n - 1) {
            j = 1;
        } else if (j == n - 2) {
            j = 0;
        } else {
            j += 2;
        }
        if (i == j) {
            pos = i;
            break;
        }
        cnt++;
    }
    // console.log(pos, a[pos]);
    return pos == undefined ? null : createL([a[pos]]);
};

const main = () => {
    let head = [3, 2, 0, -4];
    let head2 = [1, 2];
    let head3 = [1];
    printLArray(detectCycle(createL(head)));
    printLArray(detectCycle(createL(head2)));
    printLArray(detectCycle(createL(head3)));
};

main()