/**
 * 6.26 night
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 * reference: https://www.cnblogs.com/grandyang/p/4452252.html
 */

// Accepted --- 76ms 38.5MB 54.46%
const hasCycle = (head) => {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
};