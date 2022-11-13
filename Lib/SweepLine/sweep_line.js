/*
Created 09/19/20 7:00PM

Read:
https://en.wikipedia.org/wiki/Sweep_line_algorithm
https://www.hackerearth.com/practice/math/geometry/line-sweep-technique/tutorial/
https://www.geeksforgeeks.org/given-a-set-of-line-segments-find-if-any-two-segments-intersect/
https://courses.csail.mit.edu/6.006/spring11/lectures/lec24.pdf  read
https://cp-algorithms.com/geometry/intersecting_segments.html
https://www.cs.cmu.edu/~15451-f1a7/lectures/lec21-sweepline.pdf
https://blog.csdn.net/LiRewriter/article/details/77512370
https://www.cnblogs.com/hyserendipity/p/12177474.html


Example Problems
https://leetcode.com/problems/the-skyline-problem/

https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/
https://leetcode.com/problems/my-calendar-iii/
https://atcoder.jp/contests/abc257/tasks/abc257_c
https://leetcode.com/problems/number-of-flowers-in-full-bloom/
*/

// divide into min groups without intersection
const sweepLineIntervals = (a) => {
    let d = [], h = 0, res = 0;
    for (const [l, r] of a) {
        d.push([l, 1]);
        d.push([r + 1, -1]);
    }
    d.sort((x, y) => {
        if (x[0] != y[0]) return x[0] - y[0];
        return x[1] - y[1];
    });
    for (const [, mark] of d) {
        h += mark;
        res = Math.max(res, h);
    }
    return res;
};