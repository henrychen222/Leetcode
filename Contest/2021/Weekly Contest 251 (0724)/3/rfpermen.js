// 07/24/21 night
const pr = console.log;

// Accepted --- 1044ms
const maxCompatibilitySum = (a, b) => {
    // pr(a);
    // a.sort((x, y) => x[0] - y[0]);
    // a.map(aa => aa.sort((x, y) => x - y));
    a.sort((x, y) => {
        let n = x.length;
        for (let i = 0; i < n; i++) {
            if (x[i] != y[i]) return x[i] - y[i];
        }
    });
    pr(a);
    let n = a.length, m = a[0].length;
    let res = 0;
    do {
        pr(a, b);
        let score = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                score += a[i][j] == b[i][j];
            }
        }
        res = Math.max(res, score);
    } while (next_permutation(a))
    return res;
};

const next_permutation = (a) => {
    let n = a.length;
    let i, j;
    for (i = n - 2; i >= 0 && a[i] >= a[i + 1]; i--);
    if (i === -1) return false;
    for (j = i + 1; j < n && a[i] < a[j]; j++);
    [a[i], a[j - 1]] = [a[j - 1], a[i]];
    for (let p = i + 1, q = n - 1; p < q; p++, q--) [a[p], a[q]] = [a[q], a[p]];
    return true;
};

const main = () => {
    let students = [[1, 1, 0], [1, 0, 1], [0, 0, 1]], mentors = [[1, 0, 0], [0, 0, 1], [1, 1, 0]];
    let students2 = [[0, 0], [0, 0], [0, 0]], mentors2 = [[1, 1], [1, 1], [1, 1]];
    let student_debug1 = [[1, 1, 0, 1, 0], [1, 0, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 0, 1, 0]], mentors_debug1 = [[0, 1, 1, 1, 0], [1, 0, 0, 0, 1], [0, 0, 1, 1, 0], [1, 1, 0, 0, 0]];
    let student_debug2 = [[1, 1], [0, 1], [1, 0], [0, 0], [1, 0], [0, 1], [1, 0], [1, 1]], mentors_debug2 = [[0, 0], [1, 0], [0, 1], [0, 1], [1, 1], [1, 0], [1, 0], [1, 0]]
    pr(maxCompatibilitySum(students, mentors))
    // pr(maxCompatibilitySum(students2, mentors2))
    // pr(maxCompatibilitySum(student_debug1, mentors_debug1)) // 12
    // pr(maxCompatibilitySum(student_debug2, mentors_debug2)) // 15
};

main()