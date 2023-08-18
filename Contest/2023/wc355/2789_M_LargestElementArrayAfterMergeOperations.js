/*
 * 07/22/23 evening
 * https://leetcode.com/contest/weekly-contest-355/problems/largest-element-in-an-array-after-merge-operations/
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

const maxArrayValue1 = (a) => {
   a = a.map((x, i) => [x, i]);
   let pq = new MinPriorityQueue({ compare: (x, y) => x[0] - y[0] || x[1] - y[1] }), res = 0;
   for (const e of a) pq.enqueue(e);
   pr(pq.toArray())
   // for (let i = 0; i<5;i++) {
   while (pq.size() >= 2) {
      let cur = pq.dequeue(), next = pq.dequeue();
      pr(cur, next)
      if (Math.abs(cur[1] - next[1]) == 1 && cur <= next) {
         let merge = cur[0] + next[0];
         pq.enqueue(merge);
      } else {
         pq.enqueue(cur);
         pq.enqueue(next);
         break;
      }
      res += cur[0]
   }
   pr("after", pq.toArray())
   return res;
};

const maxArrayValue2 = (a) => {
   let pq = new MinPriorityQueue({ compare: (x, y) => x - y }), res = 0;
   for (const e of a) pq.enqueue(e);
   pr(pq.toArray())
   while (pq.size() >= 2) {
      let cur = pq.dequeue(), next = pq.dequeue();
      pr(cur, next)
      if (cur <= next) {
         pq.enqueue(cur + next);
      } else {
         pq.enqueue(cur);
         pq.enqueue(next);
         break;
      }
      res += cur;
   }
   pr(pq.toArray())
   while (pq.size()) res += pq.dequeue();
   return res;
};


const maxArrayValue3 = (a) => {
   let b = [];
   for (let i = 0; i + 1 < a.length; i++) {
      let last = b[b.length - 1] || 0;
      pr(b, [a[i], a[i + 1]])
      if (last + a[i] <= a[i + 1]) {
         b.pop();
         b.push(last + a[i]);
      } else {
         b.push(a[i]);
      }
   }
   pr(b);
};

///////////////////////////////////////////////

// Accepted
// reference: 
const maxArrayValue = (a) => {
   let b = [];
   for (let i = a.length - 1; i >= 0; i--) {
      let last = b[b.length - 1] || 0, x = a[i];
      // pr(b, [a[i], a[i + 1]])
      if (last >= x) {
         b[b.length - 1] += x;
      } else {
         b.push(x);
      }
   }
   // pr(b);
   return b[b.length - 1];
};


const main = () => {
   let a = [2, 3, 7, 9, 3];
   let a2 = [5, 3, 3];
   pr(maxArrayValue(a))
   pr(maxArrayValue(a2))
};

main()