/**
 * 02/08/22 afternoon
 * https://leetcode.com/problems/mini-parser/
 */

const pr = console.log;

// Accepted --- 75ms 71.52%
// reference: https://www.cnblogs.com/cnoodle/p/14798980.html
const lengthLongestPath = (s) => {
    let st = [0], res = 0, path = s.split("\n");
    for (const p of path) {
        let level = p.lastIndexOf('\t') + 1; // 找到最后一个"\t"的位置，注意找的时候，是会跳过\的index的
        // pr(level, st, p);
        while (level + 1 < st.length) st.pop();
        let len = st[st.length - 1] + (p.length - level + 1); // 减level是因为需要减去字母t的长度, +1是因为需要带一个backslash的长度
        // pr(st, len);
        st.push(len);
        if (p.indexOf('.') != -1) res = Math.max(res, len - 1);
    }
    return res;
};

const main = () => {
    let input = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext";
    let input2 = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";
    let input3 = "a"
    pr(lengthLongestPath(input))
    pr(lengthLongestPath(input2))
    pr(lengthLongestPath(input3))
};

main()