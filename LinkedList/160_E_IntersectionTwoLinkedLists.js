/**
 * 6.27 night
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 * reference: https://www.cnblogs.com/grandyang/p/4128461.html
 */

// Accepted --- 104ms 43.4MB 36.87%
const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) return null;
    let lenA = getLength(headA),
        lenB = getLength(headB);
    if (lenA < lenB) {
        for (let i = 0; i < lenB - lenA; i++) {
            headB = headB.next;
        }
    } else {
        for (let i = 0; i < lenA - lenB; i++) {
            headA = headA.next;
        }
    }
    while (headA && headB && headA != headB) {
        headA = headA.next;
        headB = headB.next;
    }
    return (headA && headB) ? headA : null;
};

const getLength = (head) => {
    let cnt = 0;
    while (head) {
        cnt++;
        head = head.next;
    }
    return cnt;
};

// Accepted --- 88ms 43MB 77.88%
const getIntersectionNode2 = (headA, headB) => {
    if (!headA || !headB) return null;
    let a = headA,
        b = headB;
    while (a != b) {
        a = (a != null) ? a.next : headB;
        b = (b != null) ? b.next : headA;
    }
    return a;
};

// Accepted --- 88ms 43.7MB 77.88%
const getIntersectionNode2_refine = (headA, headB) => {
    if (!headA || !headB) return null;
    let a = headA,
        b = headB;
    while (a != b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
};