/**
 * 2.6 evening
 * https://leetcode.com/problems/linked-list-components/
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

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

// const numComponents1 = (head, G) => {
//     let a = getAllData(head);
//     let ma = new Map();
//     let s = new Set(G);
//     let n = a.length;
//     let cnt = 0;
//     for (let i = 0; i < n; i++) {
//         ma.set(G[i], i);
//     }
//     for (let i = 1; i < n; i++) {
//         // console.log(a, s, G);
//         if (s.has(a[i - 1] && s.has(a[i]))) {
//             // console.log(a[i - 1], a[i]);
//             if (ma.get(a[i - 1]) < ma.get(a[i])) {
//                 s.delete(a[i - 1]);
//                 s.delete(a[i]);
//                 cnt++;
//             }
//         }
//     }
//     console.log(s);
//     return s.size == 0 ? cnt : cnt + 1;
// };


// const numComponents2 = (head, G) => {
//     let a = getAllData(head);
//     let n = a.length;
//     let record = G.length;
//     let ma = new Map();
//     for (let i = 0; i < n; i++) {
//         ma.set(a[i], i);
//     }
//     let cnt = 0;
//     while (true) {
//         // console.log(G);
//         outer: for (let i = 0; i < G.length; i++) {
//             if (ma.has(G[i])) {
//                 for (let j = i + 1; j < G.length; j++) {
//                     if (ma.has(G[j])) {
//                         if (ma.get(G[i]) < ma.get(G[j])) {
//                             G.splice(j, 1);
//                             G.splice(i, 1);
//                             cnt++;
//                             break outer;
//                         }
//                     }
//                 }
//             }
//         }
//         if (G.length == record) {
//             break;
//         } else {
//             record = G.length;
//         }
//     }
//     // console.log(a, cnt, G);
//     return G.length == 0 ? cnt : cnt + 1;
// };

// Accepted --- 104ms 49.18%
// read: https://leetcode.com/problems/linked-list-components/discuss/131853/Can-someone-explain-the-test-case
const numComponents3 = (head, G) => { // check each head element, if G has it, find the longest subarray
    let a = getAllData(head);
    let n = a.length;
    let s = new Set(G);
    let res = [];
    for (let i = 0; i < n; i++) {
        if (s.has(a[i])) {
            let tmp = [a[i]];
            s.delete(a[i]);
            for (let j = i + 1; j < n; j++) {
                if (!s.has(a[j])) break;
                tmp.push(a[j]);
                s.delete(a[j]);
            }
            res.push(tmp);
        }
    }
    // console.log(res);
    return res.length;
};

// Accepted --- 80ms 96.72%
const numComponents = (head, G) => {
    let a = getAllData(head);
    let n = a.length;
    let s = new Set(G);
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (s.has(a[i])) {
            s.delete(a[i]);
            for (let j = i + 1; j < n; j++) {
                if (!s.has(a[j])) break;
                s.delete(a[j]);
            }
            res++;
        }
    }
    return res;
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

const main = () => {
    let head = [0, 1, 2, 3],
        G = [0, 1, 3];
    let head2 = [0, 1, 2, 3, 4],
        G2 = [0, 3, 1, 4];
    let head_debug1 = [1, 2, 0, 4, 3],
        G_debug1 = [3, 4, 0, 2, 1];
    let head_debug2 = [0, 1, 2],
        G_debug2 = [0, 2];
    let head_debug3 = [0, 1, 2],
        G_debug3 = [1, 0];
    console.log(numComponents(createL(head), G));
    console.log(numComponents(createL(head2), G2));
    console.log(numComponents(createL(head_debug1), G_debug1)); // 1
    console.log(numComponents(createL(head_debug2), G_debug2)); // 2
    console.log(numComponents(createL(head_debug3), G_debug3)); // 1
};

main()

// console.log(JSON.stringify([0, 1,2]))