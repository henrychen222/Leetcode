/**
 * 10.26 afternoon
 * https://leetcode.com/problems/employee-importance/
 */


// Accepted --- 96ms 36.36%
let res = 0;
let memo = new Map();
const GetImportance2 = (employees, id) => {
    res = 0;
    memo.clear();
    dfs(employees, id);
    // console.log(memo);
    return res;
};

const dfs = (employees, id) => {
    let e;
    if (memo.has(id)) {
        e = memo.get(id);
    } else {
        e = employees.find(x => x.id == id);
        memo.set(id, e);
    }
    // console.log(e);
    res += e.importance;
    let subordinate = e.subordinates;
    let n = subordinate.length;
    if (n == 0) return;
    for (let i = 0; i < n; i++) {
        dfs(employees, subordinate[i]);
    }
};

// Accepted --- 100ms 29.48%
let res1 = 0;
const GetImportance = (employees, id) => {
    res1 = 0;
    dfs1(employees, id);
    return res1;
};

const dfs1 = (employees, id) => {
    let e = employees.find(x => x.id == id);
    // console.log(employees, e);
    res1 += e.importance;
    let subordinate = e.subordinates;
    // console.log(res1, subordinate);
    let n = subordinate.length;
    if (n == 0) return;
    for (let i = 0; i < n; i++) {
        dfs1(employees, subordinate[i]);
    }
};

const main = () => {
    let employees = [{
            id: 1,
            importance: 5,
            subordinates: [2, 3]
        },
        {
            id: 2,
            importance: 3,
            subordinates: []
        },
        {
            id: 3,
            importance: 3,
            subordinates: []
        }
    ]
    id = 1;
    let employees_debug1 = [{
            id: 2,
            importance: 5,
            subordinates: []
        }],
        id_debug1 = 2;
    console.log(GetImportance(employees, id));
    console.log(GetImportance(employees_debug1, id_debug1));

    console.log(GetImportance2(employees, id));
    console.log(GetImportance2(employees_debug1, id_debug1));
};

main()