/**
 * 6.27 night
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * reference: https://www.cnblogs.com/grandyang/p/10817408.html
 */

// Accepted --- 64ms 32.8MB 51.99%
const middleNode = (head) => {
    let current = head;
    let cnt = 0;
    while (current) {
        cnt++;
        current = current.next;
    }
    cnt = cnt >> 1;
    while (cnt > 0) {
        cnt--;
        head = head.next;
    }
    return head;
};

// Accepted --- 52ms 32.9MB 86.80%
const middleNode2 = (head) => {
    let res = [];
    let cnt = 0;
    while (head) {
        res[cnt++] = head;
        head = head.next;
    }
    return res[cnt >> 1];
};

// Accepted --- 60ms 33.1MB 60.97%
const middleNode3 = (head) => {
    let slow = head;
    while (head && head.next) {
        slow = slow.next;
        head = head.next.next; // fast pointer
    }
    return slow;
};