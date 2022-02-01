/**
 * 12/30/20 afternoon   01/31/22 night completed
 * https://leetcode.com/problems/linked-list-cycle-ii/
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Accepted --- 109ms 52.87%
// reference: https://www.cnblogs.com/grandyang/p/4137302.html
const detectCycle = (head) => {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            break;
        }
    }
    /*
     head到环起点+环的起点到他们相遇的点的距离 = 环一圈的距离
     -> head到环起点 = 相遇点到环起点
     */
    if (!fast || !fast.next) return null;
    slow = head;
    while (slow != fast) { // head到环起点 = 相遇点到环起点
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
};


////////////////////////////////////////////////////////////////////////
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