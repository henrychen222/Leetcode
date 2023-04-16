/**
 * 07/24/21 morning
 * https://leetcode.com/contest/biweekly-contest-57/problems/check-if-all-characters-have-equal-number-of-occurrences/
 */

const pr = console.log;

const canSeePersonsCount = (a) => {
    let st = [];
    let n = a.length;
    let res = Array(n).fill(0);
    for (let i = n - 1; ~i; i--) {
        pr(a[i], st)
        while (st.length && st[st.length - 1] < a[i]) {
            st.pop();
            res[i]++;
        }
        if (st.length) res[i]++;
        st.push(a[i]);
    }
    return res;
};

const main = () => {
    let heights = [10, 6, 8, 5, 11, 9];
    let heights2 = [5, 1, 2, 3, 10];
    pr(canSeePersonsCount(heights))
    // pr(canSeePersonsCount(heights2))
};

main()